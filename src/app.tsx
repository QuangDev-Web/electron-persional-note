import React from 'react';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.body);
root.render(
    <div className="h-screen flex items-center justify-center bg-gray-900 text-white">
      <h1 className="text-4xl font-bold">Hello Electron + Tailwind 3 🚀</h1>
    </div>
);