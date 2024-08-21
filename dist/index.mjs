import { jsxs, jsx } from "react/jsx-runtime";
import { renderToString } from "react-dom/server";
const App = ({ resume }) => {
  var _a, _b;
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: (_a = resume == null ? void 0 : resume.basics) == null ? void 0 : _a.name }),
    /* @__PURE__ */ jsx("h2", { children: (_b = resume == null ? void 0 : resume.basics) == null ? void 0 : _b.summary })
  ] });
};
function render(resume) {
  return renderToString(/* @__PURE__ */ jsx(App, { resume }));
}
const marginValue = "0.8 cm";
const pdfRenderOptions = {
  margin: {
    top: marginValue,
    bottom: marginValue,
    left: marginValue,
    right: marginValue
  }
};
export {
  pdfRenderOptions,
  render
};
