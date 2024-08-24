import { al as ArrowRightOnRectangleIcon, m as mapGetters, e as mapActions, r as resolveComponent, l as createElementBlock, i as createBaseVNode, g as createBlock, k as createCommentVNode, s as withModifiers, n as normalizeClass, p as withDirectives, am as vModelText, j as createVNode, w as withCtx, o as openBlock, q as createTextVNode } from "./vendor-b24fd275.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-7a34098f.js";
import { E as Errors } from "./Errors-88650490.js";
import { S as SocialiteLogins } from "./SocialiteLogins-e4eaba46.js";
import "./__commonjsHelpers__-ebbb3f54.js";
import "./vue-axios.esm.min-37be30b6.js";
const _sfc_main = {
  components: {
    ArrowRightOnRectangleIcon,
    CircleSvg,
    Errors,
    SocialiteLogins
  },
  props: {
    showSmLogin: { type: Boolean, default: true }
  },
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: ""
      },
      errors: null,
      loading: false,
      useInlineMessage: false
    };
  },
  computed: {
    ...mapGetters({
      logins: "auth/logins"
    }),
    socialLoginsEnabled() {
      if (!this.showSmLogin) {
        return false;
      }
      const a = Object.values(this.logins);
      const b = a.find((v) => v == "1");
      if (b) {
        return true;
      }
      return false;
    }
  },
  methods: {
    ...mapActions({
      registerApp: "auth/register",
      popToast: "toast/popToast"
    }),
    async register() {
      this.loading = true;
      this.errors = null;
      this.success = "";
      try {
        await this.registerApp(this.form).then((response) => {
          this.loading = false;
          this.$router.push({ name: "dashboard" });
        });
      } catch (e) {
        if (e.response.status === 422) {
          this.errors = e.response.data.errors;
          this.popToast({
            message: Object.values(e.response.data.errors).flat().toString(),
            timer: 5e3,
            icon: "error"
          });
        }
        if (e.status === 401) {
          this.popToast({
            message: "Invalid Email or Password",
            timer: 5e3,
            icon: "error"
          });
        }
        this.loading = false;
      }
    }
  }
};
const _hoisted_1 = { class: "mx-auto max-w-screen-md text-gray-900" };
const _hoisted_2 = { class: "flex justify-center" };
const _hoisted_3 = { class: "flex-1" };
const _hoisted_4 = { class: "w-auto rounded border" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("div", { class: "border-b p-4 font-semibold text-gray-600" }, "Register", -1);
const _hoisted_6 = { class: "rounded bg-white p-4 dark:bg-slate-800" };
const _hoisted_7 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_8 = ["disabled"];
const _hoisted_9 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_10 = ["disabled"];
const _hoisted_11 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_12 = ["disabled"];
const _hoisted_13 = { class: "my-1 w-full py-2 sm:flex sm:items-center sm:justify-between" };
const _hoisted_14 = ["disabled"];
const _hoisted_15 = { class: "my-1 w-full rounded py-2 sm:flex sm:items-center sm:justify-end" };
const _hoisted_16 = { class: "mt-3 flex w-full items-center justify-between rounded sm:mt-0 sm:w-8/12" };
const _hoisted_17 = { class: "text-sm" };
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("span", { class: "mr-1 cursor-default text-gray-700 dark:text-gray-200" }, " Already a member? ", -1);
const _hoisted_19 = {
  key: 1,
  class: "mt-5"
};
const _hoisted_20 = /* @__PURE__ */ createBaseVNode("div", { class: "my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "mx-4 mb-0 text-center font-semibold" }, "Or")
], -1);
const _hoisted_21 = /* @__PURE__ */ createBaseVNode("h3", { class: "mb-3 font-bold text-gray-700" }, "Register with", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_errors = resolveComponent("errors");
  const _component_ArrowRightOnRectangleIcon = resolveComponent("ArrowRightOnRectangleIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_router_link = resolveComponent("router-link");
  const _component_SocialiteLogins = resolveComponent("SocialiteLogins");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          _hoisted_5,
          createBaseVNode("div", _hoisted_6, [
            $data.errors && $data.useInlineMessage ? (openBlock(), createBlock(_component_errors, {
              key: 0,
              content: $data.errors,
              type: "error",
              onClose: _cache[0] || (_cache[0] = ($event) => $data.errors = null)
            }, null, 8, ["content"])) : createCommentVNode("", true),
            createBaseVNode("form", {
              class: "mx-auto w-full rounded md:w-10/12 md:p-4",
              onSubmit: _cache[5] || (_cache[5] = withModifiers((...args) => $options.register && $options.register(...args), ["prevent"]))
            }, [
              createBaseVNode("div", _hoisted_7, [
                createBaseVNode("label", {
                  for: "Name",
                  class: normalizeClass([
                    "w-4/12",
                    $data.errors && $data.errors.name ? "text-red-500" : "text-gray-700 dark:text-gray-200"
                  ])
                }, " Name ", 2),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.name = $event),
                  type: "text",
                  name: "name",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.name }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_8), [
                  [vModelText, $data.form.name]
                ])
              ]),
              createBaseVNode("div", _hoisted_9, [
                createBaseVNode("label", {
                  for: "Email",
                  class: normalizeClass([
                    "w-4/12",
                    $data.errors && $data.errors.email ? "text-red-500" : "text-gray-700 dark:text-gray-200"
                  ])
                }, " Email ", 2),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.form.email = $event),
                  type: "email",
                  name: "email",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.email }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_10), [
                  [vModelText, $data.form.email]
                ])
              ]),
              createBaseVNode("div", _hoisted_11, [
                createBaseVNode("label", {
                  for: "Password",
                  class: normalizeClass([
                    "w-4/12",
                    $data.errors && $data.errors.password ? "text-red-500" : "text-gray-700 dark:text-gray-200"
                  ])
                }, " Password ", 2),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.form.password = $event),
                  type: "password",
                  name: "password",
                  autocomplete: "on",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.password }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_12), [
                  [vModelText, $data.form.password]
                ])
              ]),
              createBaseVNode("div", _hoisted_13, [
                createBaseVNode("label", {
                  for: "Password confirm",
                  class: normalizeClass([
                    "w-4/12",
                    $data.errors && $data.errors.password ? "text-red-500" : "text-gray-700 dark:text-gray-200"
                  ])
                }, " Confirm Password ", 2),
                withDirectives(createBaseVNode("input", {
                  "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.form.password_confirmation = $event),
                  type: "password",
                  name: "password_confirmation",
                  class: normalizeClass([{ "border-red-500": $data.errors && $data.errors.password }, "mt-3 w-full rounded border border-gray-300 bg-white p-2 focus:outline-none sm:mt-0 sm:w-8/12"]),
                  disabled: $data.loading
                }, null, 10, _hoisted_14), [
                  [vModelText, $data.form.password_confirmation]
                ])
              ]),
              createBaseVNode("div", _hoisted_15, [
                createBaseVNode("div", _hoisted_16, [
                  createVNode(_component_AppButton, {
                    primary: "",
                    loading: $data.loading,
                    disabled: $data.loading,
                    text: $data.loading ? "Register" : "Register",
                    "btn-class": "uppercase leading-snug inline-block rounded bg-blue-600 px-7 py-3 text-sm font-medium uppercase leading-snug text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg ",
                    type: "submit"
                  }, {
                    text: withCtx(() => [
                      !$data.loading ? (openBlock(), createBlock(_component_ArrowRightOnRectangleIcon, {
                        key: 0,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      $data.loading ? (openBlock(), createBlock(_component_CircleSvg, {
                        key: 1,
                        class: "mr-2 h-6 w-6"
                      })) : createCommentVNode("", true),
                      createTextVNode(" Register ")
                    ]),
                    _: 1
                  }, 8, ["loading", "disabled", "text"]),
                  createBaseVNode("span", _hoisted_17, [
                    _hoisted_18,
                    createVNode(_component_router_link, {
                      to: { name: "login" },
                      class: "text-sm font-bold text-blue-500 hover:text-blue-300"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(" Sign In ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ])
            ], 32),
            $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_19, [
              _hoisted_20,
              _hoisted_21,
              createVNode(_component_SocialiteLogins)
            ])) : createCommentVNode("", true)
          ])
        ])
      ])
    ])
  ]);
}
const Register = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Register as default
};
//# sourceMappingURL=Register-94c70a7e.js.map
