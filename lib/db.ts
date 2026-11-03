import type { PrismaClient } from '@prisma/client'
import fs from 'fs'
import os from 'os'
import path from 'path'

const INITIAL_NEWS = [
  {
    id: 'seed-news-1',
    slug: 'esc-expands-munich-office',
    category: 'Company Growth',
    date: 'August 14, 2026',
    readTime: '3 min read',
    title: 'ESC Expands Munich Operations with New Innovation Lab',
    excerpt:
      'To support growing European utility partnerships, ESC opens a state-of-the-art innovation lab in Munich focused on Generative AI grid control.',
    content:
      'ESC is proud to announce the expansion of our European footprint with a brand-new Innovation Lab located in central Munich. The facility will house 40 software engineers and AI domain specialists dedicated to developing real-time SCADA and energy grid automation tools.',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    published: true,
    createdAt: new Date('2026-08-14T10:00:00Z'),
    updatedAt: new Date('2026-08-14T10:00:00Z'),
  },
  {
    id: 'seed-news-2',
    slug: 'green-energy-award-2026',
    category: 'Awards',
    date: 'July 02, 2026',
    readTime: '4 min read',
    title: 'ESC Named Top Tech Partner at European Energy Summit',
    excerpt:
      'Recognized for outstanding delivery in legacy system modernization and intelligent water utility platform engineering.',
    content:
      'At this year’s European Energy Summit in Berlin, ESC was awarded the Gold Tier Tech Partner trophy. The award highlights our 12-year track record of zero-downtime migrations for utility enterprises.',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    published: true,
    createdAt: new Date('2026-07-02T10:00:00Z'),
    updatedAt: new Date('2026-07-02T10:00:00Z'),
  },
]

const INITIAL_JOBS = [
  {
    id: 'seed-job-1',
    slug: 'senior-fullstack-engineer-munich',
    title: 'Senior Full-Stack Engineer (Indo-German Team)',
    department: 'Software Engineering',
    location: 'Munich, Germany / Hybrid',
    type: 'Full-time',
    experience: '5+ years',
    salary: '€75,000 - €95,000',
    description:
      'We are seeking an experienced Full-Stack Engineer skilled in Next.js, React, Node.js, and Cloud Infrastructure to drive enterprise utility modernization initiatives.',
    requirements:
      '• 5+ years of experience with React/Next.js & TypeScript\n• Strong background in REST APIs, GraphQL, and microservices\n• Experience with AWS/Azure grid applications is a plus\n• Fluent in English; German proficiency preferred',
    active: true,
    createdAt: new Date('2026-08-01T10:00:00Z'),
    updatedAt: new Date('2026-08-01T10:00:00Z'),
  },
  {
    id: 'seed-job-2',
    slug: 'ai-solutions-architect',
    title: 'AI & Data Solutions Architect',
    department: 'Generative AI',
    location: 'Bangalore, India / Remote',
    type: 'Full-time',
    experience: '6+ years',
    salary: 'Competitive Industry Standard',
    description:
      'Lead the architectural design and deployment of Large Language Models (LLMs) and Document Intelligence platforms for regulated energy client projects.',
    requirements:
      '• Deep understanding of Python, PyTorch/TensorFlow, and RAG architectures\n• Proven track record delivering enterprise AI products\n• Excellent client communication and technical leadership skills',
    active: true,
    createdAt: new Date('2026-07-20T10:00:00Z'),
    updatedAt: new Date('2026-07-20T10:00:00Z'),
  },
  {
    id: 'seed-job-3',
    slug: 'hr-talent-acquisition-partner',
    title: 'Talent Acquisition Partner (HR)',
    department: 'Human Resources',
    location: 'Bangalore, India',
    type: 'Full-time',
    experience: '3+ years',
    salary: 'Standard Market Package',
    description:
      'Join our HR team to lead tech recruitment across software development, AI, and project management for our Indo-German operations.',
    requirements:
      '• 3+ years tech recruitment experience in IT/Software consulting\n• Strong networking and candidate sourcing capabilities\n• Passion for building diverse, high-performing global teams',
    active: true,
    createdAt: new Date('2026-07-10T10:00:00Z'),
    updatedAt: new Date('2026-07-10T10:00:00Z'),
  },
]

const INITIAL_BLOGS = [
  {
    id: 'seed-blog-1',
    slug: 'generative-ai-energy-sector',
    category: 'Generative AI',
    date: 'July 28, 2026',
    readTime: '5 min read',
    title: 'How Generative AI is Transforming the Energy Sector',
    excerpt:
      'From predictive maintenance to automated reporting, Generative AI is reshaping how utility organizations operate. Here is what you need to know.',
    content:
      'Generative AI is no longer a futuristic buzzword in the energy sector—it is a core operational differentiator. Utility providers across Europe are deploying customized LLM models to analyze sensor logs, generate compliance documentation, and assist field engineers in real-time.',
    authorName: 'Dr. Lukas Weber',
    authorRole: 'Head of AI Solutions',
    coverImageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    published: true,
    createdAt: new Date('2026-07-28T10:00:00Z'),
    updatedAt: new Date('2026-07-28T10:00:00Z'),
  },
  {
    id: 'seed-blog-2',
    slug: 'intelligent-automation-water-utilities',
    category: 'Automation',
    date: 'July 15, 2026',
    readTime: '4 min read',
    title: 'Intelligent Automation in Water Utilities — A Practical Guide',
    excerpt:
      'Water utilities face unique operational challenges. We break down how intelligent automation can reduce costs and improve reliability.',
    content:
      'Modernizing water distribution networks requires smart telemetry, automated pump scheduling, and leak detection algorithms. By pairing SCADA metrics with intelligent cloud pipelines, operators achieve up to 30% energy savings on pump management.',
    authorName: 'Ananya Sharma',
    authorRole: 'Lead Automation Engineer',
    coverImageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    published: true,
    createdAt: new Date('2026-07-15T10:00:00Z'),
    updatedAt: new Date('2026-07-15T10:00:00Z'),
  },
]

interface InMemoryStore {
  users: Array<{
    id: string
    email: string
    password: string
    name: string
    role: string
    createdAt: Date
    updatedAt: Date
  }>
  news: typeof INITIAL_NEWS
  jobListings: typeof INITIAL_JOBS
  blogPosts: typeof INITIAL_BLOGS
}

const globalForPrisma = globalThis as unknown as {
  prismaClient: PrismaClient | null | undefined
  sqliteFailed: boolean | undefined
  schemaInitPromise: Promise<void> | undefined
  memoryStore: InMemoryStore | undefined
}

function getMemoryStore(): InMemoryStore {
  if (!globalForPrisma.memoryStore) {
    globalForPrisma.memoryStore = {
      users: [],
      news: INITIAL_NEWS.map((item) => ({ ...item })),
      jobListings: INITIAL_JOBS.map((item) => ({ ...item })),
      blogPosts: INITIAL_BLOGS.map((item) => ({ ...item })),
    }
  }
  return globalForPrisma.memoryStore
}

function resolveWritableDbPath(): string {
  const preferredPath = process.env.DATABASE_PATH || path.join(process.cwd(), 'dev.db')
  const preferredDir = path.dirname(preferredPath)

  try {
    fs.accessSync(preferredDir, fs.constants.W_OK)
    if (fs.existsSync(preferredPath)) {
      fs.accessSync(preferredPath, fs.constants.W_OK)
    }
    return preferredPath
  } catch {
    const tmpDbPath = path.join(os.tmpdir(), 'esc-dev.db')
    if (!fs.existsSync(tmpDbPath) && fs.existsSync(preferredPath)) {
      try {
        fs.copyFileSync(preferredPath, tmpDbPath)
      } catch {
        // ignore if source cannot be copied
      }
    }
    return tmpDbPath
  }
}

function getSqliteClient(): PrismaClient | null {
  if (globalForPrisma.sqliteFailed) return null
  if (globalForPrisma.prismaClient) return globalForPrisma.prismaClient

  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaClient: PrismaClientCtor } = require('@prisma/client')
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { PrismaBetterSqlite3 } = require('@prisma/adapter-better-sqlite3')
    const dbPath = resolveWritableDbPath()
    const adapter = new PrismaBetterSqlite3({ url: `file:${dbPath}` })
    const client = new PrismaClientCtor({ adapter }) as PrismaClient
    globalForPrisma.prismaClient = client
    return client
  } catch (err) {
    console.warn('SQLite client unavailable in this runtime, using in-memory store:', err)
    globalForPrisma.sqliteFailed = true
    return null
  }
}

function createCollectionDelegate<T extends { id: string; slug?: string; email?: string; createdAt: Date; updatedAt: Date }>(
  modelName: 'user' | 'news' | 'jobListing' | 'blogPost',
  getList: () => T[],
  setList: (next: T[]) => void
) {
  return {
    async findUnique(args: { where: { id?: string; email?: string; slug?: string } }) {
      await ensureSchemaInitialized()
      const client = getSqliteClient()
      if (client) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (client[modelName] as any).findUnique(args)
        } catch (err) {
          console.warn(`SQLite ${modelName}.findUnique failed, falling back to memory:`, err)
          globalForPrisma.sqliteFailed = true
        }
      }
      const list = getList()
      return (
        list.find(
          (item) =>
            (args.where.id && item.id === args.where.id) ||
            (args.where.email && item.email === args.where.email) ||
            (args.where.slug && item.slug === args.where.slug)
        ) ?? null
      )
    },

    async findMany(args?: { where?: Record<string, unknown>; orderBy?: Record<string, 'asc' | 'desc'> }) {
      await ensureSchemaInitialized()
      const client = getSqliteClient()
      if (client) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (client[modelName] as any).findMany(args)
        } catch (err) {
          console.warn(`SQLite ${modelName}.findMany failed, falling back to memory:`, err)
          globalForPrisma.sqliteFailed = true
        }
      }
      let list = [...getList()]
      if (args?.where) {
        for (const [k, v] of Object.entries(args.where)) {
          list = list.filter((item) => (item as Record<string, unknown>)[k] === v)
        }
      }
      if (args?.orderBy?.createdAt === 'desc') {
        list.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
      }
      return list
    },

    async create(args: { data: Partial<T> }) {
      await ensureSchemaInitialized()
      const client = getSqliteClient()
      if (client) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (client[modelName] as any).create(args)
        } catch (err) {
          console.warn(`SQLite ${modelName}.create failed, falling back to memory:`, err)
          globalForPrisma.sqliteFailed = true
        }
      }
      const now = new Date()
      const created = {
        ...args.data,
        id: (args.data.id as string) || `${modelName}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        createdAt: now,
        updatedAt: now,
      } as T
      setList([created, ...getList()])
      return created
    },

    async update(args: { where: { id?: string; email?: string; slug?: string }; data: Partial<T> }) {
      await ensureSchemaInitialized()
      const client = getSqliteClient()
      if (client) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (client[modelName] as any).update(args)
        } catch (err) {
          console.warn(`SQLite ${modelName}.update failed, falling back to memory:`, err)
          globalForPrisma.sqliteFailed = true
        }
      }
      const list = getList()
      const idx = list.findIndex(
        (item) =>
          (args.where.id && item.id === args.where.id) ||
          (args.where.email && item.email === args.where.email) ||
          (args.where.slug && item.slug === args.where.slug)
      )
      if (idx === -1) throw new Error(`${modelName} record not found`)
      const updated = { ...list[idx], ...args.data, updatedAt: new Date() } as T
      const next = [...list]
      next[idx] = updated
      setList(next)
      return updated
    },

    async upsert(args: {
      where: { id?: string; email?: string; slug?: string }
      update: Partial<T>
      create: Partial<T>
    }) {
      await ensureSchemaInitialized()
      const client = getSqliteClient()
      if (client) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (client[modelName] as any).upsert(args)
        } catch (err) {
          console.warn(`SQLite ${modelName}.upsert failed, falling back to memory:`, err)
          globalForPrisma.sqliteFailed = true
        }
      }
      const list = getList()
      const idx = list.findIndex(
        (item) =>
          (args.where.id && item.id === args.where.id) ||
          (args.where.email && item.email === args.where.email) ||
          (args.where.slug && item.slug === args.where.slug)
      )
      if (idx !== -1) {
        const updated = { ...list[idx], ...args.update, updatedAt: new Date() } as T
        const next = [...list]
        next[idx] = updated
        setList(next)
        return updated
      }
      const now = new Date()
      const created = {
        ...args.create,
        id: (args.create.id as string) || `${modelName}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        createdAt: now,
        updatedAt: now,
      } as T
      setList([created, ...list])
      return created
    },

    async delete(args: { where: { id: string } }) {
      await ensureSchemaInitialized()
      const client = getSqliteClient()
      if (client) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return await (client[modelName] as any).delete(args)
        } catch (err) {
          console.warn(`SQLite ${modelName}.delete failed, falling back to memory:`, err)
          globalForPrisma.sqliteFailed = true
        }
      }
      const list = getList()
      const existing = list.find((item) => item.id === args.where.id)
      setList(list.filter((item) => item.id !== args.where.id))
      return existing ?? null
    },
  }
}

export const prisma = {
  user: createCollectionDelegate(
    'user',
    () => getMemoryStore().users,
    (next) => {
      getMemoryStore().users = next
    }
  ),
  news: createCollectionDelegate(
    'news',
    () => getMemoryStore().news,
    (next) => {
      getMemoryStore().news = next
    }
  ),
  jobListing: createCollectionDelegate(
    'jobListing',
    () => getMemoryStore().jobListings,
    (next) => {
      getMemoryStore().jobListings = next
    }
  ),
  blogPost: createCollectionDelegate(
    'blogPost',
    () => getMemoryStore().blogPosts,
    (next) => {
      getMemoryStore().blogPosts = next
    }
  ),
  async $disconnect() {
    const client = getSqliteClient()
    if (client) {
      try {
        await client.$disconnect()
      } catch {
        // ignore
      }
    }
  },
} as unknown as PrismaClient

export async function ensureSchemaInitialized(): Promise<void> {
  if (!globalForPrisma.schemaInitPromise) {
    globalForPrisma.schemaInitPromise = (async () => {
      const client = getSqliteClient()
      if (!client) return

      try {
        await client.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "User" (
            "id" TEXT NOT NULL PRIMARY KEY,
            "email" TEXT NOT NULL,
            "password" TEXT NOT NULL,
            "name" TEXT NOT NULL,
            "role" TEXT NOT NULL DEFAULT 'MANAGER',
            "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
          );
        `)
        await client.$executeRawUnsafe(`
          CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email");
        `)
        await client.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "News" (
            "id" TEXT NOT NULL PRIMARY KEY,
            "title" TEXT NOT NULL,
            "slug" TEXT NOT NULL,
            "category" TEXT NOT NULL,
            "date" TEXT NOT NULL,
            "readTime" TEXT NOT NULL DEFAULT '3 min read',
            "excerpt" TEXT NOT NULL,
            "content" TEXT NOT NULL,
            "imageUrl" TEXT,
            "published" BOOLEAN NOT NULL DEFAULT 1,
            "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
          );
        `)
        await client.$executeRawUnsafe(`
          CREATE UNIQUE INDEX IF NOT EXISTS "News_slug_key" ON "News"("slug");
        `)
        await client.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "JobListing" (
            "id" TEXT NOT NULL PRIMARY KEY,
            "title" TEXT NOT NULL,
            "slug" TEXT NOT NULL,
            "department" TEXT NOT NULL,
            "location" TEXT NOT NULL,
            "type" TEXT NOT NULL,
            "experience" TEXT,
            "salary" TEXT,
            "description" TEXT NOT NULL,
            "requirements" TEXT,
            "active" BOOLEAN NOT NULL DEFAULT 1,
            "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
          );
        `)
        await client.$executeRawUnsafe(`
          CREATE UNIQUE INDEX IF NOT EXISTS "JobListing_slug_key" ON "JobListing"("slug");
        `)
        await client.$executeRawUnsafe(`
          CREATE TABLE IF NOT EXISTS "BlogPost" (
            "id" TEXT NOT NULL PRIMARY KEY,
            "title" TEXT NOT NULL,
            "slug" TEXT NOT NULL,
            "category" TEXT NOT NULL,
            "date" TEXT NOT NULL,
            "readTime" TEXT NOT NULL DEFAULT '5 min read',
            "excerpt" TEXT NOT NULL,
            "content" TEXT NOT NULL,
            "authorName" TEXT,
            "authorRole" TEXT,
            "coverImageUrl" TEXT,
            "published" BOOLEAN NOT NULL DEFAULT 1,
            "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
            "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
          );
        `)
        await client.$executeRawUnsafe(`
          CREATE UNIQUE INDEX IF NOT EXISTS "BlogPost_slug_key" ON "BlogPost"("slug");
        `)

        // Seed initial default content if tables are empty (e.g. fresh /tmp/esc-dev.db on Netlify)
        const [newsCount, jobsCount, blogsCount] = await Promise.all([
          client.news.count(),
          client.jobListing.count(),
          client.blogPost.count(),
        ])

        if (newsCount === 0) {
          for (const item of INITIAL_NEWS) {
            await client.news.upsert({
              where: { slug: item.slug },
              update: {},
              create: item,
            })
          }
        }
        if (jobsCount === 0) {
          for (const item of INITIAL_JOBS) {
            await client.jobListing.upsert({
              where: { slug: item.slug },
              update: {},
              create: item,
            })
          }
        }
        if (blogsCount === 0) {
          for (const item of INITIAL_BLOGS) {
            await client.blogPost.upsert({
              where: { slug: item.slug },
              update: {},
              create: item,
            })
          }
        }
      } catch (err) {
        console.warn('SQLite schema initialization failed, switching to in-memory store:', err)
        globalForPrisma.sqliteFailed = true
      }
    })()
  }
  return globalForPrisma.schemaInitPromise
}
