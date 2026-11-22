import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/html/chapter2.md
var __pageData = JSON.parse("{\"title\":\"HTML Chapter 2 - Forms, Tables & Accessibility\",\"description\":\"Placeholder notes for accessible form controls, labels, validation, and data tables.\",\"frontmatter\":{\"title\":\"HTML Chapter 2 - Forms, Tables & Accessibility\",\"description\":\"Placeholder notes for accessible form controls, labels, validation, and data tables.\",\"prev\":{\"text\":\"HTML Chapter 1: Document Structure & Semantics\",\"link\":\"/frontend/html/chapter1\"},\"next\":{\"text\":\"HTML Chapter 3: Media, SEO & Best Practices\",\"link\":\"/frontend/html/chapter3\"}},\"headers\":[],\"relativePath\":\"frontend/html/chapter2.md\",\"filePath\":\"frontend/html/chapter2.md\"}");
var _sfc_main = { name: "frontend/html/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="html-chapter-2-forms-tables-accessibility" tabindex="-1">HTML Chapter 2: Forms, Tables &amp; Accessibility <a class="header-anchor" href="#html-chapter-2-forms-tables-accessibility" aria-label="Permalink to “HTML Chapter 2: Forms, Tables &amp; Accessibility”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li><code>&lt;form&gt;</code>, <code>&lt;label&gt;</code>, <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, and <code>&lt;textarea&gt;</code></li><li>Native HTML validation attributes and accessible error messaging</li><li>Accessible data tables (<code>&lt;table&gt;</code>, <code>&lt;thead&gt;</code>, <code>&lt;tbody&gt;</code>, <code>&lt;th&gt;</code>, <code>&lt;caption&gt;</code>)</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/html/chapter2.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter2_default as default };
