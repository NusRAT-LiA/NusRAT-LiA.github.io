import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center px-4 py-8">
      
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Get in Touch</h1>
      </div>

      {/* Cards */}
      <div className="grid gap-3 w-full max-w-md sm:max-w-lg md:max-w-2xl lg:grid-cols-2 lg:gap-4">
        
        {/* Direct Contact */}
        <Card className="w-full">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg">Direct Contact</CardTitle>
          </CardHeader>
          <CardContent className="pt-0 space-y-2">
            <div className="flex items-start gap-2">
              <Mail className="w-5 h-5 text-primary mt-1" />
              <div className="flex flex-col gap-1">
                <div>
                  <p className="font-medium text-sm">Email 1</p>
                  <Link
                    href="mailto:bsse1306@iit.du.ac.bd"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    bsse1306@iit.du.ac.bd
                  </Link>
                </div>
                <div>
                  <p className="font-medium text-sm">Email 2</p>
                  <Link
                    href="mailto:nusratliya19@gmail.com"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    nusratliya19@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card className="w-full">
          <CardHeader className="pb-1">
            <CardTitle className="text-lg">Connect Online</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              <Link
                href="https://www.linkedin.com/in/nusrat-jahan-lia-608655229/"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </Link>
              
            </div>
          </CardContent>
        </Card>

      </div>

      
    </div>
  )
}
