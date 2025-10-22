'use client';

// Temporarily disabled due to Turbopack module resolution issue with subpath exports
// import { BuilderProvider, BuilderShell } from 'discodance/ui';

export default function BuilderPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Discodance Visual Builder</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600 mb-4">
            The visual builder is temporarily unavailable due to a module resolution issue with Next.js 16 Turbopack.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
            <p className="text-sm text-yellow-800">
              <strong>Known Issue:</strong> Turbopack in Next.js 16 has difficulties resolving subpath exports from local packages.
              The `discodance/ui` module exists and works correctly with Node.js but cannot be resolved by Turbopack.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Workarounds:</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>Use Next.js with webpack instead of Turbopack</li>
              <li>Publish discodance to npm and install from registry</li>
              <li>Wait for Turbopack updates to fix subpath export support</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
