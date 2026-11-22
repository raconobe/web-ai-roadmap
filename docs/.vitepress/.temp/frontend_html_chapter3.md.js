import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/html/chapter3.md
var __pageData = JSON.parse("{\"title\":\"HTML Chapter 3 - Media, SEO & Best Practices\",\"description\":\"Placeholder notes for images, responsive media, meta tags, and semantic quality checks.\",\"frontmatter\":{\"title\":\"HTML Chapter 3 - Media, SEO & Best Practices\",\"description\":\"Placeholder notes for images, responsive media, meta tags, and semantic quality checks.\",\"prev\":{\"text\":\"HTML Chapter 2: Forms, Tables & Accessibility\",\"link\":\"/frontend/html/chapter2\"},\"next\":{\"text\":\"CSS Chapter 1: Cascade, Specificity & Box Model\",\"link\":\"/frontend/css/chapter1\"}},\"headers\":[],\"relativePath\":\"frontend/html/chapter3.md\",\"filePath\":\"frontend/html/chapter3.md\"}");
var _sfc_main = { name: "frontend/html/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="html-chapter-3-media-seo-best-practices" tabindex="-1">HTML Chapter 3: Media, SEO &amp; Best Practices <a class="header-anchor" href="#html-chapter-3-media-seo-best-practices" aria-label="Permalink to “HTML Chapter 3: Media, SEO &amp; Best Practices”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li><code>&lt;img&gt;</code>, <code>alt</code> text, <code>&lt;picture&gt;</code>, and <code>&lt;source&gt;</code> for responsive assets</li><li><code>&lt;video&gt;</code>, <code>&lt;audio&gt;</code>, and <code>&lt;iframe&gt;</code> embedding rules</li><li>Meta tags, Open Graph basics, and HTML validation checklist</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/html/chapter3.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter3_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter3_default as default };
