import { Metadata } from "next"
import { notFound } from "next/navigation"
import { LegalPageTemplate } from "@/components/legal"
import { getLegalPageBySlug, getAllLegalSlugs } from "@/lib/legal"

interface LegalPageProps {
  params: {
    slug: string
  }
}

// Generate static params for all legal pages
export async function generateStaticParams() {
  const slugs = getAllLegalSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}

// Generate metadata for each legal page
export async function generateMetadata({ params }: LegalPageProps): Promise<Metadata> {
  const page = getLegalPageBySlug(params.slug)

  if (!page) {
    return {
      title: "Page Not Found",
    }
  }

  return {
    title: page.metadata.title,
    description: page.metadata.description,
    robots: page.metadata.noIndex 
      ? { index: false, follow: false }
      : { index: true, follow: true },
  }
}

export default function LegalPage({ params }: LegalPageProps) {
  const page = getLegalPageBySlug(params.slug)

  if (!page) {
    notFound()
  }

  return <LegalPageTemplate page={page} />
}


