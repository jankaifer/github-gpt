import React from 'react';
import { createRoot } from 'react-dom/client';

const Root = () => {
  return <h1>Test</h1>;
};

const main = () => {
  const container = document.getElementsByTagName('body')[0]!;
  const rootElem = document.createElement('div');
  rootElem.style.display = 'none';
  container.appendChild(rootElem);
  const root = createRoot(rootElem);
  root.render(<Root />);
};

main();
