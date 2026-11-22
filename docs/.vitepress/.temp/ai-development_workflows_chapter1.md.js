import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/ai-development/workflows/chapter1.md
var __pageData = JSON.parse("{\"title\":\"Workflows & Agents Chapter 1 - Tool Calling, Retrieval & Guardrails\",\"description\":\"Placeholder notes for deterministic pipelines vs. tool use, RAG retrieval, and fallbacks.\",\"frontmatter\":{\"title\":\"Workflows & Agents Chapter 1 - Tool Calling, Retrieval & Guardrails\",\"description\":\"Placeholder notes for deterministic pipelines vs. tool use, RAG retrieval, and fallbacks.\",\"prev\":{\"text\":\"Applied Models Chapter 1: Prompts, Structured Outputs & Embeddings\",\"link\":\"/ai-development/applied-models/chapter1\"},\"next\":false},\"headers\":[],\"relativePath\":\"ai-development/workflows/chapter1.md\",\"filePath\":\"ai-development/workflows/chapter1.md\"}");
var _sfc_main = { name: "ai-development/workflows/chapter1.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="workflows-agents-chapter-1-tool-calling-retrieval-guardrails" tabindex="-1">Workflows &amp; Agents Chapter 1: Tool Calling, Retrieval &amp; Guardrails <a class="header-anchor" href="#workflows-agents-chapter-1-tool-calling-retrieval-guardrails" aria-label="Permalink to “Workflows &amp; Agents Chapter 1: Tool Calling, Retrieval &amp; Guardrails”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Combining deterministic code steps with model tool/function calls</li><li>Chunking, indexing, and grounding answers in retrieved sources</li><li>Timeouts, retries, human-in-the-loop checkpoints, and observability</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("ai-development/workflows/chapter1.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter1_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter1_default as default };
