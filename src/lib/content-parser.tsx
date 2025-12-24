/**
 * Unified Content Parser
 * ======================
 * Parses markdown with custom block syntax for legal pages, blog posts, and other content
 * 
 * Supports:
 * - Standard markdown: ## headings, ### subheadings, **bold**, - lists, 1. numbered lists
 * - Custom blocks: :::blockname[variant] Title
 * 
 * Available Blocks:
 * - :::infobox[variant] - Colored info boxes (blue, green, amber, gray, purple)
 * - :::warning - Warning/alert boxes
 * - :::indent - Blue left-border indented sections
 * - :::contact - Contact information cards
 * - :::highlight[variant] - Gradient highlight callouts
 * - :::example - Example/calculation boxes
 * - :::steps - Numbered step-by-step processes
 * - :::cta - Call-to-action sections
 * - :::company - Company/regulatory info
 * - :::timeline - Process timelines
 * - :::keytakeaway - Key point summaries (blog)
 * - :::quote - Styled quotations (blog)
 * - :::stat - Big number statistics (blog)
 * - :::definition - Term definitions (blog)
 * - :::checklist - Checkmark lists (blog)
 * - :::proscons - Pros/cons comparison (blog)
 */

import {
  InfoBox,
  WarningBox,
  IndentSection,
  ContactCard,
  HighlightBox,
  ExampleBox,
  StepsList,
  CTABox,
  CompanyInfoBox,
  Timeline,
  KeyTakeaway,
  Quote,
  StatCard,
  Definition,
  Checklist,
  ProsCons,
  BlockVariant,
} from "@/components/blocks"

// ============================================
// TYPES
// ============================================

export interface ContentHeading {
  id: string
  text: string
  level: 2 | 3
}

// ============================================
// HEADING EXTRACTION (for TOC)
// ============================================

export function extractHeadings(content: string): ContentHeading[] {
  const headings: ContentHeading[] = []
  const lines = content.split("\n")
  
  lines.forEach((line, index) => {
    if (line.startsWith("## ")) {
      const text = line.replace("## ", "").trim()
      headings.push({
        id: `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        text,
        level: 2,
      })
    } else if (line.startsWith("### ")) {
      const text = line.replace("### ", "").trim()
      headings.push({
        id: `heading-${index}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
        text,
        level: 3,
      })
    }
  })
  
  return headings
}

// ============================================
// INLINE TEXT FORMATTING
// ============================================

function formatInlineText(text: string): (string | JSX.Element)[] {
  const parts: (string | JSX.Element)[] = []
  let keyIndex = 0
  let currentText = text
  
  // Process links first [text](url)
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
  const segments: Array<{ type: 'text' | 'link', content: string, url?: string }> = []
  let lastIndex = 0
  let match
  
  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      segments.push({ type: 'text', content: text.substring(lastIndex, match.index) })
    }
    segments.push({ type: 'link', content: match[1], url: match[2] })
    lastIndex = match.index + match[0].length
  }
  
  if (lastIndex < text.length) {
    segments.push({ type: 'text', content: text.substring(lastIndex) })
  }
  
  if (segments.length === 0) {
    segments.push({ type: 'text', content: text })
  }
  
  // Now process each segment for bold text
  segments.forEach((segment, segIndex) => {
    if (segment.type === 'link') {
      const isExternal = segment.url?.startsWith('http')
      parts.push(
        <a 
          key={`link-${segIndex}`}
          href={segment.url}
          className="text-[#5d2c89] hover:text-[#7a3ba8] underline decoration-1 underline-offset-2 transition-colors"
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
        >
          {segment.content}
        </a>
      )
    } else {
      // Process bold text in regular text segments
      const boldRegex = /\*\*(.*?)\*\*/g
      let textLastIndex = 0
      let boldMatch
      
      while ((boldMatch = boldRegex.exec(segment.content)) !== null) {
        if (boldMatch.index > textLastIndex) {
          parts.push(segment.content.substring(textLastIndex, boldMatch.index))
        }
        parts.push(
          <strong key={`bold-${keyIndex++}`} className="font-bold text-gray-900">
            {boldMatch[1]}
          </strong>
        )
        textLastIndex = boldMatch.index + boldMatch[0].length
      }
      
      if (textLastIndex < segment.content.length) {
        parts.push(segment.content.substring(textLastIndex))
      }
    }
  })

  return parts.length > 0 ? parts : [text]
}

// ============================================
// BLOCK CONTENT PARSERS
// ============================================

function parseContactProps(content: string): { email?: string; phone?: string; address?: string; title?: string } {
  const props: Record<string, string> = {}
  const lines = content.trim().split("\n")
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim().toLowerCase()
      const value = line.substring(colonIndex + 1).trim()
      props[key] = value
    }
  })
  
  return props
}

function parseTimelineItems(content: string): { label: string; value: string }[] {
  const items: { label: string; value: string }[] = []
  const lines = content.trim().split("\n")
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      items.push({
        label: line.substring(0, colonIndex).trim(),
        value: line.substring(colonIndex + 1).trim(),
      })
    }
  })
  
  return items
}

function parseSteps(content: string): string[] {
  const lines = content.trim().split("\n")
  return lines
    .map(line => line.replace(/^\d+\.\s*/, "").trim())
    .filter(line => line.length > 0)
}

function parseCTAProps(content: string): { title: string; description: string; buttonText?: string; buttonHref?: string } {
  const props: Record<string, string> = {
    title: "Ready to Get Started?",
    description: "Check your eligibility today.",
  }
  const lines = content.trim().split("\n")
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim().toLowerCase().replace(/\s+/g, "")
      const value = line.substring(colonIndex + 1).trim()
      props[key] = value
    }
  })
  
  return {
    title: props.title,
    description: props.description,
    buttonText: props.buttontext,
    buttonHref: props.buttonhref,
  }
}

function parseStatProps(content: string): { value: string; label: string } {
  const lines = content.trim().split("\n")
  const props: Record<string, string> = { value: "", label: "" }
  
  lines.forEach(line => {
    const colonIndex = line.indexOf(":")
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim().toLowerCase()
      const value = line.substring(colonIndex + 1).trim()
      props[key] = value
    }
  })
  
  return { value: props.value, label: props.label }
}

function parseQuoteProps(content: string, inlineTitle?: string): { text: string; author?: string; source?: string } {
  const lines = content.trim().split("\n")
  let text = ""
  let author = inlineTitle
  let source: string | undefined
  
  lines.forEach(line => {
    if (line.toLowerCase().startsWith("author:")) {
      author = line.substring(7).trim()
    } else if (line.toLowerCase().startsWith("source:")) {
      source = line.substring(7).trim()
    } else {
      text += line + " "
    }
  })
  
  return { text: text.trim(), author, source }
}

function parseChecklistItems(content: string): string[] {
  const lines = content.trim().split("\n")
  return lines
    .filter(line => line.startsWith("- "))
    .map(line => line.replace(/^-\s*/, "").trim())
}

function parseProsConsItems(content: string): { pros: string[]; cons: string[] } {
  const lines = content.trim().split("\n")
  const pros: string[] = []
  const cons: string[] = []
  let currentSection: "pros" | "cons" | null = null
  
  lines.forEach(line => {
    const lowerLine = line.toLowerCase().trim()
    if (lowerLine === "pros:" || lowerLine.startsWith("pros:")) {
      currentSection = "pros"
    } else if (lowerLine === "cons:" || lowerLine.startsWith("cons:")) {
      currentSection = "cons"
    } else if (line.startsWith("- ")) {
      const item = line.replace(/^-\s*/, "").trim()
      if (currentSection === "pros") {
        pros.push(item)
      } else if (currentSection === "cons") {
        cons.push(item)
      }
    }
  })
  
  return { pros, cons }
}

// ============================================
// BLOCK CONTENT RENDERER
// ============================================

function renderBlockContent(content: string): JSX.Element[] {
  const elements: JSX.Element[] = []
  const lines = content.split("\n")
  let i = 0
  let elementKey = 0

  while (i < lines.length) {
    const line = lines[i]

    if (!line.trim()) {
      i++
      continue
    }

    // Bullet lists inside blocks
    if (line.startsWith("- ")) {
      const listItems: JSX.Element[] = []
      let listIndex = i

      while (listIndex < lines.length && lines[listIndex].startsWith("- ")) {
        const itemText = lines[listIndex].replace("- ", "")
        listItems.push(
          <li key={`bli-${listIndex}`}>
            {formatInlineText(itemText)}
          </li>
        )
        listIndex++
      }

      elements.push(
        <ul key={`bul-${elementKey++}`} className="list-disc list-outside pl-4 space-y-1">
          {listItems}
        </ul>
      )

      i = listIndex
      continue
    }

    // Regular text inside blocks
    if (line.trim()) {
      elements.push(
        <p key={`bp-${elementKey++}`}>
          {formatInlineText(line)}
        </p>
      )
    }

    i++
  }

  return elements
}

// ============================================
// MAIN PARSER
// ============================================

interface ParseOptions {
  /** Style variant for headings - 'legal' uses border-left, 'blog' uses plain */
  variant?: "legal" | "blog"
}

export function parseContent(content: string, options: ParseOptions = {}): JSX.Element[] {
  const { variant = "blog" } = options
  const elements: JSX.Element[] = []
  const lines = content.split("\n")
  let i = 0
  let elementKey = 0

  // Heading styles based on variant
  const h2Class = variant === "legal" 
    ? "text-2xl font-bold text-[#2d2d2d] mt-12 mb-4 border-l-4 border-[#5d2c89] pl-4 first:mt-0 scroll-mt-24"
    : "text-3xl font-bold text-gray-900 mt-12 mb-6 first:mt-0 scroll-mt-24"
  
  const h3Class = variant === "legal"
    ? "text-xl font-semibold text-[#2d2d2d] mt-6 mb-3 scroll-mt-24"
    : "text-2xl font-bold text-gray-900 mt-8 mb-4 scroll-mt-24"

  while (i < lines.length) {
    const line = lines[i]

    // Skip empty lines
    if (!line.trim()) {
      i++
      continue
    }

    // ================================
    // CUSTOM BLOCK SYNTAX: :::blockname[variant] Title
    // ================================
    if (line.trim().startsWith(":::")) {
      const blockMatch = line.trim().match(/^:::(\w+)(?:\[(\w+)\])?(?:\s+(.*))?$/)
      
      if (blockMatch) {
        const blockType = blockMatch[1].toLowerCase()
        const blockVariant = (blockMatch[2] as BlockVariant) || undefined
        const inlineTitle = blockMatch[3] || undefined
        
        // Find closing :::
        let blockContent = ""
        i++
        while (i < lines.length && !lines[i].trim().startsWith(":::")) {
          blockContent += lines[i] + "\n"
          i++
        }
        i++ // Skip closing :::
        
        const blockKey = `block-${elementKey++}`
        
        switch (blockType) {
          case "infobox":
            elements.push(
              <InfoBox key={blockKey} variant={blockVariant || "blue"} title={inlineTitle}>
                {renderBlockContent(blockContent)}
              </InfoBox>
            )
            break
            
          case "warning":
            elements.push(
              <WarningBox key={blockKey} title={inlineTitle}>
                {renderBlockContent(blockContent)}
              </WarningBox>
            )
            break
            
          case "indent":
            elements.push(
              <IndentSection key={blockKey}>
                {renderBlockContent(blockContent)}
              </IndentSection>
            )
            break
            
          case "contact":
            const contactProps = parseContactProps(blockContent)
            elements.push(
              <ContactCard key={blockKey} {...contactProps} />
            )
            break
            
          case "highlight":
            elements.push(
              <HighlightBox key={blockKey} variant={blockVariant || "blue"} title={inlineTitle}>
                {renderBlockContent(blockContent)}
              </HighlightBox>
            )
            break
            
          case "example":
            elements.push(
              <ExampleBox key={blockKey} title={inlineTitle || "Example"}>
                {renderBlockContent(blockContent)}
              </ExampleBox>
            )
            break
            
          case "steps":
            const steps = parseSteps(blockContent)
            elements.push(
              <StepsList key={blockKey} steps={steps} title={inlineTitle} />
            )
            break
            
          case "cta":
            const ctaProps = parseCTAProps(blockContent)
            elements.push(
              <CTABox key={blockKey} {...ctaProps} />
            )
            break
            
          case "company":
            elements.push(
              <CompanyInfoBox key={blockKey} />
            )
            break
            
          case "timeline":
            const timelineItems = parseTimelineItems(blockContent)
            elements.push(
              <Timeline key={blockKey} items={timelineItems} title={inlineTitle} />
            )
            break
            
          // NEW BLOG-SPECIFIC BLOCKS
          
          case "keytakeaway":
            elements.push(
              <KeyTakeaway key={blockKey} title={inlineTitle}>
                {renderBlockContent(blockContent)}
              </KeyTakeaway>
            )
            break
            
          case "quote":
            const quoteProps = parseQuoteProps(blockContent, inlineTitle)
            elements.push(
              <Quote key={blockKey} author={quoteProps.author} source={quoteProps.source}>
                {quoteProps.text}
              </Quote>
            )
            break
            
          case "stat":
            const statProps = parseStatProps(blockContent)
            elements.push(
              <StatCard key={blockKey} value={statProps.value} label={statProps.label} variant={blockVariant || "purple"} />
            )
            break
            
          case "definition":
            elements.push(
              <Definition key={blockKey} term={inlineTitle || "Term"}>
                {renderBlockContent(blockContent)}
              </Definition>
            )
            break
            
          case "checklist":
            const checklistItems = parseChecklistItems(blockContent)
            elements.push(
              <Checklist key={blockKey} items={checklistItems} title={inlineTitle} />
            )
            break
            
          case "proscons":
            const prosConsItems = parseProsConsItems(blockContent)
            elements.push(
              <ProsCons key={blockKey} pros={prosConsItems.pros} cons={prosConsItems.cons} title={inlineTitle} />
            )
            break
            
          default:
            // Unknown block type - render as indented section
            elements.push(
              <IndentSection key={blockKey}>
                {renderBlockContent(blockContent)}
              </IndentSection>
            )
        }
        
        continue
      }
    }

    // ================================
    // H2 HEADINGS: ## Heading
    // ================================
    if (line.startsWith("## ")) {
      const text = line.replace("## ", "").trim()
      const id = `heading-${i}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
      elements.push(
        <h2 key={`h2-${elementKey++}`} id={id} className={h2Class}>
          {text}
        </h2>
      )
      i++
      continue
    }

    // ================================
    // H3 HEADINGS: ### Subheading
    // ================================
    if (line.startsWith("### ")) {
      const text = line.replace("### ", "").trim()
      const id = `heading-${i}-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`
      elements.push(
        <h3 key={`h3-${elementKey++}`} id={id} className={h3Class}>
          {text}
        </h3>
      )
      i++
      continue
    }

    // ================================
    // H4 HEADINGS: #### Subsubheading
    // ================================
    if (line.startsWith("#### ")) {
      const text = line.replace("#### ", "").trim()
      elements.push(
        <h4 key={`h4-${elementKey++}`} className="text-lg font-semibold text-gray-900 mt-4 mb-2">
          {text}
        </h4>
      )
      i++
      continue
    }

    // ================================
    // BULLET LISTS: - Item
    // ================================
    if (line.startsWith("- ")) {
      const listItems: JSX.Element[] = []
      let listIndex = i

      while (listIndex < lines.length && lines[listIndex].startsWith("- ")) {
        const itemText = lines[listIndex].replace("- ", "")
        listItems.push(
          <li key={`li-${listIndex}`} className="text-lg text-gray-700 mb-2">
            {formatInlineText(itemText)}
          </li>
        )
        listIndex++
      }

      elements.push(
        <ul key={`ul-${elementKey++}`} className="list-disc list-outside space-y-2 my-6 pl-6">
          {listItems}
        </ul>
      )

      i = listIndex
      continue
    }

    // ================================
    // NUMBERED LISTS: 1. Item
    // ================================
    if (/^\d+\.\s/.test(line)) {
      const listItems: JSX.Element[] = []
      let listIndex = i

      while (listIndex < lines.length && /^\d+\.\s/.test(lines[listIndex])) {
        const itemText = lines[listIndex].replace(/^\d+\.\s/, "")
        listItems.push(
          <li key={`oli-${listIndex}`} className="text-lg text-gray-700 mb-2">
            {formatInlineText(itemText)}
          </li>
        )
        listIndex++
      }

      elements.push(
        <ol key={`ol-${elementKey++}`} className="list-decimal list-outside space-y-2 my-6 pl-6">
          {listItems}
        </ol>
      )

      i = listIndex
      continue
    }

    // ================================
    // REGULAR PARAGRAPHS
    // ================================
    if (line.trim() && !line.startsWith("#")) {
      elements.push(
        <p key={`p-${elementKey++}`} className="text-lg text-gray-700 leading-relaxed mb-6">
          {formatInlineText(line)}
        </p>
      )
      i++
      continue
    }

    i++
  }

  return elements
}

// ============================================
// CONVENIENCE FUNCTIONS
// ============================================

/** Parse content for legal pages (with border-left headings) */
export function parseLegalContent(content: string): JSX.Element[] {
  return parseContent(content, { variant: "legal" })
}

/** Parse content for blog posts (with plain headings) */
export function parseBlogContent(content: string): JSX.Element[] {
  return parseContent(content, { variant: "blog" })
}


