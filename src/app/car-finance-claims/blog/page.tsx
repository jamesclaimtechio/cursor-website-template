import { Metadata } from "next"
import { Container } from "@/components/ui/container"
import { BlogCard } from "@/components/blog/blog-card"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Car Finance Claims Blog - News & Guides | My Claims Centre",
  description: "Stay informed about car finance claims, DCAs, FCA redress scheme updates, and consumer rights. Expert guides and news on motor finance compensation.",
  openGraph: {
    title: "Car Finance Claims Blog - News & Guides",
    description: "Expert guides and news on car finance claims, DCAs, and the FCA redress scheme.",
  },
}

export default function BlogListingPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Header */}
      <section className="relative py-20 bg-gradient-to-br from-gray-50 to-white border-b border-gray-200">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-full text-sm font-medium shadow-sm">
                Latest News & Guides
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Car Finance Claims
              <br />
              <span className="text-[#5d2c89]">Blog</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Expert insights, FCA updates, and comprehensive guides to help you understand your car finance claim.
            </p>
          </div>
        </Container>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-white">
        <Container>
          {posts.length === 0 ? (
            <div className="text-center text-gray-600 py-12">
              <p className="text-xl">No blog posts available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}


