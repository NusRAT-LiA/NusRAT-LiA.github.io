"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, ChevronDown, Github, Globe, Play } from "lucide-react"
import { useState } from "react"
import { mainPublications, contributionPublications } from "@/lib/research"

// How many contribution entries show before the "See more" toggle.
const CONTRIBUTIONS_PREVIEW_COUNT = 1

// Research list. Rendered as a full page at /research, and embedded on the home page,
// where `embedded` drops the page-level padding and the big heading spacing.
export function ResearchContent({ embedded = false }: { embedded?: boolean }) {

  const [selectedPoster, setSelectedPoster] = useState<string | null>(null)
  const [showEarlierWork, setShowEarlierWork] = useState(false)
  const [showAllContributions, setShowAllContributions] = useState(false)

  const formatAuthors = (authors: string) => {
    return authors.split(";").map((author, index, array) => {
      // Split on the name (kept via the capture group) so it is highlighted even inside
      // entries that list several authors with commas.
      const parts = author.trim().split(/(Nusrat Jahan Lia)/)
      return (
        <span key={index}>
          {parts.map((part, i) =>
            part === "Nusrat Jahan Lia" ? <strong key={i} className="font-bold text-foreground">{part}</strong> : part
          )}
          {index < array.length - 1 && "; "}
        </span>
      )
    })
  }

  return (
    <div className={embedded ? "" : "min-h-screen bg-background"}>
      <div className={embedded ? "" : "container mx-auto px-4 py-4 sm:py-16"}>
        {/* Header */}
        <div className={`text-center space-y-4 mb-3 ${embedded ? "sm:mb-6" : "sm:mb-16"}`}>
          <h1 className="text-xs sm:text-4xl md:text-5xl font-semibold sm:font-bold uppercase sm:normal-case tracking-wider sm:tracking-tight text-muted-foreground sm:text-foreground">Research</h1>
        </div>

        {/* Main Publications */}
        <section className="mb-16">
          <div className="space-y-3 sm:space-y-4">
            {mainPublications.map((pub, index) => (
              <MainPublicationItem key={index} pub={pub} selectedPoster={selectedPoster} setSelectedPoster={setSelectedPoster} formatAuthors={formatAuthors} />
            ))}
          </div>
        </section>

        {/* Contribution Section */}
        <section>
          {/* On mobile this section is collapsed behind a toggle; always shown from sm up */}
          <button
            onClick={() => setShowEarlierWork(!showEarlierWork)}
            className="sm:hidden flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors mb-4"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${showEarlierWork ? 'rotate-180' : ''}`} />
            {showEarlierWork ? "Hide earlier work" : "See earlier work"}
          </button>

          <div className={`${showEarlierWork ? "block" : "hidden"} sm:block`}>
          <div className="space-y-2 mb-4">
            <h2 className="text-sm sm:text-lg font-bold">Statistical Inference & Data Provenance Across 35 Countries</h2>
            <p className="text-[11px] sm:text-xs text-muted-foreground italic">These were done during early undergrad. I was responsible for discovering patterns and findings across 35 countries. Some of which made it to publication, some others made it to project-level implementation, or presentations in places like WHO headquarters.</p>
          </div>

          <div className="space-y-3">
            {contributionPublications
              .slice(0, showAllContributions ? undefined : CONTRIBUTIONS_PREVIEW_COUNT)
              .map((pub, index) => (
                <ContributionItem key={index} pub={pub} selectedPoster={selectedPoster} setSelectedPoster={setSelectedPoster} formatAuthors={formatAuthors} />
              ))}
          </div>

          {contributionPublications.length > CONTRIBUTIONS_PREVIEW_COUNT && (
            <button
              onClick={() => setShowAllContributions(!showAllContributions)}
              className="mt-3 flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <ChevronDown className={`w-3 h-3 transition-transform ${showAllContributions ? 'rotate-180' : ''}`} />
              {showAllContributions ? "See less" : "See more"}
            </button>
          )}
          </div>
        </section>
      </div>

      {/* SVG Poster Preview Modal */}
      {selectedPoster && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedPoster(null)}>
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-auto">
            <object data={selectedPoster} type="image/svg+xml" className="w-full h-auto" />
          </div>
        </div>
      )}
    </div>
  )
}

// Main publication item component
function MainPublicationItem({ pub, selectedPoster, setSelectedPoster, formatAuthors }: any) {
  const [expandedOrgs, setExpandedOrgs] = useState(false)

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-4 sm:p-6 lg:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-6">
          {pub.photo && (
            <div className="hidden sm:block flex-shrink-0 sm:w-56 md:w-64 lg:w-56">
              <img
                src={pub.photo}
                alt={pub.title}
                className="w-full h-auto max-w-full sm:max-w-none sm:h-52 md:h-48 lg:h-40 object-contain rounded-lg"
              />
            </div>
          )}
          
          <div className="flex-1 space-y-2 sm:space-y-3 lg:space-y-2 min-w-0">
            <h3 title={pub.title} className="font-semibold text-xs sm:text-sm lg:text-[13px] leading-tight line-clamp-2 sm:line-clamp-none">
              <PaperTitle pub={pub} />
            </h3>

            <AuthorList authors={pub.authors} formatAuthors={formatAuthors} />

            {pub.affiliations && pub.affiliations.length > 0 && (
              <div className="text-[11px] sm:text-xs">
                <button
                  onClick={() => setExpandedOrgs(!expandedOrgs)}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown className={`w-3 h-3 transition-transform ${expandedOrgs ? 'rotate-180' : ''}`} />
                  Associated Organizations
                </button>
                {expandedOrgs && (
                  <div className="mt-2 pl-4 flex flex-wrap gap-1">
                    {pub.affiliations.map((affiliation: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 py-0">
                        {affiliation}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="flex items-center gap-4 text-[11px] sm:text-xs">
              <span className="font-medium"><strong>{pub.venue}</strong></span>
              <span className="text-muted-foreground">{pub.year}</span>
            </div>

            <PublicationLinks pub={pub} setSelectedPoster={setSelectedPoster} />

            {pub.tags && pub.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {pub.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

// Paper title — links to the paper itself (arXiv, then ACL Anthology, then journal,
// then project website); plain text when a publication has none of these.
function PaperTitle({ pub }: any) {
  const href = pub.arxiv || pub.acl || pub.jama || pub.website
  if (!href) return <>{pub.title}</>

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-primary hover:underline underline-offset-2 transition-colors">
      {pub.title}
    </a>
  )
}

// Author list — collapsed behind a toggle on mobile, always shown from sm up.
function AuthorList({ authors, formatAuthors }: any) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="text-[11px] sm:text-xs text-muted-foreground">
      <button
        onClick={() => setExpanded(!expanded)}
        className="sm:hidden flex items-center gap-1 font-medium hover:text-foreground transition-colors"
      >
        <ChevronDown className={`w-3 h-3 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        Authors
      </button>
      <div className={`${expanded ? "block mt-1 pl-4" : "hidden"} sm:block sm:mt-0 sm:pl-0`}>
        {formatAuthors(authors)}
      </div>
    </div>
  )
}

// Shared link buttons, rendered below the venue ("Accepted...") row.
// Only the links present on a publication are shown.
function PublicationLinks({ pub, setSelectedPoster }: any) {
  const hasAny = pub.arxiv || pub.acl || pub.poster || pub.github || pub.website || pub.jama || pub.demo
  if (!hasAny) return null

  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {pub.arxiv && (
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs" asChild>
          <a href={pub.arxiv} target="_blank" rel="noopener noreferrer">
            <FileText className="w-3 h-3 mr-1" />
            arXiv
          </a>
        </Button>
      )}
      {pub.acl && (
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs" asChild>
          <a href={pub.acl} target="_blank" rel="noopener noreferrer">
            <FileText className="w-3 h-3 mr-1" />
            ACL Anthology
          </a>
        </Button>
      )}
      {pub.poster && (
        <Button
          size="sm"
          variant="outline"
          className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs"
          onClick={() =>
            pub.posterType === "svg" ? setSelectedPoster(pub.poster || null) : window.open(pub.poster, "_blank")
          }
        >
          <FileText className="w-3 h-3 mr-1" />
          {pub.posterType === "svg" ? "View Poster" : "Download Poster"}
        </Button>
      )}
      {pub.github && (
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs" asChild>
          <a href={pub.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 mr-1" />
            GitHub
          </a>
        </Button>
      )}
      {pub.website && (
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs" asChild>
          <a href={pub.website} target="_blank" rel="noopener noreferrer">
            <Globe className="w-3 h-3 mr-1" />
            Website
          </a>
        </Button>
      )}
      {pub.jama && (
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs" asChild>
          <a href={pub.jama} target="_blank" rel="noopener noreferrer">
            <Globe className="w-3 h-3 mr-1" />
            Jama(Q1)
          </a>
        </Button>
      )}
      {pub.demo && (
        <Button size="sm" variant="outline" className="h-6 px-2 text-[11px] sm:h-7 sm:px-3 sm:text-xs" asChild>
          <a href={pub.demo} target="_blank" rel="noopener noreferrer">
            <Play className="w-3 h-3 mr-1" />
            Demo
          </a>
        </Button>
      )}
    </div>
  )
}

// Contribution item component
function ContributionItem({ pub, selectedPoster, setSelectedPoster, formatAuthors }: any) {
  const [expandedOrgs, setExpandedOrgs] = useState(false)

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-3 sm:p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Photo */}
          {pub.photo && (
            <div className="hidden sm:block flex-shrink-0 sm:w-32 lg:w-28">
              <img
                src={pub.photo}
                alt={pub.title}
                className="w-full h-auto sm:h-28 lg:h-24 object-contain rounded"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 min-w-0 space-y-1.5 sm:space-y-2">
            <h3 title={pub.title} className="font-semibold text-xs sm:text-[13px] leading-tight line-clamp-2 sm:line-clamp-none">
              <PaperTitle pub={pub} />
            </h3>

            {/* Authors */}
            <AuthorList authors={pub.authors} formatAuthors={formatAuthors} />

            {/* Collapsible Associated Organizations */}
            {pub.affiliations && pub.affiliations.length > 0 && (
              <div className="text-[11px] sm:text-xs">
                <button
                  onClick={() => setExpandedOrgs(!expandedOrgs)}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown className={`w-3 h-3 transition-transform ${expandedOrgs ? 'rotate-180' : ''}`} />
                  Associated Organizations
                </button>
                {expandedOrgs && (
                  <div className="mt-2 pl-4 flex flex-wrap gap-1">
                    {pub.affiliations.map((affiliation: string, idx: number) => (
                      <Badge key={idx} variant="secondary" className="text-[10px] px-1.5 py-0">
                        {affiliation}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Venue and Year */}
            <div className="flex items-center gap-3 text-[11px] sm:text-xs">
              <span className="font-medium">{pub.venue}</span>
              <span className="text-muted-foreground">{pub.year}</span>
            </div>

            <PublicationLinks pub={pub} setSelectedPoster={setSelectedPoster} />

            {pub.tags && pub.tags.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {pub.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-[10px] px-1.5 py-0">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
