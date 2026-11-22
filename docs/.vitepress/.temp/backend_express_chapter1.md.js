import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/express/chapter1.md
var __pageData = JSON.parse("{\"title\":\"Express Chapter 1 - App Setup, Routing & Request/Response\",\"description\":\"Placeholder notes for Express initialization, HTTP methods, route params, and responses.\",\"frontmatter\":{\"title\":\"Express Chapter 1 - App Setup, Routing & Request/Response\",\"description\":\"Placeholder notes for Express initialization, HTTP methods, route params, and responses.\",\"prev\":{\"text\":\"Node.js Chapter 3: HTTP Server, Error Handling & Sub-Topics\",\"link\":\"/backend/nodejs/chapter3\"},\"next\":{\"text\":\"Express Chapter 2: Middleware, Validation & Error Handlers\",\"link\":\"/backend/express/chapter2\"}},\"headers\":[],\"relativePath\":\"backend/express/chapter1.md\",\"filePath\":\"backend/express/chapter1.md\"}");
var _sfc_main = { name: "backend/express/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="express-chapter-1-app-setup-routing-request-response" tabindex="-1">Express Chapter 1: App Setup, Routing &amp; Request/Response <a class="header-anchor" href="#express-chapter-1-app-setup-routing-request-response" aria-label="Permalink to “Express Chapter 1: App Setup, Routing &amp; Request/Response”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Initializing an Express app and listening on a configurable port</li><li><code>GET</code>, <code>POST</code>, <code>PUT</code>/<code>PATCH</code>, and <code>DELETE</code> route handlers</li><li>Reading <code>req.params</code>, <code>req.query</code>, and <code>req.body</code></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/express/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
