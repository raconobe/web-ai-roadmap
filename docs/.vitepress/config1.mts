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

function getMarkdownTitle(filePath: string, fallbackSlug: string): string {
  const content = fs.readFileSync(filePath, 'utf-8')
  const match = content.match(/^#\s+(.+)$/m)
  return match ? match[1].trim() : formatSlug(fallbackSlug)
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
  title: 'Web & AI Roadmap',
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