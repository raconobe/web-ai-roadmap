import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/ai-development/applied-models/chapter1.md
var __pageData = JSON.parse("{\"title\":\"Applied Models Chapter 1 - Prompts, Structured Outputs & Embeddings\",\"description\":\"Placeholder notes for system/user instructions, JSON schemas, token limits, and vector embeddings.\",\"frontmatter\":{\"title\":\"Applied Models Chapter 1 - Prompts, Structured Outputs & Embeddings\",\"description\":\"Placeholder notes for system/user instructions, JSON schemas, token limits, and vector embeddings.\",\"prev\":{\"text\":\"AI Foundations Chapter 1: Core Concepts, Data & Evaluation\",\"link\":\"/ai-development/foundations/chapter1\"},\"next\":{\"text\":\"Workflows & Agents Chapter 1: Tool Calling, Retrieval & Guardrails\",\"link\":\"/ai-development/workflows/chapter1\"}},\"headers\":[],\"relativePath\":\"ai-development/applied-models/chapter1.md\",\"filePath\":\"ai-development/applied-models/chapter1.md\"}");
var _sfc_main = { name: "ai-development/applied-models/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="applied-models-chapter-1-prompts-structured-outputs-embeddings" tabindex="-1">Applied Models Chapter 1: Prompts, Structured Outputs &amp; Embeddings <a class="header-anchor" href="#applied-models-chapter-1-prompts-structured-outputs-embeddings" aria-label="Permalink to “Applied Models Chapter 1: Prompts, Structured Outputs &amp; Embeddings”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Clear task specifications, few-shot examples, and context budgeting</li><li>Enforcing structured JSON / schema outputs and handling invalid responses</li><li>Embeddings, similarity search, and latency/cost trade-offs</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ai-development/applied-models/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
