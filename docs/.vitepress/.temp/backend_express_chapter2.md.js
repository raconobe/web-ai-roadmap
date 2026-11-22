import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/express/chapter2.md
var __pageData = JSON.parse("{\"title\":\"Express Chapter 2 - Middleware, Validation & Error Handlers\",\"description\":\"Placeholder notes for `express.json()`, custom middleware, input checks, and 4-arg error middleware.\",\"frontmatter\":{\"title\":\"Express Chapter 2 - Middleware, Validation & Error Handlers\",\"description\":\"Placeholder notes for `express.json()`, custom middleware, input checks, and 4-arg error middleware.\",\"prev\":{\"text\":\"Express Chapter 1: App Setup, Routing & Request/Response\",\"link\":\"/backend/express/chapter1\"},\"next\":{\"text\":\"Express Chapter 3: REST APIs, Routers & Static Assets\",\"link\":\"/backend/express/chapter3\"}},\"headers\":[],\"relativePath\":\"backend/express/chapter2.md\",\"filePath\":\"backend/express/chapter2.md\"}");
var _sfc_main = { name: "backend/express/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="express-chapter-2-middleware-validation-error-handlers" tabindex="-1">Express Chapter 2: Middleware, Validation &amp; Error Handlers <a class="header-anchor" href="#express-chapter-2-middleware-validation-error-handlers" aria-label="Permalink to “Express Chapter 2: Middleware, Validation &amp; Error Handlers”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Built-in middleware (<code>express.json()</code>) and custom <code>next()</code> middleware</li><li>Request payload validation and consistent HTTP status codes</li><li>Centralized error-handling middleware <code>(err, req, res, next)</code></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/express/chapter2.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter2_default as default };
