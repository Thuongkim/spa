import { m as mapGetters, e as mapActions, L as axios, f as resolveDirective, o as openBlock, l as createElementBlock, p as withDirectives, n as normalizeClass, k as createCommentVNode } from "./vendor-b24fd275.js";
import "./vue-axios.esm.min-37be30b6.js";
import { t as track, _ as _export_sfc } from "./app-7a34098f.js";
const _sfc_main = {
  name: "SocialiteLogins",
  components: {},
  props: {},
  setup() {
    return {};
  },
  data() {
    return {
      loading: false,
      window: {},
      authWindowTitle: "Authentication Login"
    };
  },
  computed: {
    ...mapGetters({
      logins: "auth/logins",
      token: "auth/token"
    }),
    socialLoginsEnabled() {
      if (Object.values(this.logins).find((v) => v == "1")) {
        return true;
      }
      return false;
    }
  },
  watch: {},
  created() {
  },
  mounted() {
    window.addEventListener("message", this.onMessage, false);
  },
  beforeUnmount() {
    window.removeEventListener("message", this.onMessage);
  },
  updated() {
  },
  methods: {
    ...mapActions({
      popToast: "toast/popToast",
      fetchOauthUrl: "auth/fetchOauthUrl",
      saveToken: "auth/saveToken",
      getUser: "auth/getUser",
      getUserByToken: "auth/getUserByToken"
    }),
    track,
    async socialiteLogin(provider) {
      this.track("Social Login Provider Clicked: ".concat(provider));
      this.loading = true;
      try {
        await axios.get("/sanctum/csrf-cookie").then((response) => {
        });
        const url = await this.fetchOauthUrl({ provider }).then((response) => {
          this.loading = false;
          return response;
        });
        this.window = this.openWindow(url, this.authWindowTitle);
      } catch (e) {
        this.track(
          "Social Login Provider Failed to Login: ".concat(provider),
          "error",
          "auth-error"
        );
        this.popToast({
          message: "Failed to log in.",
          timer: 1e4,
          icon: "error"
        });
        this.window.close();
        this.loading = false;
      }
    },
    async onMessage(e) {
      const self = this;
      if (e.origin !== window.origin || !e.data.token) {
        return;
      }
      self.popToast({
        message: "Successfully logged in",
        timer: 2500,
        icon: "success"
      });
      self.track(
        "Social Login Provider Logged in Successfully",
        "login",
        "social login success"
      );
      await axios.get("/sanctum/csrf-cookie").then((response) => {
      });
      await self.saveToken({ token: e.data.token }).then((response) => {
        self.getUserByToken({ token: e.data.token }).then(() => {
          setTimeout(() => {
            self.$router.push({ name: "dashboard" });
          }, 1);
        });
      });
    },
    openWindow(url, title, options = {}) {
      if (typeof url === "object") {
        options = url;
        url = "";
      }
      options = {
        url,
        title,
        width: 600,
        height: 720,
        ...options
      };
      const dualScreenLeft = window.screenLeft !== void 0 ? window.screenLeft : window.screen.left;
      const dualScreenTop = window.screenTop !== void 0 ? window.screenTop : window.screen.top;
      const width = window.innerWidth || document.documentElement.clientWidth;
      const height = window.innerHeight || document.documentElement.clientHeight;
      options.left = width / 2 - options.width / 2 + dualScreenLeft;
      options.top = height / 2 - options.height / 2 + dualScreenTop;
      const optionsStr = Object.keys(options).reduce((acc, key) => {
        acc.push("".concat(key, "=").concat(options[key]));
        return acc;
      }, []).join(",");
      const newWindow = window.open(url, title, optionsStr);
      if (window.focus) {
        newWindow.focus();
      }
      return newWindow;
    }
  }
};
const _hoisted_1 = { class: "flex flex-wrap justify-around" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tippy = resolveDirective("tippy");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    _ctx.logins.facebook == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(["fa-brands fa-square-facebook fa-3x mr-3 mb-2 cursor-pointer text-blue-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.socialiteLogin("facebook"))
    }, null, 2)), [
      [_directive_tippy, "Facebook"]
    ]) : createCommentVNode("", true),
    _ctx.logins.twitter == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(["fa-brands fa-twitter fa-3x mr-3 mb-2 cursor-pointer text-blue-300 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[1] || (_cache[1] = ($event) => $options.socialiteLogin("twitter"))
    }, null, 2)), [
      [_directive_tippy, "Twitter"]
    ]) : createCommentVNode("", true),
    _ctx.logins.instagram == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 2,
      class: normalizeClass(["fa-brands fa-instagram fa-3x mr-3 mb-2 cursor-pointer text-gray-700 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[2] || (_cache[2] = ($event) => $options.socialiteLogin("instagram"))
    }, null, 2)), [
      [_directive_tippy, "Instagram"]
    ]) : createCommentVNode("", true),
    _ctx.logins.github == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 3,
      class: normalizeClass(["fa-brands fa-github fa-3x mr-3 mb-2 cursor-pointer text-gray-800 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[3] || (_cache[3] = ($event) => $options.socialiteLogin("github"))
    }, null, 2)), [
      [_directive_tippy, "GitHub"]
    ]) : createCommentVNode("", true),
    _ctx.logins.youtube == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 4,
      class: normalizeClass(["fa-brands fa-youtube fa-3x mr-3 mb-2 cursor-pointer text-red-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[4] || (_cache[4] = ($event) => $options.socialiteLogin("youtube"))
    }, null, 2)), [
      [_directive_tippy, "YouTube"]
    ]) : createCommentVNode("", true),
    _ctx.logins.google == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 5,
      class: normalizeClass(["fa-brands fa-google fa-3x mr-3 mb-2 cursor-pointer text-red-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[5] || (_cache[5] = ($event) => $options.socialiteLogin("google"))
    }, null, 2)), [
      [_directive_tippy, "Google"]
    ]) : createCommentVNode("", true),
    _ctx.logins.linkedin == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 6,
      class: normalizeClass(["fa-brands fa-linkedin fa-3x mr-3 mb-2 cursor-pointer text-blue-700 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[6] || (_cache[6] = ($event) => $options.socialiteLogin("linkedin"))
    }, null, 2)), [
      [_directive_tippy, "LinkedIn"]
    ]) : createCommentVNode("", true),
    _ctx.logins.twitch == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 7,
      class: normalizeClass(["fa-brands fa-twitch fa-3x mr-3 mb-2 cursor-pointer text-blue-600 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[7] || (_cache[7] = ($event) => $options.socialiteLogin("twitch"))
    }, null, 2)), [
      [_directive_tippy, "Twitch"]
    ]) : createCommentVNode("", true),
    _ctx.logins.apple == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 8,
      class: normalizeClass(["fa-brands fa-apple fa-3x mr-3 mb-2 cursor-pointer text-gray-800 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[8] || (_cache[8] = ($event) => $options.socialiteLogin("apple"))
    }, null, 2)), [
      [_directive_tippy, "Apple"]
    ]) : createCommentVNode("", true),
    _ctx.logins.microsoft == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 9,
      class: normalizeClass(["fa-brands fa-microsoft fa-3x mr-3 mb-2 cursor-pointer text-blue-300 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[9] || (_cache[9] = ($event) => $options.socialiteLogin("microsoft"))
    }, null, 2)), [
      [_directive_tippy, "Microsoft"]
    ]) : createCommentVNode("", true),
    _ctx.logins.tiktok == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 10,
      class: normalizeClass(["fa-brands fa-tiktok fa-3x mr-3 mb-2 cursor-pointer text-pink-600 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[10] || (_cache[10] = ($event) => $options.socialiteLogin("tiktok"))
    }, null, 2)), [
      [_directive_tippy, "TikTok"]
    ]) : createCommentVNode("", true),
    _ctx.logins.zoho == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 11,
      class: normalizeClass(["fas fa-z fa-3x mr-3 mb-2 cursor-pointer text-yellow-500 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[11] || (_cache[11] = ($event) => $options.socialiteLogin("zoho"))
    }, null, 2)), [
      [_directive_tippy, "Zoho"]
    ]) : createCommentVNode("", true),
    _ctx.logins.stackexchange == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 12,
      class: normalizeClass(["fa-brands fa-stack-exchange fa-3x mr-3 mb-2 cursor-pointer text-blue-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[12] || (_cache[12] = ($event) => $options.socialiteLogin("stackexchange"))
    }, null, 2)), [
      [_directive_tippy, "StackExchange"]
    ]) : createCommentVNode("", true),
    _ctx.logins.gitlab == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 13,
      class: normalizeClass(["fa-brands fa-square-gitlab fa-3x mr-3 mb-2 cursor-pointer text-orange-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[13] || (_cache[13] = ($event) => $options.socialiteLogin("gitlab"))
    }, null, 2)), [
      [_directive_tippy, "GitLab"]
    ]) : createCommentVNode("", true),
    _ctx.logins.reddit == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 14,
      class: normalizeClass(["fa-brands fa-square-reddit fa-3x mr-3 mb-2 cursor-pointer text-orange-700 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[14] || (_cache[14] = ($event) => $options.socialiteLogin("reddit"))
    }, null, 2)), [
      [_directive_tippy, "GitLab"]
    ]) : createCommentVNode("", true),
    _ctx.logins.snapchat == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 15,
      class: normalizeClass(["fa-brands fa-square-snapchat fa-3x mr-3 mb-2 cursor-pointer text-yellow-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[15] || (_cache[15] = ($event) => $options.socialiteLogin("snapchat"))
    }, null, 2)), [
      [_directive_tippy, "Snapchat"]
    ]) : createCommentVNode("", true),
    _ctx.logins.meetup == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 16,
      class: normalizeClass(["fa-brands fa-meetup fa-3x mr-3 mb-2 cursor-pointer text-red-400 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[16] || (_cache[16] = ($event) => $options.socialiteLogin("meetup"))
    }, null, 2)), [
      [_directive_tippy, "Meetup"]
    ]) : createCommentVNode("", true),
    _ctx.logins.atlassian == 1 ? withDirectives((openBlock(), createElementBlock("span", {
      key: 17,
      class: normalizeClass(["fa-brands fa-atlassian fa-3x mr-3 mb-2 cursor-pointer text-blue-800 opacity-80 transition duration-300 hover:opacity-100", $data.loading ? "disabled opacity-40" : ""]),
      onClick: _cache[17] || (_cache[17] = ($event) => $options.socialiteLogin("atlassian"))
    }, null, 2)), [
      [_directive_tippy, "Atlassian"]
    ]) : createCommentVNode("", true)
  ]);
}
const SocialiteLogins = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  SocialiteLogins as S
};
//# sourceMappingURL=SocialiteLogins-e4eaba46.js.map
