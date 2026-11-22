import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/nodejs/chapter2.md
var __pageData = JSON.parse("{\"title\":\"Node.js Chapter 2 - File System, Streams & Environment Config\",\"description\":\"Placeholder notes for `node:fs`, `node:path`, streams, and environment variables.\",\"frontmatter\":{\"title\":\"Node.js Chapter 2 - File System, Streams & Environment Config\",\"description\":\"Placeholder notes for `node:fs`, `node:path`, streams, and environment variables.\",\"prev\":{\"text\":\"Node.js Chapter 1: Runtime, Modules & Event Loop\",\"link\":\"/backend/nodejs/chapter1\"},\"next\":{\"text\":\"Node.js Chapter 3: HTTP Server, Error Handling & Sub-Topics\",\"link\":\"/backend/nodejs/chapter3\"}},\"headers\":[],\"relativePath\":\"backend/nodejs/chapter2.md\",\"filePath\":\"backend/nodejs/chapter2.md\"}");
var _sfc_main = { name: "backend/nodejs/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="node-js-chapter-2-file-system-streams-environment-config" tabindex="-1">Node.js Chapter 2: File System, Streams &amp; Environment Config <a class="header-anchor" href="#node-js-chapter-2-file-system-streams-environment-config" aria-label="Permalink to “Node.js Chapter 2: File System, Streams &amp; Environment Config”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Safe file paths with <code>node:path</code> and async file operations with <code>node:fs/promises</code></li><li>Readable/writable streams and backpressure concepts</li><li>Loading configuration with environment variables</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/nodejs/chapter2.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter2_default as default };
