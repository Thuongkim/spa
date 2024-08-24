function __vite_legacy_guard() {
  import.meta.url;
  import("_").catch(() => 1);
  async function* g() {
  }
  ;
}
;
import { h as hooks, H as HomeIcon, B as BuildingLibraryIcon, I as InformationCircleIcon, D as DocumentTextIcon, P as Pe, a as Be, K as Ke, b as He, c as Bars3Icon, X as XMarkIcon, C as CogIcon, A as ArrowLeftOnRectangleIcon, d as ChevronDownIcon, U as UserCircleIcon, u as ue, m as mapGetters, e as mapActions, r as resolveComponent, f as resolveDirective, g as createBlock, w as withCtx, o as openBlock, i as createBaseVNode, j as createVNode, t as toDisplayString, n as normalizeClass, k as createCommentVNode, l as createElementBlock, p as withDirectives, q as createTextVNode, v as vShow, s as withModifiers, T as Transition, x as createStaticVNode, y as normalizeStyle, z as pushScopeId, E as popScopeId, F as resolveDynamicComponent, G as defineAsyncComponent, J as api, L as axios, M as createStore, N as sharedMutations, O as a, Q as createRouter, R as createWebHistory, S as trackRouter, V as renderSlot, W as createApp, Y as init, Z as BrowserTracing, _ as vueRouterInstrumentation, $ as showReportDialog, a0 as setUser, a1 as VueSweetalert2, a2 as compiled, a3 as plugin, a4 as VueSecureHTML, a5 as KonamiCode, a6 as toasty, a7 as index } from "./vendor-b24fd275.js";
import "./__commonjsHelpers__-ebbb3f54.js";
function parseDisplayDate(date) {
  return hooks(date).format("MMM Do YYYY, h:mma");
}
function capitalizeFirstLetter(str) {
  if (!str)
    return "";
  var firstCodeUnit = str[0];
  if (firstCodeUnit < "\uD800" || firstCodeUnit > "\uDFFF") {
    return str[0].toUpperCase() + str.slice(1);
  }
  return str.slice(0, 2).toUpperCase() + str.slice(2);
}
function greeting() {
  const date = /* @__PURE__ */ new Date();
  const currentTime = date.getHours();
  let greeting2;
  if (currentTime >= 0 && currentTime <= 12) {
    greeting2 = "Good Morning";
  } else if (currentTime > 12 && currentTime <= 18) {
    greeting2 = "Good Afternoon";
  } else {
    greeting2 = "Good Evening";
  }
  return greeting2;
}
function providerIcon(provider = null) {
  if (provider.toLowerCase() == "apple") {
    return "fa-brands fa-apple text-gray-800 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "twitter") {
    return "fa-brands fa-twitter text-blue-300 dark:text-blue-200";
  }
  if (provider.toLowerCase() == "google") {
    return "fa-brands fa-google text-red-500 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "microsoft") {
    return "fa-brands fa-microsoft text-blue-300 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "tiktok") {
    return "fa-brands fa-tiktok text-pink-600 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "youtube") {
    return "fa-brands fa-youtube text-red-600 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "instagram") {
    return "fa-brands fa-instagram text-gray-800 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "facebook") {
    return "fa-brands fa-facebook text-blue-600 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "github") {
    return "fa-brands fa-github text-gray-700 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "twitch") {
    return "fa-brands fa-twitch text-blue-300 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "linkedin") {
    return "fa-brands fa-linkedin text-blue-900 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "zoho") {
    return "fas fa-z text-yellow-500 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "stackexchange") {
    return "fa-brands fa-stack-exchange text-blue-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "gitlab") {
    return "fa-brands fa-square-gitlab text-orange-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "reddit") {
    return "fa-brands fa-square-reddit text-orange-700 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "snapchat") {
    return "fa-brands fa-square-snapchat text-yellow-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "meetup") {
    return "fa-brands fa-meetup text-red-400 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "bitbucket") {
    return "fa-brands fa-bitbucket text-blue-800 dark:text-gray-200";
  }
  if (provider.toLowerCase() == "atlassian") {
    return "fa-brands fa-atlassian text-blue-800 dark:text-gray-200";
  }
  return "fa-solid fa-plug-circle-check text-gray-600 dark:text-gray-200";
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = {
  name: "AppNav",
  components: {
    HomeIcon,
    BuildingLibraryIcon,
    InformationCircleIcon,
    DocumentTextIcon,
    Popover: Pe,
    PopoverButton: Be,
    PopoverGroup: Ke,
    PopoverPanel: He,
    Bars3Icon,
    XMarkIcon,
    CogIcon,
    ArrowLeftOnRectangleIcon,
    ChevronDownIcon,
    UserCircleIcon,
    Switch: ue
    // eslint-disable-line
  },
  props: {},
  data() {
    return {
      appName: "Workflow",
      // logo: "https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600",
      drop: false,
      errors: null,
      success: "",
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles",
      currentUserToken: "auth/currentUserToken",
      impersonatorToken: "auth/impersonatorToken"
    }),
    isImpersonating() {
      if (this.currentUserToken && this.impersonatorToken) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions({
      logout: "auth/logout",
      updateTheme: "auth/theme",
      popToast: "toast/popToast",
      leaveImpersonatingUser: "auth/leaveImpersonatingUser"
    }),
    parseDisplayDate,
    closeDrop() {
      this.drop = false;
    },
    openDrop() {
      this.drop = true;
    },
    async toggleTheme() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.updateTheme({ theme_dark: !this.user.theme_dark }).then(
          (response) => {
            if (response && response.data && response.data.user && response.data.user.id) {
              this.popToast({
                message: "Theme Saved",
                timer: 2e3,
                icon: "success"
              });
            }
          }
        );
      } catch (e) {
        this.errors = e.data;
        this.popToast({
          message: "Error Updating Theme",
          timer: 5e3,
          icon: "error"
        });
      }
      this.loading = false;
    },
    async leaveImpersonating() {
      try {
        await this.leaveImpersonatingUser().then((response) => {
        });
      } catch (e) {
        this.popToast({
          message: "Unable To Return To Yourself",
          timer: 5e3,
          icon: "error"
        });
      }
    }
  }
};
const _hoisted_1$7 = { class: "mx-auto max-w-7xl px-4 sm:px-6" };
const _hoisted_2$6 = { class: "flex items-center justify-between border-b-2 border-gray-100 py-6 dark:border-slate-700 md:justify-start md:space-x-10" };
const _hoisted_3$3 = { class: "flex justify-start lg:w-0 lg:flex-1" };
const _hoisted_4$1 = { class: "sr-only" };
const _hoisted_5$1 = /* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "0 0 50 31",
  class: "h-6 w-auto text-indigo-500 dark:text-indigo-300"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z",
    fill: "currentColor"
  })
], -1);
const _hoisted_6$1 = { class: "-my-2 -mr-2 md:hidden" };
const _hoisted_7$1 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Open menu", -1);
const _hoisted_8$1 = {
  key: 0,
  class: "hidden items-center justify-end md:flex md:flex-1 lg:w-0"
};
const _hoisted_9 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Toggle Theme", -1);
const _hoisted_10 = {
  ref: "dropMenu",
  class: "relative"
};
const _hoisted_11 = {
  key: 0,
  class: "fa-solid fa-exclamation-circle fa-xs text-orange-600",
  style: { "position": "absolute", "top": "12px", "right": "38px" }
};
const _hoisted_12 = ["src", "alt"];
const _hoisted_13 = {
  key: 1,
  class: "hidden items-center justify-end md:flex md:flex-1 lg:w-0"
};
const _hoisted_14 = { class: "divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:bg-slate-900" };
const _hoisted_15 = { class: "px-5 pt-5 pb-6" };
const _hoisted_16 = { class: "flex items-center justify-between" };
const _hoisted_17 = { class: "sr-only" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("svg", {
  viewBox: "0 0 50 31",
  class: "h-6 w-auto text-indigo-500"
}, [
  /* @__PURE__ */ createBaseVNode("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: "M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z",
    fill: "currentColor"
  })
], -1);
const _hoisted_19 = { class: "-mr-2" };
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Close menu", -1);
const _hoisted_21 = { class: "space-y-6 py-6 px-5" };
const _hoisted_22 = { class: "" };
const _hoisted_23 = {
  key: 0,
  class: "mb-6 text-left"
};
const _hoisted_24 = {
  key: 1,
  class: "mb-6 text-left"
};
const _hoisted_25 = { class: "mb-6 text-left" };
const _hoisted_26 = { class: "mb-6 text-left" };
const _hoisted_27 = { class: "mb-7 text-left" };
const _hoisted_28 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Toggle Theme", -1);
const _hoisted_29 = { class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200" };
const _hoisted_30 = {
  key: 3,
  class: "mb-8 text-left",
  style: { "margin-top": "-0.5em" }
};
const _hoisted_31 = ["onClick"];
const _hoisted_32 = /* @__PURE__ */ createBaseVNode("span", { class: "fa-solid fa-user-secret fa-fw mr-2 ml-1" }, null, -1);
const _hoisted_33 = { key: 0 };
const _hoisted_34 = { class: "mt-6 text-center text-base font-medium text-gray-500" };
const _hoisted_35 = { key: 1 };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_Bars3Icon = resolveComponent("Bars3Icon");
  const _component_PopoverButton = resolveComponent("PopoverButton");
  const _component_BuildingLibraryIcon = resolveComponent("BuildingLibraryIcon");
  const _component_HomeIcon = resolveComponent("HomeIcon");
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  const _component_DocumentTextIcon = resolveComponent("DocumentTextIcon");
  const _component_PopoverGroup = resolveComponent("PopoverGroup");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_Switch = resolveComponent("Switch");
  const _component_UserCircleIcon = resolveComponent("UserCircleIcon");
  const _component_CogIcon = resolveComponent("CogIcon");
  const _component_ArrowLeftOnRectangleIcon = resolveComponent("ArrowLeftOnRectangleIcon");
  const _component_XMarkIcon = resolveComponent("XMarkIcon");
  const _component_PopoverPanel = resolveComponent("PopoverPanel");
  const _component_Popover = resolveComponent("Popover");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createBlock(_component_Popover, { class: "relative bg-white dark:bg-slate-800" }, {
    default: withCtx(() => [
      createBaseVNode("div", _hoisted_1$7, [
        createBaseVNode("div", _hoisted_2$6, [
          createBaseVNode("div", _hoisted_3$3, [
            createVNode(_component_router_link, {
              to: { name: "home" },
              onClick: $options.closeDrop
            }, {
              default: withCtx(() => [
                createBaseVNode("span", _hoisted_4$1, toDisplayString($data.appName), 1),
                _hoisted_5$1
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          createBaseVNode("div", _hoisted_6$1, [
            createVNode(_component_PopoverButton, {
              class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800 dark:hover:bg-slate-800",
              onClick: $options.openDrop
            }, {
              default: withCtx(() => [
                _hoisted_7$1,
                createVNode(_component_Bars3Icon, {
                  class: "h-6 w-6",
                  "aria-hidden": "true"
                })
              ]),
              _: 1
            }, 8, ["onClick"])
          ]),
          createVNode(_component_PopoverGroup, {
            as: "nav",
            class: "hidden space-x-10 md:flex"
          }, {
            default: withCtx(() => [
              _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
                key: 0,
                to: { name: "admin" },
                class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                onClick: $options.closeDrop
              }, {
                default: withCtx(({ isActive }) => [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                    ])
                  }, [
                    createVNode(_component_BuildingLibraryIcon, { class: "float-left mr-2 h-6 w-6" })
                  ], 2)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                key: 1,
                to: { name: "dashboard" },
                class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                onClick: $options.closeDrop
              }, {
                default: withCtx(({ isActive }) => [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                    ])
                  }, [
                    createVNode(_component_HomeIcon, { class: "float-left mr-2 h-6 w-6" })
                  ], 2)
                ]),
                _: 1
              }, 8, ["onClick"])) : createCommentVNode("", true),
              createVNode(_component_router_link, {
                to: { name: "about" },
                class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                onClick: $options.closeDrop
              }, {
                default: withCtx(({ isActive }) => [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                    ])
                  }, [
                    createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" })
                  ], 2)
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_component_router_link, {
                to: { name: "terms" },
                class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                onClick: $options.closeDrop
              }, {
                default: withCtx(({ isActive }) => [
                  createBaseVNode("span", {
                    class: normalizeClass([
                      isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                    ])
                  }, [
                    createVNode(_component_DocumentTextIcon, { class: "float-left mr-2 h-6 w-6" })
                  ], 2)
                ]),
                _: 1
              }, 8, ["onClick"])
            ]),
            _: 1
          }),
          _ctx.authenticated && _ctx.user ? (openBlock(), createElementBlock("div", _hoisted_8$1, [
            $options.isImpersonating ? withDirectives((openBlock(), createBlock(_component_AppButton, {
              key: 0,
              icon: "fa-solid fa-user-secret",
              class: "float-right mr-4 h-3 w-3 rounded",
              style: { "background": "transparent !important" },
              onClick: $options.leaveImpersonating
            }, null, 8, ["onClick"])), [
              [_directive_tippy, "Return to your account"]
            ]) : createCommentVNode("", true),
            withDirectives((openBlock(), createElementBlock("span", {
              class: normalizeClass([
                "mr-2",
                $data.loading ? "default disabled cursor-pointer" : "cursor-pointer"
              ]),
              onClick: _cache[0] || (_cache[0] = ($event) => $options.toggleTheme())
            }, [
              createVNode(_component_Switch, {
                "default-checked": _ctx.user.theme_dark,
                class: normalizeClass([_ctx.user.theme_dark ? "bg-gray-500" : "bg-gray-400", "relative inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])
              }, {
                default: withCtx(() => [
                  _hoisted_9,
                  createBaseVNode("span", {
                    "aria-hidden": "true",
                    class: normalizeClass([
                      _ctx.user.theme_dark ? "translate-x-4 bg-gray-800" : "translate-x-0 bg-white",
                      "pointer-events-none inline-block h-[16px] w-[16px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                    ])
                  }, null, 2)
                ]),
                _: 1
              }, 8, ["default-checked", "class"])
            ], 2)), [
              [_directive_tippy, "Toggle Theme " + (_ctx.user.theme_dark ? "Light" : "Dark")]
            ]),
            createBaseVNode("div", _hoisted_10, [
              createBaseVNode("div", {
                class: "cursor-pointer items-center p-3 text-base font-medium tracking-wider text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
                onClick: _cache[1] || (_cache[1] = ($event) => $data.drop = !$data.drop)
              }, [
                createTextVNode(toDisplayString(_ctx.user && _ctx.user.name ? _ctx.user.name : "") + " ", 1),
                !_ctx.user.email_verified_at ? withDirectives((openBlock(), createElementBlock("span", _hoisted_11, null, 512)), [
                  [_directive_tippy, "Email Not Verified"]
                ]) : createCommentVNode("", true),
                _ctx.user && _ctx.user.avatar ? (openBlock(), createElementBlock("img", {
                  key: 1,
                  src: _ctx.user.avatar,
                  alt: _ctx.user.name,
                  class: "float-right ml-2 mt-0 h-6 w-6 rounded-full"
                }, null, 8, _hoisted_12)) : (openBlock(), createBlock(_component_UserCircleIcon, {
                  key: 2,
                  class: "float-right ml-2 mt-0 h-6 w-6"
                }))
              ]),
              withDirectives(createBaseVNode("div", {
                class: "absolute right-5 z-10 flex w-auto flex-col whitespace-nowrap rounded border bg-white shadow-md dark:bg-slate-900",
                onClick: _cache[3] || (_cache[3] = ($event) => $data.drop = !$data.drop)
              }, [
                _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createBlock(_component_router_link, {
                  key: 0,
                  to: { name: "admin" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center rounded-t p-4 pr-10 pl-8 hover:bg-slate-800 hover:text-white",
                        isActive ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "text-gray-700"
                      ])
                    }, [
                      createVNode(_component_BuildingLibraryIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Admin ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                  key: 1,
                  to: { name: "dashboard" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center p-4 pr-10 pl-8 hover:bg-slate-800 hover:text-white",
                        isActive ? _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "cursor-default whitespace-nowrap rounded-t bg-slate-500 text-white" : _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? "text-gray-700" : "rounded-t text-gray-700"
                      ])
                    }, [
                      createVNode(_component_HomeIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Dashboard ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                  key: 2,
                  to: { name: "settings" }
                }, {
                  default: withCtx(({ isActive }) => [
                    createBaseVNode("span", {
                      class: normalizeClass([
                        "flex items-center p-4 pr-10 pl-8 hover:bg-slate-800 hover:text-white",
                        isActive ? "cursor-default whitespace-nowrap bg-slate-500 text-white" : "text-gray-700"
                      ])
                    }, [
                      createVNode(_component_CogIcon, { class: "mr-2 h-6 w-6" }),
                      createTextVNode(" Settings ")
                    ], 2)
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                createBaseVNode("div", {
                  class: "flex cursor-pointer items-center rounded-b p-4 pr-10 pl-8 text-gray-700 hover:bg-slate-800 hover:text-white",
                  onClick: _cache[2] || (_cache[2] = withModifiers(($event) => (_ctx.logout(), $options.closeDrop()), ["prevent"]))
                }, [
                  createVNode(_component_ArrowLeftOnRectangleIcon, { class: "mr-2 h-6 w-6" }),
                  createTextVNode(" Logout ")
                ])
              ], 512), [
                [vShow, $data.drop]
              ])
            ], 512)
          ])) : createCommentVNode("", true),
          !_ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_13, [
            createVNode(_component_router_link, {
              to: { name: "login" },
              class: "whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-400",
              onClick: $options.closeDrop
            }, {
              default: withCtx(({ isActive }) => [
                createBaseVNode("span", {
                  class: normalizeClass([
                    isActive && "cursor-default text-gray-800 hover:text-gray-900 dark:text-gray-500 dark:hover:text-gray-500"
                  ])
                }, " Sign in ", 2)
              ]),
              _: 1
            }, 8, ["onClick"]),
            createVNode(_component_router_link, {
              to: { name: "register" },
              onClick: $options.closeDrop
            }, {
              default: withCtx(({ isActive }) => [
                createVNode(_component_AppButton, {
                  primary: "",
                  text: "Sign Up",
                  class: normalizeClass(["ml-8", [isActive && "opacity-60"]])
                }, null, 8, ["class"])
              ]),
              _: 1
            }, 8, ["onClick"])
          ])) : createCommentVNode("", true)
        ])
      ]),
      createVNode(Transition, {
        "enter-active-class": "duration-200 ease-out",
        "enter-from-class": "opacity-0 scale-95",
        "enter-to-class": "opacity-100 scale-100",
        "leave-active-class": "duration-100 ease-in",
        "leave-from-class": "opacity-100 scale-100",
        "leave-to-class": "opacity-0 scale-95"
      }, {
        default: withCtx(() => [
          withDirectives(createVNode(_component_PopoverPanel, {
            focus: "",
            class: "absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          }, {
            default: withCtx(({ close }) => [
              createBaseVNode("div", _hoisted_14, [
                createBaseVNode("div", _hoisted_15, [
                  createBaseVNode("div", _hoisted_16, [
                    createBaseVNode("div", null, [
                      createBaseVNode("span", _hoisted_17, toDisplayString($data.appName), 1),
                      createVNode(_component_router_link, {
                        to: { name: "home" },
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          _hoisted_18
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_19, [
                      createVNode(_component_PopoverButton, { class: "inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 dark:bg-slate-800" }, {
                        default: withCtx(() => [
                          _hoisted_20,
                          createVNode(_component_XMarkIcon, {
                            class: "h-6 w-6",
                            "aria-hidden": "true"
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                createBaseVNode("div", _hoisted_21, [
                  createBaseVNode("div", _hoisted_22, [
                    _ctx.authenticated && _ctx.roles && (_ctx.roles.admin || _ctx.roles.superAdmin) ? (openBlock(), createElementBlock("div", _hoisted_23, [
                      createVNode(_component_router_link, {
                        to: { name: "admin" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_HomeIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Admin ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true),
                    _ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_24, [
                      createVNode(_component_router_link, {
                        to: { name: "dashboard" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_HomeIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Dashboard ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])) : createCommentVNode("", true),
                    createBaseVNode("div", _hoisted_25, [
                      createVNode(_component_router_link, {
                        to: { name: "about" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_InformationCircleIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" About ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_26, [
                      createVNode(_component_router_link, {
                        to: { name: "terms" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_DocumentTextIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Terms ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ]),
                    createBaseVNode("div", _hoisted_27, [
                      _ctx.authenticated ? (openBlock(), createBlock(_component_router_link, {
                        key: 0,
                        to: { name: "settings" },
                        class: "text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-gray-800 hover:text-gray-900 dark:text-gray-600"
                            ])
                          }, [
                            createVNode(_component_CogIcon, { class: "float-left mr-2 h-6 w-6" }),
                            createTextVNode(" Settings ")
                          ], 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])) : createCommentVNode("", true)
                    ]),
                    _ctx.authenticated && _ctx.user ? (openBlock(), createElementBlock("div", {
                      key: 2,
                      class: normalizeClass([
                        "mr-2 mb-10",
                        $data.loading ? "default disabled cursor-pointer" : "cursor-pointer"
                      ]),
                      onClick: _cache[4] || (_cache[4] = ($event) => $options.toggleTheme())
                    }, [
                      createVNode(_component_Switch, {
                        "default-checked": _ctx.user.theme_dark,
                        class: normalizeClass([_ctx.user.theme_dark ? "bg-gray-500" : "bg-gray-400", "relative inline-flex h-[18px] w-[30px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"])
                      }, {
                        default: withCtx(() => [
                          _hoisted_28,
                          createBaseVNode("span", {
                            "aria-hidden": "true",
                            class: normalizeClass([
                              _ctx.user.theme_dark ? "translate-x-3 bg-gray-800" : "translate-x-0 bg-white",
                              "pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
                            ])
                          }, null, 2)
                        ]),
                        _: 1
                      }, 8, ["default-checked", "class"]),
                      createBaseVNode("span", _hoisted_29, " Toggle Theme " + toDisplayString(_ctx.user.theme_dark ? "Light" : "Dark"), 1)
                    ], 2)) : createCommentVNode("", true),
                    $options.isImpersonating && _ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_30, [
                      createBaseVNode("div", {
                        class: "cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900 dark:hover:text-gray-200",
                        onClick: ($event) => ($options.leaveImpersonating(), close())
                      }, [
                        _hoisted_32,
                        createTextVNode(" Return to your account ")
                      ], 8, _hoisted_31)
                    ])) : createCommentVNode("", true)
                  ]),
                  !_ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_33, [
                    createVNode(_component_router_link, { to: { name: "register" } }, {
                      default: withCtx(({ isActive }) => [
                        createVNode(_component_AppButton, {
                          primary: "",
                          text: "Sign up",
                          class: normalizeClass(["flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700", [isActive && "opacity-60"]]),
                          onClick: close
                        }, null, 8, ["class", "onClick"])
                      ]),
                      _: 2
                    }, 1024),
                    createBaseVNode("p", _hoisted_34, [
                      createTextVNode(" Existing customer? " + toDisplayString(" ") + " "),
                      createVNode(_component_router_link, {
                        to: { name: "login" },
                        class: "whitespace-nowrap text-base font-medium text-indigo-500 hover:text-indigo-900 dark:text-indigo-300 dark:hover:text-indigo-400",
                        onClick: close
                      }, {
                        default: withCtx(({ isActive }) => [
                          createBaseVNode("span", {
                            class: normalizeClass([
                              isActive && "text-indigo-800 hover:text-indigo-900 dark:text-indigo-500 dark:hover:text-indigo-500"
                            ])
                          }, " Sign in ", 2)
                        ]),
                        _: 2
                      }, 1032, ["onClick"])
                    ])
                  ])) : createCommentVNode("", true),
                  _ctx.authenticated ? (openBlock(), createElementBlock("div", _hoisted_35, [
                    createVNode(_component_AppButton, {
                      primary: "",
                      text: "Logout",
                      type: "button",
                      class: "flex w-full items-center justify-center px-4 py-2",
                      onClick: _cache[5] || (_cache[5] = withModifiers(($event) => (_ctx.logout(), $options.closeDrop()), ["prevent"]))
                    }, {
                      text: withCtx(() => [
                        createVNode(_component_ArrowLeftOnRectangleIcon, { class: "mr-2 h-6 w-6" }),
                        createTextVNode(" Logout ")
                      ]),
                      _: 1
                    })
                  ])) : createCommentVNode("", true)
                ])
              ])
            ]),
            _: 1
          }, 512), [
            [vShow, $data.drop]
          ])
        ]),
        _: 1
      })
    ]),
    _: 1
  });
}
const AppNav = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const _sfc_main$7 = {
  name: "AppFooter",
  components: {},
  props: {
    footerClass: {
      type: String,
      default: "max-w-container mx-auto mt-32 w-full px-4 sm:px-6 lg:px-8"
    },
    borderClass: {
      type: String,
      default: "border-slate-900/5 dark:border-slate-700"
    }
  },
  setup() {
    return {};
  },
  data() {
    return {
      company: "Jeremy Edgar Kenedy"
    };
  },
  computed: {
    theYear() {
      const startYear = "2022";
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      if (currentYear == startYear) {
        return currentYear;
      }
      return "".concat(startYear, "-").concat(currentYear);
    }
  },
  watch: {},
  created() {
  },
  mounted() {
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const _hoisted_1$6 = { class: "text-center text-sm leading-6 text-slate-500 dark:text-gray-300" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("footer", {
    class: normalizeClass($props.footerClass)
  }, [
    createBaseVNode("div", {
      class: normalizeClass(["border-t py-4", $props.borderClass])
    }, [
      createBaseVNode("p", _hoisted_1$6, " © " + toDisplayString($options.theYear) + " " + toDisplayString($data.company) + ". All rights reserved. ", 1)
    ], 2)
  ], 2);
}
const AppFooter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = {
  props: {
    stroke: {
      type: String,
      default: "#fff"
    },
    w: {
      type: Number,
      default: 38
    },
    h: {
      type: Number,
      default: 38
    }
  },
  computed: {
    viewBox() {
      return "0 0 ".concat(this.w, " ").concat(this.h);
    }
  }
};
const _hoisted_1$5 = ["width", "height", "viewBox", "stroke"];
const _hoisted_2$5 = /* @__PURE__ */ createStaticVNode('<g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="2"><circle stroke-opacity=".8" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g>', 1);
const _hoisted_3$2 = [
  _hoisted_2$5
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    width: $props.w,
    height: $props.h,
    viewBox: $options.viewBox,
    xmlns: "http://www.w3.org/2000/svg",
    stroke: $props.stroke
  }, _hoisted_3$2, 8, _hoisted_1$5);
}
const CircleSvg = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = {
  name: "VerifyNotice",
  components: {
    CircleSvg
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      sent: false,
      loading: false
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user",
      roles: "auth/roles"
    })
  },
  methods: {
    ...mapActions({
      verifyResend: "auth/verifyResend",
      popToast: "toast/popToast"
    }),
    async resend() {
      this.loading = true;
      try {
        await this.verifyResend({ id: this.id }).then((response) => {
          this.sent = true;
          this.loading = false;
          this.popToast({
            message: "Email sent.",
            timer: 5e3,
            icon: "success"
          });
        });
      } catch (e) {
        this.popToast({
          message: "An errored, please try again later.",
          timer: 5e3,
          icon: "error"
        });
        this.loading = false;
      }
    }
  }
};
const _hoisted_1$4 = { class: "w-full bg-yellow-500 p-2 text-white opacity-90 shadow-md hover:opacity-100" };
const _hoisted_2$4 = { class: "mx-auto flex max-w-screen-lg items-center justify-between" };
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createBaseVNode("div", _hoisted_2$4, [
      createBaseVNode("div", null, toDisplayString($data.loading ? "Resending verification email to " + _ctx.user.email : $data.sent ? "A verification has been sent. Please check your mail inbox!" : "Your email address is not verified. please check your mail inbox!"), 1),
      createVNode(_component_AppButton, {
        primary: "",
        loading: $data.loading,
        disabled: $data.sent,
        "btn-class": "leading-snug inline-block px-5 py-1 text-xs font-medium",
        onClick: $options.resend
      }, {
        text: withCtx(() => [
          $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
            key: 0,
            class: "mr-2 h-3 w-3"
          })) : createCommentVNode("", true),
          createTextVNode(" " + toDisplayString($data.loading ? "Sending" : $data.sent ? "Email Sent!" : "Resend link?"), 1)
        ]),
        _: 1
      }, 8, ["loading", "disabled", "onClick"])
    ])
  ]);
}
const VerifyNotice = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
function track(action, category = "click event", label = "clicked", value = 1) {
  let appGaEnabled = GA_ENABLED;
  if (appGaEnabled) {
    this.$gtag.event(action, {
      event_category: category,
      event_label: label,
      value
    });
  }
}
const OctoCat_vue_vue_type_style_index_0_scoped_53eed0c2_lang = "";
const GITHUB_BASE_URL = "https://github.com";
const _sfc_main$4 = {
  name: "OctoCat",
  props: {
    repo: {
      type: String,
      required: true
    },
    blank: {
      type: Boolean,
      default: true
    },
    showFace: {
      type: Boolean,
      default: false
    },
    animatedEye: {
      type: Boolean,
      default: false
    },
    animatedEar: {
      type: Boolean,
      default: false
    },
    animatedArm: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      default: "left-top",
      validator(value) {
        return [
          "left-top",
          "right-top",
          "left-bottom",
          "right-bottom"
        ].includes(value);
      }
    },
    darkMode: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String,
      default: "#64748B"
    },
    color: {
      type: String,
      default: "#ffffff"
    },
    faceColor: {
      type: String,
      default: "#64748B"
    },
    bgColorDark: {
      type: String,
      default: "#ffffff"
    },
    colorDark: {
      type: String,
      default: "#1E293B"
    },
    faceColorDark: {
      type: String,
      default: "#ffffff"
    }
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    }),
    url() {
      const repo = this.repo;
      return "".concat(GITHUB_BASE_URL, "/").concat(repo);
    },
    svgStyle() {
      let positionStyles = {};
      switch (this.position) {
        case "left-top":
          positionStyles = {
            top: 0,
            left: 0,
            transform: "rotate(-90deg)"
          };
          break;
        case "right-top":
          positionStyles = {
            top: 0,
            right: 0
          };
          break;
        case "left-bottom":
          positionStyles = {
            bottom: 0,
            left: 0,
            transform: "rotate(-180deg)"
          };
          break;
        case "right-bottom":
          positionStyles = {
            bottom: 0,
            right: 0,
            transform: "rotate(90deg)"
          };
          break;
      }
      return {
        fill: this.darkMode ? this.bgColorDark : this.bgColor,
        color: this.darkMode ? this.colorDark : this.color,
        position: "absolute",
        border: 0,
        ...positionStyles
      };
    },
    blankAttr() {
      return this.blank ? "_blank" : null;
    },
    relAttr() {
      return this.blank ? "noopener noreferrer" : null;
    }
  },
  methods: {
    track
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-53eed0c2"), n = n(), popScopeId(), n);
const _hoisted_1$3 = ["href", "target", "rel"];
const _hoisted_2$3 = ["fill"];
const _hoisted_3$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", { d: "m249.578,250.294C163.683,162.067 87.406,88.123 -0.422,0.294 H 249.578z" }, null, -1));
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "m194.579,71.296c-2,-4 -5.003,-7.999 -9.003,-11.999 -3.999,-3.999 -7.999,-7.003 -11.999,-9.003 -4,-14 -8.997,-16.998 -8.997,-16.998 -8,3.999 -11.005,8.999 -11.005,10.999 -6,0 -10.997,2.001 -15.997,7.001 -16,16 -10.002,29.997 -2.002,40.997 -3,0 -6.999,0.999 -10.999,4.999 L 113.579,109.297c-2,1 -5.999,-1.001 -5.999,-1.001 l 26.996,26.996c0,0 -1.999,-3.998 0,-4.998 l 14.001,-14.001c2,-3 3.002,-5.995 3.002,-7.995 11,8 23.997,14.998 40.997,-2.001 5,-5 7,-9.997 7,-15.997 -0.903,-9.744 -2.806,-14.230 -4.998,-19z"
}, null, -1));
const _hoisted_5 = ["fill"];
const _hoisted_6 = {
  key: 1,
  fill: "currentColor",
  d: "m152.148,95.779c-0.167,-0.167 -0.439,-0.167 -0.607,-6e-6 -0.669,0.669 -2.203,0.630 -3.256,-0.421 -0.151,-0.151 -0.281,-0.314 -0.390,-0.484 -0.274,-0.424 -0.425,-0.891 -0.491,-1.329 -0.013,-0.087 -0.023,-0.174 -0.030,-0.259 -0.021,-0.254 -0.014,-0.493 0.011,-0.702 0.042,-0.347 0.136,-0.610 0.243,-0.717 0.167,-0.167 0.167,-0.439 0,-0.607 -0.167,-0.167 -0.439,-0.167 -0.607,-10e-7 -0.086,0.086 -0.165,0.201 -0.234,0.337 -0.102,0.205 -0.183,0.460 -0.232,0.749 -0.049,0.288 -0.066,0.609 -0.045,0.945 0.021,0.336 0.082,0.687 0.191,1.036 0.135,0.435 0.346,0.867 0.647,1.260 0.100,0.130 0.210,0.257 0.331,0.378 0.630,0.630 1.382,0.973 2.108,1.079 0.103,0.015 0.206,0.025 0.308,0.031 0.204,0.011 0.405,0.003 0.598,-0.021 0.483,-0.062 0.922,-0.235 1.263,-0.498 0.068,-0.052 0.132,-0.109 0.192,-0.168 0.168,-0.167 0.168,-0.439 3.6e-4,-0.607z"
};
const _hoisted_7 = {
  key: 2,
  fill: "currentColor",
  d: "m150.730,91.109c-0.036,0.186 -0.036,0.378 -1e-5,0.565 0.013,0.069 0.032,0.139 0.055,0.206 0.047,0.135 0.114,0.265 0.203,0.385 0.044,0.059 0.093,0.117 0.147,0.171 0.216,0.216 0.483,0.352 0.763,0.406 0.116,0.022 0.235,0.031 0.353,0.025 0.164,-0.007 0.325,-0.053 0.480,-0.116 0.178,-0.072 0.349,-0.170 0.494,-0.315 0.577,-0.577 0.577,-1.514 1.7e-4,-2.092 -0.288,-0.288 -0.667,-0.433 -1.046,-0.433 -0.016,-2.1e-5 -0.032,0.004 -0.049,0.004 -0.111,0.003 -0.221,0.022 -0.329,0.050 -0.151,0.040 -0.299,0.098 -0.435,0.188 -0.082,0.054 -0.159,0.117 -0.232,0.189 -0.072,0.072 -0.135,0.150 -0.189,0.232 -0.108,0.163 -0.180,0.344 -0.216,0.531z"
};
const _hoisted_8 = {
  key: 3,
  fill: "currentColor",
  d: "m153.954,72.390c0.049,-0.477 0.051,-0.942 0.004,-1.387 -0.047,-0.444 -0.142,-0.869 -0.288,-1.266 -0.145,-0.397 -0.341,-0.767 -0.589,-1.103 -0.123,-0.167 -0.260,-0.327 -0.410,-0.476 -2.395,-2.395 -7.230,-1.443 -10.799,2.126 -3.569,3.569 -4.116,7.999 -1.721,10.394 0.149,0.149 0.307,0.288 0.472,0.414 0.329,0.253 0.688,0.460 1.070,0.621 0.381,0.161 0.787,0.276 1.210,0.344 0.422,0.068 0.863,0.090 1.316,0.066 0.452,-0.024 0.917,-0.095 1.388,-0.212 1.648,-0.411 3.374,-1.394 4.936,-2.956 1.561,-1.561 2.622,-3.365 3.120,-5.101 0.142,-0.496 0.239,-0.986 0.288,-1.464z"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("a", {
    href: $options.url,
    target: $options.blankAttr,
    rel: $options.relAttr,
    class: normalizeClass(["github-corner", $props.position]),
    "aria-label": "View on GitHub",
    onClick: _cache[0] || (_cache[0] = ($event) => $options.track("OctoCat clicked"))
  }, [
    (openBlock(), createElementBlock("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      style: normalizeStyle($options.svgStyle),
      viewBox: "0 0 250 250",
      fill: $props.color,
      height: "80",
      width: "80"
    }, [
      _hoisted_3$1,
      _hoisted_4,
      createBaseVNode("path", {
        fill: "currentColor",
        class: normalizeClass($props.animatedArm ? "octo-arm" : ""),
        d: "m121.286,101.847c-14.999,-9 -8.999,-19 -8.999,-19 2.999,-6.999 1.999,-10.999 1.999,-10.999 -1,-7 3,-1.999 3,-1.999 4,4.999 2,11 2,11 -2.999,9.999 5,14.999 9,15.999",
        style: { "transform-origin": "130px 106px" }
      }, null, 2),
      createBaseVNode("path", {
        fill: "currentColor",
        class: normalizeClass($props.animatedEar ? "octo-ear" : ""),
        d: "m210.616,77.354c0,0 -2.997,-5 -15.997,-7 -0.014,-0.028 0.007,0.014 0,0 -0.007,-0.014 -3.990,0.468 -3.990,0.468 l 5.446,19.797 3.572,-1.284c2.015,-1.004 6.983,-3.016 10.968,-11.981z",
        style: { "transform-origin": "170px 100px" }
      }, null, 2),
      $props.showFace ? (openBlock(), createElementBlock("path", {
        key: 0,
        fill: $props.darkMode ? $props.faceColorDark : $props.faceColor,
        class: "octo-face",
        d: "m157.893,66.610c-3.695,-3.732 -7.911,-5.499 -12.189,-5.109 -4.402,0.402 -7.139,2.856 -7.874,3.598 -7.076,7.147 -5.830,16.656 3.507,26.774 1.749,1.898 3.654,3.889 5.663,5.918 1.988,2.008 3.993,3.970 5.960,5.829 11.661,11.032 19.883,7.516 24.726,2.623 4.699,-4.747 6.925,-12.647 -0.935,-20.588 -0.193,-0.195 -0.515,-0.479 -1.318,-1.179 -1.714,-1.495 -4.904,-4.280 -7.845,-7.250 -3.247,-3.280 -6.325,-6.797 -8.162,-8.899 -0.857,-0.980 -1.279,-1.464 -1.531,-1.718z"
      }, null, 8, _hoisted_5)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", _hoisted_6)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", _hoisted_7)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", _hoisted_8)) : createCommentVNode("", true),
      $props.showFace ? (openBlock(), createElementBlock("path", {
        key: 4,
        fill: "currentColor",
        class: normalizeClass($props.animatedEye ? "octo-eye" : ""),
        d: "m176.110,91.594c-2.395,-2.395 -7.230,-1.443 -10.799,2.126 -3.569,3.569 -4.116,7.999 -1.721,10.394 2.395,2.395 6.825,1.848 10.394,-1.721 3.569,-3.569 4.521,-8.404 2.126,-10.799z",
        style: { "transform-origin": "170px 100px" }
      }, null, 2)) : createCommentVNode("", true)
    ], 12, _hoisted_2$3))
  ], 10, _hoisted_1$3);
}
const OctoCat = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-53eed0c2"]]);
const App_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  components: {
    AppNav,
    VerifyNotice,
    AppFooter,
    OctoCat
  },
  computed: {
    ...mapGetters({
      darkMode: "auth/darkMode"
    }),
    currentRouteName() {
      return this.$route.name;
    },
    isAdminPage() {
      if (this.currentRouteName == "admin" || this.currentRouteName == "roles" || this.currentRouteName == "permissions" || this.currentRouteName == "settings" || this.currentRouteName == "users" || this.currentRouteName == "app-settings" || this.currentRouteName == "phpinfo") {
        return true;
      }
      return false;
    },
    showOctoCat() {
      if (this.currentRouteName == "home" || this.currentRouteName == "about" || this.currentRouteName == "terms") {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast"
    })
  }
};
const _hoisted_1$2 = { class: "min-h-screen bg-white dark:bg-slate-800" };
const _hoisted_2$2 = /* @__PURE__ */ createBaseVNode("div", { id: "top_border" }, null, -1);
const _hoisted_3 = { class: "w-full" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_OctoCat = resolveComponent("OctoCat");
  const _component_VerifyNotice = resolveComponent("VerifyNotice");
  const _component_AppNav = resolveComponent("AppNav");
  const _component_router_view = resolveComponent("router-view");
  const _component_AppFooter = resolveComponent("AppFooter");
  const _component_AppToast = resolveComponent("AppToast");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    _hoisted_2$2,
    $options.showOctoCat ? (openBlock(), createBlock(_component_OctoCat, {
      key: 0,
      repo: "jeremykenedy/laravel-spa",
      position: "right-top",
      "animated-eye": "",
      "animated-ear": "",
      "animated-arm": "",
      "show-face": "",
      "dark-mode": _ctx.darkMode
    }, null, 8, ["dark-mode"])) : createCommentVNode("", true),
    _ctx.$route.name !== "home" && _ctx.$route.name !== "verify-email" && _ctx.authenticated && _ctx.user && _ctx.user.id && !_ctx.user.email_verified_at && !$options.isAdminPage ? (openBlock(), createBlock(_component_VerifyNotice, {
      key: 1,
      id: _ctx.user.id
    }, null, 8, ["id"])) : createCommentVNode("", true),
    !$options.isAdminPage ? (openBlock(), createBlock(_component_AppNav, { key: 2 })) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_3, [
      createVNode(_component_router_view, {
        class: normalizeClass($options.isAdminPage ? "" : "p-6")
      }, {
        default: withCtx(({ Component }) => [
          createVNode(Transition, {
            name: "fade",
            mode: "out-in"
          }, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024)
        ]),
        _: 1
      }, 8, ["class"])
    ]),
    !$options.isAdminPage ? (openBlock(), createBlock(_component_AppFooter, {
      key: 3,
      class: "sticky top-[100vh] w-full"
    })) : createCommentVNode("", true),
    createVNode(_component_AppToast)
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/build/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector('link[href="'.concat(dep, '"]').concat(cssSelector))) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error("Unable to preload CSS for ".concat(dep))));
      });
    }
  })).then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
function auth$1({ store: store2, next }) {
  if (!store2.getters["auth/authenticated"]) {
    return next({
      name: "login"
    });
  }
  return next();
}
function guest({ store: store2, next }) {
  if (store2.getters["auth/authenticated"]) {
    return next({
      name: "dashboard"
    });
  }
  return next();
}
function roleAdmin({ store: store2, next }) {
  if (!store2.getters["auth/authenticated"] || !store2.state.auth.roles.superAdmin && !store2.state.auth.roles.admin) {
    return next({
      name: "NotFound"
    });
  }
  return next();
}
const Home = () => __vitePreload(() => import(
  /* webpackChunkName: "js/HomePage" */
  "./Home-44b7df11.js"
), true ? ["assets/Home-44b7df11.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/GHButtons-1b0fab51.js","assets/Home-23b4b997.css"] : void 0);
const About = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AboutPage" */
  "./About-f544ef5e.js"
), true ? ["assets/About-f544ef5e.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js"] : void 0);
const Terms = () => __vitePreload(() => import(
  /* webpackChunkName: "js/TermsPage" */
  "./Terms-290f2f10.js"
), true ? ["assets/Terms-290f2f10.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js"] : void 0);
const Dashboard = () => __vitePreload(() => import(
  /* webpackChunkName: "js/DashboardPage" */
  "./Dashboard-853dcc8a.js"
), true ? ["assets/Dashboard-853dcc8a.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/RolesBadges-e0cd4aac.js","assets/GHButtons-1b0fab51.js"] : void 0);
const Login = () => __vitePreload(() => import(
  /* webpackChunkName: "js/LoginPage" */
  "./Login-e8aae161.js"
), true ? ["assets/Login-e8aae161.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/SocialiteLogins-e4eaba46.js","assets/vue-axios.esm.min-37be30b6.js"] : void 0);
const ForgotPassword = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ForgotPasswordPage" */
  "./ForgotPassword-5b4487a7.js"
), true ? ["assets/ForgotPassword-5b4487a7.js","assets/Success-6220a55d.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/Errors-88650490.js"] : void 0);
const ResetPassword = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ResetPasswordPage" */
  "./ResetPassword-df3fadcb.js"
), true ? ["assets/ResetPassword-df3fadcb.js","assets/Errors-88650490.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/Success-6220a55d.js"] : void 0);
const Register = () => __vitePreload(() => import(
  /* webpackChunkName: "js/RegisterPage" */
  "./Register-94c70a7e.js"
), true ? ["assets/Register-94c70a7e.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/Errors-88650490.js","assets/SocialiteLogins-e4eaba46.js","assets/vue-axios.esm.min-37be30b6.js"] : void 0);
const VerifyEmail = () => __vitePreload(() => import(
  /* webpackChunkName: "js/VerifyEmailPage" */
  "./VerifyEmail-223c2220.js"
), true ? ["assets/VerifyEmail-223c2220.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/Errors-88650490.js","assets/Success-6220a55d.js"] : void 0);
const Settings = () => __vitePreload(() => import(
  /* webpackChunkName: "js/SettingsPage" */
  "./Settings-af8ed367.js"
), true ? ["assets/Settings-af8ed367.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js"] : void 0);
const Profile = () => __vitePreload(() => import(
  /* webpackChunkName: "js/ProfilePage" */
  "./Profile-2350b9a7.js"
), true ? ["assets/Profile-2350b9a7.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/Errors-88650490.js","assets/Success-6220a55d.js","assets/Profile-d1b0c432.css"] : void 0);
const Password = () => __vitePreload(() => import(
  /* webpackChunkName: "js/PasswordPage" */
  "./Password-671333ae.js"
), true ? ["assets/Password-671333ae.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/Errors-88650490.js","assets/Success-6220a55d.js"] : void 0);
const Account = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AccountPage" */
  "./Account-6b95420f.js"
), true ? ["assets/Account-6b95420f.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/vue-axios.esm.min-37be30b6.js","assets/Account-ad6c6345.css"] : void 0);
const NotFound = () => __vitePreload(() => import(
  /* webpackChunkName: "js/NotFoundPage" */
  "./NotFound-55651e53.js"
), true ? ["assets/NotFound-55651e53.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js"] : void 0);
const AdminLayout = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AdminLayoutPage" */
  "./AdminLayout-8b4d5180.js"
), true ? ["assets/AdminLayout-8b4d5180.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js"] : void 0);
const Admin = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AdminPage" */
  "./Admin-047708eb.js"
), true ? ["assets/Admin-047708eb.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/RolesBadges-e0cd4aac.js","assets/zoho-monocrome-black-46b06f59.js","assets/Admin-93713ccf.css"] : void 0);
const Users = () => __vitePreload(() => import(
  /* webpackChunkName: "js/UsersPage" */
  "./Users-4b0cd26d.js"
), true ? ["assets/Users-4b0cd26d.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/default.css_vue_type_style_index_0_src_true_lang-9b5ba1ec.js","assets/default-0d9e816b.css","assets/Errors-88650490.js","assets/Users-a5c602e1.css"] : void 0);
const Roles = () => __vitePreload(() => import(
  /* webpackChunkName: "js/RolesPage" */
  "./Roles-fc2414e4.js"
), true ? ["assets/Roles-fc2414e4.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/default.css_vue_type_style_index_0_src_true_lang-9b5ba1ec.js","assets/default-0d9e816b.css","assets/Errors-88650490.js","assets/Roles-886fd0e6.css"] : void 0);
const Permissions = () => __vitePreload(() => import(
  /* webpackChunkName: "js/PermissionsPage" */
  "./Permissions-cfc74bd8.js"
), true ? ["assets/Permissions-cfc74bd8.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/default.css_vue_type_style_index_0_src_true_lang-9b5ba1ec.js","assets/default-0d9e816b.css","assets/Errors-88650490.js","assets/Permissions-d0f03d41.css"] : void 0);
const AppSettings = () => __vitePreload(() => import(
  /* webpackChunkName: "js/AppSettingsPage" */
  "./AppSettings-d0fa81ea.js"
), true ? ["assets/AppSettings-d0fa81ea.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js","assets/zoho-monocrome-black-46b06f59.js"] : void 0);
const routes = [
  {
    path: "/",
    // component: () => Home,
    component: Home,
    name: "home"
  },
  {
    path: "/about",
    component: About,
    name: "about"
  },
  {
    path: "/terms",
    component: Terms,
    name: "terms"
  },
  {
    path: "/dashboard",
    component: Dashboard,
    name: "dashboard",
    meta: {
      middleware: [auth$1]
    }
  },
  {
    path: "/admin",
    component: AdminLayout,
    children: [
      {
        path: "",
        name: "admin",
        component: Admin
      },
      {
        path: "users",
        name: "users",
        component: Users
      },
      {
        path: "roles",
        name: "roles",
        component: Roles
      },
      {
        path: "permissions",
        name: "permissions",
        component: Permissions
      },
      {
        path: "phpinfo",
        name: "phpinfo",
        component: defineAsyncComponent(
          () => __vitePreload(() => import("./PhpInfo-80b4a1bd.js"), true ? ["assets/PhpInfo-80b4a1bd.js","assets/vendor-b24fd275.js","assets/__commonjsHelpers__-ebbb3f54.js"] : void 0)
        )
      },
      {
        path: "app-settings",
        name: "app-settings",
        component: AppSettings
      }
    ],
    meta: {
      middleware: [roleAdmin]
    }
  },
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/forgot-password",
    component: ForgotPassword,
    name: "forgot-password",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/reset-password/:token",
    props: (route) => ({
      token: route.params.token,
      email: route.query.email
    }),
    component: ResetPassword,
    name: "reset-password",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: {
      middleware: [guest]
    }
  },
  {
    path: "/verify-email/:id/:hash",
    props: (route) => ({
      id: route.params.id,
      hash: route.params.hash
    }),
    component: VerifyEmail,
    name: "verify-email"
  },
  {
    path: "/settings",
    component: Settings,
    redirect: {
      name: "account"
    },
    name: "settings",
    meta: {
      middleware: [auth$1]
    },
    children: [
      {
        path: "account",
        component: Account,
        name: "account",
        meta: {
          middleware: [auth$1]
        }
      },
      {
        path: "profile",
        component: Profile,
        name: "profile",
        meta: {
          middleware: [auth$1]
        }
      },
      {
        path: "password",
        component: Password,
        name: "password",
        meta: {
          middleware: [auth$1]
        }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound"
  }
];
const toast = {
  namespaced: true,
  state: {
    toast: {
      icon: "success",
      message: null,
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      showCloseButton: false
    }
  },
  getters: {
    toast(state) {
      return state.toast;
    }
  },
  mutations: {
    SET_TOAST(state, data) {
      if (Object.prototype.hasOwnProperty.call(data, "message")) {
        state.toast.message = data.message;
      }
      if (Object.prototype.hasOwnProperty.call(data, "position")) {
        state.toast.position = data.position;
      }
      if (Object.prototype.hasOwnProperty.call(data, "icon")) {
        state.toast.icon = data.icon;
      }
      if (Object.prototype.hasOwnProperty.call(data, "showConfirmButton")) {
        state.toast.showConfirmButton = data.showConfirmButton;
      }
      if (Object.prototype.hasOwnProperty.call(data, "timer")) {
        state.toast.timer = data.timer;
      }
      if (Object.prototype.hasOwnProperty.call(data, "timerProgressBar")) {
        state.toast.timerProgressBar = data.timerProgressBar;
      }
      if (Object.prototype.hasOwnProperty.call(data, "showCloseButton")) {
        state.toast.showCloseButton = data.showCloseButton;
      }
    }
  },
  actions: {
    popToast({ commit }, toast2) {
      commit("SET_TOAST", {
        icon: "success",
        message: null,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 3e3,
        timerProgressBar: true,
        showCloseButton: false
      });
      commit("SET_TOAST", toast2);
    },
    clearToast({ commit }) {
      commit("SET_TOAST", {
        icon: "success",
        message: null,
        position: "bottom-end",
        showConfirmButton: false,
        timer: 0,
        timerProgressBar: true,
        showCloseButton: false
      });
    }
  }
};
const auth = {
  namespaced: true,
  state() {
    return {
      authenticated: false,
      user: null,
      roles: {
        superAdmin: false,
        admin: false,
        moderator: false,
        editor: false,
        user: false
      },
      token: api.get("token"),
      logins: {
        facebook: false,
        twitter: false,
        instagram: false,
        github: false,
        youtube: false,
        google: false,
        linkedin: false,
        twitch: false,
        apple: false,
        microsoft: false,
        tiktok: false,
        zoho: false,
        stackexchange: false,
        gitlab: false,
        reddit: false,
        snapchat: false,
        meetup: false,
        bitbucket: false,
        atlassian: false
        // NEW_PROVIDER_PLUG :: Put New Provider HERE
      },
      currentUserToken: null,
      impersonatorToken: null,
      darkMode: false
    };
  },
  getters: {
    user(state) {
      return state.user;
    },
    roles(state) {
      return state.roles;
    },
    verified(state) {
      if (state.user)
        return state.user.email_verified_at;
      return null;
    },
    id(state) {
      if (state.user)
        return state.user.id;
      return null;
    },
    authenticated(state) {
      return state.authenticated;
    },
    token(state) {
      return state.token;
    },
    logins(state) {
      return state.logins;
    },
    currentUserToken(state) {
      return state.currentUserToken;
    },
    impersonatorToken(state) {
      return state.impersonatorToken;
    },
    darkMode(state) {
      return state.darkMode;
    }
  },
  mutations: {
    SET_AUTHENTICATION(state, value = false) {
      state.authenticated = value;
    },
    SET_USER(state, payload = null) {
      const APP_GA_ENABLED2 = GA_ENABLED;
      GA_TAG;
      state.user = payload;
      if (state && state.user && state.user.id && APP_GA_ENABLED2 == 1) {
        gtag("set", {
          user_id: state.user.id
        });
      }
      if (payload && payload.roles && payload.roles.length > 0) {
        payload.roles.forEach((role, index2) => {
          if (role.name == "Super Admin") {
            state.roles.superAdmin = true;
          }
          if (role.name == "Admin") {
            state.roles.admin = true;
          }
          if (role.name == "Moderator") {
            state.roles.moderator = true;
          }
          if (role.name == "Editor") {
            state.roles.editor = true;
          }
          if (role.name == "User") {
            state.roles.user = true;
          }
        });
      } else {
        state.roles = {
          superAdmin: false,
          admin: false,
          moderator: false,
          editor: false,
          user: false
        };
      }
    },
    SET_THEME(state, payload = null) {
      if (payload) {
        document.documentElement.classList.add("dark");
        state.darkMode = true;
      } else {
        document.documentElement.classList.remove("dark");
        state.darkMode = false;
      }
    },
    SET_TOKEN(state, { token, remember }) {
      state.token = token;
      api.set("token", token, { expires: remember ? 365 : null });
    },
    SET_WORKING_TOKENS(state, payload) {
      state.currentUserToken = payload.currentUserToken;
      state.impersonatorToken = payload.impersonatorToken;
    },
    SET_LOGINS(state, payload = null) {
      if (payload) {
        state.logins = payload;
      }
    },
    LOGOUT(state) {
      state.authenticated = false;
      state.user = null;
      state.roles = {
        superAdmin: false,
        admin: false,
        moderator: false,
        editor: false,
        user: false
      };
      document.documentElement.classList.remove("dark");
      state.token = null;
      state.currentUserToken = null;
      state.impersonatorToken = null;
      api.remove("token");
      window.sessionStorage.clear();
    }
  },
  actions: {
    async login({ dispatch }, payload) {
      try {
        await axios.get("/sanctum/csrf-cookie");
        await axios.post("/api/login", payload).then((res) => dispatch("getUser")).catch((err) => {
          throw err.response;
        });
      } catch (e) {
        throw e;
      }
      router$1.push({ name: "dashboard" });
    },
    async register({ commit }, payload) {
      await axios.get("/sanctum/csrf-cookie");
      const res = await axios.post("/api/register", payload);
      if (res.status == 201 && res && res.data && res.data.user && res.data.user.id) {
        commit("SET_USER", res.data.user);
        commit("SET_THEME", res.data.user.theme_dark);
        commit("SET_AUTHENTICATION", true);
        return res;
      }
      commit("LOGOUT");
      throw res.response;
    },
    async logout({ commit }) {
      await axios.post("/api/logout").then((res) => {
        commit("LOGOUT");
      }).catch((err) => {
      });
      router$1.push({ name: "home" });
    },
    async getUser({ commit }) {
      await axios.get("/api/user").then((res) => {
        if (res && res.data && res.data.id) {
          commit("SET_USER", res.data);
          commit("SET_THEME", res.data.theme_dark);
          commit("SET_AUTHENTICATION", true);
        } else {
          commit("LOGOUT");
        }
      }).catch((err) => {
        commit("LOGOUT");
        throw err.response;
      });
    },
    async getUserByToken({ commit, dispatch }, payload) {
      await axios.post("/api/user-by-token", { token: payload.token }).then((res) => {
        if (res && res.data && res.data.id) {
          commit("SET_USER", res.data);
          commit("SET_THEME", res.data.theme_dark);
          commit("SET_AUTHENTICATION", true);
        } else {
          commit("LOGOUT");
        }
      }).catch((err) => {
        commit("LOGOUT");
        throw err.response;
      });
    },
    async profile({ commit }, payload) {
      const res = await axios.patch("/api/profile", payload);
      if (res.status == 200 && res && res.data && res.data.user && res.data.user.id) {
        commit("SET_USER", res.data.user);
        commit("SET_THEME", res.data.user.theme_dark);
        commit("SET_AUTHENTICATION", true);
        return res;
      }
      throw res.response;
    },
    async theme({ commit }, payload) {
      const res = await axios.patch("/api/theme", payload);
      if (res.status == 200 && res && res.data && res.data.user && res.data.user.id) {
        commit("SET_USER", res.data.user);
        commit("SET_THEME", res.data.user.theme_dark);
        commit("SET_AUTHENTICATION", true);
        return res;
      }
      throw res.response;
    },
    async password({ dispatch }, payload) {
      const res = await axios.patch("/api/password", payload);
      if (res.status == 200 && res && res.data && res.data.message && res.data.message == "Password Updated Successfully") {
        return "Success";
      }
      throw res.response;
    },
    async verifyResend({ dispatch }, payload) {
      const res = await axios.post("/api/verify-resend", payload);
      if (res.status != 200)
        throw res;
      return res;
    },
    async verifyEmail({ dispatch }, payload) {
      const res = await axios.post(
        "/api/verify-email/".concat(payload.id, "/").concat(payload.hash)
      );
      if (res.status != 200)
        throw res;
      dispatch("getUser");
      return res;
    },
    async forgotPassword({ dispatch }, payload) {
      try {
        const response = await axios.post("/api/forgot-password", payload);
        if (response && response.status && response.status == 200 && response.data && response.data.message) {
          return response.data.message;
        }
        throw response;
      } catch (error) {
        throw error;
      }
    },
    async resetPassword({ dispatch }, payload) {
      try {
        const response = await axios.post("/api/reset-password", payload);
        if (response && response.status && response.status == 200 && response.data && response.data.message) {
          return response.data.message;
        }
        throw response;
      } catch (error) {
        throw error;
      }
    },
    async fetchOauthUrl(ctx, { provider }) {
      try {
        const response = await axios.post("/api/oauth/".concat(provider));
        if (response && response.data && response.data.url) {
          return response.data.url;
        }
        throw response;
      } catch (error) {
        throw error;
      }
    },
    async saveToken({ commit, dispatch }, payload) {
      commit("SET_TOKEN", payload);
    },
    async getLogins({ commit }) {
      await axios.get("/api/logins").then((res) => {
        if (res && res.data && res.data.logins) {
          commit("SET_LOGINS", res.data.logins);
        } else {
          throw res;
        }
      }).catch((err) => {
        throw err.response;
      });
    },
    async revokeProvider({ commit, dispatch }, payload) {
      return await axios.post("/api/oauth-revoke/".concat(payload.id)).then((res) => {
        if (res.status && res.status == 200 && res.data && res.data.status && res.data.status == "success" && res.data.user && res.data.user.id) {
          commit("SET_USER", res.data.user);
          return res;
        }
        throw res;
      }).catch((err) => {
        throw err.response;
      });
    },
    async deleteAccount({ commit, dispatch }, payload) {
      return await axios.delete("/api/account/".concat(payload.id, "/delete")).then((res) => {
        if (res.status && res.status == 200 && res.data && res.data.status && res.data.status == "success" && !res.data.user) {
          commit("LOGOUT");
          router$1.push({ name: "home" });
          return res;
        }
        throw res;
      }).catch((err) => {
        throw err.response;
      });
    },
    async impersonateUser({ commit, dispatch }, payload) {
      await axios.get("/api/impersonate/take/".concat(payload.user.id)).then((res) => {
        if (res && res.data && res.data.data && res.data.data.token) {
          commit("LOGOUT");
          commit("SET_WORKING_TOKENS", {
            currentUserToken: res.data.data.token,
            impersonatorToken: res.data.data.impersonatorToken
          });
          dispatch("getUserByToken", { token: res.data.data.token });
          router$1.push({ name: "home" });
          dispatch(
            "toast/popToast",
            {
              message: "Stealh mode activated. You are now acting as ".concat(payload.user.name),
              timer: 5e3,
              icon: "success"
            },
            { root: true }
          );
        } else {
          dispatch(
            "toast/popToast",
            {
              message: "An error occurred, you are still yourself.",
              timer: 5e3,
              icon: "error"
            },
            { root: true }
          );
        }
      }).catch((err) => {
        dispatch(
          "toast/popToast",
          {
            message: "An error occurred, you are still yourself.",
            timer: 5e3,
            icon: "error"
          },
          { root: true }
        );
        throw err.response;
      });
    },
    async leaveImpersonatingUser({ commit, dispatch }, payload) {
      await axios.get("/api/impersonate/leave").then((res) => {
        if (res && res.data && res.data.data && res.data.data.token) {
          commit("LOGOUT");
          dispatch("getUserByToken", { token: res.data.data.token });
          router$1.push({ name: "home" });
          dispatch(
            "toast/popToast",
            {
              message: "You wake up and realize it was all dream!",
              timer: 5e3,
              icon: "success"
            },
            { root: true }
          );
        } else {
          dispatch(
            "toast/popToast",
            {
              message: "An error occurred, you are still are not yourself!",
              timer: 5e3,
              icon: "error"
            },
            { root: true }
          );
        }
      }).catch((err) => {
        dispatch(
          "toast/popToast",
          {
            message: "An error occurred, you are still yourself.",
            timer: 5e3,
            icon: "error"
          },
          { root: true }
        );
        throw err.response;
      });
    }
  }
};
const sidebar = {
  namespaced: true,
  state() {
    return {
      sideBarOpen: false,
      fullScreenSideBarOpen: true
    };
  },
  getters: {
    sideBarOpen: (state) => state.sideBarOpen,
    fullScreenSideBarOpen: (state) => state.fullScreenSideBarOpen
  },
  mutations: {
    toggleSidebar(state) {
      state.sideBarOpen = !state.sideBarOpen;
    },
    toggleFullScreenSidebar(state) {
      state.fullScreenSideBarOpen = !state.fullScreenSideBarOpen;
    }
  },
  actions: {
    toggleSidebar(context) {
      context.commit("toggleSidebar");
    },
    toggleFullScreenSidebar(context) {
      context.commit("toggleFullScreenSidebar");
    }
  }
};
const store = createStore({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    auth,
    toast,
    sidebar
  },
  plugins: [
    sharedMutations({
      predicate: ["SET_USER", "SET_AUTHENTICATION", "SET_THEME"]
    }),
    a({
      storage: window.sessionStorage
    })
  ]
});
function middlewarePipeline(context, middleware, index2) {
  const nextMiddleware = middleware[index2];
  if (!nextMiddleware) {
    return context.next;
  }
  return (params) => {
    if (params) {
      return context.next(params);
    }
    nextMiddleware({
      ...context,
      next: middlewarePipeline(context, middleware, index2 + 1)
    });
  };
}
const router = createRouter({
  history: createWebHistory(),
  routes
});
router.beforeEach((to, from, next) => {
  if (!to.meta.middleware) {
    return next();
  }
  const { middleware } = to.meta;
  const context = {
    to,
    from,
    store,
    next
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1)
  });
});
trackRouter(router);
const router$1 = router;
const _sfc_main$2 = {
  name: "AppButton",
  components: {},
  props: {
    loading: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    text: { type: String, default: "" },
    icon: { type: String, default: null },
    btnClass: { type: String, default: "" },
    primary: { type: Boolean, default: false },
    secondary: { type: Boolean, default: false },
    accent: { type: Boolean, default: false },
    outline: { type: Boolean, default: false },
    success: { type: Boolean, default: false },
    warning: { type: Boolean, default: false },
    danger: { type: Boolean, default: false },
    info: { type: Boolean, default: false },
    transparent: { type: Boolean, default: false }
  },
  data() {
    return {
      //
    };
  },
  computed: {
    hasTextSlot() {
      return this.$slots.text;
    },
    btnClasses() {
      let buttonClasses = "\n        px-4\n        py-3\n        whitespace-nowrap\n        rounded\n        text-base\n        font-medium\n        leading-none\n        shadow-sm\n        transition\n        duration-150\n        ease-in-out\n      ";
      if (this.primary) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-indigo-600\n          hover:bg-indigo-900\n          dark:bg-indigo-600\n          dark:hover:bg-indigo-400\n          border-indigo-600\n          hover:border-indigo-900\n          dark:border-indigo-600\n          dark:hover:border-indigo-400\n          border-1\n          border\n        ";
      } else if (this.secondary) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-slate-600\n          hover:bg-slate-900\n          dark:bg-slate-600\n          dark:hover:bg-slate-400\n          border-slate-600\n          hover:border-slate-900\n          dark:border-slate-600\n          dark:hover:border-slate-400\n          border-1\n          border\n        ";
      } else if (this.info) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-blue-600\n          hover:bg-blue-900\n          dark:bg-blue-600\n          dark:hover:bg-blue-400\n          border-blue-600\n          hover:border-blue-900\n          dark:border-blue-600\n          dark:hover:border-blue-400\n          border-1\n          border\n        ";
      } else if (this.accent) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-teal-600\n          hover:bg-teal-900\n          dark:bg-teal-600\n          dark:hover:bg-teal-400\n          border-teal-600\n          hover:border-teal-900\n          dark:border-teal-600\n          dark:hover:border-teal-400\n          border-1\n          border\n        ";
      } else if (this.success) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-green-600\n          hover:bg-green-900\n          dark:bg-green-600\n          dark:hover:bg-green-400\n          border-green-600\n          hover:border-green-900\n          dark:border-green-600\n          dark:hover:border-green-400\n          border-1\n          border\n        ";
      } else if (this.warning) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-yellow-600\n          hover:bg-yellow-900\n          dark:bg-yellow-600\n          dark:hover:bg-yellow-400\n          border-yellow-600\n          hover:border-yellow-900\n          dark:border-yellow-600\n          dark:hover:border-yellow-400\n          border-1\n          border\n        ";
      } else if (this.danger) {
        buttonClasses += "\n          text-white\n          dark:text-white\n          bg-red-600\n          hover:bg-red-900\n          dark:bg-red-600\n          dark:hover:bg-red-400\n          border-red-600\n          hover:border-red-900\n          dark:border-red-600\n          dark:hover:border-red-400\n          border-1\n          border\n        ";
      } else if (this.transparent) {
        buttonClasses += "";
      } else {
        buttonClasses += "";
      }
      return buttonClasses;
    }
  },
  methods: {
    clickButton() {
      this.$emit("buttonClicked");
    }
  }
};
const _hoisted_1$1 = ["disabled"];
const _hoisted_2$1 = { key: 1 };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass([
      "button inline-flex items-center justify-center",
      ($props.loading || $props.disabled ? "opacity-50 " : "") + $options.btnClasses + " " + $props.btnClass
    ]),
    disabled: $props.loading || $props.disabled,
    onClick: _cache[0] || (_cache[0] = (...args) => $options.clickButton && $options.clickButton(...args))
  }, [
    $options.hasTextSlot ? renderSlot(_ctx.$slots, "text", { key: 0 }) : (openBlock(), createElementBlock("span", _hoisted_2$1, [
      createTextVNode(toDisplayString($props.text) + " ", 1),
      $props.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(["fa-fw", $props.icon])
      }, null, 2)) : createCommentVNode("", true)
    ]))
  ], 10, _hoisted_1$1);
}
const AppButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Toast",
  computed: {
    ...mapGetters({
      toast: "toast/toast"
    })
  },
  watch: {
    toast: {
      deep: true,
      handler(newVal) {
        if (newVal.message) {
          this.popToast();
        }
      }
    }
  },
  methods: {
    ...mapActions({
      clearToast: "toast/clearToast"
    }),
    async popToast() {
      await this.$swal.fire({
        toast: true,
        position: this.toast.position,
        icon: this.toast.icon,
        showConfirmButton: this.toast.showConfirmButton,
        title: this.toast.message,
        timer: this.toast.timer,
        timerProgressBar: this.toast.timerProgressBar,
        showCloseButton: this.toast.showCloseButton,
        didOpen: (toast2) => {
          toast2.addEventListener("mouseenter", this.$swal.stopTimer);
          toast2.addEventListener("mouseleave", this.$swal.resumeTimer);
          toast2.addEventListener("click", () => {
            this.$swal.close();
          });
        },
        showClass: {
          popup: ""
          // icon: ''
        },
        hideClass: {
          popup: ""
        }
      }).then((result) => result);
      this.clearToast();
    }
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
const AppToast = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "AppSwitch",
  components: {
    Switch: ue
    // eslint-disable-line
  },
  props: {
    enabled: { type: Boolean, default: false },
    enableTooltip: { type: Boolean, default: false },
    tooltipOn: { type: String, default: "Enable" },
    tooltipOff: { type: String, default: "Disable" }
  }
};
const _hoisted_1 = { class: "mt-1 inline-block" };
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Use setting", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Switch = resolveComponent("Switch");
  const _directive_tippy = resolveDirective("tippy");
  return withDirectives((openBlock(), createElementBlock("span", _hoisted_1, [
    createVNode(_component_Switch, {
      class: normalizeClass([
        $props.enabled ? "bg-green-600 dark:bg-green-500" : "bg-gray-400 dark:bg-gray-600",
        "relative inline-flex h-[24px] w-[40px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
      ])
    }, {
      default: withCtx(() => [
        _hoisted_2,
        createBaseVNode("span", {
          "aria-hidden": "true",
          class: normalizeClass([
            $props.enabled ? "translate-x-4 bg-white dark:bg-slate-800" : "translate-x-0 bg-white dark:bg-slate-800",
            "pointer-events-none inline-block h-[20px] w-[20px] transform rounded-full shadow-lg ring-0 transition duration-200 ease-in-out"
          ])
        }, null, 2)
      ]),
      _: 1
    }, 8, ["class"])
  ])), [
    [_directive_tippy, $props.enableTooltip ? $props.enabled ? $props.tooltipOff : $props.tooltipOn : null]
  ]);
}
const AppSwitch = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const all_min = "";
function registerSW(options = {}) {
  const {
    immediate = false,
    onNeedRefresh,
    onOfflineReady,
    onRegistered,
    onRegisteredSW,
    onRegisterError
  } = options;
  let wb;
  let registerPromise;
  let sendSkipWaitingMessage;
  const updateServiceWorker = async (_reloadPage = true) => {
    await registerPromise;
    {
      await (sendSkipWaitingMessage == null ? void 0 : sendSkipWaitingMessage());
    }
  };
  async function register() {
    if ("serviceWorker" in navigator) {
      const { Workbox } = await __vitePreload(() => import("./workbox-window.prod.es5-86428182.js"), true ? [] : void 0);
      wb = new Workbox("/YOUR-PROJECT-URL.testsw.js", { scope: "/YOUR-PROJECT-URL.test", type: "classic" });
      sendSkipWaitingMessage = async () => {
        await (wb == null ? void 0 : wb.messageSkipWaiting());
      };
      {
        {
          let onNeedRefreshCalled = false;
          const showSkipWaitingPrompt = () => {
            onNeedRefreshCalled = true;
            wb == null ? void 0 : wb.addEventListener("controlling", (event) => {
              if (event.isUpdate)
                window.location.reload();
            });
            onNeedRefresh == null ? void 0 : onNeedRefresh();
          };
          wb.addEventListener("installed", (event) => {
            if (typeof event.isUpdate === "undefined") {
              if (typeof event.isExternal !== "undefined") {
                if (event.isExternal)
                  showSkipWaitingPrompt();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              } else {
                if (event.isExternal)
                  window.location.reload();
                else
                  !onNeedRefreshCalled && (onOfflineReady == null ? void 0 : onOfflineReady());
              }
            } else if (!event.isUpdate) {
              onOfflineReady == null ? void 0 : onOfflineReady();
            }
          });
          wb.addEventListener("waiting", showSkipWaitingPrompt);
          wb.addEventListener("externalwaiting", showSkipWaitingPrompt);
        }
      }
      wb.register({ immediate }).then((r) => {
        if (onRegisteredSW)
          onRegisteredSW("/YOUR-PROJECT-URL.testsw.js", r);
        else
          onRegistered == null ? void 0 : onRegistered(r);
      }).catch((e) => {
        onRegisterError == null ? void 0 : onRegisterError(e);
      });
    }
  }
  registerPromise = register();
  return updateServiceWorker;
}
axios.defaults.withCredentials = true;
const app = createApp(App);
const APP_GA_TAG = GA_TAG;
const APP_GA_ENABLED = GA_ENABLED;
const VUE_APP_URL = APP_URL;
const VUE_SENTRY_DSN = SENTRY_DSN;
const VUE_SENTRY_ENABLED = SENTRY_ENABLED;
const VUE_SENTRY_FEEDBACK_ENABLED = SENTRY_FEEDBACK_ENABLED;
const VUE_ENVIRONMENT = ENVIRONMENT;
const VUE_TOASTY_ENABLED = KONAMI_TOASTY_ENABLED;
KONAMI_ASTEROIDS_ENABLED;
registerSW({
  onOfflineReady() {
  }
});
if (VUE_SENTRY_ENABLED == 1) {
  init({
    app,
    dsn: VUE_SENTRY_DSN,
    integrations: [
      new BrowserTracing({
        routingInstrumentation: vueRouterInstrumentation(router$1),
        tracePropagationTargets: ["localhost", VUE_APP_URL, /^\//]
      })
    ],
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1,
    trackComponents: true,
    hooks: ["activate", "create", "destroy", "mount", "update"],
    environment: VUE_ENVIRONMENT,
    beforeBreadcrumb(breadcrumb, hint) {
      return breadcrumb.category === "ui.click" ? null : breadcrumb;
    },
    beforeSend(event, hint) {
      if (event.exception) {
        if (VUE_SENTRY_FEEDBACK_ENABLED) {
          showReportDialog({ eventId: event.event_id });
        }
      }
      return event;
    }
  });
}
store.dispatch("auth/getLogins").then(() => {
});
store.dispatch("auth/getUser").then(() => {
  if (VUE_SENTRY_ENABLED == 1) {
    if (store && store.state && store.state.auth && store.state.auth.user && store.state.auth.user.id && store.state.auth.user.name && store.state.auth.user.email && store.state.auth.authenticated) {
      setUser({
        id: store.state.auth.user.id,
        username: store.state.auth.user.name,
        email: store.state.auth.user.email
      });
    } else {
      setUser(null);
    }
  }
  app.use(store).use(router$1).use(VueSweetalert2).use(compiled.ClientTable, {}, "tailwind").use(plugin, {
    directive: "tippy",
    // => v-tippy
    component: "tippy",
    // => <tippy/>
    componentSingleton: "tippy-singleton",
    // => <tippy-singleton/>,
    defaultProps: {
      arrow: true,
      theme: "material",
      animation: "perspective",
      placement: "auto-end",
      allowHTML: true
    }
  }).use(VueSecureHTML).component("AppButton", AppButton).component("AppToast", AppToast).component("AppSwitch", AppSwitch);
  if (VUE_TOASTY_ENABLED == 1) {
    app.use(KonamiCode, {
      callback: function() {
        if (VUE_TOASTY_ENABLED == 1) {
          toasty().trigger();
        }
      }
    });
  }
  if (APP_GA_ENABLED == 1) {
    let UID = null;
    if (store && store.state && store.state.auth && store.state.auth.user && store.state.auth.user.id && store.state.auth.authenticated) {
      UID = store.state.auth.user.id;
    }
    app.use(index, {
      property: {
        id: APP_GA_TAG,
        params: {
          user_id: UID,
          send_page_view: true,
          linker: {
            domain: [VUE_APP_URL]
          }
        }
      }
    });
  }
  app.mount("#app");
});
export {
  AppFooter as A,
  CircleSvg as C,
  _export_sfc as _,
  __vite_legacy_guard,
  parseDisplayDate as a,
  __vitePreload as b,
  capitalizeFirstLetter as c,
  greeting as g,
  providerIcon as p,
  track as t
};
//# sourceMappingURL=app-7a34098f.js.map
