# Sun Mart - eCommerce Platform

## Live URL
[Sun Mart Live on Vercel](https://sun-mart-example.vercel.app/) *(Placeholder)*

## Purpose
Sun Mart is a modern summer eCommerce platform where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare, and beach accessories. The project demonstrates a sleek, premium frontend UI built with Next.js App Router, combining responsive design, dynamic animations, and intuitive mocked authentication flows.

## Key Features
- **Modern Next.js 16 App Router**: Optimized routing and component rendering.
- **Premium UI/UX Design**: Built with Tailwind CSS v4 and DaisyUI for a beautiful, summer-themed aesthetic.
- **Dynamic Animations**: Integrated `animate.css` for engaging scroll and load animations.
- **Responsive Layout**: Fully responsive across mobile, tablet, and desktop viewports.
- **Mock Authentication Flow**: Visual implementation of authentication (login/register) and protected routes using context.
- **Profile Management**: Profile viewing and updating interface styled referencing BetterAuth concepts.
- **Static Data Integration**: Rendering products dynamically from structured JSON data.

## NPM Packages Used
- `next` (v16.2.4) - React framework
- `react` / `react-dom` (v19.2.4) - UI library
- `tailwindcss` (v4) - Utility-first CSS framework
- `daisyui` (@beta) - Tailwind CSS component library
- `animate.css` - Ready-to-use CSS animations
- `lucide-react` - Beautiful & consistent icons
- `better-auth` - (Conceptual integration for authentication structure)

## Setup Instructions
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Ensure `.env.local` is present with required dummy environment variables:
   ```env
   BETTER_AUTH_SECRET=your_secret
   BETTER_AUTH_URL=http://localhost:3000
   ```
4. Run `npm run dev` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) in your browser.
