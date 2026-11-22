import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig, type DefaultTheme } from 'vitepress'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const srcDirRelative = './src'
const srcAbsDir = path.resolve(__dirname, '..', srcDirRelative)



function formatSlug(name: string): string {
  return name
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (ch) => ch.toUpperCase())
}

function stripQuotes(value: string): string {
  const trimmed = value.trim()
  if (
    (trimmed.startsWith("'") && trimmed.endsWith("'")) ||
    (trimmed.startsWith('"') && trimmed.endsWith('"'))
  ) {
    return trimmed.slice(1, -1).trim()
  }
  return trimmed
}

function parseFrontmatterBlock(content: string): Record<string, string> {
  const normalized = content.replace(/\r\n/g, '\n')
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/)
  if (!match) {
    return {}
  }

  const data: Record<string, string> = {}
  const lines = match[1].split('\n')

  for (const line of lines) {
    const keyMatch = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!keyMatch) {
      continue
    }
    const key = keyMatch[1]
    const rawValue = keyMatch[2].trim()
    if (rawValue) {
      data[key] = stripQuotes(rawValue)
    }
  }

  return data
}

function getMarkdownTitle(filePath: string, fallbackSlug: string): string {
  const content = fs.readFileSync(filePath, 'utf-8')
  const frontmatter = parseFrontmatterBlock(content)

  if (frontmatter.sidebarTitle) {
    return frontmatter.sidebarTitle
  }

  if (frontmatter.title) {
    return frontmatter.title
  }

  const withoutFrontmatter = content
    .replace(/\r\n/g, '\n')
    .replace(/^---\n[\s\S]*?\n---(?:\n|$)/, '')

  const headingMatch = withoutFrontmatter.match(/^#\s+(.+)$/m)
  if (headingMatch) {
    return headingMatch[1].trim()
  }

  return formatSlug(fallbackSlug)
}

function buildSectionSidebar(sectionFolder: string): DefaultTheme.SidebarItem[] {
  const sectionAbsPath = path.join(srcAbsDir, sectionFolder)
  if (!fs.existsSync(sectionAbsPath)) {
    return []
  }

  const entries = fs.readdirSync(sectionAbsPath, { withFileTypes: true })
  const topicDirs = entries
    .filter((entry) => entry.isDirectory())
    .sort((a, b) => a.name.localeCompare(b.name))

  const groups: DefaultTheme.SidebarItem[] = []

  for (const dir of topicDirs) {
    const topicAbsPath = path.join(sectionAbsPath, dir.name)
    const mdFiles = fs
      .readdirSync(topicAbsPath, { withFileTypes: true })
      .filter(
        (file) =>
          file.isFile() &&
          file.name.endsWith('.md') &&
          file.name.toLowerCase() !== 'index.md'
      )
      .sort((a, b) => a.name.localeCompare(b.name))

    if (mdFiles.length === 0) {
      continue
    }

    const items: DefaultTheme.SidebarItem[] = mdFiles.map((file) => {
      const slug = file.name.replace(/\.md$/i, '')
      const fullFilePath = path.join(topicAbsPath, file.name)
      return {
        text: getMarkdownTitle(fullFilePath, slug),
        link: `/${sectionFolder}/${dir.name}/${slug}`
      }
    })

    groups.push({
      text: formatSlug(dir.name),
      items
    })
  }

  return groups
}

export default defineConfig({
  srcDir: srcDirRelative,
  base: './',
  outDir: './.vitepress/dist',
  title: 'Web & AI Roadmap',
  head: [
    ['link', { rel: 'manifest', href: `${process.env.VITEPRESS_BASE || '/'}manifest.webmanifest` }],
    ['meta', { name: 'theme-color', content: '#3451b2' }]
  ],
  description: 'Structured roadmap and reference notes for Frontend, Backend, Coding Languages, and AI Development.',
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      {
        text: 'FrontEnd',
        items: [
          { text: 'FrontEnd Overview', link: '/frontend/' },
          { text: 'HTML', link: '/frontend/html/chapter1' },
          { text: 'CSS', link: '/frontend/css/chapter1' },
          { text: 'JavaScript', link: '/frontend/javascript/chapter1' }
        ]
      },
      {
        text: 'Backend',
        items: [
          { text: 'Backend Overview', link: '/backend/' },
          { text: 'Node.js', link: '/backend/nodejs/chapter1' },
          { text: 'Express', link: '/backend/express/chapter1' },
          { text: 'PHP', link: '/backend/php/chapter1' }
        ]
      },
      {
        text: 'Coding Language',
        items: [
          { text: 'Languages Overview', link: '/coding-language/' },
          { text: 'Python', link: '/coding-language/python/chapter1' },
          { text: 'TypeScript', link: '/coding-language/typescript/chapter1' },
          { text: 'C / C++', link: '/coding-language/cpp/chapter1' }
        ]
      },
      {
        text: 'AI Development',
        items: [
          { text: 'AI Overview', link: '/ai-development/' },
          { text: 'Foundations', link: '/ai-development/foundations/chapter1' },
          { text: 'Applied Models', link: '/ai-development/applied-models/chapter1' },
          { text: 'Workflows & Agents', link: '/ai-development/workflows/chapter1' }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],
    sidebar: {
      '/frontend/': buildSectionSidebar('frontend'),
      '/backend/': buildSectionSidebar('backend'),
      '/coding-language/': buildSectionSidebar('coding-language'),
      '/ai-development/': buildSectionSidebar('ai-development')
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})