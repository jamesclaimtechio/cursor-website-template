import { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { BlogCard } from "@/components/blog/blog-card"
import { SimpleTOC } from "@/components/blog/simple-toc"
import { MobileTOC } from "@/components/blog/mobile-toc"
import { FAQItem } from "@/components/blog/faq-section"
import { getPostBySlug, getRelatedPosts, getAllPosts } from "@/lib/blog"
import { parseLegalContent } from "@/lib/content-parser"
import { Calendar, User, Clock, ChevronRight } from "lucide-react"
import Link from "next/link"
import { CTA } from "@/components/sections/cta"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.image.src,
          alt: post.image.alt,
          width: post.image.width || 1200,
          height: post.image.height || 630,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [post.image.src],
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post.slug, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  // Calculate reading time (average 200 words per minute)
  const calculateReadingTime = (content: string) => {
    const words = content.trim().split(/\s+/).length
    const minutes = Math.ceil(words / 200)
    return minutes
  }

  const readingTime = calculateReadingTime(post.content)

  // Article JSON-LD Schema for SEO
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.image.src,
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt || post.publishedAt,
    "author": {
      "@type": "Organization",
      "name": "My Claims Centre",
      "url": "https://myclaimscentre.co.uk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "My Claims Centre",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myclaimscentre.co.uk/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://myclaimscentre.co.uk/car-finance-claims/${post.slug}`
    }
  }

  // FAQ JSON-LD Schema for SEO (only if post has FAQs)
  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  // Parse content using the unified content parser with legal-style headings
  const parsedContent = parseLegalContent(post.content)

  return (
    <>
      {/* JSON-LD Structured Data - Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      
      {/* JSON-LD Structured Data - FAQ Schema (if FAQs exist) */}
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-[#5d2c89]/5 via-white to-[#5d2c89]/10 border-b border-gray-200 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#5d2c89]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5d2c89]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <Container>
          {/* Breadcrumbs - Simplified on mobile */}
          <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-gray-500 mb-6 md:mb-8 relative flex-wrap">
            <Link href="/" className="hover:text-[#5d2c89] transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <Link href="/car-finance-claims" className="hover:text-[#5d2c89] transition-colors">
              <span className="hidden sm:inline">Website Builder</span>
              <span className="sm:hidden">Claims</span>
            </Link>
            <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
            <Link href="/car-finance-claims/blog" className="hover:text-[#5d2c89] transition-colors">
              Blog
            </Link>
            {/* Hide article title on mobile */}
            <span className="hidden md:flex items-center gap-1 md:gap-2">
              <ChevronRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
              <span className="text-gray-700 font-medium truncate max-w-[200px]">
                {post.title}
              </span>
            </span>
          </nav>

          {/* Two Column Layout: Text + Image */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center relative">
            {/* Left Column: Text Content */}
            <div className="flex-1 min-w-0">
              {/* Category Badge */}
              <div className="mb-3 md:mb-4">
                <span className="inline-flex px-3 py-1.5 md:px-4 md:py-2 bg-[#5d2c89] text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide shadow-lg shadow-[#5d2c89]/20">
                  {post.category.replace(/-/g, " ")}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 leading-tight">
                {post.title}
              </h1>

              {/* Meta Row */}
              <div className="flex flex-wrap items-center gap-3 md:gap-4 text-gray-600 mb-5">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#5d2c89]/10 flex items-center justify-center">
                    <Calendar className="w-3 h-3 md:w-4 md:h-4 text-[#5d2c89]" />
                  </div>
                  <time dateTime={post.publishedAt} className="text-xs md:text-sm">
                    {formatDate(post.publishedAt)}
                  </time>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#5d2c89]/10 flex items-center justify-center">
                    <User className="w-3 h-3 md:w-4 md:h-4 text-[#5d2c89]" />
                  </div>
                  <span className="text-xs md:text-sm">{post.author.name}</span>
                </div>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#5d2c89]/10 flex items-center justify-center">
                    <Clock className="w-3 h-3 md:w-4 md:h-4 text-[#5d2c89]" />
                  </div>
                  <span className="text-xs md:text-sm">{readingTime} min read</span>
                </div>
              </div>

              {/* Excerpt */}
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Header CTA */}
              <div className="flex flex-col sm:flex-row gap-3 mt-6">
                <Link href="/car-finance-claims">
                  <Button size="lg" className="bg-[#5d2c89] hover:bg-[#4a2470] text-white w-full sm:w-auto">
                    Check My Eligibility
                  </Button>
                </Link>
                <a 
                  href="#faqs-section" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-[#5d2c89] text-[#5d2c89] rounded-lg font-semibold hover:bg-[#5d2c89]/5 transition-colors w-full sm:w-auto"
                >
                  Read FAQs
                </a>
              </div>
            </div>

            {/* Right Column: Featured Image */}
            <div className="w-full lg:w-[400px] xl:w-[480px] flex-shrink-0">
              <div className="rounded-2xl overflow-hidden border-2 border-gray-200 shadow-xl">
                <Image
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width || 1200}
                  height={post.image.height || 630}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <Container>
          {/* Two Column Layout: Content + Sticky Sidebar */}
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content */}
            <div className="flex-1 min-w-0 max-w-4xl">
              {/* Mobile TOC - Only visible on mobile/tablet */}
              <MobileTOC content={post.content} hasFaqs={!!post.faqs && post.faqs.length > 0} />
              
              <article className="max-w-none">
                {parsedContent}
              </article>

              {/* FAQ Section - Inline with content */}
              {post.faqs && post.faqs.length > 0 && (
                <div id="faqs-section" className="mt-12 scroll-mt-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {post.faqs.map((faq, index) => (
                      <FAQItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                  </div>
                </div>
              )}

              {/* CTA Box */}
              <div className="mt-12 mb-8 p-8 bg-[#5d2c89] text-white rounded-2xl">
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Check Your Eligibility?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If you had car finance between 2007-2024, you could be eligible to claim. Get started now.
                </p>
                <Button size="lg" className="bg-white text-[#5d2c89] hover:bg-gray-100">
                  Check My Eligibility
                </Button>
              </div>
            </div>

            {/* Table of Contents - Right Sidebar with CSS Sticky */}
            <aside className="hidden lg:block w-80 flex-shrink-0 self-start sticky top-28">
              <SimpleTOC content={post.content} hasFaqs={!!post.faqs && post.faqs.length > 0} />
            </aside>
          </div>
        </Container>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <Container>
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Final CTA */}
      <CTA />
    </>
  )
}


