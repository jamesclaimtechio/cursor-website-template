"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { siteConfig } from "@/config/site.config"
import { useState } from "react"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white">
      <Container>
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={siteConfig.logo.src}
              alt={siteConfig.logo.alt}
              width={160}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[#5d2c89] font-medium hover:text-[#451e66] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Login Button */}
          <div className="hidden md:block">
            <Button variant="secondary" size="sm">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-[#5d2c89]"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#e5e7eb]">
            <nav className="flex flex-col space-y-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[#5d2c89] font-medium hover:text-[#451e66] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="secondary" size="sm" className="w-full">
                Login
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  )
}


