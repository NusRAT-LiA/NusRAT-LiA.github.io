"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Users, FileText, Clock, MapPin, Eye, BookOpen, X } from "lucide-react"
import Image from "next/image"
import { courses } from "@/lib/courses"

function PDFViewer({ pdfUrl, title }: { pdfUrl: string; title: string }) {
  return (
    <div className="w-full h-full overflow-hidden">
      <iframe
        src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
        className="w-full h-full border-0"
        title={title}
        style={{ minHeight: "calc(100vh - 60px)" }} // subtracts header
      />
    </div>
  )
}



// Full Screen PDF Dialog Component
function FullScreenPDFDialog({ module, courseId }: { module: any; courseId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button size="sm" variant="ghost" className="h-6 px-2" onClick={() => setIsOpen(true)}>
        <Eye className="w-3 h-3" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-background">
            <div>
              <h2 className="text-lg font-semibold">{module.slides.title}</h2>
            </div>
            <div className="flex items-center gap-2">
              {/* Download button (only visible on mobile) */}
              <a
                href={`courses/${courseId}/${module.slides.pdfFile}`}
                download
                className="md:hidden"
              >
                <Button variant="outline" size="sm">
                  Download
                </Button>
              </a>

              {/* Close button */}
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
                <X className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* PDF Content */}
          <div className=" hidden md:block h-[calc(100vh-80px)]">
            <PDFViewer pdfUrl={`courses/${courseId}/${module.slides.pdfFile}`} title={module.slides.title} />
          </div>
        </div>
      )}
    </>
  )
}

// Syllabus Dialog Component
function SyllabusDialog({ course }: { course: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <BookOpen className="w-4 h-4 mr-2" />
          Syllabus
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{course.title} - Course Syllabus</DialogTitle>
          <DialogDescription>High-level overview of the course structure and learning objectives</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {course.syllabus && (
            <>
              {course.syllabus.overview && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
                  <p className="text-muted-foreground">{course.syllabus.overview}</p>
                </div>
              )}

              {course.syllabus.objectives && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Learning Objectives</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.objectives.map((objective: string, idx: number) => (
                      <li key={idx}>{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.prerequisites && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.prerequisites.map((prereq: string, idx: number) => (
                      <li key={idx}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.topics && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Main Topics Covered</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.topics.map((topic: string, idx: number) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.assessment && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Assessment Methods</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.assessment.map((method: string, idx: number) => (
                      <li key={idx}>{method}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Modular course component that adapts to available data
function CourseCard({
  course,
  isExpanded,
  onToggleExpand,
}: {
  course: any
  isExpanded: boolean
  onToggleExpand: () => void
}) {
  const hasImage = course.thumbnail
  const hasDescription = course.description
  const hasEnrollment = course.enrollment !== undefined
  const hasLocation = course.location
  const hasDuration = course.duration
  const hasModules = course.modules && course.modules.length > 0
  const hasStudentProjects = course.studentProjects && course.studentProjects.length > 0
  const hasSyllabus = course.syllabus

  return (
    <Card className="overflow-hidden text-[11px] md:text-xs">
      <div className={`grid gap-0 ${hasImage ? "md:grid-cols-6" : "md:grid-cols-1"}`}>
        {/* Course Thumbnail - Only render if image exists */}
        {hasImage && (
          <div className="relative bg-muted aspect-[5/3] md:aspect-auto md:col-span-2 md:h-full">
            <Image src={course.thumbnail || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          </div>
        )}

        {/* Course Info */}
        <div className={`p-2 md:p-2.5 ${hasImage ? "md:col-span-4" : "md:col-span-1"}`}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-1">
            <div className="space-y-0.5 flex-1">
              {/* Badges - Only render if data exists */}
              <div className="flex items-center gap-1 flex-wrap">
                {course.discipline && (
                  <Badge variant="secondary" className="text-[11px] px-1.5 py-0.5">
                    {course.discipline}
                  </Badge>
                )}
                {course.level && (
                  <Badge variant="outline" className="text-[11px] px-1.5 py-0.5">
                    {course.level}
                  </Badge>
                )}
                {course.status && (
                  <Badge
                    variant={course.status === "Active" ? "default" : "secondary"}
                    className="text-[11px] px-1.5 py-0.5"
                  >
                    {course.status}
                  </Badge>
                )}
              </div>

              {/* Title and Code */}
              <h3 className="text-[13px] md:text-sm font-semibold leading-snug">{course.title}</h3>

              {/* Course metadata - Only render if data exists */}
              <div className="flex flex-wrap items-center gap-2 text-[10px] md:text-[11px] text-muted-foreground">
                {course.code && <span>{course.code}</span>}
                {course.term && <span>{course.term}</span>}
                {hasLocation && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{course.location}</span>
                  </div>
                )}
                {hasDuration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right side metadata */}
            <div className="text-right text-[10px] md:text-[11px] text-muted-foreground space-y-0.5">
              {hasEnrollment && (
                <div className="flex items-center gap-1 justify-end">
                  <Users className="w-4 h-4" />
                  <span>{course.enrollment} students</span>
                </div>
              )}
            </div>
          </div>

          {/* Description - Only render if exists */}
          {hasDescription && <p className="text-muted-foreground mb-1 leading-snug text-[10px] md:text-[11px]">{course.description}</p>}

          {/* Action Buttons - Only render if syllabus exists */}
          {hasSyllabus && (
            <div className="flex gap-2 mb-1.5">
              <SyllabusDialog course={course} />
            </div>
          )}

          {/* Expandable Modules - Only render if modules exist */}
          {hasModules && (
            <Collapsible open={isExpanded} onOpenChange={onToggleExpand}>
              <CollapsibleTrigger asChild>
                {/* <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <span className="font-medium">Course Modules ({course.modules.length} modules)</span>
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Button> */}
              </CollapsibleTrigger>
              <CollapsibleContent className="grid gap-2 sm:gap-2.5 sm:grid-cols-2 mt-2.5">
                {course.modules.map((module: any) => (
                  <ModuleCard key={module.module} module={module} courseId={course.id} />
                ))}
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* Student Projects - Only render if projects exist */}
          {hasStudentProjects && (
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Featured Student Projects</h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {course.studentProjects.map((project: any, idx: number) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

// Modular module component
function ModuleCard({ module, courseId }: { module: any; courseId: string }) {
  const hasTopics = module.topics && module.topics.length > 0
  const hasSlides = module.slides

  return (
    <Card className="p-2 md:p-2.5 h-full text-[10px] md:text-[11px]">
      <div className="space-y-1.5">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">
              Module {module.module}: {module.title}
            </h4>
            {hasTopics && <p className="text-[11px] md:text-xs text-muted-foreground">{module.topics.join(" • ")}</p>}
          </div>
        </div>

        {hasSlides && (
          <div className="space-y-1">
            <h5 className="text-[10px] md:text-xs font-medium">Module Slides:</h5>
            <div className="flex items-center gap-1.5 text-[10px] md:text-xs">
              <FileText className="w-4 h-4" />
              <span className="flex-1">{module.slides.title}</span>
              <FullScreenPDFDialog module={module} courseId={courseId} />
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

// Modular project card component
function ProjectCard({ project }: { project: any }) {
  const hasImage = project.image

  return (
    <Card className="p-3">
      {hasImage && (
        <div className="aspect-video relative bg-muted rounded mb-2">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover rounded" />
        </div>
      )}
      <h5 className="font-medium text-sm">{project.title}</h5>
      {project.student && <p className="text-xs text-muted-foreground">{project.student}</p>}
    </Card>
  )
}

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)


  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 pt-16 pb-0">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Courses & Teaching</h1>
          {/* <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational courses I designed, developed, and serving as an instructor.
          </p> */}
        </div>

        {/* Courses Grid */}
        <div className="space-y-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              // isExpanded={expandedCourse === course.id}
              isExpanded={true}
              onToggleExpand={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
            />
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
