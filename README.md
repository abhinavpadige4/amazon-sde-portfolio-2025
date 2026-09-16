# Amazon SDE Portfolio

A modern, dark-themed portfolio website for an Amazon Software Development Engineer targeting Amazon hiring managers. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Modern Dark Theme**: Default dark theme with toggle to light mode (persists via localStorage)
- **Fully Responsive**: Optimized for mobile, tablet, and desktop views
- **Performance Optimized**: Fast loading times and good Lighthouse scores
- **Accessibility Focused**: Follows WCAG guidelines
- **SEO Optimized**: Includes metadata, Open Graph tags, and JSON-LD structured data
- **Contact Form**: Integrated with Formspree for email notifications
- **Project Showcase**: Detailed case studies of AWS and distributed systems projects
- **Skills Section**: Highlights AWS, distributed systems, and DSA expertise

## Sections

1. **Hero** - Introduction with tagline, headshot, and CTAs
2. **About** - Professional narrative linked to Amazon Leadership Principles
3. **Skills** - AWS services, distributed systems patterns, and DSA proficiency
4. **Projects** - Case studies with problem, architecture, tech stack, and metrics
5. **Experience** - Professional timeline with achievements
6. **Contact** - Formspree integration and social media links

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with dark mode support
- **Components**: Custom UI component library
- **Icons**: Lucide React
- **Forms**: Formspree integration
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abhinavpadige4/amazon-sde-portfolio-2025.git
   cd amazon-sde-portfolio-2025
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Formspree:
   - Go to [Formspree.io](https://formspree.io/)
   - Create a new form and get your Form ID
   - Replace `'your-form-id'` in `src/components/contact.tsx` with your actual Form ID

4. Add your headshot:
   - Replace `public/images/headshot.jpg` with your professional headshot
   - Recommended: 400x400px, JPG or PNG format

5. Update personal information:
   - Replace `[Your Name]` throughout the code with your actual name
   - Update social media links in the contact section
   - Update SEO metadata in `src/components/seo.tsx`

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Preview Production Build

```bash
npm run start
# or
yarn start
```

## Deployment

This project is configured for easy deployment to Vercel:

1. Push to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect it's a Next.js app and deploy it
4. Optional: Add custom domain in Vercel settings

## Environment Variables

No environment variables are required for basic functionality. 
For Formspree, you only need to update the form ID in the contact component.

## Lighthouse Performance Targets

- Performance: ≥90
- Accessibility: ≥90
- Best Practices: ≥90
- SEO: ≥90

## Project Structure

```
src/
├── app/                 # Next.js app router
├── components/          # React components
│   ├── ui/             # Reusable UI components
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About section
│   ├── skills.tsx      # Skills section
│   ├── projects.tsx    # Projects section
│   ├── experience.tsx  # Experience section
│   ├── contact.tsx     # Contact section
│   └── seo.tsx         # SEO component
├── data/               # Data files for sections
├── lib/                # Utility functions
├── styles/             # Global styles and CSS variables
└── ...
```

## Customization

### Colors
The site uses CSS variables for easy theming. Modify `src/styles/globals.css` to change the color scheme.

### Content
All content is organized in:
- `src/data/` - Text content for skills, projects, experience
- `src/components/` - Component implementations
- `public/` - Static assets (resume, headshot, etc.)

## Credits

- Icons: [Lucide React](https://lucide.dev/)
- Font: [Inter](https://rsms.me/inter/) via Next.js Google Fonts
- Form Handling: [Formspree](https://formspree.io/)
- Deployment: [Vercel](https://vercel.com/)

## License

MIT License - feel free to use this template for your own portfolio!

---
*Built for Amazon SDE positions - showcasing AWS, distributed systems, and DSA expertise*