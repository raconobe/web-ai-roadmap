import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/about.md
var __pageData = JSON.parse("{\"title\":\"About\",\"description\":\"Purpose, structure, and study workflow behind the Web & AI Roadmap.\",\"frontmatter\":{\"title\":\"About\",\"description\":\"Purpose, structure, and study workflow behind the Web & AI Roadmap.\"},\"headers\":[],\"relativePath\":\"about.md\",\"filePath\":\"about.md\"}");
var _sfc_main = { name: "about.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="about-web-ai-roadmap" tabindex="-1">About Web &amp; AI Roadmap <a class="header-anchor" href="#about-web-ai-roadmap" aria-label="Permalink to “About Web &amp; AI Roadmap”">​</a></h1><p>This site organizes core engineering notes into lightweight, easy-to-maintain Markdown files across <strong>FrontEnd</strong>, <strong>BackEnd</strong>, <strong>Coding Languages</strong>, and <strong>AI Development</strong>.</p><h2 id="how-it-is-organized" tabindex="-1">How It Is Organized <a class="header-anchor" href="#how-it-is-organized" aria-label="Permalink to “How It Is Organized”">​</a></h2><ul><li><strong>Top Navigation Bar:</strong> Quick access to each roadmap area, hub overview, and standalone pages.</li><li><strong>Per-Folder Sidebars:</strong> Focused navigation inside each subject area so menus stay concise.</li><li><strong>Chapter-to-Chapter Flow:</strong> Bottom <strong>Previous</strong> and <strong>Next</strong> links guide step-by-step progression.</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("about.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var about_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, about_default as default };
