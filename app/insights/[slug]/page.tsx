import { getBlogPostBySlug, getBlogPosts } from "@/lib/supabase";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EyePuneBanner from "@/components/EyePuneBanner";
import ContactCTA from "@/components/sections/ContactCTA";
import { Calendar, User } from "lucide-react";

export const revalidate = 60;

export async function generateStaticParams() {
  const { data: posts } = await getBlogPosts(true);
  if (!posts) return [];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { data: post } = await getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { data: post } = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main>
      <Navbar />

      <article>
        {/* Header */}
        <section className="bg-[#0B1F2F] pt-40 pb-24 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5"
            style={{ background: "radial-gradient(ellipse at 20% 80%, #4EC3C7, transparent 60%)" }} />
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <div className="text-[#4EC3C7] text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-8 inline-block px-3 py-1 bg-[#4EC3C7]/10 rounded-full">
              {post.category}
            </div>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-6 text-white/70 font-sans text-sm">
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#4EC3C7]" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-[#4EC3C7]" />
                <span>{new Date(post.created_at || "").toLocaleDateString("en-IN", {
                  year: "numeric", month: "long", day: "numeric"
                })}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 lg:px-8">
            <p className="text-xl text-[#0B1F2F] font-serif font-medium leading-relaxed mb-12 pb-12 border-b border-[#E2E8F0]">
              {post.excerpt}
            </p>
            <div 
              className="prose-content font-sans text-[#4A5568]"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
      </article>

      <ContactCTA />
      <EyePuneBanner />
      <Footer />
    </main>
  );
}
