import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/nodejs/chapter1.md
var __pageData = JSON.parse("{\"title\":\"Node.js Chapter 1 - Runtime, Modules & Event Loop\",\"description\":\"Placeholder notes for Node runtime execution, ES/CommonJS modules, and event loop phases.\",\"frontmatter\":{\"title\":\"Node.js Chapter 1 - Runtime, Modules & Event Loop\",\"description\":\"Placeholder notes for Node runtime execution, ES/CommonJS modules, and event loop phases.\",\"next\":{\"text\":\"Node.js Chap  ter 2: File System, Streams & Environment Config\",\"link\":\"/backend/nodejs/chapter2\"}},\"headers\":[],\"relativePath\":\"backend/nodejs/chapter1.md\",\"filePath\":\"backend/nodejs/chapter1.md\"}");
var _sfc_main = { name: "backend/nodejs/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="node-js-chapter-1-runtime-modules-event-loop" tabindex="-1">Node.js Chapter 1: Runtime, Modules &amp; Event Loop <a class="header-anchor" href="#node-js-chapter-1-runtime-modules-event-loop" aria-label="Permalink to “Node.js Chapter 1: Runtime, Modules &amp; Event Loop”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Running scripts with <code>node</code> and <code>package.json</code> scripts</li><li>ES modules (<code>import</code>/<code>export</code>) vs. CommonJS (<code>require</code>/<code>module.exports</code>)</li><li>Non-blocking I/O and event loop basics</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/nodejs/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
