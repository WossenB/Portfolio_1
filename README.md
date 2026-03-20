# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project showcases my skills, projects, and professional experience through an elegant and interactive user interface.

## 🚀 Features

- **Modern Design**: Clean, minimalist interface with smooth animations using Framer Motion
- **Responsive Layout**: Fully responsive design that works seamlessly on all devices
- **Dark/Light Mode**: Theme switching capability with system preference detection
- **Interactive Components**: Rich UI components built with Radix UI and shadcn/ui
- **Contact Form**: Functional contact form integrated with EmailJS
- **Project Showcase**: Dynamic project gallery with filtering and detailed views
- **Performance Optimized**: Built with Vite for fast development and production builds

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library with hooks and modern patterns
- **TypeScript** - Type-safe JavaScript development
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions

### UI Components
- **shadcn/ui** - High-quality component library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Form handling with validation
- **Zod** - Schema validation

### Development Tools
- **ESLint** - Code linting and formatting
- **Vitest** - Unit testing framework
- **PostCSS** - CSS processing
- **TypeScript** - Static type checking

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio_1
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build in development mode
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## 📁 Project Structure

```
portfolio_1/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable UI components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   ├── styles/            # Global styles and CSS
│   └── main.tsx           # Application entry point
├── dist/                  # Production build output
├── package.json           # Project dependencies and scripts
├── tailwind.config.ts     # Tailwind CSS configuration
├── vite.config.ts         # Vite configuration
└── tsconfig.json          # TypeScript configuration
```

## 🎨 Customization

### Theme Configuration
The project supports dark and light themes. Theme settings are configured in:
- `tailwind.config.ts` - Tailwind theme configuration
- Theme switching logic in components

### Styling
- Global styles are in `src/styles/globals.css`
- Component-specific styles use Tailwind classes
- Custom CSS variables for consistent theming

### Contact Form
To enable the contact form:
1. Sign up for an EmailJS account
2. Create an email service and template
3. Update the EmailJS configuration in the contact component

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

### Manual Deployment
1. Run `npm run build`
2. Upload the `dist` folder to your hosting provider
3. Ensure your server supports single-page applications (SPA routing)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

- Portfolio: [Your Portfolio URL]
- Email: [your.email@example.com]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
