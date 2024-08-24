import { a9 as BoltIcon, aa as ChatBubbleBottomCenterTextIcon, ab as GlobeAltIcon, ac as ScaleIcon, I as InformationCircleIcon, r as resolveComponent, l as createElementBlock, i as createBaseVNode, j as createVNode, ad as Fragment, ae as renderList, o as openBlock, g as createBlock, F as resolveDynamicComponent, t as toDisplayString } from "./vendor-b24fd275.js";
import { _ as _export_sfc } from "./app-7a34098f.js";
import "./__commonjsHelpers__-ebbb3f54.js";
const _sfc_main = {
  name: "About",
  components: {
    BoltIcon,
    ChatBubbleBottomCenterTextIcon,
    GlobeAltIcon,
    ScaleIcon,
    InformationCircleIcon
  },
  props: {},
  data() {
    return {
      features: [
        {
          name: "Vue 3",
          description: "Vue (pronounced /vjuː/, like view) is a JavaScript framework for building user interfaces. It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and component-based programming model that helps you efficiently develop user interfaces, be they simple or complex.",
          icon: GlobeAltIcon
        },
        {
          name: "Tailwind CSS",
          description: "Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file. It's fast, flexible, and reliable — with zero-runtime.",
          icon: ScaleIcon
        },
        {
          name: "Socialite",
          description: "Laravel Socialite provides an expressive, fluent interface to OAuth authentication with Facebook, Twitter, Google, LinkedIn, GitHub, GitLab and Bitbucket. It handles almost all of the boilerplate social authentication code you are dreading writing.",
          icon: BoltIcon
        },
        {
          name: "Laravel 9",
          description: "Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.Laravel is a web application framework with expressive, elegant syntax.",
          icon: ChatBubbleBottomCenterTextIcon
        }
      ]
    };
  },
  computed: {},
  created() {
  },
  mounted() {
  },
  methods: {}
};
const _hoisted_1 = { class: "py-12" };
const _hoisted_2 = { class: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" };
const _hoisted_3 = { class: "lg:text-center" };
const _hoisted_4 = { class: "mb-5 flex items-center justify-between" };
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("h2", { class: "text-lg font-semibold text-indigo-600 dark:text-gray-100" }, " Vue Tailwind CSS ", -1);
const _hoisted_6 = /* @__PURE__ */ createBaseVNode("p", { class: "mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl" }, " A better way to single page app ", -1);
const _hoisted_7 = /* @__PURE__ */ createBaseVNode("p", { class: "mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto" }, " A Laravel 9, Vite 3, Vue 3 SPA (w/ Vue Router), Tailwind CSS (w/ Forms Plugin & Aspect Ratio Plugin), Axios, Headless UI, Heroicons, eslint, & TypeScript starter template. ", -1);
const _hoisted_8 = { class: "mt-10" };
const _hoisted_9 = { class: "space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0" };
const _hoisted_10 = { class: "absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-white" };
const _hoisted_11 = { class: "ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-gray-100" };
const _hoisted_12 = { class: "mt-2 ml-16 text-base text-gray-500 dark:text-gray-300" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_InformationCircleIcon = resolveComponent("InformationCircleIcon");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createBaseVNode("div", _hoisted_3, [
        createBaseVNode("div", _hoisted_4, [
          createVNode(_component_InformationCircleIcon, { class: "r-2 flex h-20 w-20 w-0 flex-1 justify-start text-indigo-400 dark:text-indigo-200" })
        ]),
        _hoisted_5,
        _hoisted_6,
        _hoisted_7
      ]),
      createBaseVNode("div", _hoisted_8, [
        createBaseVNode("dl", _hoisted_9, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.features, (feature) => {
            return openBlock(), createElementBlock("div", {
              key: feature.name,
              class: "relative"
            }, [
              createBaseVNode("dt", null, [
                createBaseVNode("div", _hoisted_10, [
                  (openBlock(), createBlock(resolveDynamicComponent(feature.icon), {
                    class: "h-6 w-6",
                    "aria-hidden": "true"
                  }))
                ]),
                createBaseVNode("p", _hoisted_11, toDisplayString(feature.name), 1)
              ]),
              createBaseVNode("dd", _hoisted_12, toDisplayString(feature.description), 1)
            ]);
          }), 128))
        ])
      ])
    ])
  ]);
}
const About = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  About as default
};
//# sourceMappingURL=About-f544ef5e.js.map
