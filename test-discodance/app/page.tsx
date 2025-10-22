import Link from 'next/link';
import { Hero } from '@/components/Hero';

export default function HomePage() {
  return (
    <main>
      <Hero
        title="Discodance Demo"
        subtitle="Visual website builder for Next.js + Tailwind CSS"
      />

      <div className="max-w-4xl mx-auto py-16 px-8">
        <h2 className="text-3xl font-bold mb-6">Welcome to the Demo!</h2>

        <p className="text-lg mb-6">
          This is a working Next.js application with Discodance integrated.
        </p>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h3 className="text-xl font-semibold mb-3">Ready to build?</h3>
          <p className="mb-4">
            Click the button below to open the visual builder and start creating!
          </p>
          <Link
            href="/builder"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Open Builder
          </Link>
        </div>

        <div className="space-y-4">
          <h3 className="text-xl font-semibold">What you can do:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Drag and drop components to build pages</li>
            <li>Edit component properties in real-time</li>
            <li>Switch between mobile, tablet, and desktop views</li>
            <li>Save layouts and breakpoint configurations</li>
            <li>Scan and use your custom components</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
