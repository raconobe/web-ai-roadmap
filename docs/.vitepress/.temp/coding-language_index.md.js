import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/coding-language/index.md
var __pageData = JSON.parse("{\"title\":\"Coding Language Roadmap\",\"description\":\"Initial chapter notes for Python, TypeScript, and C / C++.\",\"frontmatter\":{\"title\":\"Coding Language Roadmap\",\"description\":\"Initial chapter notes for Python, TypeScript, and C / C++.\"},\"headers\":[],\"relativePath\":\"coding-language/index.md\",\"filePath\":\"coding-language/index.md\"}");
var _sfc_main = { name: "coding-language/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="coding-language-roadmap" tabindex="-1">Coding Language Roadmap <a class="header-anchor" href="#coding-language-roadmap" aria-label="Permalink to “Coding Language Roadmap”">​</a></h1><p>Start with Chapter 1 in any language track below, then use the <strong>Next</strong> chapter link at the bottom of each page as you expand each topic.</p><h2 id="_1-python" tabindex="-1">1. Python <a class="header-anchor" href="#_1-python" aria-label="Permalink to “1. Python”">​</a></h2><ul><li><a href="./python/chapter1.html">Chapter 1: Syntax, Data Structures &amp; Functions</a></li></ul><h2 id="_2-typescript" tabindex="-1">2. TypeScript <a class="header-anchor" href="#_2-typescript" aria-label="Permalink to “2. TypeScript”">​</a></h2><ul><li><a href="./typescript/chapter1.html">Chapter 1: Static Types, Interfaces &amp; Narrowing</a></li></ul><h2 id="_3-c-c" tabindex="-1">3. C / C++ <a class="header-anchor" href="#_3-c-c" aria-label="Permalink to “3. C / C++”">​</a></h2><ul><li><a href="./cpp/chapter1.html">Chapter 1: Compilation, Pointers &amp; Memory Model</a></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("coding-language/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var coding_language_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, coding_language_default as default };
