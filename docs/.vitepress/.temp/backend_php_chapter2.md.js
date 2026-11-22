import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/php/chapter2.md
var __pageData = JSON.parse("{\"title\":\"PHP Chapter 2 - Forms, Superglobals & Session State\",\"description\":\"Placeholder notes for `$_GET`, `$_POST`, server-side validation, redirects, and sessions.\",\"frontmatter\":{\"title\":\"PHP Chapter 2 - Forms, Superglobals & Session State\",\"description\":\"Placeholder notes for `$_GET`, `$_POST`, server-side validation, redirects, and sessions.\",\"prev\":{\"text\":\"PHP Chapter 1: Syntax, Includes & Server Basics\",\"link\":\"/backend/php/chapter1\"},\"next\":{\"text\":\"PHP Chapter 3: PDO Databases, JSON Responses & Structure\",\"link\":\"/backend/php/chapter3\"}},\"headers\":[],\"relativePath\":\"backend/php/chapter2.md\",\"filePath\":\"backend/php/chapter2.md\"}");
var _sfc_main = { name: "backend/php/chapter2.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="php-chapter-2-forms-superglobals-session-state" tabindex="-1">PHP Chapter 2: Forms, Superglobals &amp; Session State <a class="header-anchor" href="#php-chapter-2-forms-superglobals-session-state" aria-label="Permalink to “PHP Chapter 2: Forms, Superglobals &amp; Session State”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Handling <code>\$_POST</code> form submissions, sanitization, and <code>htmlspecialchars()</code> output escaping</li><li>Post/Redirect/Get (<code>header(&#39;Location: ...&#39;)</code>) and flash messages</li><li>Starting and managing sessions (<code>session_start()</code>, <code>\$_SESSION</code>)</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/php/chapter2.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter2_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter2_default as default };
