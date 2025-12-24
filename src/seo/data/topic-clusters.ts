import { TopicCluster } from "@/seo/types/seo"

/**
 * TOPIC CLUSTERS
 * ==============
 * 
 * Maps content hierarchy for topical authority and internal linking.
 * 
 * PILLAR CONTENT STRATEGY:
 * Each pillar page is a comprehensive guide on a core topic.
 * Supporting content explores subtopics in depth and links back to pillar.
 * 
 * INTERNAL LINKING RULES:
 * - All supporting content MUST link to their pillar page
 * - Pillar pages link to all supporting content
 * - Supporting content can link to related supporting content
 * - Create a "hub and spoke" model for maximum authority flow
 * 
 * BENEFITS:
 * - Establishes topical authority with search engines
 * - Keeps users engaged (reduces bounce rate)
 * - Distributes page authority throughout site
 * - Helps search engines understand site structure
 */

export const topicClusters: TopicCluster[] = [
  // ============================================================================
  // CLUSTER 1: Car Finance Claims (Main Pillar)
  // ============================================================================
  {
    name: "Car Finance Claims",
    description: "Comprehensive coverage of car finance mis-selling, DCAs, and the compensation process",
    pillarPage: {
      slug: "car-finance-compensation-guide",
      keyword: "car finance claims",
      title: "Car Finance Claims: Complete Compensation Guide 2025",
      status: "published"
    },
    clusters: [
      {
        name: "Understanding the Issue",
        description: "Educational content explaining what went wrong and why people can claim",
        content: [
          {
            slug: "understanding-dcas",
            keyword: "what is a dca car finance",
            title: "What Are DCAs in Car Finance? Complete Guide",
            relationship: "subtopic",
            status: "published"
          },
          {
            slug: "what-are-car-finance-claims",
            keyword: "what are car finance claims",
            title: "What Are Car Finance Claims? Everything You Need to Know",
            relationship: "subtopic",
            status: "published"
          },
          {
            slug: "pcp-claims-explained",
            keyword: "pcp claims explained",
            title: "PCP Claims Explained: Can You Claim on Personal Contract Purchase?",
            relationship: "subtopic",
            status: "planned"
          },
          {
            slug: "hire-purchase-claims",
            keyword: "hire purchase claims",
            title: "Hire Purchase Claims: What You Need to Know",
            relationship: "subtopic",
            status: "planned"
          },
          {
            slug: "pcp-vs-hp-claims",
            keyword: "pcp vs hp",
            title: "PCP vs HP Claims: What's the Difference?",
            relationship: "comparison",
            status: "planned"
          },
        ]
      },
      {
        name: "FCA & Regulatory Updates",
        description: "Latest news, regulations, and official scheme information",
        content: [
          {
            slug: "fca-redress-scheme-2026",
            keyword: "fca redress scheme",
            title: "FCA Motor Finance Redress Scheme 2026: What You Need to Know",
            relationship: "related",
            status: "published"
          },
          {
            slug: "supreme-court-ruling-explained",
            keyword: "car finance supreme court",
            title: "Supreme Court Car Finance Ruling: What It Means for Your Claim",
            relationship: "related",
            status: "planned"
          },
          {
            slug: "fca-complaint-pause-explained",
            keyword: "fca complaint pause",
            title: "FCA Complaint Pause: Why It Exists and What Happens Next",
            relationship: "related",
            status: "planned"
          },
        ]
      },
      {
        name: "The Claims Process",
        description: "How-to guides for making claims and navigating the process",
        content: [
          {
            slug: "how-to-make-car-finance-claim",
            keyword: "how to make a car finance claim",
            title: "How to Make a Car Finance Claim: Step-by-Step Guide",
            relationship: "how-to",
            status: "planned"
          },
          {
            slug: "car-finance-claim-timeline",
            keyword: "how long do car finance claims take",
            title: "Car Finance Claim Timeline: How Long Does It Take?",
            relationship: "how-to",
            status: "planned"
          },
          {
            slug: "car-finance-claim-evidence",
            keyword: "evidence needed for car finance claim",
            title: "What Evidence Do I Need for My Car Finance Claim?",
            relationship: "how-to",
            status: "planned"
          },
          {
            slug: "financial-ombudsman-car-finance",
            keyword: "financial ombudsman car finance",
            title: "Financial Ombudsman Car Finance Claims: Complete Guide",
            relationship: "how-to",
            status: "planned"
          },
        ]
      },
      {
        name: "Lender-Specific Guides",
        description: "Detailed guides for claiming against specific finance companies",
        content: [
          {
            slug: "black-horse-refund",
            keyword: "black horse finance claims",
            title: "Black Horse Finance Claims: How to Get Your Refund",
            relationship: "lender-specific",
            status: "published"
          },
          {
            slug: "close-brothers-motor-finance-claims",
            keyword: "close brothers motor finance claims",
            title: "Close Brothers Motor Finance Claims: Complete Guide",
            relationship: "lender-specific",
            status: "draft"
          },
          {
            slug: "santander-car-finance-claims",
            keyword: "santander car finance claims",
            title: "Santander Car Finance Claims: How to Claim Your Refund",
            relationship: "lender-specific",
            status: "planned"
          },
          {
            slug: "moneybarn-claims",
            keyword: "moneybarn claims",
            title: "Moneybarn Claims: How to Get Compensation",
            relationship: "lender-specific",
            status: "planned"
          },
          {
            slug: "moto-novo-finance-claims",
            keyword: "moto novo finance claims",
            title: "MotoNovo Finance Claims: Complete Guide",
            relationship: "lender-specific",
            status: "planned"
          },
          {
            slug: "barclays-partner-finance-claims",
            keyword: "barclays partner finance claims",
            title: "Barclays Partner Finance Claims: What You Need to Know",
            relationship: "lender-specific",
            status: "planned"
          },
        ]
      },
      {
        name: "Compensation & Calculations",
        description: "Understanding payouts, calculations, and what to expect",
        content: [
          {
            slug: "car-finance-compensation-calculation",
            keyword: "how is car finance compensation calculated",
            title: "How Is Car Finance Compensation Calculated?",
            relationship: "subtopic",
            status: "published"
          },
          {
            slug: "average-car-finance-payout",
            keyword: "average car finance payout",
            title: "Average Car Finance Payout: What Can You Expect?",
            relationship: "subtopic",
            status: "planned"
          },
          {
            slug: "car-finance-interest-rate-refund",
            keyword: "car finance interest refund",
            title: "Car Finance Interest Rate Refunds: How They Work",
            relationship: "related",
            status: "planned"
          },
        ]
      },
    ]
  },

  // ============================================================================
  // CLUSTER 2: Legal & Process (Supporting Pillar)
  // ============================================================================
  {
    name: "Legal & Process",
    description: "Understanding rights, regulations, and the legal process",
    pillarPage: {
      slug: "car-finance-consumer-rights",
      keyword: "car finance consumer rights",
      title: "Your Car Finance Consumer Rights: Complete Legal Guide",
      status: "planned"
    },
    clusters: [
      {
        name: "Your Rights",
        description: "Legal rights and protections for consumers",
        content: [
          {
            slug: "consumer-credit-act-car-finance",
            keyword: "consumer credit act car finance",
            title: "Consumer Credit Act & Car Finance: Your Rights Explained",
            relationship: "subtopic",
            status: "planned"
          },
          {
            slug: "unfair-relationships-car-finance",
            keyword: "unfair relationship car finance",
            title: "Unfair Relationships in Car Finance: What It Means",
            relationship: "subtopic",
            status: "planned"
          },
        ]
      },
      {
        name: "Claims Management",
        description: "Understanding claims companies and fees",
        content: [
          {
            slug: "do-i-need-claims-company",
            keyword: "do i need a claims company",
            title: "Do I Need a Claims Company for Car Finance Claims?",
            relationship: "related",
            status: "planned"
          },
          {
            slug: "claims-management-fees-explained",
            keyword: "claims management fees",
            title: "Claims Management Fees: What You'll Pay & Why",
            relationship: "related",
            status: "planned"
          },
        ]
      },
    ]
  },

  // ============================================================================
  // CLUSTER 3: DCA Claims (Focused Sub-Pillar)
  // ============================================================================
  {
    name: "DCA Claims",
    description: "Deep dive into Discretionary Commission Arrangements",
    pillarPage: {
      slug: "understanding-dcas",
      keyword: "what is a dca car finance",
      title: "What Are DCAs in Car Finance? Complete Guide",
      status: "published"
    },
    clusters: [
      {
        name: "DCA Specifics",
        description: "Detailed DCA information and history",
        content: [
          {
            slug: "when-were-dcas-banned",
            keyword: "when were dcas banned",
            title: "When Were DCAs Banned? Timeline of the DCA Ban",
            relationship: "subtopic",
            status: "planned"
          },
          {
            slug: "how-to-check-if-you-had-dca",
            keyword: "how to check if i had a dca",
            title: "How to Check If You Had a DCA on Your Car Finance",
            relationship: "how-to",
            status: "planned"
          },
          {
            slug: "dca-vs-fixed-commission",
            keyword: "dca vs fixed commission",
            title: "DCA vs Fixed Commission: What's the Difference?",
            relationship: "comparison",
            status: "planned"
          },
        ]
      },
    ]
  },
]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Get all content from a cluster (flat list)
 */
export function getClusterContent(clusterName: string): Array<{
  slug: string
  keyword: string
  title: string
  relationship: string
  status: string
}> {
  const cluster = topicClusters.find(c => c.name === clusterName)
  if (!cluster) return []
  
  return cluster.clusters.flatMap(subCluster => subCluster.content)
}

/**
 * Find which cluster a slug belongs to
 */
export function findClusterBySlug(slug: string): TopicCluster | undefined {
  return topicClusters.find(cluster => {
    if (cluster.pillarPage.slug === slug) return true
    return cluster.clusters.some(subCluster => 
      subCluster.content.some(content => content.slug === slug)
    )
  })
}

/**
 * Get pillar page for a given content slug
 */
export function getPillarPageForContent(slug: string): TopicCluster['pillarPage'] | undefined {
  const cluster = findClusterBySlug(slug)
  return cluster?.pillarPage
}

/**
 * Get related content in the same cluster
 */
export function getRelatedContent(slug: string, limit: number = 5): Array<{
  slug: string
  keyword: string
  title: string
  relationship: string
}> {
  const cluster = findClusterBySlug(slug)
  if (!cluster) return []
  
  const allContent = cluster.clusters.flatMap(subCluster => subCluster.content)
  
  return allContent
    .filter(content => content.slug !== slug && content.status === "published")
    .slice(0, limit)
}

/**
 * Get internal linking suggestions for a slug
 */
export function getInternalLinkingSuggestions(slug: string): Array<{
  toSlug: string
  title: string
  relationship: string
  reason: string
}> {
  const cluster = findClusterBySlug(slug)
  if (!cluster) return []
  
  const suggestions: Array<{
    toSlug: string
    title: string
    relationship: string
    reason: string
  }> = []
  
  // Always link to pillar page
  if (slug !== cluster.pillarPage.slug) {
    suggestions.push({
      toSlug: cluster.pillarPage.slug,
      title: cluster.pillarPage.title,
      relationship: "pillar",
      reason: "Link to main pillar page for topical authority"
    })
  }
  
  // Get related content
  const related = getRelatedContent(slug, 4)
  related.forEach(content => {
    suggestions.push({
      toSlug: content.slug,
      title: content.title,
      relationship: content.relationship,
      reason: "Related content in same topic cluster"
    })
  })
  
  return suggestions
}

/**
 * Get content statistics
 */
export function getClusterStats() {
  let totalContent = 0
  let publishedContent = 0
  let draftContent = 0
  let plannedContent = 0
  
  topicClusters.forEach(cluster => {
    cluster.clusters.forEach(subCluster => {
      subCluster.content.forEach(content => {
        totalContent++
        if (content.status === "published") publishedContent++
        if (content.status === "draft") draftContent++
        if (content.status === "planned") plannedContent++
      })
    })
  })
  
  return {
    totalClusters: topicClusters.length,
    totalContent,
    publishedContent,
    draftContent,
    plannedContent,
    coveragePercent: ((publishedContent / totalContent) * 100).toFixed(1)
  }
}

/**
 * Get all planned content (content opportunities)
 */
export function getPlannedContent(): Array<{
  slug: string
  keyword: string
  title: string
  cluster: string
}> {
  const planned: Array<{
    slug: string
    keyword: string
    title: string
    cluster: string
  }> = []
  
  topicClusters.forEach(cluster => {
    cluster.clusters.forEach(subCluster => {
      subCluster.content.forEach(content => {
        if (content.status === "planned") {
          planned.push({
            slug: content.slug,
            keyword: content.keyword,
            title: content.title,
            cluster: cluster.name
          })
        }
      })
    })
  })
  
  return planned
}


