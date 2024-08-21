import { renderToString } from 'react-dom/server';
import { App } from './components/App';
import { ResumeSchema } from './types/json-schema';

function render(resume: ResumeSchema) {
  return renderToString(<App resume={resume} />);
}

const marginValue = '0.8 cm';
const pdfRenderOptions = {
  margin: {
    top: marginValue,
    bottom: marginValue,
    left: marginValue,
    right: marginValue
  }
};

export { render, pdfRenderOptions };
