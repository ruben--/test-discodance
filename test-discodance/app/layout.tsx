import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Discodance Demo',
  description: 'Testing the Discodance visual builder',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
