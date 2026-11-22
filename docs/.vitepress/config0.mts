import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: './src',
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
      '/frontend/': [
        {
          text: 'HTML',
          items: [
            { text: 'Chapter 1: Structure & Semantics', link: '/frontend/html/chapter1' },
            { text: 'Chapter 2: Forms & Accessibility', link: '/frontend/html/chapter2' },
            { text: 'Chapter 3: Media & SEO', link: '/frontend/html/chapter3' }
          ]
        },
        {
          text: 'CSS',
          items: [
            { text: 'Chapter 1: Cascade & Box Model', link: '/frontend/css/chapter1' },
            { text: 'Chapter 2: Flexbox & Grid', link: '/frontend/css/chapter2' },
            { text: 'Chapter 3: Responsive & Variables', link: '/frontend/css/chapter3' }
          ]
        },
        {
          text: 'JavaScript',
          items: [
            { text: 'Chapter 1: Syntax & Control Flow', link: '/frontend/javascript/chapter1' },
            { text: 'Chapter 2: Functions & Arrays', link: '/frontend/javascript/chapter2' },
            { text: 'Chapter 3: DOM & Async/Fetch', link: '/frontend/javascript/chapter3' }
          ]
        }
      ],
      '/backend/': [
        {
          text: 'Node.js',
          items: [
            { text: 'Chapter 1: Runtime & Modules', link: '/backend/nodejs/chapter1' },
            { text: 'Chapter 2: FS, Streams & Env', link: '/backend/nodejs/chapter2' },
            { text: 'Chapter 3: HTTP & Sub-Menu', link: '/backend/nodejs/chapter3' }
          ]
        },
        {
          text: 'Express',
          items: [
            { text: 'Chapter 1: Setup & Routing', link: '/backend/express/chapter1' },
            { text: 'Chapter 2: Middleware & Errors', link: '/backend/express/chapter2' },
            { text: 'Chapter 3: REST & Routers', link: '/backend/express/chapter3' }
          ]
        },
        {
          text: 'PHP',
          items: [
            { text: 'Chapter 1: Syntax & Includes', link: '/backend/php/chapter1' },
            { text: 'Chapter 2: Forms & Sessions', link: '/backend/php/chapter2' },
            { text: 'Chapter 3: PDO & JSON APIs', link: '/backend/php/chapter3' }
          ]
        }
      ],
      '/coding-language/': [
        {
          text: 'Python',
          items: [
            { text: 'Chapter 1: Syntax & Functions', link: '/coding-language/python/chapter1' }
          ]
        },
        {
          text: 'TypeScript',
          items: [
            { text: 'Chapter 1: Types & Narrowing', link: '/coding-language/typescript/chapter1' }
          ]
        },
        {
          text: 'C / C++',
          items: [
            { text: 'Chapter 1: Compilation & Memory', link: '/coding-language/cpp/chapter1' }
          ]
        }
      ],
      '/ai-development/': [
        {
          text: 'Foundations',
          items: [
            { text: 'Chapter 1: Core Concepts & Evaluation', link: '/ai-development/foundations/chapter1' }
          ]
        },
        {
          text: 'Applied Models',
          items: [
            { text: 'Chapter 1: Prompts & Embeddings', link: '/ai-development/applied-models/chapter1' }
          ]
        },
        {
          text: 'Workflows & Agents',
          items: [
            { text: 'Chapter 1: Tools, RAG & Guardrails', link: '/ai-development/workflows/chapter1' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})