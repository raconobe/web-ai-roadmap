import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/express/chapter3.md
var __pageData = JSON.parse("{\"title\":\"Express Chapter 3 - REST APIs, Routers & Static Assets\",\"description\":\"Placeholder notes for modular `express.Router()`, JSON endpoints, and serving static files.\",\"frontmatter\":{\"title\":\"Express Chapter 3 - REST APIs, Routers & Static Assets\",\"description\":\"Placeholder notes for modular `express.Router()`, JSON endpoints, and serving static files.\",\"prev\":{\"text\":\"Express Chapter 2: Middleware, Validation & Error Handlers\",\"link\":\"/backend/express/chapter2\"},\"next\":{\"text\":\"PHP Chapter 1: Syntax, Includes & Server Basics\",\"link\":\"/backend/php/chapter1\"}},\"headers\":[],\"relativePath\":\"backend/express/chapter3.md\",\"filePath\":\"backend/express/chapter3.md\"}");
var _sfc_main = { name: "backend/express/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="express-chapter-3-rest-apis-routers-static-assets" tabindex="-1">Express Chapter 3: REST APIs, Routers &amp; Static Assets <a class="header-anchor" href="#express-chapter-3-rest-apis-routers-static-assets" aria-label="Permalink to “Express Chapter 3: REST APIs, Routers &amp; Static Assets”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Grouping routes cleanly with <code>express.Router()</code></li><li>Structuring controllers/services and returning clean JSON responses</li><li>Serving static assets and configuring CORS/security headers</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/express/chapter3.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter3_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter3_default as default };
