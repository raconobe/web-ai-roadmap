import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/javascript/chapter2.md
var __pageData = JSON.parse("{\"title\":\"JavaScript Chapter 2 - Functions, Arrays & Objects\",\"description\":\"Placeholder notes for functions, closures, array methods, destructuring, and modules.\",\"frontmatter\":{\"title\":\"JavaScript Chapter 2 - Functions, Arrays & Objects\",\"description\":\"Placeholder notes for functions, closures, array methods, destructuring, and modules.\",\"prev\":{\"text\":\"JavaScript Chapter 1: Syntax, Types & Control Flow\",\"link\":\"/frontend/javascript/chapter1\"},\"next\":{\"text\":\"JavaScript Chapter 3: DOM Events, Fetch & Async Patterns\",\"link\":\"/frontend/javascript/chapter3\"}},\"headers\":[],\"relativePath\":\"frontend/javascript/chapter2.md\",\"filePath\":\"frontend/javascript/chapter2.md\"}");
var _sfc_main = { name: "frontend/javascript/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="javascript-chapter-2-functions-arrays-objects" tabindex="-1">JavaScript Chapter 2: Functions, Arrays &amp; Objects <a class="header-anchor" href="#javascript-chapter-2-functions-arrays-objects" aria-label="Permalink to “JavaScript Chapter 2: Functions, Arrays &amp; Objects”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Function declarations, arrow functions, scope, and closures</li><li>Array helpers (<code>map</code>, <code>filter</code>, <code>reduce</code>, <code>find</code>, <code>some</code>)</li><li>Object destructuring, spread/rest syntax, and ES modules (<code>import</code>/<code>export</code>)</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/javascript/chapter2.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter2_default as default };
