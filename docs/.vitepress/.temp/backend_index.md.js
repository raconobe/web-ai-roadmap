import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/index.md
var __pageData = JSON.parse("{\"title\":\"BackEnd Roadmap\",\"description\":\"Structured 3-chapter roadmap for Node.js, Express, and PHP.\",\"frontmatter\":{\"title\":\"BackEnd Roadmap\",\"description\":\"Structured 3-chapter roadmap for Node.js, Express, and PHP.\"},\"headers\":[],\"relativePath\":\"backend/index.md\",\"filePath\":\"backend/index.md\"}");
var _sfc_main = { name: "backend/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="backend-roadmap" tabindex="-1">BackEnd Roadmap <a class="header-anchor" href="#backend-roadmap" aria-label="Permalink to “BackEnd Roadmap”">​</a></h1><p>Select a backend track below or move between lessons using the <strong>Previous</strong> and <strong>Next</strong> chapter links at the bottom of each page.</p><h2 id="_1-node-js-3-chapters" tabindex="-1">1. Node.js (3 Chapters) <a class="header-anchor" href="#_1-node-js-3-chapters" aria-label="Permalink to “1. Node.js (3 Chapters)”">​</a></h2><ul><li><a href="./nodejs/chapter1.html">Chapter 1: Runtime, Modules &amp; Event Loop</a></li><li><a href="./nodejs/chapter2.html">Chapter 2: File System, Streams &amp; Environment Config</a></li><li><a href="./nodejs/chapter3.html">Chapter 3: HTTP Server, Error Handling &amp; Sub-Topics</a></li></ul><h2 id="_2-express-3-chapters" tabindex="-1">2. Express (3 Chapters) <a class="header-anchor" href="#_2-express-3-chapters" aria-label="Permalink to “2. Express (3 Chapters)”">​</a></h2><ul><li><a href="./express/chapter1.html">Chapter 1: App Setup, Routing &amp; Request/Response</a></li><li><a href="./express/chapter2.html">Chapter 2: Middleware, Validation &amp; Error Handlers</a></li><li><a href="./express/chapter3.html">Chapter 3: REST APIs, Routers &amp; Static Assets</a></li></ul><h2 id="_3-php-3-chapters" tabindex="-1">3. PHP (3 Chapters) <a class="header-anchor" href="#_3-php-3-chapters" aria-label="Permalink to “3. PHP (3 Chapters)”">​</a></h2><ul><li><a href="./php/chapter1.html">Chapter 1: Syntax, Includes &amp; Server Basics</a></li><li><a href="./php/chapter2.html">Chapter 2: Forms, Superglobals &amp; Session State</a></li><li><a href="./php/chapter3.html">Chapter 3: PDO Databases, JSON Responses &amp; Structure</a></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var backend_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, backend_default as default };
