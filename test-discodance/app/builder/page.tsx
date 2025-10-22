'use client';

import { BuilderProvider, BuilderShell } from 'discodance/ui';

export default function BuilderPage() {
  return (
    <BuilderProvider>
      <BuilderShell />
    </BuilderProvider>
  );
}
