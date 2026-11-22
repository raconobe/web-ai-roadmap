import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/backend/php/chapter3.md
var __pageData = JSON.parse("{\"title\":\"PHP Chapter 3 - PDO Databases, JSON Responses & Structure\",\"description\":\"Placeholder notes for PDO prepared statements, JSON API endpoints, and project layout.\",\"frontmatter\":{\"title\":\"PHP Chapter 3 - PDO Databases, JSON Responses & Structure\",\"description\":\"Placeholder notes for PDO prepared statements, JSON API endpoints, and project layout.\",\"prev\":{\"text\":\"PHP Chapter 2: Forms, Superglobals & Session State\",\"link\":\"/backend/php/chapter2\"},\"next\":false},\"headers\":[],\"relativePath\":\"backend/php/chapter3.md\",\"filePath\":\"backend/php/chapter3.md\"}");
var _sfc_main = { name: "backend/php/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="php-chapter-3-pdo-databases-json-responses-structure" tabindex="-1">PHP Chapter 3: PDO Databases, JSON Responses &amp; Structure <a class="header-anchor" href="#php-chapter-3-pdo-databases-json-responses-structure" aria-label="Permalink to “PHP Chapter 3: PDO Databases, JSON Responses &amp; Structure”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Connecting to databases with PDO and prepared statements (<code>prepare</code> / <code>execute</code>)</li><li>Setting <code>Content-Type: application/json</code> and returning structured API payloads</li><li>Organizing <code>public/</code>, <code>src/</code>, and configuration files cleanly</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("backend/php/chapter3.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter3_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter3_default as default };
