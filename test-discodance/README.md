# Discodance Demo App

This is a demo Next.js application showcasing [Discodance](https://github.com/ruben--/discodance), a visual website builder for Next.js + Tailwind CSS.

## Features

- Visual drag-and-drop builder interface
- Real-time component editing
- Responsive breakpoint switching (mobile, tablet, desktop)
- Automatic component scanning
- JSON-based content persistence
- Sample components included (Hero, CTA, Features)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone both repositories:
```bash
# Clone the Discodance package
git clone https://github.com/ruben--/discodance.git
cd discodance
npm install
npm run build
cd ..

# Clone this demo app
git clone https://github.com/ruben--/test-discodance.git
cd test-discodance
```

2. Install dependencies:
```bash
npm install
```

3. Install Discodance from the local directory:
```bash
npm install ../discodance
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage

### Homepage
Visit the homepage at `/` to see a demo landing page with the Hero component.

### Visual Builder
Access the visual builder at `/builder` to:
- Drag and drop components onto the canvas
- Edit component properties in real-time
- Switch between breakpoints (mobile, tablet, desktop)
- Save your layout (persists to `content/` directory)

## Project Structure

```
test-discodance/
├── app/
│   ├── api/
│   │   └── discodance/
│   │       └── [...path]/
│   │           └── route.ts        # API routes for Discodance
│   ├── builder/
│   │   └── page.tsx                # Builder UI page
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Homepage
│   └── globals.css                 # Global styles
├── components/
│   ├── Hero.tsx                    # Hero component
│   ├── CTA.tsx                     # Call-to-action component
│   └── Features.tsx                # Features grid component
├── discodance.config.js            # Discodance configuration
└── tailwind.config.ts              # Tailwind CSS configuration
```

## Configuration

Edit `discodance.config.js` to customize:

```javascript
module.exports = {
  projectName: 'Your Project Name',
  componentPaths: ['components'],     // Where to scan for components
  contentPath: 'content',             // Where to save content JSON
  defaultLocale: 'en',
  supportedLocales: ['en'],
};
```

## Adding Components

1. Create a new component in the `components/` directory:

```tsx
export function MyComponent({ title }: { title: string }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl">{title}</h2>
    </div>
  );
}
```

2. The builder will automatically scan and make it available in the component library.

## API Endpoints

The Discodance API is available at `/api/discodance/[...path]` and provides:

- `POST /api/discodance/bootstrap` - Initialize builder with components and config
- `POST /api/discodance/save-layout` - Save page layout
- `POST /api/discodance/save-breakpoint` - Save breakpoint configuration
- `POST /api/discodance/refresh-components` - Rescan components

## Learn More

- [Discodance Repository](https://github.com/ruben--/discodance)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

MIT
