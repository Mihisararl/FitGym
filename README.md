# 💪 FitGym

Modern, responsive gym website built with Next.js, TypeScript, and Tailwind CSS.

<img src="./public/images/banner.png" width="600" alt="FitGym Homepage">

## 📋 Overview

FitGym is a landing-style fitness website with reusable UI components, smooth section-based navigation, dark mode support, and a fully functional contact form powered by client and server-side validation.

## ✨ Features

### 🎯 Core Features
- ✅ **Fully Responsive** - Works seamlessly on mobile, tablet, and desktop
- 🌓 **Dark Mode** - Toggle between light and dark themes with persistence
- 🧩 **Reusable Components** - Modular architecture for easy maintenance
- ⚡ **Fast Performance** - Optimized with Next.js App Router

### 📱 Sections
- 🏠 **Hero Section** - Eye-catching introduction with CTA buttons
- 📖 **About Section** - Gym story and key statistics
- 💪 **Services Section** - Featured services with interactive cards
- 📞 **Contact Section** - Functional form with validation

### 📝 Contact Form Features
- ✅ Client-side validation with react-hook-form
- 🔄 Loading states during submission
- ✅ Success feedback on completion
- ❌ Error handling with user-friendly messages
- 📡 API endpoint for form processing

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI library |
| **TypeScript** | Type safety |
| **Tailwind CSS** | Styling |
| **React Hook Form** | Form validation |
| **Lucide React** | Icons |
| **Framer Motion** | Animations |

## 📁 Project Structure

FitGym/

├── 📁 app/

│ ├── 📄 layout.tsx # Root layout with metadata
│ ├── 📄 page.tsx # Homepage with all sections
│ ├── 📄 globals.css # Global styles

│ └── 📁 api/

│ └── 📁 contact/

│ └── 📄 route.ts # Contact form API endpoint

├── 📁 components/

│ ├── 📁 layout/ # Layout components

│ │ ├── 📄 Header.tsx
│ │ ├── 📄 Footer.tsx
│ │ └── 📄 Layout.tsx

│ ├── 📁 sections/ # Page sections

│ │ ├── 📄 Hero.tsx
│ │ ├── 📄 About.tsx
│ │ ├── 📄 Services.tsx
│ │ └── 📄 Contact.tsx

│ └── 📁 ui/ # Reusable UI components

│ ├── 📄 Button.tsx
│ ├── 📄 Card.tsx
│ ├── 📄 Input.tsx
│ └── 📄 Container.tsx

├── 📁 hooks/

│ └── 📄 useDarkMode.tsx # Dark mode custom hook

├── 📁 utils/

│ ├── 📄 cn.ts # Class name utility
│ └── 📄 validation.ts # Form validation schemas

├── 📁 public/

│ └── 📁 images/ # Static images

├── 📄 package.json
├── 📄 next.config.mjs
├── 📄 tailwind.config.ts
├── 📄 postcss.config.js
├── 📄 tsconfig.json
└── 📄 README.md


## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or newer
- npm or yarn or pnpm

### Installation

1. **Clone the repository**
 
https://github.com/Mihisararl/FitGym.gitm\gym-website

2. **Navigate to project directory**

cd FitGym

3.**Install dependencies**

npm install
# or
yarn install
# or
pnpm install

4.**Run development server**

npm run dev
# or
yarn dev
# or
pnpm dev

5.**Open your browser**

Visit http://localhost:3000

📦 **Available Scripts**
    Command	Description
npm run dev	Start development server
npm run build	Build for production
npm run start	Start production server
npm run lint	Run ESLint


📡 **API Reference**
  Contact Form Endpoint
       POST /api/contact

Request Body
json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I want to join FitGym."
}
Success Response (200)
json
{
  "success": true,
  "message": "Message sent successfully"
}
Error Response (400)
json
{
  "success": false,
  "error": "Validation failed"
}


**Validation Rules**
     Field	Rules
Name	Required, minimum 2 characters
Email	Required, valid email format
Message	Required, minimum 10 characters


🌐 **Deployment**

 Vercel 

[https://vercel.com/button](https://fit-gym-lac.vercel.app/)
