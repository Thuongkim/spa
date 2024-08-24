import { X as XMarkIcon, r as resolveComponent, l as createElementBlock, t as toDisplayString, k as createCommentVNode, i as createBaseVNode, ad as Fragment, ae as renderList, j as createVNode, n as normalizeClass, o as openBlock } from "./vendor-b24fd275.js";
import { _ as _export_sfc } from "./app-7a34098f.js";
const _sfc_main = {
  components: {
    XMarkIcon
  },
  props: {
    type: {
      type: String,
      default: "success"
    },
    content: {
      type: Object,
      default() {
        return {};
      }
    },
    errors: {
      type: Object,
      default() {
        return {};
      }
    },
    containerClass: { type: String, default: "md:w-10/12" }
  },
  computed: {
    message() {
      if (this.content && this.content.message) {
        return this.content.message;
      }
      return false;
    },
    errorsList() {
      if (this.errors) {
        return this.errors;
      }
      return false;
    }
  }
};
const _hoisted_1 = {
  key: 0,
  class: "block w-full text-center sm:inline"
};
const _hoisted_2 = {
  key: 1,
  class: "block w-full text-center sm:inline"
};
const _hoisted_3 = { class: "text-left text-sm" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["relative mx-auto flex w-full items-start rounded border border border-red-400 bg-red-400 px-4 py-3 text-white dark:border-red-600 dark:bg-red-600 md:p-2", $props.containerClass]),
    role: "alert shadow"
  }, [
    !$options.errorsList && $options.message ? (openBlock(), createElementBlock("span", _hoisted_1, toDisplayString($options.message), 1)) : createCommentVNode("", true),
    $options.errorsList ? (openBlock(), createElementBlock("div", _hoisted_2, [
      createBaseVNode("ul", _hoisted_3, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.errorsList, (error) => {
          return openBlock(), createElementBlock("li", {
            key: error.index
          }, [
            createBaseVNode("ul", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList(error, (e) => {
                return openBlock(), createElementBlock("li", {
                  key: e.index
                }, toDisplayString(e), 1);
              }), 128))
            ])
          ]);
        }), 128))
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("span", {
      class: "",
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("close"))
    }, [
      createVNode(_component_XMarkIcon, { class: "h-5 w-5 cursor-pointer font-bold" })
    ])
  ], 2);
}
const Errors = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Errors as E
};
//# sourceMappingURL=Errors-88650490.js.map
