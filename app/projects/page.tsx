"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [viewMode] = useState<"grid" | "list">("grid")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((selectedCat) => project.categories.includes(selectedCat))

    const matchesTech = selectedTech.length === 0 || selectedTech.some((tech) => project.technologies.includes(tech))

    return matchesSearch && matchesCategories && matchesTech
  })

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          <p className="text-lg text-muted-foreground max-w-3xl"></p>
        </div>

        {/* All Projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <span className="text-sm text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategories([])
                  setSelectedTech([])
                }}
                className="mt-4"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div
              className={
                viewMode === "grid"
                  ? "grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
                  : "space-y-6"
              }
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} viewMode={viewMode} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
