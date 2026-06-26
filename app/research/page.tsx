"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, ChevronDown, Github, Globe } from "lucide-react"
import { useState } from "react"
import { mainPublications, contributionPublications } from "@/lib/research"

export default function ResearchPage() {

  const [selectedPoster, setSelectedPoster] = useState<string | null>(null)

  const formatAuthors = (authors: string) => {
    return authors.split(";").map((author, index, array) => {
      const trimmedAuthor = author.trim()
      return (
        <span key={index}>
          {trimmedAuthor === "Nusrat Jahan Lia" ? <strong>{trimmedAuthor}</strong> : trimmedAuthor}
          {index < array.length - 1 && "; "}
        </span>
      )
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Research</h1>
        </div>

        {/* Main Publications */}
        <section className="mb-16">
          <div className="space-y-4">
            {mainPublications.map((pub, index) => (
              <MainPublicationItem key={index} pub={pub} selectedPoster={selectedPoster} setSelectedPoster={setSelectedPoster} formatAuthors={formatAuthors} />
            ))}
          </div>
        </section>

        {/* Contribution Section */}
        <section>
          <div className="space-y-2 mb-4">
            <h2 className="text-lg font-bold">Statistical Inference & Data Provenance Across 35 Countries</h2>
            <p className="text-xs text-muted-foreground italic">These were done during early undergrad. I was responsible for discovering patterns and findings across 35 countries. Some of which made it to publication, some others made it to project-level implementation, or presentations in places like WHO headquarters.</p>
          </div>

          <div className="space-y-3">
            {contributionPublications.map((pub, index) => (
              <ContributionItem key={index} pub={pub} selectedPoster={selectedPoster} setSelectedPoster={setSelectedPoster} formatAuthors={formatAuthors} />
            ))}
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
      <CardContent className="p-6 lg:p-4">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8 lg:gap-6">
          {pub.photo && (
            <div className="flex-shrink-0 w-full sm:w-56 md:w-64 lg:w-56 mb-4 sm:mb-0">
              <img
                src={pub.photo}
                alt={pub.title}
                className="w-full h-auto max-w-full sm:max-w-none sm:h-52 md:h-48 lg:h-40 object-contain rounded-lg"
              />
            </div>
          )}
          
          <div className="flex-1 space-y-3 lg:space-y-2 min-w-0">
            <h3 className="font-semibold text-base lg:text-sm hover:text-primary cursor-pointer leading-tight">
              {pub.title}
            </h3>

            <div className="text-xs text-muted-foreground">{formatAuthors(pub.authors)}</div>

            {pub.affiliations && pub.affiliations.length > 0 && (
              <div className="text-xs">
                <button
                  onClick={() => setExpandedOrgs(!expandedOrgs)}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown className={`w-3 h-3 transition-transform ${expandedOrgs ? 'rotate-180' : ''}`} />
                  Associated Organizations ({pub.affiliations.length})
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

            <div className="flex items-center gap-4 text-xs">
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

// Shared link buttons, rendered below the venue ("Accepted...") row.
// Only the links present on a publication are shown.
function PublicationLinks({ pub, setSelectedPoster }: any) {
  const hasAny = pub.arxiv || pub.acl || pub.poster || pub.github || pub.website || pub.jama
  if (!hasAny) return null

  return (
    <div className="flex flex-wrap gap-2 pt-1">
      {pub.arxiv && (
        <Button size="sm" variant="outline" className="h-7 text-xs" asChild>
          <a href={pub.arxiv} target="_blank" rel="noopener noreferrer">
            <FileText className="w-3 h-3 mr-1" />
            arXiv
          </a>
        </Button>
      )}
      {pub.acl && (
        <Button size="sm" variant="outline" className="h-7 text-xs" asChild>
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
          className="h-7 text-xs"
          onClick={() =>
            pub.posterType === "svg" ? setSelectedPoster(pub.poster || null) : window.open(pub.poster, "_blank")
          }
        >
          <FileText className="w-3 h-3 mr-1" />
          {pub.posterType === "svg" ? "View Poster" : "Download Poster"}
        </Button>
      )}
      {pub.github && (
        <Button size="sm" variant="outline" className="h-7 text-xs" asChild>
          <a href={pub.github} target="_blank" rel="noopener noreferrer">
            <Github className="w-3 h-3 mr-1" />
            GitHub
          </a>
        </Button>
      )}
      {pub.website && (
        <Button size="sm" variant="outline" className="h-7 text-xs" asChild>
          <a href={pub.website} target="_blank" rel="noopener noreferrer">
            <Globe className="w-3 h-3 mr-1" />
            Website
          </a>
        </Button>
      )}
      {pub.jama && (
        <Button size="sm" variant="outline" className="h-7 text-xs" asChild>
          <a href={pub.jama} target="_blank" rel="noopener noreferrer">
            <Globe className="w-3 h-3 mr-1" />
            Jama(Q1)
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
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Photo */}
          {pub.photo && (
            <div className="flex-shrink-0 w-full sm:w-32 lg:w-28">
              <img
                src={pub.photo}
                alt={pub.title}
                className="w-full h-auto sm:h-28 lg:h-24 object-contain rounded"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 space-y-2">
            <h3 className="font-semibold text-sm hover:text-primary cursor-pointer leading-tight">
              {pub.title}
            </h3>

            {/* Authors */}
            <div className="text-xs text-muted-foreground">{formatAuthors(pub.authors)}</div>

            {/* Collapsible Associated Organizations */}
            {pub.affiliations && pub.affiliations.length > 0 && (
              <div className="text-xs">
                <button
                  onClick={() => setExpandedOrgs(!expandedOrgs)}
                  className="flex items-center gap-1 font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronDown className={`w-3 h-3 transition-transform ${expandedOrgs ? 'rotate-180' : ''}`} />
                  Associated Organizations ({pub.affiliations.length})
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
            <div className="flex items-center gap-3 text-xs">
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
