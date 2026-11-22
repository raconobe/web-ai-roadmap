import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/php/chapter1.md
var __pageData = JSON.parse("{\"title\":\"PHP Chapter 1 - Syntax, Includes & Server Basics\",\"description\":\"Placeholder notes for PHP tags, types, functions, and modular file includes.\",\"frontmatter\":{\"title\":\"PHP Chapter 1 - Syntax, Includes & Server Basics\",\"description\":\"Placeholder notes for PHP tags, types, functions, and modular file includes.\",\"prev\":{\"text\":\"Express Chapter 3: REST APIs, Routers & Static Assets\",\"link\":\"/backend/express/chapter3\"},\"next\":{\"text\":\"PHP Chapter 2: Forms, Superglobals & Session State\",\"link\":\"/backend/php/chapter2\"}},\"headers\":[],\"relativePath\":\"backend/php/chapter1.md\",\"filePath\":\"backend/php/chapter1.md\"}");
var _sfc_main = { name: "backend/php/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="php-chapter-1-syntax-includes-server-basics" tabindex="-1">PHP Chapter 1: Syntax, Includes &amp; Server Basics <a class="header-anchor" href="#php-chapter-1-syntax-includes-server-basics" aria-label="Permalink to “PHP Chapter 1: Syntax, Includes &amp; Server Basics”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Strict types (<code>declare(strict_types=1);</code>), variables, arrays, and functions</li><li>Splitting shared headers, footers, and helpers with <code>require_once</code></li><li>Running local PHP development servers and checking error logs</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/php/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
