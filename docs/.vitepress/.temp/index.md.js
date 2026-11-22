import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/index.md
var __pageData = JSON.parse("{\"title\":\"\",\"description\":\"\",\"frontmatter\":{\"layout\":\"home\",\"hero\":{\"name\":\"Web & AI Roadmap\",\"text\":\"Full-Stack, Languages & AI\",\"tagline\":\"Easy-to-maintain study notes and structured 3-chapter guides across Frontend, Backend, Coding Languages, and AI Development.\",\"image\":{\"src\":\"/logo.svg\",\"alt\":\"Web & AI Roadmap Logo\"},\"actions\":[{\"theme\":\"brand\",\"text\":\"Explore FrontEnd\",\"link\":\"/frontend/\"},{\"theme\":\"alt\",\"text\":\"Explore BackEnd\",\"link\":\"/backend/\"},{\"theme\":\"alt\",\"text\":\"AI Development\",\"link\":\"/ai-development/\"}]},\"features\":[{\"icon\":\"🖥️\",\"title\":\"FrontEnd Roadmap\",\"details\":\"Structured 3-chapter tracks covering HTML structure, CSS layout and styling, and client-side JavaScript fundamentals.\",\"link\":\"/frontend/\",\"linkText\":\"Open FrontEnd\"},{\"icon\":\"⚙️\",\"title\":\"BackEnd Roadmap\",\"details\":\"Practical 3-chapter guides for Node.js runtime basics, Express routing and APIs, and server-side PHP development.\",\"link\":\"/backend/\",\"linkText\":\"Open BackEnd\"},{\"icon\":\"🧩\",\"title\":\"Coding Languages\",\"details\":\"Focused 3-chapter notes comparing core programming languages, syntax patterns, types, and problem-solving workflows.\",\"link\":\"/coding-language/\",\"linkText\":\"Open Languages\"},{\"icon\":\"🤖\",\"title\":\"AI Development\",\"details\":\"Step-by-step 3-chapter modules covering core AI concepts, practical model integration, and structured engineering workflows.\",\"link\":\"/ai-development/\",\"linkText\":\"Open AI Development\"}]},\"headers\":[],\"relativePath\":\"index.md\",\"filePath\":\"index.md\"}");
var _sfc_main = { name: "index.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("index.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var src_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, src_default as default };
