import Link from "next/link"
import { BlogPost } from "@/types/blog"
import { Calendar, User, Tag } from "lucide-react"

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  }

  return (
    <Link href={`/car-finance-claims/${post.slug}`}>
      <article className="group bg-white rounded-xl border-2 border-gray-200 hover:border-[#5d2c89] transition-all duration-300 overflow-hidden h-full flex flex-col">
        {/* Category Badge */}
        <div className="bg-[#5d2c89] text-white px-4 py-2">
          <span className="text-sm font-semibold uppercase tracking-wide">
            {post.category.replace(/-/g, " ")}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author.name}</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#5d2c89] transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3 flex-1">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                >
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Read More */}
          <div className="mt-4">
            <span className="text-[#5d2c89] font-semibold group-hover:underline">
              Read Article →
            </span>
          </div>
        </div>
      </article>
    </Link>
  )
}


