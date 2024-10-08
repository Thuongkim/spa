import { X as XMarkIcon, r as resolveComponent, o as openBlock, l as createElementBlock, i as createBaseVNode, t as toDisplayString, j as createVNode } from "./vendor-b24fd275.js";
import { _ as _export_sfc } from "./app-7a34098f.js";
const _sfc_main = {
  components: {
    XMarkIcon
  },
  props: {
    content: {
      type: String,
      default: "hello !"
    }
  }
};
const _hoisted_1 = {
  class: "relative mx-auto flex w-full items-start rounded border border border-green-100 bg-green-100 px-4 py-3 text-green-500 md:p-2",
  role: "alert shadow"
};
const _hoisted_2 = { class: "block w-full text-left sm:inline" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("span", _hoisted_2, toDisplayString($props.content), 1),
    createBaseVNode("span", {
      class: "",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
    }, [
      createVNode(_component_XMarkIcon, { class: "h-5 w-5 cursor-pointer font-bold" })
    ])
  ]);
}
const Success = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Success as S
};
//# sourceMappingURL=Success-6220a55d.js.map
