-- ============================================================
-- Dashes n Hyphens - Supabase Database Schema
-- Run this in Supabase SQL Editor
-- ============================================================

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ============================================================
-- TABLE: startup_applications
-- ============================================================
CREATE TABLE IF NOT EXISTS startup_applications (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  founder_name TEXT NOT NULL,
  startup_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  sector TEXT NOT NULL,
  funding_stage TEXT NOT NULL,
  funding_required TEXT NOT NULL,
  pitch_deck_url TEXT,
  status TEXT DEFAULT 'pending',
  notes TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security for startup_applications
ALTER TABLE startup_applications ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (submit application)
CREATE POLICY "Anyone can submit application" ON startup_applications
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can view
CREATE POLICY "Admins can view applications" ON startup_applications
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users can update
CREATE POLICY "Admins can update applications" ON startup_applications
  FOR UPDATE USING (auth.role() = 'authenticated');

-- ============================================================
-- TABLE: contact_messages
-- ============================================================
CREATE TABLE IF NOT EXISTS contact_messages (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security for contact_messages
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Anyone can insert (send message)
CREATE POLICY "Anyone can send message" ON contact_messages
  FOR INSERT WITH CHECK (true);

-- Only authenticated users (admins) can view
CREATE POLICY "Admins can view messages" ON contact_messages
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users can update (mark as read)
CREATE POLICY "Admins can update messages" ON contact_messages
  FOR UPDATE USING (auth.role() = 'authenticated');

-- ============================================================
-- TABLE: blog_posts
-- ============================================================
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  author TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'IPO Advisory',
  cover_image TEXT,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Row Level Security for blog_posts
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

-- Anyone can view published posts
CREATE POLICY "Anyone can view published posts" ON blog_posts
  FOR SELECT USING (published = true);

-- Authenticated users (admins) can view all posts
CREATE POLICY "Admins can view all posts" ON blog_posts
  FOR SELECT USING (auth.role() = 'authenticated');

-- Only authenticated users can insert, update, delete
CREATE POLICY "Admins can manage posts" ON blog_posts
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================================
-- STORAGE: pitch-decks bucket
-- ============================================================
-- Run this separately or in the Supabase Storage UI:
-- 1. Go to Storage in Supabase Dashboard
-- 2. Create bucket named "pitch-decks"
-- 3. Set bucket as public: NO (private)
-- 4. Add the following policies:

-- Storage policies (run in SQL editor):
INSERT INTO storage.buckets (id, name, public)
VALUES ('pitch-decks', 'pitch-decks', false)
ON CONFLICT (id) DO NOTHING;

-- Allow anyone to upload to pitch-decks
CREATE POLICY "Anyone can upload pitch deck" ON storage.objects
  FOR INSERT WITH CHECK (bucket_id = 'pitch-decks');

-- Only authenticated users can download pitch decks
CREATE POLICY "Admins can download pitch decks" ON storage.objects
  FOR SELECT USING (bucket_id = 'pitch-decks' AND auth.role() = 'authenticated');

-- ============================================================
-- SEED DATA: Sample blog posts
-- ============================================================
INSERT INTO blog_posts (title, slug, excerpt, content, author, category, published) VALUES
(
  'The Complete Guide to SME IPO Listing in India 2024',
  'sme-ipo-guide-2024',
  'Everything founders need to know about listing on NSE Emerge or BSE SME — eligibility, timelines, costs, and what to expect at every stage.',
  '<h2>Why Consider an SME IPO?</h2><p>India''s SME IPO market has seen explosive growth. In FY2024, over 180 companies listed on NSE Emerge and BSE SME, raising more than ₹7,000 crore collectively.</p><h2>Core Eligibility Requirements</h2><p>For NSE Emerge: Minimum post-issue paid-up capital of ₹1 crore, PAT of at least ₹1 crore in the latest year, track record of 3 years, and net worth of ₹3 crore.</p>',
  'Vikram Anand',
  'IPO Advisory',
  true
),
(
  'Top 10 Government Grants for Indian Startups in 2024',
  'government-grants-startups-2024',
  'A comprehensive breakdown of DPIIT, SIDBI, DST, and state-level grant schemes — eligibility criteria, amounts, and application tips.',
  '<h2>The Hidden Capital Opportunity</h2><p>India''s government allocates over ₹50,000 crore annually in startup and MSME support schemes. Yet less than 3% of eligible startups successfully access these funds.</p>',
  'Rahul Joshi',
  'Government Grants',
  true
),
(
  'Seed to Series A: How to Structure Your First Institutional Round',
  'seed-to-series-a-guide',
  'Term sheets, valuations, SAFE notes vs equity — a founder''s guide to navigating your first institutional funding round.',
  '<h2>The Journey Begins</h2><p>The journey from seed to Series A is pivotal for every startup. Understanding how to structure this round can save you significant dilution and set up your cap table for long-term success.</p>',
  'Sunita Reddy',
  'Startup Funding',
  true
)
ON CONFLICT (slug) DO NOTHING;

-- ============================================================
-- FUNCTION: Update updated_at timestamp
-- ============================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_applications_updated_at
  BEFORE UPDATE ON startup_applications
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ============================================================
-- Done! 
-- Next steps:
-- 1. Go to Supabase Authentication > Users > Add User
-- 2. Create your admin user with email & password
-- 3. Use those credentials to log in at /admin
-- ============================================================
