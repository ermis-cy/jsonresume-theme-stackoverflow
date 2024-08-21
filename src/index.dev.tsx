import { createRoot } from 'react-dom/client';
import { App } from './components/App';
import json from '../resume.json';
import { ResumeSchema } from './types/json-schema';

const resume = json as unknown as ResumeSchema;
const domNode = document.getElementById('app');

if (!domNode) {
  throw new Error('No element with id "app" found in the DOM');
}

const root = createRoot(domNode);

root.render(<App resume={resume} />);
