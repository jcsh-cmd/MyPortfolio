// ═══════════════════════════════════════════════════════════════
//  EDIT YOUR PORTFOLIO TEXT HERE — save the file to see changes
// ═══════════════════════════════════════════════════════════════

export const site = {
  name: 'PORTFOLIO',
  tagline: 'Graphic Design · Digital Content Creator',
  email: 'angjoshua0924@gmail.com',
  phone: '+63 995 391 3031',
  linkedin: 'https://www.linkedin.com/in/joshuaang',
  availability: 'Available for freelance · Miagao / Remote',
}

export const hero = {
  headline: ['Joshua Ang'],
  /** Index of headline line that gets the gradient color */
  gradientWordIndex: 0,
  subheadline:
    '3rd year IT student and media creator specializing in stunning pubmats, social layouts, and polished digital visuals—built with an eye for hierarchy and detail.',
  ctaWork: 'View My Work',
  ctaConnect: "Let's Connect",
}

export const about = {
  label: 'About Me',
  title: 'Where design meets technology',
  description:
    'I blend creative direction with technical literacy—shipping pubmats and layouts that look sharp while staying organized under deadline.',
  paragraphs: [
    "I'm a 3rd year IT student with a passion for graphic design. From school media teams to freelance pubmat work, I've learned to balance attention to detail, fast turnaround, and clear communication with clients and teammates.",
    "Whether it's a campus event poster or a branded social series, I focus on hierarchy, readability, and cohesive visuals, so every layout feels intentional, not rushed.",
  ],
}

export const portfolioSection = {
  label: 'Portfolio',
  title: 'Selected work',
  description:
    'Social content built for engagement, and graphic layouts crafted for clarity and visual impact.',
}

export const digitalContentSection = {
  title: 'Digital Content Creation',
  subtitle: 'Focus on Purpose & Engagement',
}

export const graphicDesignSection = {
  title: 'Graphic Design',
  subtitle: 'Focus on Aesthetics & Layout',
}

export type SocialContentItem = {
  id: string
  title: string
  caption: string
  engagement: string
  /** e.g. image: '/projects/social-01.jpg' */
  image?: string
}

export type GraphicDesignItem = {
  id: string
  title: string
  /** e.g. image: '/projects/design-01.jpg' */
  image?: string
}

export const socialContent: SocialContentItem[] = [
  {
    id: 'social-01',
    title: 'Event Announcement Campaign',
    caption:
      'Multi-slide announcement series for a campus foundation week—clear dates, venue, and CTA with brand-consistent typography tuned for quick scans on mobile feeds.',
    engagement: '🔥 High Student Engagement',
    // image: '/projects/social-01.jpg',
  },
  {
    id: 'social-02',
    title: 'Informational Carousel Post',
    caption:
      'Educational carousel breaking down event guidelines into digestible frames—hook slide, value bullets, and a closing reminder designed to maximize saves and shares.',
    engagement: '📈 Strong Save & Share Rate',
    // image: '/projects/social-02.jpg',
  },
]

export const graphicDesign: GraphicDesignItem[] = [
  {
    id: 'design-01',
    title: 'Official Event Poster Layout',
    // image: '/projects/design-01.jpg',
  },
  {
    id: 'design-02',
    title: 'Branded Banner Design',
    // image: '/projects/design-02.jpg',
  },
]

export const contactSection = {
  label: 'Contact',
  title: "Let's build something together",
  description:
    'Send a message below — no need to leave this page. I reply via email.',
  cta: 'Send Message',
  linkedinLabel: 'Connect on LinkedIn',
  formSuccessMessage: 'Message Sent Successfully!',
  /** Fallback if .env.local is missing — prefer VITE_WEB3FORMS_ACCESS_KEY in .env.local */
  web3formsAccessKey: 'a3e4a540-96c3-4157-8b1e-b546d65862d6',
  emailSubject: 'Portfolio Inquiry',
  emailBody:
    'Hi Joshua,\n\nI came across your portfolio and would like to connect about:\n\n[Your message here]\n\nThank you!',
  directLinksTitle: 'Or reach me directly',
}

export const skills = {
  design: ['Canva | Photoshop ', 'Graphic Design', 'Layouting', 'Visual Branding'],
  technical: [
    'HTML / CSS',
    'React',
    'TypeScript',
    'SQL',
    'Git & GitHub',
    'Figma Basics',
    'Google Workspace',
    'MS Office',
  ],
  soft: ['Attention to Detail', 'Time Management', 'Collaboration'],
} as const
