import React from 'react';
import { createRoot } from 'react-dom/client';
import { Button } from "./components/ui/Button"

const root = createRoot(document.body);
root.render(
  <div className="p-10">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Delete</Button>
  </div>
);