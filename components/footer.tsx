"use client"

import { BellabitLogo } from "@/components/bellabit-logo"

export function Footer() {
  return (
    <footer id="contact" className="py-16 border-t border-border">
      {/* التعديل هنا: max-w-7xl عشان المحاذاة */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <BellabitLogo className="h-16 w-auto text-primary mb-6" />
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Offensive security team based in Sudan. CTF competitors and security researchers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-4">Contact</h4>
            <a
              href="mailto:contact@bellabit.team"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              contact@bellabit.team
            </a>
          </div>

          <div>
            <h4 className="text-sm font-medium text-primary mb-4">Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href="https://github.com/bellabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://twitter.com/bellabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Twitter
              </a>
              <a
                href="https://ctftime.org/team/bellabit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                CTFtime
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-primary">Bellabit</span>
          </span>
        </div>
      </div>
    </footer>
  )
}