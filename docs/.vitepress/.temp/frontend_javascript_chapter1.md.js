import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/javascript/chapter1.md
var __pageData = JSON.parse("{\"title\":\"JavaScript Chapter 1 - Syntax, Types & Control Flow\",\"description\":\"Placeholder notes for variables, primitive vs. reference types, operators, and loops.\",\"frontmatter\":{\"title\":\"JavaScript Chapter 1 - Syntax, Types & Control Flow\",\"description\":\"Placeholder notes for variables, primitive vs. reference types, operators, and loops.\",\"prev\":{\"text\":\"CSS Chapter 3: Responsive Design, Variables & Animations\",\"link\":\"/frontend/css/chapter3\"},\"next\":{\"text\":\"JavaScript Chapter 2: Functions, Arrays & Objects\",\"link\":\"/frontend/javascript/chapter2\"}},\"headers\":[],\"relativePath\":\"frontend/javascript/chapter1.md\",\"filePath\":\"frontend/javascript/chapter1.md\"}");
var _sfc_main = { name: "frontend/javascript/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="javascript-chapter-1-syntax-types-control-flow" tabindex="-1">JavaScript Chapter 1: Syntax, Types &amp; Control Flow <a class="header-anchor" href="#javascript-chapter-1-syntax-types-control-flow" aria-label="Permalink to “JavaScript Chapter 1: Syntax, Types &amp; Control Flow”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li><code>const</code> and <code>let</code>, strict equality (<code>===</code>), and truthy/falsy values</li><li>Primitive types vs. object/array references</li><li>Conditionals, <code>switch</code>, and loops (<code>for</code>, <code>for...of</code>, <code>while</code>)</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
