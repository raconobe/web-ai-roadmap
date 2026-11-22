import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/html/chapter1.md
var __pageData = JSON.parse("{\"title\":\"HTML Chapter 1 - Document Structure & Semantics\",\"description\":\"Placeholder notes for HTML5 boilerplate, landmarks, and semantic tags.\",\"frontmatter\":{\"title\":\"HTML Chapter 1 - Document Structure & Semantics\",\"description\":\"Placeholder notes for HTML5 boilerplate, landmarks, and semantic tags.\",\"next\":{\"text\":\"HTML Chapter 2: Forms, Tables & Accessibility\",\"link\":\"/frontend/html/chapter2\"}},\"headers\":[],\"relativePath\":\"frontend/html/chapter1.md\",\"filePath\":\"frontend/html/chapter1.md\"}");
var _sfc_main = { name: "frontend/html/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="html-chapter-1-document-structure-semantics" tabindex="-1">HTML Chapter 1: Document Structure &amp; Semantics <a class="header-anchor" href="#html-chapter-1-document-structure-semantics" aria-label="Permalink to “HTML Chapter 1: Document Structure &amp; Semantics”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>HTML5 <code>&lt;!DOCTYPE html&gt;</code> and <code>&lt;head&gt;</code> metadata</li><li>Semantic landmarks (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, <code>&lt;footer&gt;</code>)</li><li>Headings hierarchy and readable document structure</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/html/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
