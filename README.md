# Besu Electromechanical & Biomedical Solutions - Website

This is the official website codebase for Besu Solutions, built with **React**, **Vite**, and **Tailwind CSS**.

## Project Structure

```
Besu-Tech/
├── src/
│   ├── components/
│   │   ├── Home/       # Home page specific sections
│   │   ├── Layout/     # Navbar, Footer
│   │   └── UI/         # Reusable UI components (Buttons, Cards)
│   ├── pages/          # Main page views (Home, About, Services, Contact)
│   ├── App.jsx         # Main Router
│   ├── main.jsx        # Entry point
│   └── index.css       # Tailwind imports & global styles
├── public/             # Static assets
├── index.html          # HTML entry
├── package.json        # Dependencies & scripts
├── tailwind.config.js  # Tailwind configuration
└── vite.config.js      # Vite configuration
```

## Getting Started

Since this project was generated manually, you will need **Node.js** installed on your machine.

### 1. Install Dependencies
Open a terminal in this directory and run:

```bash
npm install
```

### 2. Run Development Server
To start the local development server:

```bash
npm run dev
```

The site will typically be available at `http://localhost:5173`.

### 3. Build for Production
To create a production-ready build:

```bash
npm run build
```

## Customization

- **Colors**: Edit `tailwind.config.js` to change the `primary` (#E63946) and `secondary` (#1D3557) brand colors.
- **Content**: Text content can be modified directly in the component files under `src/components` and `src/pages`.
- **Icons**: We use [Lucide React](https://lucide.dev/icons/) for all icons.
