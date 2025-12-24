import type { Metadata } from "next"
import { Nunito } from "next/font/google"
import "@/styles/globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { seoConfig } from "@/config/seo.config"

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
})

export const metadata: Metadata = {
  title: seoConfig.defaultTitle,
  description: seoConfig.defaultDescription,
  openGraph: {
    type: seoConfig.openGraph.type as "website",
    locale: seoConfig.openGraph.locale,
    siteName: seoConfig.openGraph.siteName,
    images: [seoConfig.openGraph.defaultImage],
  },
  twitter: {
    card: seoConfig.twitter.card as "summary_large_image",
    site: seoConfig.twitter.site,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={nunito.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}


