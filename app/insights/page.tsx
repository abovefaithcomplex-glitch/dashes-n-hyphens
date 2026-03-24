import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EyePuneBanner from "@/components/EyePuneBanner";
import Link from "next/link";
import { getBlogPosts } from "@/lib/supabase";
import { Calendar, User } from "lucide-react";

export const revalidate = 60; // Revalidate every minute

export default async function InsightsPage() {
  const { data: posts } = await getBlogPosts(true);

  return (
    <main>
      <Navbar />

      <section className="bg-[#0B1F2F] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ background: "radial-gradient(ellipse at 20% 80%, #4EC3C7, transparent 60%)" }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-[#4EC3C7] text-xs font-sans font-semibold tracking-[0.2em] uppercase mb-5">
              Insights & Updates
            </div>
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Market Intelligence & <br /> Strategic Advice
            </h1>
            <p className="text-white/55 font-sans text-xl leading-relaxed max-w-xl">
              Stay ahead with our latest analysis on IPO trends, startup funding landscapes, and government grants.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#F5F7FA]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {!posts || posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#718096] text-lg font-sans">No insights published yet. Please check back later.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link key={post.id} href={`/insights/${post.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-sans font-bold tracking-wider uppercase px-2 py-0.5 bg-[#4EC3C7]/10 text-[#4EC3C7] rounded">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-[#0B1F2F] mb-4 group-hover:text-[#4EC3C7] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#4A5568] font-sans text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-[#718096] font-sans border-t border-[#E2E8F0] pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <User size={14} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} />
                        <span>{new Date(post.created_at || "").toLocaleDateString("en-IN")}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <EyePuneBanner />
      <Footer />
    </main>
  );
}
