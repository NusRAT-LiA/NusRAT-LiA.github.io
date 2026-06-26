import { Github, Linkedin, Mail, BookOpen, Twitter } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <h3 className="font-semibold">Nusrat Jahan Lia</h3>
            <p className="text-sm text-muted-foreground">
              {/* Assistant Professor at MIT exploring the intersection of AI, education, and human-computer interaction. */}
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/NusRAT-LiA" className="text-muted-foreground hover:text-foreground">
                <Github className="h-4 w-4" />
              </Link>
              <Link href="https://www.linkedin.com/in/nusrat-jahan-lia-608655229/" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link href="https://x.com/NusratLia" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-4 w-4" />
              </Link>
              <Link href="https://scholar.google.com/citations?user=c2tTr4UAAAAJ&hl=en" className="text-muted-foreground hover:text-foreground">
                <BookOpen className="h-4 w-4" />
              </Link>
              <Link href="mailto:bsse1306@iit.du.ac.bd" className="text-muted-foreground hover:text-foreground">
                <Mail className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/research" className="text-muted-foreground hover:text-foreground">
                  Research
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-muted-foreground hover:text-foreground">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Resources */}
          {/* <div className="space-y-4">
            <h3 className="font-semibold">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/cv" className="text-muted-foreground hover:text-foreground">
                  Download CV
                </Link>
              </li>
              <li>
                <Link href="/media" className="text-muted-foreground hover:text-foreground">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-foreground">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/now" className="text-muted-foreground hover:text-foreground">
                  What I'm Doing Now
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Newsletter */}
          
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Nusrat Jahan Lia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
