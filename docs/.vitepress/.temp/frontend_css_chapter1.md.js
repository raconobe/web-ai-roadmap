import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/css/chapter1.md
var __pageData = JSON.parse("{\"title\":\"CSS Chapter 1 - Cascade, Specificity & Box Model\",\"description\":\"Placeholder notes for selectors, specificity rules, box-sizing, and units.\",\"frontmatter\":{\"title\":\"CSS Chapter 1 - Cascade, Specificity & Box Model\",\"description\":\"Placeholder notes for selectors, specificity rules, box-sizing, and units.\",\"prev\":{\"text\":\"HTML Chapter 3: Media, SEO & Best Practices\",\"link\":\"/frontend/html/chapter3\"},\"next\":{\"text\":\"CSS Chapter 2: Flexbox & CSS Grid Layouts\",\"link\":\"/frontend/css/chapter2\"}},\"headers\":[],\"relativePath\":\"frontend/css/chapter1.md\",\"filePath\":\"frontend/css/chapter1.md\"}");
var _sfc_main = { name: "frontend/css/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css-chapter-1-cascade-specificity-box-model" tabindex="-1">CSS Chapter 1: Cascade, Specificity &amp; Box Model <a class="header-anchor" href="#css-chapter-1-cascade-specificity-box-model" aria-label="Permalink to “CSS Chapter 1: Cascade, Specificity &amp; Box Model”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Cascade layers, inheritance, and selector specificity</li><li><code>box-sizing: border-box</code>, margins, padding, and borders</li><li>Relative units (<code>rem</code>, <code>em</code>, <code>%</code>, <code>vw</code>/<code>vh</code>, <code>clamp()</code>)</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
