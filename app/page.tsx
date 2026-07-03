import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardDescription, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Users, Briefcase, FileText, ArrowRight, Github as GithubIcon, Presentation, Flame } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Blog from "./blog/page"
import Courses from "./courses/page"
import Work from "./work/page"
import Research from "./research/page"
import Projects from "./projects/page"
import Life from "./life/page"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ProjectCard } from "@/components/project-card"
import { BlogCard } from "@/components/blog-card"
import { projects } from "@/lib/projects"
import { blogPosts } from "@/lib/blog"
import { courses } from "@/lib/courses"
import { news } from "@/lib/news"

// Syllabus Dialog Component
function SyllabusDialog({ course }: { course: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline" className="text-xs h-7 px-2">
          <BookOpen className="w-3 h-3 mr-1" />
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
                  <p className="text-muted-foreground text-sm">{course.syllabus.overview}</p>
                </div>
              )}

              {course.syllabus.objectives && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Learning Objectives</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {course.syllabus.objectives.map((objective: string, idx: number) => (
                      <li key={idx}>{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.prerequisites && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {course.syllabus.prerequisites.map((prereq: string, idx: number) => (
                      <li key={idx}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.topics && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Main Topics Covered</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {course.syllabus.topics.map((topic: string, idx: number) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.assessment && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Assessment Methods</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
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

export default function HomePage() {
  const courseData = courses.find((c) => c.id === "slm")!
  
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}

      <section className="container mx-auto px-4 pt-0 pb-16 md:pb-24">
       <div className="flex flex-col gap-6 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-16 lg:items-start">

          {/* Image and Work Experience Section */}
          <div className="contents lg:block lg:relative lg:space-y-6">
            {/* Profile Photo */}
            <div className="order-1 relative w-full">
              <div className="w-2/3 mx-auto aspect-square relative overflow-hidden rounded-2xl">
                <Image
                  src="me/me-black.png?height=500&width=500"
                  alt="Nusrat Lia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Latest News Section */}
            <div className="order-4 bg-card border rounded-lg overflow-hidden w-full">
              <div className="border-b p-3">
                <h3 className="font-semibold text-xs">Latest News</h3>
              </div>
              <div>
                {news.map((item, index) => (
                  <div
                    key={index}
                    className={`flex gap-3 p-3 border-b last:border-b-0 ${
                      index % 2 === 1 ? "bg-muted/80" : ""
                    }`}
                  >
                    <p className="font-semibold text-xs flex-shrink-0 w-16">{item.date}</p>
                    <p className="text-xs">
                      {item.content.map((segment, i) => {
                        const classes = [
                          segment.key ? "text-[#2bb673]" : "",
                          segment.href ? "underline hover:opacity-80" : "",
                        ].filter(Boolean).join(" ")
                        return segment.href ? (
                          <a
                            key={i}
                            href={segment.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={classes}
                          >
                            {segment.text}
                          </a>
                        ) : (
                          <span key={i} className={classes}>
                            {segment.text}
                          </span>
                        )
                      })}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Work Experience Preview */}
            <div className="order-6 space-y-3 bg-card border rounded-lg p-4 w-full">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Recent Work</h3>
                <Button asChild size="sm" className="bg-black hover:bg-black/80 text-white h-7 px-2" >
                  <Link href="/work">
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-2">
                {/* Fatima */}
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="work/fatima.jpeg?height=40&width=40"
                      alt="Fatima Institute"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium truncate">Research Fellow</p>
                    <p className="text-xs text-muted-foreground truncate">Fatima Institute for Global AI Research, California</p>
                    <p className="text-xs text-muted-foreground">Apr 2026 - Present</p>
                  </div>
                </div>

                {/* Aramco */}
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="work/aramco.jpg?height=40&width=40"
                      alt="Aramco-Ithra"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium truncate">Research Intern</p>
                    <p className="text-xs text-muted-foreground truncate">Aramco-Ithra</p>
                    <p className="text-xs text-muted-foreground">Mar 2025 - Mar 2026</p>
                  </div>
                </div>

                {/* US Department of Justice */}
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="work/icitap.png?height=40&width=40"
                      alt="ICITAP"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium truncate">WPA Software Engineer Intern</p>
                    <p className="text-xs text-muted-foreground truncate">US Department of Justice - ICITAP</p>
                    <p className="text-xs text-muted-foreground">Jul 2024 - Dec 2024</p>
                  </div>
                </div>

                {/* IAIO */}
                <div className="flex items-center gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                  <div className="w-10 h-10 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="work/iaio.png?height=40&width=40"
                      alt="IAIO"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-medium truncate">Instructor and Judge</p>
                    <p className="text-xs text-muted-foreground truncate">International AI Olympiad</p>
                    <p className="text-xs text-muted-foreground">Sep 2025 - Present</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div className="order-9 space-y-3 bg-card border rounded-lg p-4 w-full">
              <h3 className="font-semibold text-sm">Education</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                  <Image src="collab/du.png" alt="University of Dhaka" fill className="object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium truncate">University of Dhaka</p>
                  <p className="text-xs text-muted-foreground">B.Sc. in Software Engineering</p>
                  <p className="text-xs text-muted-foreground">May 2026 · CGPA 3.8/4 (Top 5)</p>
                </div>
              </div>
            </div>


            {/* Courses & Teaching Section */}
            <div className="order-7 space-y-3 bg-card border rounded-lg p-4 w-full">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-sm">Courses & Teaching</h3>
                <Button asChild size="sm" className="bg-black hover:bg-black/80 text-white h-7 px-2" >
                  <Link href="/courses">
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-3">
                {/* Course Header with Photo and Details */}
                <div className="flex gap-3">
                  <div className="w-16 h-16 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src={courseData.thumbnail}
                      alt={courseData.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1 flex flex-col justify-between">
                    <p className="text-sm font-semibold">Building Small Language Model</p>
                    <p className="text-xs font-medium"><strong>University of Dhaka</strong></p>
                    <SyllabusDialog course={courseData} />
                  </div>
                </div>

                {/* Course Description */}
                <div className="border-t pt-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">{courseData.descriptionHome}</p>
                </div>
              </div>
            </div>

            {/* Collaborations Section */}
            <div className="order-8 space-y-3 bg-card border rounded-lg p-4 w-full">
              <h3 className="font-semibold text-sm">Collaborations</h3>
              <div className="grid grid-cols-2 gap-3">
                {/* University of Utah */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/utah.png?height=48&width=48"
                      alt="University of Utah"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">University of Utah</p>
                </div>

                {/* University of Maryland, Baltimore County */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/umbc.png?height=48&width=48"
                      alt="UMBC"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">UMBC</p>
                </div>

                {/* University of Virginia */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/uva.png?height=48&width=48"
                      alt="University of Virginia"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">University of Virginia</p>
                </div>

                {/* World Health Organization */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/who.png?height=48&width=48"
                      alt="World Health Organization"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">WHO</p>
                </div>

                {/* Stony Brook University */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/stonybrook.png?height=48&width=48"
                      alt="Stony Brook University"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">Stony Brook University</p>
                </div>

                {/* Seattle Children's Research Institute */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/seattle.png?height=48&width=48"
                      alt="Seattle Children's Research Institute"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">Seattle Children&apos;s</p>
                </div>

                {/* University of Washington */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/uw.png?height=48&width=48"
                      alt="University of Washington"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">Univ. of Washington</p>
                </div>

                {/* State University of New York, Old Westbury */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/suny.png?height=48&width=48"
                      alt="SUNY Old Westbury"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">SUNY Old Westbury</p>
                </div>

                {/* Toronto Metropolitan University */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/toronto.png?height=48&width=48"
                      alt="Toronto Metropolitan University"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">Toronto Metro Univ.</p>
                </div>

                {/* University of Geneva */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/geneva.png?height=48&width=48"
                      alt="University of Geneva"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">University of Geneva</p>
                </div>

                {/* Imperial College London */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/imperial.png?height=48&width=48"
                      alt="Imperial College London"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">Imperial College London</p>
                </div>

                {/* Purdue University */}
                <div className="flex flex-col items-center gap-2 p-2 border rounded">
                  <div className="w-12 h-12 flex-shrink-0 relative overflow-hidden rounded">
                    <Image
                      src="collab/purdue.png?height=48&width=48"
                      alt="Purdue University"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-[10px] font-medium text-center truncate">Purdue University</p>
                </div>

              </div>
            </div>

            
            {/* Featured Projects Section */}
            <div className="order-10 space-y-3 w-full">
              <div className="flex items-center justify-between px-1">
                <h3 className="font-semibold text-sm">Featured Projects</h3>
                <Button asChild size="sm" className="bg-black hover:bg-black/80 text-white h-7 px-2" >
                  <Link href="/projects">
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {projects
                  .filter((project) => project.featured)
                  .slice(1, 2)
                  .map((project) => (
                    <ProjectCard key={project.id} project={project} viewMode="compact" />
                  ))}
              </div>
            </div>

            {/* Latest Blogs Section */}
            <div className="order-11 space-y-3 w-full">
              <div className="flex items-center justify-between px-1">
                <h3 className="font-semibold text-sm">Latest Blogs</h3>
                <Button asChild size="sm" className="bg-black hover:bg-black/80 text-white h-7 px-2" >
                  <Link href="/blog">
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {blogPosts.slice(0, 1).map((post, index) => (
                  <BlogCard key={index} post={post} variant="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Text section on large screens */}
          <div className="contents lg:block lg:space-y-6">
            <div className="order-2 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Hi, I'm Lia
              </h1>
            </div>

            <div className="order-3 text-sm text-muted-foreground leading-relaxed">
              <p className="mb-6">
                My work lies in <strong> natural language processing, human-centered applications and secured decentralized systems, with experience in large-scale software and LLM development</strong>
              </p>

              <p className="mb-6">
               I was a Research Intern at Aramco-Ithra, collaborating with global institutions including <strong>WHO, Stony Brook Medicine, University of Washington, University of Geneva, University of Tokyo and research institutes from 35 countries.</strong> Previously, I worked with the <strong>United States Department of Justice - ICITAP</strong>, designed a platform for secure crowdsourced crime reporting in low-connectivity areas, leveraging <strong>custom NLP pipelines, geospatial and predictive models</strong>.
              </p>

             
              <p className="mb-6">
              I recently graduated (Top 5) with a degree in Software Engineering (concentrating in AI and NLP) from the University of Dhaka where I work in BARTA Lab. There, I worked on <strong>low-resource and small-language-model development</strong>. I serve as an <strong>instructor</strong> at BARTA, where <strong>I teach a language model building course</strong> . I am also serving as an Instructor for <strong>International AI Olympiad</strong>, teaching <strong>AI Recommender Systems</strong>, and a <strong>Judge</strong> at BDAIO.
              </p>

              <p className="mb-6">
                Entrepreneurially, I was a <strong>founding member</strong> of Perspectivity - Drishtikon, the first real-time AI news aggregator for Bangla, featuring multi-axis bias detection that empower citizens with research agents.
              </p>
              
              <p className="mb-6">
                And... I paint. 
              </p>
            </div>

            <div className="order-11 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
            </div>

            <div className="order-12 flex gap-4">
              <Link href="https://github.com/NusRAT-LiA" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </Link>

              <Link href="https://www.linkedin.com/in/nusrat-jahan-lia-608655229/" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="w-5 h-5" />
              </Link>
              
              <Link href="https://scholar.google.com/citations?user=c2tTr4UAAAAJ&hl=en" className="text-muted-foreground hover:text-foreground">
                <BookOpen className="h-4 w-4" />
              </Link>
            </div>

            {/* Research Section */}
            <div className="order-5 pt-6">
              <Research/>
            </div>
          </div>
        </div>
      </section>
      {/*  <section>
        <Work/>
      </section>
      <section>
        <Courses/>
      </section>
      <section>
        <Blog />
      </section>
      <section>
        <Projects/>
      </section>*/}
      <section>
        <Life preview />
      </section>
    </div>
  )
}
