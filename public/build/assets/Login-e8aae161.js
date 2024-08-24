import { al as ArrowRightOnRectangleIcon, m as mapGetters, e as mapActions, r as resolveComponent, l as createElementBlock, i as createBaseVNode, s as withModifiers, n as normalizeClass, p as withDirectives, am as vModelText, t as toDisplayString, k as createCommentVNode, j as createVNode, w as withCtx, o as openBlock, q as createTextVNode, g as createBlock } from "./vendor-b24fd275.js";
import { _ as _export_sfc, C as CircleSvg } from "./app-7a34098f.js";
import { S as SocialiteLogins } from "./SocialiteLogins-e4eaba46.js";
import "./__commonjsHelpers__-ebbb3f54.js";
import "./vue-axios.esm.min-37be30b6.js";
const _sfc_main = {
  name: "Login",
  components: {
    ArrowRightOnRectangleIcon,
    CircleSvg,
    SocialiteLogins
  },
  props: {
    showSmLogin: { type: Boolean, default: true }
  },
  setup() {
    return {};
  },
  data() {
    return {
      loginImage: "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp",
      loginImageAlt: "Login Image",
      form: {
        email: "",
        password: ""
      },
      errors: null,
      loading: false
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
  watch: {},
  methods: {
    ...mapActions({
      appLogin: "auth/login",
      popToast: "toast/popToast"
    }),
    async login() {
      this.loading = true;
      this.errors = null;
      try {
        await this.appLogin(this.form).then((response) => {
          this.loading = false;
        });
      } catch (e) {
        if (e.status === 422) {
          this.errors = e.data.errors;
          this.popToast({
            message: Object.values(this.errors).flat().toString(),
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
const _hoisted_1 = { class: "mx-auto mt-10 max-w-7xl px-4 text-gray-800 sm:px-6" };
const _hoisted_2 = { class: "g-6 flex h-full flex-wrap items-center justify-center lg:justify-between xl:justify-center" };
const _hoisted_3 = { class: "shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12" };
const _hoisted_4 = ["src", "alt"];
const _hoisted_5 = { class: "mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:ml-20 xl:w-5/12" };
const _hoisted_6 = { class: "mb-6 md:mt-16 lg:mt-12" };
const _hoisted_7 = ["disabled"];
const _hoisted_8 = {
  key: 0,
  class: "mt-1 text-sm text-red-500"
};
const _hoisted_9 = { class: "mb-6" };
const _hoisted_10 = ["disabled"];
const _hoisted_11 = {
  key: 0,
  class: "mt-1 text-sm text-red-500"
};
const _hoisted_12 = { class: "mb-6 flex items-center justify-between" };
const _hoisted_13 = /* @__PURE__ */ createBaseVNode("div", { class: "form-group form-check" }, [
  /* @__PURE__ */ createBaseVNode("input", {
    id: "exampleCheck2",
    type: "checkbox",
    class: "form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none"
  }),
  /* @__PURE__ */ createBaseVNode("label", {
    class: "form-check-label mt-1 inline-block cursor-pointer text-gray-800 dark:text-gray-100",
    for: "exampleCheck2"
  }, "Remember me")
], -1);
const _hoisted_14 = { class: "text-center lg:text-left" };
const _hoisted_15 = { class: "mt-4 mb-0 pt-1 text-sm" };
const _hoisted_16 = /* @__PURE__ */ createBaseVNode("span", { class: "mr-2 cursor-default text-gray-700 dark:text-gray-300" }, " Don't have an account? ", -1);
const _hoisted_17 = {
  key: 0,
  class: "mt-5"
};
const _hoisted_18 = /* @__PURE__ */ createBaseVNode("div", { class: "my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-gray-300 after:mt-0.5 after:flex-1 after:border-t after:border-gray-300" }, [
  /* @__PURE__ */ createBaseVNode("p", { class: "mx-4 mb-0 text-center font-semibold" }, "Or")
], -1);
const _hoisted_19 = /* @__PURE__ */ createBaseVNode("h3", { class: "mb-3 font-bold text-gray-700" }, "Login with", -1);
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_ArrowRightOnRectangleIcon = resolveComponent("ArrowRightOnRectangleIcon");
  const _component_CircleSvg = resolveComponent("CircleSvg");
  const _component_AppButton = resolveComponent("AppButton");
  const _component_SocialiteLogins = resolveComponent("SocialiteLogins");
  return openBlock(), createElementBlock("section", null, [
    createBaseVNode("div", _hoisted_1, [
      createBaseVNode("div", _hoisted_2, [
        createBaseVNode("div", _hoisted_3, [
          createBaseVNode("img", {
            src: $data.loginImage,
            class: "w-full",
            alt: $data.loginImageAlt
          }, null, 8, _hoisted_4)
        ]),
        createBaseVNode("div", _hoisted_5, [
          createBaseVNode("form", {
            onSubmit: _cache[2] || (_cache[2] = withModifiers((...args) => $options.login && $options.login(...args), ["prevent"]))
          }, [
            createBaseVNode("div", _hoisted_6, [
              createBaseVNode("label", {
                for: "email",
                class: normalizeClass(["text-small mb-2 inline-block hidden", { "text-red-500": $data.errors && $data.errors.email }])
              }, " E-mail Address ", 2),
              withDirectives(createBaseVNode("input", {
                id: "email",
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.form.email = $event),
                type: "text",
                class: normalizeClass(["form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none", { "border-red-500": $data.errors && $data.errors.email }]),
                disabled: $data.loading,
                placeholder: "Email Address"
              }, null, 10, _hoisted_7), [
                [vModelText, $data.form.email]
              ]),
              $data.errors && $data.errors.email ? (openBlock(), createElementBlock("div", _hoisted_8, toDisplayString($data.errors.email[0]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_9, [
              createBaseVNode("label", {
                for: "password",
                class: normalizeClass(["text-small mb-2 inline-block hidden", { "text-red-500": $data.errors && $data.errors.password }])
              }, " Password ", 2),
              withDirectives(createBaseVNode("input", {
                id: "password",
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.form.password = $event),
                type: "password",
                autocomplete: "on",
                class: normalizeClass(["form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-4 py-2 text-xl font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none", { "border-red-500": $data.errors && $data.errors.password }]),
                disabled: $data.loading,
                placeholder: "Password"
              }, null, 10, _hoisted_10), [
                [vModelText, $data.form.password]
              ]),
              $data.errors && $data.errors.password ? (openBlock(), createElementBlock("div", _hoisted_11, toDisplayString($data.errors.password[0]), 1)) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", _hoisted_12, [
              _hoisted_13,
              createVNode(_component_router_link, {
                to: { name: "forgot-password" },
                class: "text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-gray-100"
              }, {
                default: withCtx(() => [
                  createTextVNode(" Forgot password? ")
                ]),
                _: 1
              })
            ]),
            createBaseVNode("div", _hoisted_14, [
              createVNode(_component_AppButton, {
                primary: "",
                loading: $data.loading,
                disabled: $data.loading,
                text: $data.loading ? "Login" : "Login",
                "btn-class": "leading-snug px-7 py-3 text-sm uppercase leading-snug shadow-md",
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
                  createTextVNode(" Login ")
                ]),
                _: 1
              }, 8, ["loading", "disabled", "text"]),
              createBaseVNode("p", _hoisted_15, [
                _hoisted_16,
                createVNode(_component_router_link, {
                  to: { name: "register" },
                  class: "font-bold text-red-500 transition duration-200 ease-in-out hover:text-red-700 focus:text-red-700"
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Register ")
                  ]),
                  _: 1
                })
              ]),
              $options.socialLoginsEnabled ? (openBlock(), createElementBlock("div", _hoisted_17, [
                _hoisted_18,
                _hoisted_19,
                createVNode(_component_SocialiteLogins)
              ])) : createCommentVNode("", true)
            ])
          ], 32)
        ])
      ])
    ])
  ]);
}
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Login as default
};
//# sourceMappingURL=Login-e8aae161.js.map
