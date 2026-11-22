import { t as _plugin_vue_export_helper_default } from "./plugin-vue_export-helper.DjkACiAr.js";
import { useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
// docs/src/frontend/css/chapter3.md
var __pageData = JSON.parse("{\"title\":\"CSS Chapter 3 - Responsive Design, Variables & Animations\",\"description\":\"Placeholder notes for media/container queries, custom properties, and transitions.\",\"frontmatter\":{\"title\":\"CSS Chapter 3 - Responsive Design, Variables & Animations\",\"description\":\"Placeholder notes for media/container queries, custom properties, and transitions.\",\"prev\":{\"text\":\"CSS Chapter 2: Flexbox & CSS Grid Layouts\",\"link\":\"/frontend/css/chapter2\"},\"next\":{\"text\":\"JavaScript Chapter 1: Syntax, Types & Control Flow\",\"link\":\"/frontend/javascript/chapter1\"}},\"headers\":[],\"relativePath\":\"frontend/css/chapter3.md\",\"filePath\":\"frontend/css/chapter3.md\"}");
var _sfc_main = { name: "frontend/css/chapter3.md" };
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
	_push(`<div${ssrRenderAttrs(_attrs)}><h1 id="css-chapter-3-responsive-design-variables-animations" tabindex="-1">CSS Chapter 3: Responsive Design, Variables &amp; Animations <a class="header-anchor" href="#css-chapter-3-responsive-design-variables-animations" aria-label="Permalink to “CSS Chapter 3: Responsive Design, Variables &amp; Animations”">​</a></h1><blockquote><p><strong>Placeholder chapter</strong> — Replace this outline with your study notes, code snippets, and exercises.</p></blockquote><h2 id="planned-topics" tabindex="-1">Planned Topics <a class="header-anchor" href="#planned-topics" aria-label="Permalink to “Planned Topics”">​</a></h2><ul><li>Mobile-first breakpoints, media queries, and container queries</li><li>CSS custom properties (<code>--var</code>) and light/dark theme tokens</li><li>Transitions, transforms, and keyframe animations</li></ul></div>`);
}
var _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
	const ssrContext = useSSRContext();
	(ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("frontend/css/chapter3.md");
	return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var chapter3_default = /*#__PURE__*/ _plugin_vue_export_helper_default(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export { __pageData, chapter3_default as default };
