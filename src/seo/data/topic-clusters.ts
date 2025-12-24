/**
 * TOPIC CLUSTERS & CONTENT HIERARCHY
 * ===================================
 * 
 * BRAND SETUP: Map out YOUR content strategy using topic clusters
 * 
 * CURSOR AI: When user says "plan content structure":
 * 1. Ask about their main topics/services
 * 2. Identify pillar content (comprehensive guides)
 * 3. Map cluster content (supporting articles)
 * 4. Plan internal linking strategy
 * 
 * WHAT ARE TOPIC CLUSTERS?
 * ========================
 * 
 * Topic clusters are a modern SEO strategy where:
 * 
 * 1. PILLAR PAGE - Comprehensive guide on main topic
 *    - Broad overview of entire subject
 *    - 3,000+ words typically
 *    - Links to all cluster content
 *    - Example: "Complete Guide to [Your Service]"
 * 
 * 2. CLUSTER CONTENT - Specific deep-dives
 *    - Detailed articles on subtopics
 *    - 1,500-2,500 words
 *    - Links back to pillar
 *    - Example: "How to [Specific Aspect]"
 * 
 * 3. INTERNAL LINKS - Connect everything
 *    - Pillar → Clusters (contextual links)
 *    - Clusters → Pillar (breadcrumbs, related)
 *    - Clusters ↔ Clusters (related topics)
 * 
 * WHY USE TOPIC CLUSTERS?
 * =======================
 * - Establishes topical authority with Google
 * - Better user experience (easy navigation)
 * - Improved search rankings
 * - Clear content roadmap
 * - Easier to identify content gaps
 * 
 * HOW TO BUILD YOUR CLUSTERS:
 * ===========================
 * 1. Identify 3-5 main topics for your business
 * 2. Create a pillar page for each main topic
 * 3. List 5-10 subtopics for each pillar
 * 4. Map keyword research to each piece
 * 5. Plan internal linking structure
 */

export const topicClusters = {
  // ============================================================================
  // EXAMPLE TEMPLATE - DELETE AND REPLACE WITH YOUR TOPICS
  // ============================================================================
  
  // CLUSTER 1: [YOUR MAIN TOPIC]
  // cluster1: {
  //   name: "{{MAIN_TOPIC_NAME}}", // e.g., "Legal Services", "Home Insurance"
  //   pillar: {
  //     title: "{{PILLAR_PAGE_TITLE}}",
  //     slug: "/{{pillar-slug}}", // e.g., "/legal-services-guide"
  //     targetKeyword: "{{PRIMARY_KEYWORD}}",
  //     status: "planned", // "planned" | "in-progress" | "published"
  //     notes: "Comprehensive overview of [topic]"
  //   },
  //   
  //   // Supporting content pieces
  //   clusters: [
  //     {
  //       title: "{{CLUSTER_1_TITLE}}",
  //       slug: "/{{cluster-1-slug}}",
  //       targetKeyword: "{{CLUSTER_KEYWORD}}",
  //       status: "planned",
  //       linksToPillar: true, // Should link back to pillar
  //       relatedClusters: ["{{cluster-2-slug}}"], // Link to related articles
  //     },
  //     {
  //       title: "{{CLUSTER_2_TITLE}}",
  //       slug: "/{{cluster-2-slug}}",
  //       targetKeyword: "{{CLUSTER_KEYWORD}}",
  //       status: "planned",
  //       linksToPillar: true,
  //       relatedClusters: ["{{cluster-1-slug}}", "{{cluster-3-slug}}"],
  //     },
  //     // Add 5-10 cluster articles per pillar
  //   ],
  // },
  
  // CLUSTER 2: [YOUR SECOND TOPIC]
  // cluster2: {
  //   name: "{{SECOND_TOPIC_NAME}}",
  //   pillar: {
  //     title: "{{PILLAR_PAGE_TITLE}}",
  //     slug: "/{{pillar-slug}}",
  //     targetKeyword: "{{PRIMARY_KEYWORD}}",
  //     status: "planned",
  //   },
  //   clusters: [
  //     // ... cluster articles
  //   ],
  // },
}

/**
 * EXAMPLE: Claims Management Company
 * ===================================
 * 
 * CLUSTER: Car Finance Claims
 * - Pillar: "Complete Guide to Car Finance Claims" (/car-finance-claims)
 * - Clusters:
 *   - "What Are Car Finance Claims?" (/what-are-car-finance-claims)
 *   - "How to Check Eligibility" (/check-eligibility)
 *   - "Claiming Against [Lender]" (/lender-name-claims)
 *   - "How Long Do Claims Take?" (/how-long-claims-take)
 *   - "Compensation Calculator" (/compensation-calculator)
 * 
 * CLUSTER: PPI Claims
 * - Pillar: "PPI Claims Guide" (/ppi-claims)
 * - Clusters:
 *   - "What is PPI?" (/what-is-ppi)
 *   - "PPI Deadline Information" (/ppi-deadline)
 *   - "How to Claim PPI" (/how-to-claim-ppi)
 * 
 * EXAMPLE: Legal Services
 * ========================
 * 
 * CLUSTER: Family Law
 * - Pillar: "Family Law Services Guide" (/family-law)
 * - Clusters:
 *   - "Divorce Process Explained" (/divorce-process)
 *   - "Child Custody Rights" (/child-custody)
 *   - "Spousal Support Guide" (/spousal-support)
 * 
 * CLUSTER: Employment Law
 * - Pillar: "Employment Law Guide" (/employment-law)
 * - Clusters:
 *   - "Wrongful Termination" (/wrongful-termination)
 *   - "Workplace Discrimination" (/workplace-discrimination)
 *   - "Employment Contracts" (/employment-contracts)
 */

/**
 * INTERNAL LINKING STRATEGY
 * ==========================
 * 
 * From Pillar Page:
 * - Link to ALL cluster articles (contextual mentions in content)
 * - Use descriptive anchor text with target keywords
 * - Place links naturally within relevant paragraphs
 * 
 * From Cluster Pages:
 * - Link back to pillar page (intro and conclusion)
 * - Link to 2-3 related cluster articles
 * - Use "Related Articles" section at bottom
 * 
 * Best Practices:
 * - Use keyword-rich anchor text (not "click here")
 * - Link early in content (within first 3 paragraphs)
 * - Include links in natural context
 * - Don't overdo it (3-5 internal links per post)
 * 
 * Example anchor text:
 * ✅ "Complete guide to car finance claims"
 * ✅ "Understanding PCP claims"
 * ❌ "Click here"
 * ❌ "Read more"
 */

/**
 * CONTENT PLANNING WORKFLOW
 * ==========================
 * 
 * 1. Start with Pillar
 *    - Research comprehensively
 *    - Cover topic broadly
 *    - Publish first
 * 
 * 2. Create Clusters
 *    - Deep dive into each subtopic
 *    - Reference pillar page
 *    - Link between related clusters
 * 
 * 3. Update Pillar
 *    - Add links to new clusters
 *    - Update with new insights
 *    - Keep current and comprehensive
 * 
 * 4. Track Performance
 *    - Monitor rankings
 *    - Check internal link clicks
 *    - Update based on data
 * 
 * See docs/SEO_CONTENT_ENGINE.md for detailed implementation guide
 */

