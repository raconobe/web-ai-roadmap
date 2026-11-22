import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/ai-development/foundations/chapter1.md
var __pageData = JSON.parse("{\"title\":\"AI Foundations Chapter 1 - Core Concepts, Data & Evaluation\",\"description\":\"Placeholder notes for problem framing, datasets, training/inference basics, and evaluation metrics.\",\"frontmatter\":{\"title\":\"AI Foundations Chapter 1 - Core Concepts, Data & Evaluation\",\"description\":\"Placeholder notes for problem framing, datasets, training/inference basics, and evaluation metrics.\",\"next\":{\"text\":\"Applied Models Chapter 1: Prompts, Structured Outputs & Embeddings\",\"link\":\"/ai-development/applied-models/chapter1\"}},\"headers\":[],\"relativePath\":\"ai-development/foundations/chapter1.md\",\"filePath\":\"ai-development/foundations/chapter1.md\"}");
var _sfc_main = { name: "ai-development/foundations/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="ai-foundations-chapter-1-core-concepts-data-evaluation" tabindex="-1">AI Foundations Chapter 1: Core Concepts, Data &amp; Evaluation <a class="header-anchor" href="#ai-foundations-chapter-1-core-concepts-data-evaluation" aria-label="Permalink to “AI Foundations Chapter 1: Core Concepts, Data &amp; Evaluation”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Framing tasks (classification, regression, ranking, generation, retrieval)</li><li>Data quality, train/validation/test splits, and leakage checks</li><li>Evaluation metrics, baselines, and error analysis</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ai-development/foundations/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
