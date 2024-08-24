import { r as resolveComponent, o as openBlock, g as createBlock, w as withCtx, i as createBaseVNode, t as toDisplayString, s as withModifiers, z as pushScopeId, E as popScopeId, l as createElementBlock, k as createCommentVNode, q as createTextVNode, a8 as ChatBubbleLeftEllipsisIcon, m as mapGetters, j as createVNode } from "./vendor-b24fd275.js";
import { G as GHButtons } from "./GHButtons-1b0fab51.js";
import { _ as _export_sfc, t as track } from "./app-7a34098f.js";
import "./__commonjsHelpers__-ebbb3f54.js";
const BmcButtons_vue_vue_type_style_index_0_scoped_1551e6d8_lang = "";
const _sfc_main$3 = {
  name: "BmcButtons",
  props: {
    baseUrl: { type: String, default: "https://www.buymeacoffee.com/" },
    bmcUser: { type: String, default: "jeremykenedy" },
    bmcText: { type: String, default: "Buy me a coffee" }
  },
  methods: {
    track,
    openLink() {
      this.track("Clicked " + this.bmcText + " Button");
      window.open(this.baseUrl + this.bmcUser, "_blank");
    }
  }
};
const _withScopeId$1 = (n) => (pushScopeId("data-v-1551e6d8"), n = n(), popScopeId(), n);
const _hoisted_1$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("svg", {
  width: "25",
  height: "22",
  viewBox: "0 0 25 22",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink"
}, [
  /* @__PURE__ */ createBaseVNode("title", null, "Coffee Cup"),
  /* @__PURE__ */ createBaseVNode("g", {
    id: "Canvas",
    transform: "translate(-5180 -696)"
  }, [
    /* @__PURE__ */ createBaseVNode("g", { id: "Group" }, [
      /* @__PURE__ */ createBaseVNode("g", { id: "Combined Shape" }, [
        /* @__PURE__ */ createBaseVNode("use", {
          "xlink:href": "#path0_fill",
          transform: "translate(5201.49 697.468)",
          fill: "#FFFFFF"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", { id: "Logo" }, [
        /* @__PURE__ */ createBaseVNode("g", { id: "Fill 1" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path1_fill",
            transform: "translate(5188.19 700.863)",
            fill: "#FF9100"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Fill 2" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path2_fill",
            transform: "translate(5188.19 700.863)",
            fill: "#FFDD00"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Fill 3" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path3_fill",
            transform: "translate(5186.75 699.413)",
            fill: "#FFFFFF"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Stroke 4" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path4_stroke",
            transform: "translate(5186.75 699.413)"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Fill 6" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path5_fill",
            transform: "translate(5188.24 697.056)",
            fill: "#FFFFFF"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Group 11" }, [
          /* @__PURE__ */ createBaseVNode("g", { id: "Stroke 7" }, [
            /* @__PURE__ */ createBaseVNode("use", {
              "xlink:href": "#path6_stroke",
              transform: "translate(5188.24 697.056)",
              fill: "#050505"
            })
          ]),
          /* @__PURE__ */ createBaseVNode("g", { id: "Stroke 9" }, [
            /* @__PURE__ */ createBaseVNode("use", {
              "xlink:href": "#path7_stroke",
              transform: "translate(5187.29 700.863)"
            })
          ])
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Fill 12" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path8_fill",
            transform: "translate(5187.07 705.304)",
            fill: "#FFFFFF"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { id: "Stroke 13" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path9_stroke",
            transform: "translate(5187.07 705.304)"
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        id: "Oval",
        opacity: "0.2"
      }, [
        /* @__PURE__ */ createBaseVNode("mask", { id: "mask0_outline_ins" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path10_fill",
            fill: "white",
            transform: "translate(5180.65 701.166)"
          })
        ]),
        /* @__PURE__ */ createBaseVNode("g", { mask: "url(#mask0_outline_ins)" }, [
          /* @__PURE__ */ createBaseVNode("use", {
            "xlink:href": "#path11_stroke_2x",
            transform: "translate(5180.65 701.166)",
            fill: "#FFFFFF"
          })
        ])
      ]),
      /* @__PURE__ */ createBaseVNode("g", {
        id: "Oval",
        opacity: "0.2"
      }, [
        /* @__PURE__ */ createBaseVNode("use", {
          "xlink:href": "#path12_fill",
          transform: "translate(5200.84 707.692)",
          fill: "#FFFFFF"
        })
      ]),
      /* @__PURE__ */ createBaseVNode("g", { id: "Oval" }, [
        /* @__PURE__ */ createBaseVNode("use", {
          "xlink:href": "#path12_fill",
          transform: "translate(5184.56 712.696)",
          fill: "#FFFFFF"
        })
      ])
    ])
  ]),
  /* @__PURE__ */ createBaseVNode("defs", null, [
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path0_fill",
      "fill-rule": "evenodd",
      d: "M 1.11914 0.172241C 1.02246 0.272827 0.962891 0.409363 0.962891 0.559753L 0.962891 0.962952L 0.55957 0.962952C 0.250488 0.962952 0 1.21356 0 1.52277C 0 1.83191 0.250488 2.08252 0.55957 2.08252L 0.962891 2.08252L 0.962891 2.48566C 0.962891 2.7948 1.21338 3.04547 1.52246 3.04547C 1.83203 3.04547 2.08252 2.7948 2.08252 2.48566L 2.08252 2.08252L 2.48584 2.08252C 2.79492 2.08252 3.04541 1.83191 3.04541 1.52277C 3.04541 1.21356 2.79492 0.962952 2.48584 0.962952L 2.08252 0.962952L 2.08252 0.559753C 2.08252 0.25061 1.83203 0 1.52246 0C 1.36377 0 1.2207 0.06604 1.11914 0.172241Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path1_fill",
      "fill-rule": "evenodd",
      d: "M 5.02978 0.0305451L 0 0L 2.46998 15.7258L 3.00889 15.7258L 7.94885 15.7258L 8.48776 15.7258L 10.9577 0L 5.02978 0.0305451Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path2_fill",
      "fill-rule": "evenodd",
      d: "M 5.02978 0.0305451L 0 0L 2.46998 15.7258L 3.00889 15.7258L 6.69141 15.7258L 7.23031 15.7258L 9.7003 0L 5.02978 0.0305451Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path3_fill",
      "fill-rule": "evenodd",
      d: "M 0 1.45021L 12.9786 1.45021L 12.9786 0L 0 0L 0 1.45021Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path4_stroke",
      d: "M 0 1.45021L -0.440282 1.45021L -0.440282 1.8905L 0 1.8905L 0 1.45021ZM 12.9786 1.45021L 12.9786 1.8905L 13.4189 1.8905L 13.4189 1.45021L 12.9786 1.45021ZM 12.9786 0L 13.4189 0L 13.4189 -0.440282L 12.9786 -0.440282L 12.9786 0ZM 0 0L 0 -0.440282L -0.440282 -0.440282L -0.440282 0L 0 0ZM 0 1.8905L 12.9786 1.8905L 12.9786 1.00993L 0 1.00993L 0 1.8905ZM 13.4189 1.45021L 13.4189 0L 12.5384 0L 12.5384 1.45021L 13.4189 1.45021ZM 12.9786 -0.440282L 0 -0.440282L 0 0.440282L 12.9786 0.440282L 12.9786 -0.440282ZM -0.440282 0L -0.440282 1.45021L 0.440282 1.45021L 0.440282 0L -0.440282 0Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path5_fill",
      "fill-rule": "evenodd",
      d: "M 8.98176 0L 5.88305 0L 4.04179 0L 0.943084 0L 0 2.17532L 4.04179 2.17532L 5.88305 2.17532L 9.92484 2.17532L 8.98176 0Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path6_stroke",
      d: "M 8.98176 0L 9.38571 -0.175129L 9.27076 -0.440282L 8.98176 -0.440282L 8.98176 0ZM 0.943084 0L 0.943084 -0.440282L 0.654085 -0.440282L 0.539131 -0.175129L 0.943084 0ZM 0 2.17532L -0.403953 2.00019L -0.670758 2.6156L 0 2.6156L 0 2.17532ZM 9.92484 2.17532L 9.92484 2.6156L 10.5956 2.6156L 10.3288 2.00019L 9.92484 2.17532ZM 8.98176 -0.440282L 5.88305 -0.440282L 5.88305 0.440282L 8.98176 0.440282L 8.98176 -0.440282ZM 5.88305 -0.440282L 4.04179 -0.440282L 4.04179 0.440282L 5.88305 0.440282L 5.88305 -0.440282ZM 4.04179 -0.440282L 0.943084 -0.440282L 0.943084 0.440282L 4.04179 0.440282L 4.04179 -0.440282ZM 0.539131 -0.175129L -0.403953 2.00019L 0.403953 2.35045L 1.34704 0.175129L 0.539131 -0.175129ZM 0 2.6156L 4.04179 2.6156L 4.04179 1.73504L 0 1.73504L 0 2.6156ZM 4.04179 2.6156L 5.88305 2.6156L 5.88305 1.73504L 4.04179 1.73504L 4.04179 2.6156ZM 5.88305 2.6156L 9.92484 2.6156L 9.92484 1.73504L 5.88305 1.73504L 5.88305 2.6156ZM 10.3288 2.00019L 9.38571 -0.175129L 8.5778 0.175129L 9.52089 2.35045L 10.3288 2.00019Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path7_stroke",
      d: "M 5.92796 0.0305451L 5.92569 0.470845L 5.93023 0.470821L 5.92796 0.0305451ZM 0 0L 0.00226862 -0.440276L -0.515251 -0.442943L -0.43495 0.0683159L 0 0ZM 2.46998 15.7258L 2.03503 15.7941L 2.09346 16.166L 2.46998 16.166L 2.46998 15.7258ZM 9.38594 15.7258L 9.38594 16.166L 9.76246 16.166L 9.82089 15.7941L 9.38594 15.7258ZM 11.8559 0L 12.2909 0.0683159L 12.3712 -0.442943L 11.8537 -0.440276L 11.8559 0ZM 5.93023 -0.409731L 0.00226862 -0.440276L -0.00226862 0.440276L 5.92569 0.470821L 5.93023 -0.409731ZM -0.43495 0.0683159L 2.03503 15.7941L 2.90493 15.6574L 0.43495 -0.0683159L -0.43495 0.0683159ZM 2.46998 16.166L 3.00889 16.166L 3.00889 15.2855L 2.46998 15.2855L 2.46998 16.166ZM 3.00889 16.166L 8.84703 16.166L 8.84703 15.2855L 3.00889 15.2855L 3.00889 16.166ZM 8.84703 16.166L 9.38594 16.166L 9.38594 15.2855L 8.84703 15.2855L 8.84703 16.166ZM 9.82089 15.7941L 12.2909 0.0683159L 11.421 -0.0683159L 8.95099 15.6574L 9.82089 15.7941ZM 11.8537 -0.440276L 5.92569 -0.409731L 5.93023 0.470821L 11.8582 0.440276L 11.8537 -0.440276Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path8_fill",
      "fill-rule": "evenodd",
      d: "M 12.2601 0L 6.34287 0L 5.91723 0L 0 0L 1.10682 6.25405L 6.13005 6.19953L 11.1533 6.25405L 12.2601 0Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path9_stroke",
      d: "M 12.2601 0L 12.6936 0.0767275L 12.7851 -0.440282L 12.2601 -0.440282L 12.2601 0ZM 0 0L 0 -0.440282L -0.525044 -0.440282L -0.433545 0.0767275L 0 0ZM 1.10682 6.25405L 0.673277 6.33077L 0.73833 6.69835L 1.1116 6.6943L 1.10682 6.25405ZM 6.13005 6.19953L 6.13483 5.75917L 6.12527 5.75927L 6.13005 6.19953ZM 11.1533 6.25405L 11.1485 6.6943L 11.5218 6.69835L 11.5868 6.33077L 11.1533 6.25405ZM 12.2601 -0.440282L 6.34287 -0.440282L 6.34287 0.440282L 12.2601 0.440282L 12.2601 -0.440282ZM 6.34287 -0.440282L 5.91723 -0.440282L 5.91723 0.440282L 6.34287 0.440282L 6.34287 -0.440282ZM 5.91723 -0.440282L 0 -0.440282L 0 0.440282L 5.91723 0.440282L 5.91723 -0.440282ZM -0.433545 0.0767275L 0.673277 6.33077L 1.54037 6.17732L 0.433545 -0.0767275L -0.433545 0.0767275ZM 1.1116 6.6943L 6.13483 6.63978L 6.12527 5.75927L 1.10204 5.81379L 1.1116 6.6943ZM 6.12527 6.63978L 11.1485 6.6943L 11.1581 5.81379L 6.13483 5.75927L 6.12527 6.63978ZM 11.5868 6.33077L 12.6936 0.0767275L 11.8266 -0.0767275L 10.7197 6.17732L 11.5868 6.33077Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path10_fill",
      "fill-rule": "evenodd",
      d: "M 1.845 3.69804C 2.86397 3.69804 3.69001 2.87021 3.69001 1.84902C 3.69001 0.827835 2.86397 0 1.845 0C 0.826036 0 0 0.827835 0 1.84902C 0 2.87021 0.826036 3.69804 1.845 3.69804Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path11_stroke_2x",
      d: "M 1.845 5.11673C 3.6504 5.11673 5.10869 3.65082 5.10869 1.84902L 2.27132 1.84902C 2.27132 2.0896 2.07754 2.27936 1.845 2.27936L 1.845 5.11673ZM 5.10869 1.84902C 5.10869 0.0472286 3.6504 -1.41869 1.845 -1.41869L 1.845 1.41869C 2.07754 1.41869 2.27132 1.60844 2.27132 1.84902L 5.10869 1.84902ZM 1.845 -1.41869C 0.0396073 -1.41869 -1.41869 0.0472286 -1.41869 1.84902L 1.41869 1.84902C 1.41869 1.60844 1.61246 1.41869 1.845 1.41869L 1.845 -1.41869ZM -1.41869 1.84902C -1.41869 3.65082 0.0396073 5.11673 1.845 5.11673L 1.845 2.27936C 1.61246 2.27936 1.41869 2.0896 1.41869 1.84902L -1.41869 1.84902Z"
    }),
    /* @__PURE__ */ createBaseVNode("path", {
      id: "path12_fill",
      "fill-rule": "evenodd",
      d: "M 0.868237 1.74026C 1.34775 1.74026 1.73647 1.35069 1.73647 0.870128C 1.73647 0.38957 1.34775 0 0.868237 0C 0.388723 0 0 0.38957 0 0.870128C 0 1.35069 0.388723 1.74026 0.868237 1.74026Z"
    })
  ])
], -1));
const _hoisted_2$3 = { class: "ml-2 text-3xl font-medium" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createBlock(_component_AppButton, {
    text: "Buy me a coffee",
    type: "button",
    class: "bmc-button inline-block rounded-lg bg-yellow-300 pl-5 pr-6 pt-2 pb-2 shadow-lg hover:bg-yellow-400 hover:shadow-none",
    onClick: withModifiers($options.openLink, ["prevent"])
  }, {
    text: withCtx(() => [
      _hoisted_1$3,
      createBaseVNode("span", _hoisted_2$3, toDisplayString($props.bmcText), 1)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const BmcButtons = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-1551e6d8"]]);
const PatreonButton_vue_vue_type_style_index_0_scoped_3b59d3fb_lang = "";
const _sfc_main$2 = {
  name: "BmcButtons",
  props: {
    baseUrl: { type: String, default: "https://www.patreon.com/bePatron?u=" },
    patreonId: { type: String, default: "10119959" },
    patreonText: { type: String, default: "Become a Patron!" }
  },
  mounted() {
    const scr = document.createElement("script");
    scr.setAttribute(
      "src",
      "https://c6.patreon.com/becomePatronButton.bundle.js"
    );
    document.head.appendChild(scr);
  },
  methods: {
    track,
    openLink() {
      this.track("Clicked " + this.patreonText + " Button");
      window.open(this.baseUrl + this.patreonId, "_blank");
    }
  }
};
const _withScopeId = (n) => (pushScopeId("data-v-3b59d3fb"), n = n(), popScopeId(), n);
const _hoisted_1$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("svg", {
  height: "546px",
  version: "1.1",
  viewBox: "0 0 569 546",
  width: "569px",
  xmlns: "http://www.w3.org/2000/svg"
}, [
  /* @__PURE__ */ createBaseVNode("title", null, "Patreon logo"),
  /* @__PURE__ */ createBaseVNode("g", null, [
    /* @__PURE__ */ createBaseVNode("circle", {
      cx: "362.589996",
      cy: "204.589996",
      "data-fill": "1",
      fill: "#FFFFFF",
      r: "204.589996"
    }),
    /* @__PURE__ */ createBaseVNode("rect", {
      "data-fill": "1",
      height: "545.799988",
      width: "100",
      x: "0",
      y: "0"
    })
  ])
], -1));
const _hoisted_2$2 = { class: "text-1xl ml-2 font-bold text-white" };
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createBlock(_component_AppButton, {
    text: "Buy me a coffee",
    type: "button",
    class: "bmc-button inline-block rounded-lg bg-red-500 pl-5 pr-6 pt-4 pb-4 shadow-lg hover:bg-red-600 hover:shadow-none",
    onClick: withModifiers($options.openLink, ["prevent"])
  }, {
    text: withCtx(() => [
      _hoisted_1$2,
      createBaseVNode("span", _hoisted_2$2, toDisplayString($props.patreonText), 1)
    ]),
    _: 1
  }, 8, ["onClick"]);
}
const PatreonButton = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-3b59d3fb"]]);
const vultr1 = "/build/assets/vultr-1-033f70a2.webp";
const vultr2 = "/build/assets/vultr-2-08223dfe.png";
const _sfc_main$1 = {
  name: "VultrReferral",
  data() {
    return {
      VULTR_REFERRAL_ENABLED,
      // eslint-disable-line
      VULTR_REFERRAL_LINK,
      // eslint-disable-line
      images: [vultr1, vultr2]
    };
  },
  computed: {
    referralImage() {
      return this.images[Math.floor(Math.random() * this.images.length)];
    }
  },
  methods: {
    track
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "border-1 mb-5 inline-block flex-auto items-center rounded-md border border-blue-400 bg-gray-100 p-0 shadow-lg dark:bg-gray-900"
};
const _hoisted_2$1 = ["href"];
const _hoisted_3$1 = ["src"];
const _hoisted_4$1 = /* @__PURE__ */ createBaseVNode("h2", { class: "mb-4 text-2xl font-medium text-slate-700 dark:text-slate-100" }, [
  /* @__PURE__ */ createBaseVNode("em", null, [
    /* @__PURE__ */ createTextVNode("Try "),
    /* @__PURE__ */ createBaseVNode("strong", null, "VULTR"),
    /* @__PURE__ */ createTextVNode(" for free with ")
  ]),
  /* @__PURE__ */ createBaseVNode("br"),
  /* @__PURE__ */ createBaseVNode("strong", null, "$100 free credit!")
], -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    $data.VULTR_REFERRAL_ENABLED ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      createBaseVNode("a", {
        href: $data.VULTR_REFERRAL_LINK,
        target: "_blank",
        style: { "min-height": "200px", "min-width": "300px" },
        onClick: _cache[0] || (_cache[0] = ($event) => $options.track("User Clicked Vultr Referral Link"))
      }, [
        createBaseVNode("img", {
          src: $options.referralImage,
          alt: "Vultr Hosting Services",
          class: "ml-auto mr-auto mb-4 rounded-t",
          style: { "width": "100%", "max-width": "300px" }
        }, null, 8, _hoisted_3$1),
        _hoisted_4$1
      ], 8, _hoisted_2$1)
    ])) : createCommentVNode("", true)
  ]);
}
const VultrReferral = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "Home",
  components: {
    ChatBubbleLeftEllipsisIcon,
    GHButtons,
    BmcButtons,
    VultrReferral,
    PatreonButton
  },
  props: {
    enableGhButtons: { type: Boolean, default: true },
    enableVultrReferral: { type: Boolean, default: true },
    enableBmcButtons: { type: Boolean, default: true },
    enablePatreonButton: { type: Boolean, default: true }
  },
  data() {
    return {
      VULTR_REFERRAL_ENABLED,
      // eslint-disable-line
      VULTR_REFERRAL_LINK
      // eslint-disable-line
    };
  },
  computed: {
    ...mapGetters({
      authenticated: "auth/authenticated",
      user: "auth/user"
    })
  }
};
const _hoisted_1 = { class: "rounded-lg p-12 text-center" };
const _hoisted_2 = { class: "mb-5 flex items-center justify-between" };
const _hoisted_3 = { class: "mb-5 text-4xl font-medium text-slate-700 dark:text-slate-100" };
const _hoisted_4 = {
  key: 0,
  class: "mb-5 text-2xl font-medium text-slate-700 dark:text-slate-100"
};
const _hoisted_5 = /* @__PURE__ */ createBaseVNode("p", { class: "mb-2 text-2xl text-slate-500 dark:text-slate-300" }, " Laravel / Vite / Vue3 / TailwindCSS ", -1);
const _hoisted_6 = {
  key: 1,
  class: "mb-3 p-5"
};
const _hoisted_7 = {
  key: 2,
  class: "mb-3"
};
const _hoisted_8 = {
  key: 3,
  class: "mb-3 pb-3"
};
const _hoisted_9 = {
  key: 4,
  class: "mb-1"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChatBubbleLeftEllipsisIcon = resolveComponent("ChatBubbleLeftEllipsisIcon");
  const _component_GHButtons = resolveComponent("GHButtons");
  const _component_VultrReferral = resolveComponent("VultrReferral");
  const _component_BmcButtons = resolveComponent("BmcButtons");
  const _component_PatreonButton = resolveComponent("PatreonButton");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createBaseVNode("div", _hoisted_2, [
      createVNode(_component_ChatBubbleLeftEllipsisIcon, { class: "r-2 flex h-20 w-20 w-0 flex-1 justify-start text-indigo-400 dark:text-indigo-200" })
    ]),
    createBaseVNode("h1", _hoisted_3, " Welcome" + toDisplayString(_ctx.user && _ctx.user.name ? " " + _ctx.user.name : "") + "! ", 1),
    _ctx.user && _ctx.user.name ? (openBlock(), createElementBlock("h4", _hoisted_4, " Thank you for being a member! ")) : createCommentVNode("", true),
    _hoisted_5,
    $props.enableGhButtons ? (openBlock(), createElementBlock("div", _hoisted_6, [
      createVNode(_component_GHButtons, {
        "show-star": "",
        "show-fork": "",
        "show-watch": "",
        "show-sponsor": "",
        "show-download": "",
        "show-count": "",
        "show-tips": ""
      })
    ])) : createCommentVNode("", true),
    $props.enableVultrReferral ? (openBlock(), createElementBlock("div", _hoisted_7, [
      createVNode(_component_VultrReferral)
    ])) : createCommentVNode("", true),
    $props.enableBmcButtons ? (openBlock(), createElementBlock("div", _hoisted_8, [
      createVNode(_component_BmcButtons)
    ])) : createCommentVNode("", true),
    $props.enablePatreonButton ? (openBlock(), createElementBlock("div", _hoisted_9, [
      createVNode(_component_PatreonButton)
    ])) : createCommentVNode("", true)
  ]);
}
const Home = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Home as default
};
//# sourceMappingURL=Home-44b7df11.js.map
