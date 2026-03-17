# Dashes n Hyphens — Capital Advisory Website

> **Preparing Tomorrow's Public Companies**  
> A world-class consulting website for Dashes n Hyphens, built with Next.js, Supabase, and TailwindCSS.

---

## 🚀 Live Stack

| Layer | Technology |
|-------|-----------|
| Frontend | Next.js 14 (App Router), React, TailwindCSS |
| UI Components | shadcn/ui, Radix UI |
| Animation | Framer Motion |
| Backend | Supabase (Auth + DB + Storage) |
| Deployment | Vercel |
| Repository | GitHub |

---

## 📋 Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, IPO timeline, insights |
| `/about` | Team, values, company story |
| `/ipo-advisory` | IPO services, process, FAQs |
| `/startup-funding` | Startup application form with pitch deck upload |
| `/government-grants` | Grant schemes and navigation process |
| `/insights` | Blog listing with category filters |
| `/insights/[id]` | Full blog post |
| `/contact` | Contact form |
| `/admin` | Protected admin dashboard |

---

## ⚙️ Local Development

```bash
# 1. Install dependencies
npm install

# 2. Copy env template
cp .env.local.example .env.local

# 3. Add your Supabase credentials to .env.local
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# 4. Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

---

## 🗄️ Supabase Setup

### Step 1: Create Project
1. Go to [supabase.com](https://supabase.com) → New Project
2. Name it `dashes-n-hyphens`
3. Choose a database password (save it!)
4. Select region closest to your users (e.g., `ap-south-1` for India)

### Step 2: Run Schema
1. Go to **SQL Editor** in Supabase Dashboard
2. Paste the contents of `supabase/schema.sql`
3. Click **Run**

This creates:
- `startup_applications` table
- `contact_messages` table
- `blog_posts` table with seed data
- `pitch-decks` storage bucket
- All Row Level Security (RLS) policies

### Step 3: Create Admin User
1. Go to **Authentication** → **Users** → **Add User**
2. Enter your admin email and password
3. Use these credentials at `/admin`

### Step 4: Get API Keys
1. Go to **Settings** → **API**
2. Copy:
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 🌐 Deployment to Vercel

### Option A: Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

### Option B: Vercel Dashboard
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Connect your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy!

### Environment Variables in Vercel
Go to **Project Settings** → **Environment Variables** and add:

```
NEXT_PUBLIC_SUPABASE_URL = https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY = your-anon-key
```

---

## 📊 Database Schema

### `startup_applications`
```sql
id              UUID PRIMARY KEY
founder_name    TEXT NOT NULL
startup_name    TEXT NOT NULL
email           TEXT NOT NULL
phone           TEXT
sector          TEXT NOT NULL
funding_stage   TEXT NOT NULL
funding_required TEXT NOT NULL
pitch_deck_url  TEXT
status          TEXT DEFAULT 'pending'
created_at      TIMESTAMPTZ
updated_at      TIMESTAMPTZ
```

### `contact_messages`
```sql
id          UUID PRIMARY KEY
name        TEXT NOT NULL
email       TEXT NOT NULL
company     TEXT
message     TEXT NOT NULL
read        BOOLEAN DEFAULT false
created_at  TIMESTAMPTZ
```

### `blog_posts`
```sql
id           UUID PRIMARY KEY
title        TEXT NOT NULL
slug         TEXT UNIQUE NOT NULL
excerpt      TEXT NOT NULL
content      TEXT NOT NULL (HTML)
author       TEXT NOT NULL
category     TEXT NOT NULL
cover_image  TEXT
published    BOOLEAN DEFAULT false
created_at   TIMESTAMPTZ
updated_at   TIMESTAMPTZ
```

---

## 🗂️ Storage Bucket

**Bucket name:** `pitch-decks`  
**Access:** Private (admins only)  
**Used for:** Pitch deck uploads from startup application form

Files are named: `{application_id}-{timestamp}.{ext}`

---

## 🔐 Admin Dashboard

Access at `/admin`

**Features:**
- View all startup applications
- Download pitch decks
- View contact form messages
- Create, edit, delete blog posts
- Toggle post publish status

**Authentication:** Supabase Auth (email/password)

---

## 🎨 Brand

| Element | Value |
|---------|-------|
| Primary Color | `#0B1F2F` |
| Accent Color | `#4EC3C7` |
| Background | `#FFFFFF` |
| Neutral | `#F5F7FA` |
| Serif Font | Playfair Display |
| Sans Font | DM Sans |

---

## 📝 Notes

- The site works with fallback data even without Supabase connected
- Blog posts load from Supabase; fallback to static data if unavailable
- All forms handle errors gracefully
- Admin dashboard requires Supabase Auth to be configured

---

## 🤝 Support

For setup assistance, contact: hello@dashesnhyphens.com
