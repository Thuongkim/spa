import { ah as defineComponent, ai as hyphenate, aj as h, ak as hasOwn, m as mapGetters, r as resolveComponent, f as resolveDirective, o as openBlock, l as createElementBlock, g as createBlock, w as withCtx, q as createTextVNode, t as toDisplayString, k as createCommentVNode, p as withDirectives } from "./vendor-b24fd275.js";
import { b as __vitePreload, t as track, _ as _export_sfc } from "./app-7a34098f.js";
const GithubButton = defineComponent({
  name: "github-button",
  props: {
    href: String,
    ariaLabel: String,
    title: String,
    dataIcon: String,
    dataColorScheme: String,
    dataSize: String,
    dataShowCount: String,
    dataText: String
  },
  render: function() {
    const props = { ref: "_" };
    for (const key in this.$props) {
      props[hyphenate(key)] = this.$props[key];
    }
    return h("span", [
      hasOwn(this.$slots, "default") ? h("a", props, this.$slots.default()) : h("a", props)
    ]);
  },
  mounted: function() {
    this.paint();
  },
  beforeUpdate: function() {
    this.reset();
  },
  updated: function() {
    this.paint();
  },
  beforeUnmount: function() {
    this.reset();
  },
  methods: {
    paint: function() {
      const _ = this.$el.appendChild(document.createElement("span"));
      const _this = this;
      __vitePreload(() => import(
        /* webpackMode: "eager" */
        "./buttons.esm-8aa99809.js"
      ), true ? [] : void 0).then(function(module) {
        module.render(_.appendChild(_this.$refs._), function(el) {
          try {
            _.parentNode.replaceChild(el, _);
          } catch (_2) {
          }
        });
      });
    },
    reset: function() {
      this.$el.replaceChild(this.$refs._, this.$el.lastChild);
    }
  }
});
const _sfc_main = {
  name: "GHButtons",
  components: { GithubButton },
  props: {
    serviceName: { type: String, default: "GitHub" },
    lightVariant: { type: String, default: "light" },
    // light_high_contrast
    darkVariant: { type: String, default: "dark_high_contrast" },
    // dark dark_dimmed
    ghBaseUrl: { type: String, default: "https://github.com/" },
    ghUser: { type: String, default: "jeremykenedy" },
    ghRepo: { type: String, default: "laravel-spa" },
    size: { type: String, default: "large" },
    showTips: { type: Boolean, default: false },
    showCount: { type: Boolean, default: false },
    showFollow: { type: Boolean, default: false },
    showStar: { type: Boolean, default: false },
    showFork: { type: Boolean, default: false },
    showIssue: { type: Boolean, default: false },
    showWatch: { type: Boolean, default: false },
    showSponsor: { type: Boolean, default: false },
    showDownload: { type: Boolean, default: false },
    followTitle: { type: String, default: "Follow @" },
    starIcon: { type: String, default: "octicon-star" },
    starTitle: { type: String, default: "Star" },
    forkIcon: { type: String, default: "octicon-repo-forked" },
    forkTitle: { type: String, default: "Fork" },
    issueIcon: { type: String, default: "octicon-issue-opened" },
    issueTitle: { type: String, default: "Issue" },
    watchIcon: { type: String, default: "octicon-eye" },
    watchTitle: { type: String, default: "Watch" },
    downloadIcon: { type: String, default: "octicon-download" },
    downloadTitle: { type: String, default: "Download" },
    sponsorTitle: { type: String, default: "Sponsor" },
    sponsorIcon: { type: String, default: "octicon-heart" },
    frequency: { type: String, default: "recurring" }
    // one-time
  },
  computed: {
    ...mapGetters({
      user: "auth/user"
    }),
    darkTheme() {
      if (this.user && this.user.theme_dark) {
        return true;
      }
      return false;
    },
    showCountString() {
      return this.showCount.toString();
    }
  },
  methods: {
    track
  }
};
const _hoisted_1 = { class: "github-buttons" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_github_button = resolveComponent("github-button");
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    $props.showFollow && $props.ghUser ? (openBlock(), createBlock(_component_github_button, {
      key: 0,
      href: $props.ghBaseUrl + $props.ghUser,
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.followTitle + $props.ghUser + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[0] || (_cache[0] = ($event) => $options.track("Clicked " + $props.followTitle + $props.ghUser + " on " + $props.serviceName))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.followTitle) + toDisplayString($props.ghUser), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-size", "data-show-count", "aria-label"])) : createCommentVNode("", true),
    $props.showStar && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 1,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo,
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.starIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[1] || (_cache[1] = ($event) => $options.track(
        "Clicked " + $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.starTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showFork && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 2,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/fork",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.forkIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.forkTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[2] || (_cache[2] = ($event) => $options.track(
        "Clicked " + $props.forkTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.forkTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.starTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showIssue && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 3,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/issues",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.issueIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.issueTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[3] || (_cache[3] = ($event) => $options.track(
        "Clicked " + $props.issueTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.issueTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? "Show " + $props.issueTitle + " for " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showWatch && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 4,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/subscription",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.watchIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.watchTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[4] || (_cache[4] = ($event) => $options.track(
        "Clicked " + $props.watchTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.watchTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.watchTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " on " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true),
    $props.showSponsor && $props.ghUser ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 5,
      href: $props.ghBaseUrl + "sponsors/" + $props.ghUser,
      "data-icon": $props.sponsorIcon,
      "data-size": $props.size,
      "aria-label": "Sponsor @" + $props.ghUser + " on GitHub",
      class: "gh-button",
      onClick: _cache[5] || (_cache[5] = ($event) => $options.track(
        "Clicked " + $props.sponsorTitle + " " + $props.ghBaseUrl + "sponsors/" + $props.ghUser
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.sponsorTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-icon", "data-size", "aria-label"])), [
      [_directive_tippy, $props.showTips ? "Sponsor @" + $props.ghUser + " on GitHub" : null]
    ]) : createCommentVNode("", true),
    $props.showDownload && $props.ghUser && $props.ghRepo ? withDirectives((openBlock(), createBlock(_component_github_button, {
      key: 6,
      href: $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + "/archive/HEAD.zip",
      "data-color-scheme": $options.darkTheme ? $props.darkVariant : $props.lightVariant,
      "data-icon": $props.downloadIcon,
      "data-size": $props.size,
      "data-show-count": $options.showCountString,
      "aria-label": $props.downloadTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " directly from " + $props.serviceName,
      class: "gh-button",
      onClick: _cache[6] || (_cache[6] = ($event) => $options.track(
        "Clicked " + $props.downloadTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " directly from " + $props.serviceName
      ))
    }, {
      default: withCtx(() => [
        createTextVNode(toDisplayString($props.downloadTitle), 1)
      ]),
      _: 1
    }, 8, ["href", "data-color-scheme", "data-icon", "data-size", "data-show-count", "aria-label"])), [
      [
        _directive_tippy,
        $props.showTips ? $props.downloadTitle + " " + $props.ghBaseUrl + $props.ghUser + "/" + $props.ghRepo + " directly from " + $props.serviceName : null
      ]
    ]) : createCommentVNode("", true)
  ]);
}
const GHButtons = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  GHButtons as G
};
//# sourceMappingURL=GHButtons-1b0fab51.js.map
