import { af as PowerIcon, ag as mapState, m as mapGetters, r as resolveComponent, f as resolveDirective, l as createElementBlock, i as createBaseVNode, t as toDisplayString, j as createVNode, k as createCommentVNode, p as withDirectives, g as createBlock, w as withCtx, o as openBlock, ad as Fragment, ae as renderList, n as normalizeClass, q as createTextVNode } from "./vendor-b24fd275.js";
import { R as RolesBadges } from "./RolesBadges-e0cd4aac.js";
import { _ as _export_sfc, g as greeting, p as providerIcon, a as parseDisplayDate } from "./app-7a34098f.js";
import { G as GHButtons } from "./GHButtons-1b0fab51.js";
import "./__commonjsHelpers__-ebbb3f54.js";
const _sfc_main = {
  name: "Dashboard",
  components: {
    RolesBadges,
    PowerIcon,
    GHButtons
  },
  data() {
    return {};
  },
  computed: {
    ...mapState("auth", {
      user: (state) => state.user
    }),
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles",
      logins: "auth/logins"
    }),
    socialLoginsEnabled() {
      if (Object.values(this.logins).find((v) => v == "1")) {
        return true;
      }
      return false;
    },
    allowedProviders() {
      const providers = [];
      for (const key in this.logins) {
        if (this.logins[key] != false && this.logins[key] != "0") {
          providers.push(key);
        }
      }
      return providers.sort();
    },
    enabledProviders() {
      const providers = [];
      this.user.providers.forEach((provider, index) => {
        const found = this.allowedProviders.find((p) => p == provider.provider);
        if (found) {
          providers.push(provider);
        }
      });
      return providers;
    },
    disabledProviders() {
      let providers = this.allowedProviders;
      this.user.providers.forEach((provider, index) => {
        providers = providers.filter((p) => p != provider.provider);
      });
      return providers;
    }
  },
  methods: {
    greeting,
    providerIcon,
    parseDisplayDate
  }
};
const _hoisted_1 = { class: "mx-auto max-w-screen-lg text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "w-auto rounded border dark:border-gray-600" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 font-semibold dark:border-gray-600 dark:text-gray-200" }, " Dashboard ", -1);
const _hoisted_6 = { class: "rounded bg-white p-4 dark:bg-slate-800 dark:text-gray-300" };
const _hoisted_7 = { class: "mt-4 mb-4 text-center text-2xl" };
const _hoisted_8 = {
  key: 0,
  class: "mb-6 text-center"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("hr", { class: "mx-auto mb-3 w-10" }, null, -1);
const _hoisted_10 = /* @__PURE__ */ createBaseVNode("h2", { class: "mb-5" }, "Your Roles", -1);
const _hoisted_11 = { key: 1 };
const _hoisted_12 = {
  key: 0,
  class: "rounded-lg bg-slate-100 p-10 text-center text-gray-600 transition duration-200 ease-in-out hover:bg-slate-200 hover:text-gray-800 dark:bg-slate-900 hover:dark:bg-slate-700 hover:dark:text-white"
};
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-lg" }, " No applications are integrated into your account. ", -1);
const _hoisted_14 = { key: 1 };
const _hoisted_15 = /* @__PURE__ */ createBaseVNode("hr", { class: "mx-auto mb-3 w-10" }, null, -1);
const _hoisted_16 = { class: "mb-5 text-center" };
const _hoisted_17 = { class: "grid grid-cols-2 gap-4 rounded-lg text-center font-mono text-sm font-bold leading-6 text-white sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5" };
const _hoisted_18 = { class: "flex flex-col items-center pt-4 pb-4 pl-2 pr-2" };
const _hoisted_19 = { class: "mb-0 text-lg font-extrabold capitalize text-gray-900 dark:text-white" };
const _hoisted_20 = {
  key: 0,
  class: "mb-1 mb-3 text-gray-600 dark:text-gray-400",
  style: { "line-height": "1.2", "font-size": "0.6em" }
};
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold uppercase text-gray-700 dark:text-gray-200" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "far fa-clock" }),
  /* @__PURE__ */ createTextVNode(" First Used: ")
], -1);
const _hoisted_22 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_23 = {
  key: 1,
  class: "mb-0 text-gray-600 dark:text-gray-400",
  style: { "line-height": "1.2", "font-size": "0.6em" }
};
const _hoisted_24 = /* @__PURE__ */ createBaseVNode("span", { class: "font-bold uppercase text-gray-700 dark:text-gray-200" }, [
  /* @__PURE__ */ createBaseVNode("span", { class: "far fa-clock" }),
  /* @__PURE__ */ createTextVNode(" Last Used: ")
], -1);
const _hoisted_25 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
const _hoisted_26 = { class: "mt-3 mb-5 p-5 text-center" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RolesBadges = resolveComponent("RolesBadges");
  const _component_PowerIcon = resolveComponent("PowerIcon");
  const _component_router_link = resolveComponent("router-link");
  const _component_GHButtons = resolveComponent("GHButtons");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            createBaseVNode("h1", _hoisted_7, toDisplayString($options.greeting()) + ", " + toDisplayString(_ctx.user && _ctx.user.name ? _ctx.user.name : "Registered User") + "! ", 1),
            _ctx.roles ? (openBlock(), createElementBlock("div", _hoisted_8, [
              _hoisted_9,
              _hoisted_10,
              createVNode(_component_RolesBadges, { roles: _ctx.roles }, null, 8, ["roles"])
            ])) : createCommentVNode("", true),
            $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_11, [
              withDirectives((openBlock(), createBlock(_component_router_link, { to: { name: "account" } }, {
                default: withCtx(() => [
                  _ctx.user.providers.length == 0 ? (openBlock(), createElementBlock("div", _hoisted_12, [
                    createBaseVNode("div", null, [
                      createVNode(_component_PowerIcon, { class: "ml-auto mr-auto mb-4 h-12 w-12" })
                    ]),
                    _hoisted_13
                  ])) : createCommentVNode("", true),
                  _ctx.user.providers.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
                    _hoisted_15,
                    createBaseVNode("h3", _hoisted_16, toDisplayString(_ctx.user.providers.length) + " Application " + toDisplayString(_ctx.user.providers.length != 1 ? "s" : "") + " integrated into your account ", 1),
                    createBaseVNode("div", _hoisted_17, [
                      (openBlock(true), createElementBlock(Fragment, null, renderList($options.enabledProviders, (provider, index) => {
                        return openBlock(), createElementBlock("div", {
                          key: provider + "_" + index,
                          class: "mb-1 w-full rounded-lg border border-gray-200 bg-white shadow-md hover:bg-gray-50 dark:border-gray-900 dark:bg-gray-900 hover:dark:bg-slate-700"
                        }, [
                          createBaseVNode("div", _hoisted_18, [
                            createBaseVNode("span", {
                              class: normalizeClass(["fa-4x mb-2", $options.providerIcon(provider.provider)])
                            }, null, 2),
                            createBaseVNode("h5", _hoisted_19, toDisplayString(provider.provider), 1),
                            provider.created_at ? (openBlock(), createElementBlock("div", _hoisted_20, [
                              _hoisted_21,
                              _hoisted_22,
                              createTextVNode(" " + toDisplayString($options.parseDisplayDate(provider.created_at)), 1)
                            ])) : createCommentVNode("", true),
                            provider.updated_at ? (openBlock(), createElementBlock("div", _hoisted_23, [
                              _hoisted_24,
                              _hoisted_25,
                              createTextVNode(" " + toDisplayString($options.parseDisplayDate(provider.updated_at)), 1)
                            ])) : createCommentVNode("", true)
                          ])
                        ]);
                      }), 128))
                    ])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              })), [
                [_directive_tippy, "Go to application service providers"]
              ])
            ])) : createCommentVNode("", true)
          ])
        ]),
        createBaseVNode("div", _hoisted_26, [
          createVNode(_component_GHButtons, {
            "show-follow": "",
            "show-star": "",
            "show-fork": "",
            "show-issue": "",
            "show-watch": "",
            "show-sponsor": "",
            "show-download": "",
            "show-count": "",
            "show-tips": ""
          })
        ])
      ])
    ])
  ]);
}
const Dashboard = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Dashboard as default
};
//# sourceMappingURL=Dashboard-853dcc8a.js.map
