import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { BlogPost } from "@/lib/blog"

export function BlogCard({
  post,
  variant = "full",
}: {
  post: BlogPost
  variant?: "full" | "compact"
}) {
  if (variant === "compact") {
    return (
      <Card className="group hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
        <div className="relative h-32 lg:h-48 w-full shrink-0 bg-muted overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardHeader className="space-y-1 p-2.5 pb-1.5">
          <h3 className="font-semibold text-xs leading-tight group-hover:text-primary transition-colors line-clamp-2">
            <Link href={post.link}>{post.title}</Link>
          </h3>
        </CardHeader>

        <CardContent className="space-y-1.5 p-2.5 pt-1 flex flex-col flex-1 mt-auto">
          <p className="text-[9px] text-muted-foreground line-clamp-2">{post.excerpt}</p>

          <div className="mt-auto flex items-center justify-between pt-1 border-t gap-1">
            <span className="text-[8px] text-muted-foreground font-medium truncate">
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </span>
            <Button size="sm" variant="outline" className="h-6 text-[9px] px-2 flex-1" asChild>
              <Link href={post.link}>Read</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
      <div className="aspect-video relative bg-muted shrink-0">
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="space-y-2 p-4 pb-2">
        <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
          <Link href={post.link}>{post.title}</Link>
        </h3>
      </CardHeader>

      <CardContent className="space-y-3 p-4 pt-0 flex flex-col flex-1 mt-auto">
        <p className="text-xs text-muted-foreground line-clamp-3 mb-2">{post.excerpt}</p>

        <div className="flex items-center justify-between pt-2 border-t mt-auto">
          <span className="text-[10px] text-muted-foreground font-medium">
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <Button size="sm" variant="ghost" className="h-7 text-xs px-2" asChild>
            <Link href={post.link}>
              Read More
              <ArrowRight className="w-3 h-3 ml-1" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
