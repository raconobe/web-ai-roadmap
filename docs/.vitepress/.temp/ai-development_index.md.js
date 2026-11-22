import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/ai-development/index.md
var __pageData = JSON.parse("{\"title\":\"AI Development Roadmap\",\"description\":\"Initial chapter notes for AI Foundations, Applied Models, and Workflows & Agents.\",\"frontmatter\":{\"title\":\"AI Development Roadmap\",\"description\":\"Initial chapter notes for AI Foundations, Applied Models, and Workflows & Agents.\"},\"headers\":[],\"relativePath\":\"ai-development/index.md\",\"filePath\":\"ai-development/index.md\"}");
var _sfc_main = { name: "ai-development/index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai-development-roadmap" tabindex="-1">AI Development Roadmap <a class="header-anchor" href="#ai-development-roadmap" aria-label="Permalink to “AI Development Roadmap”">​</a></h1><p>Start with Chapter 1 in any track below, then use the <strong>Next</strong> chapter link at the bottom of each page as you add more chapters.</p><h2 id="_1-foundations" tabindex="-1">1. Foundations <a class="header-anchor" href="#_1-foundations" aria-label="Permalink to “1. Foundations”">​</a></h2><ul><li><a href="./foundations/chapter1.html">Chapter 1: Core Concepts, Data &amp; Evaluation</a></li></ul><h2 id="_2-applied-models" tabindex="-1">2. Applied Models <a class="header-anchor" href="#_2-applied-models" aria-label="Permalink to “2. Applied Models”">​</a></h2><ul><li><a href="./applied-models/chapter1.html">Chapter 1: Prompts, Structured Outputs &amp; Embeddings</a></li></ul><h2 id="_3-workflows-agents" tabindex="-1">3. Workflows &amp; Agents <a class="header-anchor" href="#_3-workflows-agents" aria-label="Permalink to “3. Workflows &amp; Agents”">​</a></h2><ul><li><a href="./workflows/chapter1.html">Chapter 1: Tool Calling, Retrieval &amp; Guardrails</a></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ai-development/index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var ai_development_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, ai_development_default as default };
