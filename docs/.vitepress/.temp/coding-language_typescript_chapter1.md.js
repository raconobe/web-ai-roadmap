import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/coding-language/typescript/chapter1.md
var __pageData = JSON.parse("{\"title\":\"TypeScript Chapter 1 - Static Types, Interfaces & Narrowing\",\"description\":\"Placeholder notes for primitives, type aliases, interfaces, unions, and narrowing.\",\"frontmatter\":{\"title\":\"TypeScript Chapter 1 - Static Types, Interfaces & Narrowing\",\"description\":\"Placeholder notes for primitives, type aliases, interfaces, unions, and narrowing.\",\"prev\":{\"text\":\"Python Chapter 1: Syntax, Data Structures & Functions\",\"link\":\"/coding-language/python/chapter1\"},\"next\":{\"text\":\"C / C++ Chapter 1: Compilation, Pointers & Memory Model\",\"link\":\"/coding-language/cpp/chapter1\"}},\"headers\":[],\"relativePath\":\"coding-language/typescript/chapter1.md\",\"filePath\":\"coding-language/typescript/chapter1.md\"}");
var _sfc_main = { name: "coding-language/typescript/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="typescript-chapter-1-static-types-interfaces-narrowing" tabindex="-1">TypeScript Chapter 1: Static Types, Interfaces &amp; Narrowing <a class="header-anchor" href="#typescript-chapter-1-static-types-interfaces-narrowing" aria-label="Permalink to “TypeScript Chapter 1: Static Types, Interfaces &amp; Narrowing”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Primitive types, arrays, tuples, <code>unknown</code> vs. <code>any</code>, and strict compiler options</li><li>Object types, <code>interface</code> vs. <code>type</code>, and union/intersection types</li><li>Type guards and control-flow narrowing</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("coding-language/typescript/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
