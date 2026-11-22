import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/css/chapter2.md
var __pageData = JSON.parse("{\"title\":\"CSS Chapter 2 - Flexbox & CSS Grid Layouts\",\"description\":\"Placeholder notes for one-dimensional Flexbox alignment and two-dimensional CSS Grid.\",\"frontmatter\":{\"title\":\"CSS Chapter 2 - Flexbox & CSS Grid Layouts\",\"description\":\"Placeholder notes for one-dimensional Flexbox alignment and two-dimensional CSS Grid.\",\"prev\":{\"text\":\"CSS Chapter 1: Cascade, Specificity & Box Model\",\"link\":\"/frontend/css/chapter1\"},\"next\":{\"text\":\"CSS Chapter 3: Responsive Design, Variables & Animations\",\"link\":\"/frontend/css/chapter3\"}},\"headers\":[],\"relativePath\":\"frontend/css/chapter2.md\",\"filePath\":\"frontend/css/chapter2.md\"}");
var _sfc_main = { name: "frontend/css/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css-chapter-2-flexbox-css-grid-layouts" tabindex="-1">CSS Chapter 2: Flexbox &amp; CSS Grid Layouts <a class="header-anchor" href="#css-chapter-2-flexbox-css-grid-layouts" aria-label="Permalink to “CSS Chapter 2: Flexbox &amp; CSS Grid Layouts”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Flexbox axes, alignment, wrapping, and component spacing</li><li>CSS Grid tracks, <code>fr</code> units, <code>minmax()</code>, grid areas, and <code>gap</code></li><li>Choosing between Flexbox and Grid for page vs. component layout</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/chapter2.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter2_default as default };
