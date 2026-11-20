import BlogCard from "@/components/BlogCard"
import type { Post } from "@/types"
import type { Locale } from "@/i18n"

export default function RelatedPosts({ posts, locale = "en" }: { posts: Post[]; locale?: Locale }) {
  return (
    <div>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} locale={locale} />
      ))}
    </div>
  )
}
