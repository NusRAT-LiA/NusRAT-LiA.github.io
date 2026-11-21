import { Button } from "@/components/ui/button"
import { Download, ExternalLink } from "lucide-react"

// The CV itself lives at public/cv.pdf — replace that file to update it.
const CV_URL = "/cv.pdf"

export default function CVPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-6 sm:py-12 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-tight">CV</h1>
          <div className="flex gap-2">
            <Button asChild size="sm" variant="outline">
              <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Open
              </a>
            </Button>
            <Button asChild size="sm">
              <a href={CV_URL} download="Nusrat_Jahan_Lia_CV.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download
              </a>
            </Button>
          </div>
        </div>

        {/* Inline viewer; phones often can't render PDFs in an iframe, so the buttons above are the fallback. */}
        <iframe
          src={CV_URL}
          title="Nusrat Jahan Lia — CV"
          className="w-full h-[80vh] border rounded-lg bg-card"
        />
      </div>
    </div>
  )
}
