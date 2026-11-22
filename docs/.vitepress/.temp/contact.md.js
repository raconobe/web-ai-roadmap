import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/contact.md
var __pageData = JSON.parse("{\"title\":\"Contact\",\"description\":\"Links, repository info, and ways to connect.\",\"frontmatter\":{\"title\":\"Contact\",\"description\":\"Links, repository info, and ways to connect.\"},\"headers\":[],\"relativePath\":\"contact.md\",\"filePath\":\"contact.md\"}");
var _sfc_main = { name: "contact.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="contact" tabindex="-1">Contact <a class="header-anchor" href="#contact" aria-label="Permalink to “Contact”">​</a></h1><p>Use the links below to browse the project repository or return to any roadmap section.</p><ul><li><strong>Roadmap Home:</strong> <a href="/">Back to Home</a></li><li><strong>FrontEnd Track:</strong> <a href="/frontend/">FrontEnd Overview</a></li><li><strong>BackEnd Track:</strong> <a href="/backend/">BackEnd Overview</a></li><li><strong>Coding Languages Track:</strong> <a href="/coding-language/">Coding Languages Overview</a></li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("contact.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var contact_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, contact_default as default };
