import {
  digitalContentSection,
  graphicDesign,
  graphicDesignSection,
  portfolioSection,
  socialContent,
} from '../../data/content'
import { GraphicDesignCard } from '../portfolio/GraphicDesignCard'
import { PortfolioBlockHeading } from '../portfolio/PortfolioBlockHeading'
import { SocialContentCard } from '../portfolio/SocialContentCard'
import { SectionHeading } from '../ui/SectionHeading'

export function Portfolio() {
  return (
    <section id="work" className="px-4 py-24 sm:px-6 md:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label={portfolioSection.label}
          title={portfolioSection.title}
          description={portfolioSection.description}
        />

        <div className="mb-20 md:mb-28">
          <PortfolioBlockHeading
            title={digitalContentSection.title}
            subtitle={digitalContentSection.subtitle}
          />
          <div className="flex flex-col gap-6 lg:gap-8">
            {socialContent.map((item, index) => (
              <SocialContentCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>

        <div
          className="mb-20 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent md:mb-28"
          aria-hidden
        />

        <div>
          <PortfolioBlockHeading
            title={graphicDesignSection.title}
            subtitle={graphicDesignSection.subtitle}
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
            {graphicDesign.map((item, index) => (
              <GraphicDesignCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
