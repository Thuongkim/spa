import { az as ChevronRightIcon, m as mapGetters, e as mapActions, L as axios, r as resolveComponent, f as resolveDirective, o as openBlock, l as createElementBlock, i as createBaseVNode, g as createBlock, w as withCtx, q as createTextVNode, k as createCommentVNode, j as createVNode, n as normalizeClass, p as withDirectives } from "./vendor-b24fd275.js";
import { _ as _export_sfc } from "./app-7a34098f.js";
import "./__commonjsHelpers__-ebbb3f54.js";
const _sfc_main = {
  name: "PhpInfo",
  components: { ChevronRightIcon },
  data() {
    return {
      dataReady: false,
      info: null
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    })
  },
  mounted() {
    this.getServerInfo();
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    }),
    async getServerInfo() {
      this.dataReady = false;
      await axios.get("/api/server-info").then(({ data }) => {
        this.info = data.info;
        this.dataReady = true;
      }).catch(({ response }) => {
        this.popToast({
          message: "Error Getting Server Information",
          timer: 5e3,
          icon: "error"
        });
        this.dataReady = true;
      });
    }
  }
};
const _hoisted_1 = { class: "bg-white p-3 dark:bg-slate-800 dark:text-gray-200" };
const _hoisted_2 = {
  class: "mb-6 text-sm font-semibold",
  "aria-label": "Breadcrumb"
};
const _hoisted_3 = { class: "inline-flex list-none p-0" };
const _hoisted_4 = { class: "flex items-center" };
const _hoisted_5 = { class: "flex items-center" };
const _hoisted_6 = { class: "flex items-center" };
const _hoisted_7 = { key: 0 };
const _hoisted_8 = /* @__PURE__ */ createBaseVNode("div", { class: "text-gray-700 dark:text-gray-100" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "pt-10 pb-10 text-center" }, [
    /* @__PURE__ */ createBaseVNode("span", { class: "fa fa-circle-notch fa-spin fa-5x" })
  ])
], -1);
const _hoisted_9 = [
  _hoisted_8
];
const _hoisted_10 = {
  key: 1,
  class: "php-info"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  const _directive_html_safe = resolveDirective("html-safe");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("nav", _hoisted_2, [
      createBaseVNode("ol", _hoisted_3, [
        createBaseVNode("li", _hoisted_4, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "admin" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createTextVNode(" Admin ")
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ]),
        createBaseVNode("li", _hoisted_5, [
          createVNode(_component_ChevronRightIcon, { class: "ml-2 mr-2 mt-0 h-4 w-4" })
        ]),
        createBaseVNode("li", _hoisted_6, [
          _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
            key: 0,
            to: { name: "phpinfo" },
            class: "text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400"
          }, {
            default: withCtx(({ isActive }) => [
              createBaseVNode("span", {
                class: normalizeClass([
                  isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                ])
              }, " Server Info ", 2)
            ]),
            _: 1
          })) : createCommentVNode("", true)
        ])
      ])
    ]),
    !$data.dataReady ? (openBlock(), createElementBlock("div", _hoisted_7, _hoisted_9)) : createCommentVNode("", true),
    $data.dataReady ? (openBlock(), createElementBlock("div", _hoisted_10, [
      withDirectives(createBaseVNode("div", null, null, 512), [
        [_directive_html_safe, $data.info]
      ])
    ])) : createCommentVNode("", true)
  ]);
}
const PhpInfo = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  PhpInfo as default
};
//# sourceMappingURL=PhpInfo-80b4a1bd.js.map
