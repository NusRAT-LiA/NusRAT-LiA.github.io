import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink, FileText, File, Presentation, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Project } from "@/lib/projects"

export function ProjectCard({
  project,
  viewMode = "grid",
}: {
  project: Project
  viewMode?: "grid" | "list" | "compact"
}) {
  if (viewMode === "list") {
    return (
      <Card className="group hover:shadow-lg transition-shadow">
        <div className="flex gap-6 p-6">
          <div className="w-48 h-32 relative overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <ProjectDetails project={project} />
                </DialogContent>
              </Dialog>
              {project.links.website && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.website} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Website
                  </Link>
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.github} target="_blank">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Link>
                </Button>
              )}
              {project.links.document && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.document} target="_blank">
                    <FileText className="w-4 h-4 mr-1" />
                    Docs
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    )
  }

  if (viewMode === "compact") {
    return (
      <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full overflow-hidden">
        <div className="relative h-32 lg:h-48 w-full shrink-0 overflow-hidden bg-muted">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <CardHeader className="p-2.5 pb-1.5 space-y-0">
          <CardTitle className="text-xs font-semibold leading-tight line-clamp-2">{project.title}</CardTitle>
          <div className="flex flex-wrap gap-0.5 mt-1">
            {project.categories.slice(0, 2).map((category) => (
              <Badge key={category} variant="outline" className="text-[8px] px-1 py-0 h-3.5">
                {category}
              </Badge>
            ))}
          </div>
          <CardDescription className="text-[9px] mt-1 line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-2.5 pt-1 mt-auto flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-1 pt-1 border-t">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="h-6 text-[9px] px-2 flex-1">
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <ProjectDetails project={project} />
              </DialogContent>
            </Dialog>
            {project.links.github && (
              <Button variant="ghost" size="sm" asChild className="h-6 w-6 p-0">
                <Link href={project.links.github} target="_blank">
                  <Github className="w-3 h-3" />
                </Link>
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // Grid Mode (Compact Version)
  return (
    <Card className="group hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="aspect-video relative overflow-hidden rounded-t-lg shrink-0">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <CardHeader className="p-4 pb-2 space-y-0">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1 min-w-0 flex-1">
            <CardTitle className="text-sm font-semibold leading-tight">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-1 mb-1">
              {project.categories.map((category) => (
                <Badge key={category} variant="outline" className="text-[10px] px-1.5 py-0 h-4">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <span className="text-[10px] text-muted-foreground shrink-0 mt-0.5">{project.year}</span>
        </div>
        <CardDescription className="text-xs mt-2">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-4 pt-0 mt-auto flex flex-col gap-3">
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0 h-4">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 border-t">
          {/* Quick Access Links */}
          <div className="flex flex-wrap gap-0.5">
            {project.links.github && (
              <Button variant="ghost" size="sm" asChild className="h-6 w-6 p-0">
                <Link href={project.links.github} target="_blank">
                  <Github className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button variant="ghost" size="sm" asChild className="h-6 w-6 p-0">
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.document && (
              <Button variant="ghost" size="sm" asChild className="h-6 w-6 p-0">
                <Link href={project.links.document} target="_blank">
                  <FileText className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.whitepaper && (
              <Button variant="ghost" size="sm" asChild className="h-6 w-6 p-0">
                <Link href={project.links.whitepaper} target="_blank">
                  <BookOpen className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.pitchDeck && (
              <Button variant="ghost" size="sm" asChild className="h-6 w-6 p-0">
                <Link href={project.links.pitchDeck} target="_blank">
                  <Presentation className="w-3 h-3" />
                </Link>
              </Button>
            )}
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="sm" className="h-6 text-[10px] px-2 bg-transparent">
                View Details
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{project.title}</DialogTitle>
                <DialogDescription>{project.description}</DialogDescription>
              </DialogHeader>
              <ProjectDetails project={project} />
            </DialogContent>
          </Dialog>
        </div>
      </CardContent>
    </Card>
  )
}

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Project Overview</h3>
            <p className="text-muted-foreground text-xs">{project.fullDescription}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Project Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span>{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Categories:</span>
                <div className="flex flex-wrap gap-1">
                  {project.categories.map((category) => (
                    <Badge key={category} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Links & Resources</h3>
            <div className="space-y-3">
              {/* Primary Links */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Primary Resources</h4>
                <div className="flex flex-wrap gap-2">
                  {project.links.website && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.website} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Website
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.github} target="_blank">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Documentation Links */}
              {(project.links.document ||
                project.links.whitepaper ||
                project.links.pitchDeck ||
                project.links.publication) && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Documentation</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.links.document && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.document} target="_blank">
                          <FileText className="w-4 h-4 mr-1" />
                          Documentation
                        </Link>
                      </Button>
                    )}
                    {project.links.whitepaper && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.whitepaper} target="_blank">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Whitepaper
                        </Link>
                      </Button>
                    )}
                    {project.links.pitchDeck && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.pitchDeck} target="_blank">
                          <Presentation className="w-4 h-4 mr-1" />
                          Pitch Deck
                        </Link>
                      </Button>
                    )}
                    {project.links.publication && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.publication} target="_blank">
                          <File className="w-4 h-4 mr-1" />
                          Publication
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
