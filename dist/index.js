(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("react/jsx-runtime"), require("react-dom/server")) : typeof define === "function" && define.amd ? define(["exports", "react/jsx-runtime", "react-dom/server"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.JsonResume = {}, global.jsxRuntime, global.server));
})(this, function(exports2, jsxRuntime, server) {
  "use strict";
  const App = ({ resume }) => {
    var _a, _b;
    return /* @__PURE__ */ jsxRuntime.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntime.jsx("h1", { children: (_a = resume == null ? void 0 : resume.basics) == null ? void 0 : _a.name }),
      /* @__PURE__ */ jsxRuntime.jsx("h2", { children: (_b = resume == null ? void 0 : resume.basics) == null ? void 0 : _b.summary })
    ] });
  };
  function render(resume) {
    return server.renderToString(/* @__PURE__ */ jsxRuntime.jsx(App, { resume }));
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
  exports2.pdfRenderOptions = pdfRenderOptions;
  exports2.render = render;
  Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
});
