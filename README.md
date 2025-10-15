# Modern Portfolio Website

A stunning, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Modern, responsive design
- ⚡ Built with Next.js 15 and TypeScript
- 💅 Styled with Tailwind CSS
- 🎭 Smooth animations with Framer Motion
- 📱 Mobile-first approach
- 🌙 Dark theme
- 🎯 SEO-friendly
- 📊 Performance optimized

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Package Manager:** npm

## Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
portfolio-website/
├── app/
│   ├── globals.css       # Global styles and Tailwind imports
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page
├── components/
│   ├── Navbar.tsx        # Navigation bar with smooth scroll
│   ├── Hero.tsx          # Hero/Landing section
│   ├── About.tsx         # About section
│   ├── Skills.tsx        # Skills section with progress bars
│   ├── Experience.tsx    # Experience timeline
│   ├── Projects.tsx      # Projects showcase
│   ├── Contact.tsx       # Contact form and info
│   └── Footer.tsx        # Footer component
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies and scripts
```

## Customization

### Personal Information

Update the following components with your personal information:

1. **Hero Section** (`components/Hero.tsx`):
   - Change your name and title
   - Update the description

2. **About Section** (`components/About.tsx`):
   - Add your photo or replace the placeholder
   - Update the about text and statistics

3. **Skills Section** (`components/Skills.tsx`):
   - Modify skill categories and levels
   - Add or remove technologies

4. **Experience Section** (`components/Experience.tsx`):
   - Update with your work experience
   - Modify job titles, companies, and achievements

5. **Projects Section** (`components/Projects.tsx`):
   - Add your projects with descriptions
   - Update project images, tags, and links

6. **Contact Section** (`components/Contact.tsx`):
   - Update email, phone, and location
   - Add your social media links

### Colors and Theme

Modify the color scheme in:
- `tailwind.config.ts` - Tailwind theme configuration
- `app/globals.css` - CSS custom properties and gradients

### Animations

All animations are configured using Framer Motion. You can customize them in each component file by modifying the `motion` props and variants.

## Build for Production

To create an optimized production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Deployment

This project can be easily deployed to:

- **Vercel** (Recommended): Push to GitHub and import in Vercel
- **Netlify**: Connect your repository
- **Any hosting service** that supports Next.js

### Deploy to Vercel

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

```bash
npm install -g vercel
vercel
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - feel free to use this project for your personal portfolio!

## Credits

Built with:
- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

**Note:** Don't forget to replace all placeholder content with your actual information before deploying!
