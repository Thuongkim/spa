import { l as createElementBlock, p as withDirectives, aF as vModelSelect, i as createBaseVNode, k as createCommentVNode, o as openBlock, x as createStaticVNode, az as ChevronRightIcon, aG as ChevronLeftIcon, r as resolveComponent, n as normalizeClass, s as withModifiers, j as createVNode, ad as Fragment, ae as renderList, q as createTextVNode, t as toDisplayString, V as renderSlot, g as createBlock, aH as requireLodash_clonedeep, aI as mergeProps, aJ as withKeys, aK as Teleport, aL as toRefs, aM as getCurrentInstance, aN as ref, aO as computed, aP as watch, aQ as nextTick, aR as onMounted, aS as onBeforeUnmount } from "./vendor-b24fd275.js";
import { _ as _export_sfc } from "./app-7a34098f.js";
import { a as getDefaultExportFromCjs } from "./__commonjsHelpers__-ebbb3f54.js";
const _sfc_main$2 = {
  name: "PerPage",
  components: {},
  props: {
    items: { type: Array, required: true },
    perPage: { type: Number, default: 10 }
  },
  setup() {
    return {};
  },
  data() {
    return {
      per: 10,
      ready: false
    };
  },
  computed: {},
  watch: {},
  created() {
  },
  mounted() {
    this.per = this.perPage;
  },
  beforeUnmount() {
  },
  updated() {
  },
  methods: {}
};
const _hoisted_1$3 = {
  key: 0,
  class: "inline-block rounded border pl-4"
};
const _hoisted_2$3 = /* @__PURE__ */ createBaseVNode("label", null, "Per Page", -1);
const _hoisted_3$3 = /* @__PURE__ */ createStaticVNode('<option value="1" class="focus:outline-none">1</option><option value="5" class="focus:outline-none">5</option><option value="10" class="focus:outline-none">10</option><option value="25" class="focus:outline-none">25</option><option value="50" class="focus:outline-none">50</option><option value="100" class="focus:outline-none">100</option><option value="1000" class="focus:outline-none">1000</option><option value="1000" class="focus:outline-none">10000</option><option value="1000000000000" class="focus:outline-none">All</option>', 9);
const _hoisted_12$1 = [
  _hoisted_3$3
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return $props.items && $props.items.length >= 1 ? (openBlock(), createElementBlock("div", _hoisted_1$3, [
    _hoisted_2$3,
    withDirectives(createBaseVNode("select", {
      id: "perPage",
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.per = $event),
      required: "",
      name: "perPage",
      class: "utline-0 border-0 bg-transparent text-center text-gray-600 focus:outline-0 active:outline-0 dark:text-gray-100",
      onChange: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("changed", $data.per))
    }, _hoisted_12$1, 544), [
      [vModelSelect, $data.per]
    ])
  ])) : createCommentVNode("", true);
}
const PerPage = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Pagination",
  components: {
    ChevronRightIcon,
    ChevronLeftIcon
  },
  props: {
    pagination: { type: Object, required: true },
    offset: { type: Number, default: 4 }
  },
  computed: {
    pages() {
      if (!this.pagination.to) {
        return null;
      }
      let from = this.pagination.current_page - this.offset;
      if (from < 1) {
        from = 1;
      }
      let to = from + this.offset * 2;
      if (to >= this.pagination.last_page) {
        to = this.pagination.last_page;
      }
      const pages = [];
      for (let page = from; page <= to; page++) {
        pages.push(page);
      }
      return pages;
    },
    showPagination() {
      if (this.pages.length > 1) {
        return true;
      }
      return false;
    }
  },
  methods: {
    change(page) {
      this.$emit("paginate", page);
    }
  }
};
const _hoisted_1$2 = { class: "vue-pagination" };
const _hoisted_2$2 = {
  key: 0,
  class: "list-reset border-grey-light mb-2 flex w-auto rounded border font-sans"
};
const _hoisted_3$2 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Previous", -1);
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = /* @__PURE__ */ createBaseVNode("span", { class: "sr-only" }, "Next", -1);
const _hoisted_6$2 = { class: "mb-2 text-center text-xs" };
const _hoisted_7$2 = /* @__PURE__ */ createBaseVNode("br", null, null, -1);
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ChevronLeftIcon = resolveComponent("ChevronLeftIcon");
  const _component_ChevronRightIcon = resolveComponent("ChevronRightIcon");
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    $options.showPagination ? (openBlock(), createElementBlock("ul", _hoisted_2$2, [
      createBaseVNode("li", null, [
        createBaseVNode("span", {
          class: normalizeClass(["hover:bg-blue text-blue border-grey-light block cursor-pointer border-r px-3 py-1 hover:text-white", $props.pagination.current_page == 1 ? "disabled opacity-50" : ""]),
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.change($props.pagination.current_page - 1), ["prevent"]))
        }, [
          createVNode(_component_ChevronLeftIcon, { class: "ml-2 mr-2 h-6 w-6" }),
          _hoisted_3$2
        ], 2)
      ]),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.pages, (page) => {
        return openBlock(), createElementBlock("li", { key: page }, [
          createBaseVNode("span", {
            class: normalizeClass([
              "block cursor-pointer rounded px-3 py-1",
              page == $props.pagination.current_page ? "border-blue disabled border-r bg-slate-900 text-white" : "text-blue-400 hover:bg-slate-600 hover:text-white"
            ]),
            onClick: withModifiers(($event) => $options.change(page), ["stop"])
          }, toDisplayString(page), 11, _hoisted_4$2)
        ]);
      }), 128)),
      createBaseVNode("li", null, [
        createBaseVNode("span", {
          class: normalizeClass([
            "hover:bg-blue text-blue block cursor-pointer px-3 py-1 hover:text-white",
            $props.pagination.current_page == $props.pagination.last_page ? "disabled opacity-50" : ""
          ]),
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.change($props.pagination.current_page + 1), ["prevent"]))
        }, [
          createVNode(_component_ChevronRightIcon, { class: "ml-2 mr-2 h-6 w-6" }),
          _hoisted_5$2
        ], 2)
      ])
    ])) : createCommentVNode("", true),
    createBaseVNode("div", _hoisted_6$2, [
      createTextVNode(" Showing page " + toDisplayString($props.pagination.current_page) + " of " + toDisplayString($props.pagination.last_page) + " ", 1),
      _hoisted_7$2,
      createTextVNode(" (Total Records: " + toDisplayString($props.pagination.total) + ") ", 1)
    ])
  ]);
}
const Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "AppModal",
  props: {
    showModal: { type: Boolean, default: false },
    showClose: { type: Boolean, default: true },
    modalWidthClass: {
      type: String,
      default: "min-w-[96%] sm:min-w-[60%] lg:min-w-[50%]"
    }
  },
  data() {
    return {};
  },
  computed: {
    hasTitleSlot() {
      return this.$slots.title;
    },
    hasBodySlot() {
      return this.$slots.body;
    },
    hasFooterSlot() {
      return this.$slots.footer;
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    confirmModal() {
      this.$emit("confirmModal");
    }
  }
};
const _hoisted_1$1 = {
  key: 0,
  class: "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none"
};
const _hoisted_2$1 = { class: "relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-slate-600" };
const _hoisted_3$1 = { class: "flex items-start justify-between rounded-t p-5" };
const _hoisted_4$1 = { class: "text-3xl font-semibold" };
const _hoisted_5$1 = { class: "relative flex-auto p-6" };
const _hoisted_6$1 = {
  key: 0,
  class: "flex items-center justify-end p-6"
};
const _hoisted_7$1 = {
  key: 1,
  class: "flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6"
};
const _hoisted_8$1 = {
  key: 1,
  class: "fixed inset-0 z-40 bg-black opacity-25"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_AppButton = resolveComponent("AppButton");
  return openBlock(), createElementBlock("div", null, [
    $props.showModal ? (openBlock(), createElementBlock("div", _hoisted_1$1, [
      createBaseVNode("div", {
        class: normalizeClass(["relative my-6 mx-auto w-auto", $props.modalWidthClass])
      }, [
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("div", _hoisted_3$1, [
            createBaseVNode("h3", _hoisted_4$1, [
              $options.hasTitleSlot ? renderSlot(_ctx.$slots, "title", { key: 0 }) : createCommentVNode("", true)
            ]),
            $props.showClose ? (openBlock(), createBlock(_component_AppButton, {
              key: 0,
              text: "X",
              class: "text-1xl float-right border-0 bg-transparent text-gray-600 shadow-none outline-none hover:text-gray-800 focus:outline-none",
              onClick: _cache[0] || (_cache[0] = ($event) => $options.closeModal())
            })) : createCommentVNode("", true)
          ]),
          createBaseVNode("div", _hoisted_5$1, [
            $options.hasBodySlot ? renderSlot(_ctx.$slots, "body", { key: 0 }) : createCommentVNode("", true)
          ]),
          $options.hasFooterSlot ? (openBlock(), createElementBlock("div", _hoisted_6$1, [
            $options.hasFooterSlot ? renderSlot(_ctx.$slots, "footer", { key: 0 }) : createCommentVNode("", true)
          ])) : (openBlock(), createElementBlock("div", _hoisted_7$1, [
            createBaseVNode("button", {
              class: "mr-1 mb-1 rounded border border-solid border-red-500 bg-transparent px-6 py-3 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear hover:bg-red-500 hover:text-white focus:outline-none active:bg-red-600",
              type: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => $options.closeModal())
            }, " Close "),
            createBaseVNode("button", {
              class: "background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none",
              type: "button",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.confirmModal())
            }, " Confirm ")
          ]))
        ])
      ], 2)
    ])) : createCommentVNode("", true),
    $props.showModal ? (openBlock(), createElementBlock("div", _hoisted_8$1)) : createCommentVNode("", true)
  ]);
}
const AppModal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var lodash_clonedeepExports = requireLodash_clonedeep();
const clonedeep = /* @__PURE__ */ getDefaultExportFromCjs(lodash_clonedeepExports);
function isNullish(val) {
  return [null, void 0].indexOf(val) !== -1;
}
function useData(props, context, dep) {
  const { object, valueProp, mode } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const update = (val, triggerInput = true) => {
    iv.value = makeInternal(val);
    const externalVal = makeExternal(val);
    context.emit("change", externalVal, $this);
    if (triggerInput) {
      context.emit("input", externalVal);
      context.emit("update:modelValue", externalVal);
    }
  };
  const makeExternal = (val) => {
    if (object.value) {
      return val;
    }
    if (isNullish(val)) {
      return val;
    }
    return !Array.isArray(val) ? val[valueProp.value] : val.map((v) => v[valueProp.value]);
  };
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === "single" ? {} : [];
    }
    return val;
  };
  return {
    update
  };
}
function useValue(props, context) {
  const { value, modelValue, mode, valueProp } = toRefs(props);
  const iv = ref(mode.value !== "single" ? [] : {});
  const ev = computed(() => {
    return modelValue && modelValue.value !== void 0 ? modelValue.value : value.value;
  });
  const plainValue = computed(() => {
    return mode.value === "single" ? iv.value[valueProp.value] : iv.value.map((v) => v[valueProp.value]);
  });
  const textValue = computed(() => {
    return mode.value !== "single" ? iv.value.map((v) => v[valueProp.value]).join(",") : iv.value[valueProp.value];
  });
  return {
    iv,
    internalValue: iv,
    ev,
    externalValue: ev,
    textValue,
    plainValue
  };
}
function useSearch(props, context, dep) {
  const { regex } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const search = ref(null);
  const clearSearch = () => {
    search.value = "";
  };
  const handleSearchInput = (e) => {
    search.value = e.target.value;
  };
  const handleKeypress = (e) => {
    if (regex && regex.value) {
      let regexp = regex.value;
      if (typeof regexp === "string") {
        regexp = new RegExp(regexp);
      }
      if (!e.key.match(regexp)) {
        e.preventDefault();
      }
    }
  };
  const handlePaste = (e) => {
    if (regex && regex.value) {
      let clipboardData = e.clipboardData || /* istanbul ignore next */
      window.clipboardData;
      let pastedData = clipboardData.getData("Text");
      let regexp = regex.value;
      if (typeof regexp === "string") {
        regexp = new RegExp(regexp);
      }
      if (!pastedData.split("").every((c) => !!c.match(regexp))) {
        e.preventDefault();
      }
    }
    context.emit("paste", e, $this);
  };
  watch(search, (val) => {
    if (!isOpen.value && val) {
      open();
    }
    context.emit("search-change", val, $this);
  });
  return {
    search,
    clearSearch,
    handleSearchInput,
    handleKeypress,
    handlePaste
  };
}
function usePointer$1(props, context, dep) {
  const { groupSelect, mode, groups, disabledProp } = toRefs(props);
  const pointer = ref(null);
  const setPointer = (option) => {
    if (option === void 0 || option !== null && option[disabledProp.value]) {
      return;
    }
    if (groups.value && option && option.group && (mode.value === "single" || !groupSelect.value)) {
      return;
    }
    pointer.value = option;
  };
  const clearPointer = () => {
    setPointer(null);
  };
  return {
    pointer,
    setPointer,
    clearPointer
  };
}
function normalize(str, strict = true) {
  return strict ? String(str).toLowerCase().trim() : String(str).toLowerCase().normalize("NFD").trim().replace(new RegExp(/æ/g), "ae").replace(new RegExp(/œ/g), "oe").replace(new RegExp(/ø/g), "o").replace(new RegExp("\\p{Diacritic}", "gu"), "");
}
function isObject(variable) {
  return Object.prototype.toString.call(variable) === "[object Object]";
}
function arraysEqual(array1, array2) {
  const array2Sorted = array2.slice().sort();
  return array1.length === array2.length && array1.slice().sort().every(function(value, index) {
    return value === array2Sorted[index];
  });
}
function useOptions(props, context, dep) {
  const {
    options,
    mode,
    trackBy: trackBy_,
    limit,
    hideSelected,
    createTag,
    createOption: createOption_,
    label,
    appendNewTag,
    appendNewOption: appendNewOption_,
    multipleLabel,
    object,
    loading,
    delay,
    resolveOnLoad,
    minChars,
    filterResults,
    clearOnSearch,
    clearOnSelect,
    valueProp,
    allowAbsent,
    groupLabel,
    canDeselect,
    max: max2,
    strict,
    closeOnSelect,
    closeOnDeselect,
    groups: groupped,
    reverse,
    infinite,
    groupOptions,
    groupHideEmpty,
    groupSelect,
    onCreate,
    disabledProp,
    searchStart,
    searchFilter
  } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const ev = dep.ev;
  const search = dep.search;
  const clearSearch = dep.clearSearch;
  const update = dep.update;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const focus = dep.focus;
  const deactivate = dep.deactivate;
  const close = dep.close;
  const localize = dep.localize;
  const ap = ref([]);
  const ro = ref([]);
  const resolving = ref(false);
  const searchWatcher = ref(null);
  const offset = ref(infinite.value && limit.value === -1 ? 10 : limit.value);
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false;
  });
  const appendNewOption = computed(() => {
    if (appendNewTag.value !== void 0) {
      return appendNewTag.value;
    } else if (appendNewOption_.value !== void 0) {
      return appendNewOption_.value;
    }
    return true;
  });
  const eo = computed(() => {
    if (groupped.value) {
      let groups = eg.value || /* istanbul ignore next */
      [];
      let eo2 = [];
      groups.forEach((group) => {
        optionsToArray(group[groupOptions.value]).forEach((option) => {
          eo2.push(Object.assign({}, option, group[disabledProp.value] ? { [disabledProp.value]: true } : {}));
        });
      });
      return eo2;
    } else {
      let eo2 = optionsToArray(ro.value || /* istanbul ignore next */
      []);
      if (ap.value.length) {
        eo2 = eo2.concat(ap.value);
      }
      return eo2;
    }
  });
  const pfo = computed(() => {
    let options2 = eo.value;
    if (reverse.value) {
      options2 = options2.reverse();
    }
    if (createdOption.value.length) {
      options2 = createdOption.value.concat(options2);
    }
    return filterOptions(options2);
  });
  const fo = computed(() => {
    let options2 = pfo.value;
    if (offset.value > 0) {
      options2 = options2.slice(0, offset.value);
    }
    return options2;
  });
  const eg = computed(() => {
    if (!groupped.value) {
      return [];
    }
    let eg2 = [];
    let groups = ro.value || /* istanbul ignore next */
    [];
    if (ap.value.length) {
      eg2.push({
        [groupLabel.value]: " ",
        [groupOptions.value]: [...ap.value],
        __CREATE__: true
      });
    }
    return eg2.concat(groups);
  });
  const pfg = computed(() => {
    let groups = [...eg.value].map((g) => ({ ...g }));
    if (createdOption.value.length) {
      if (groups[0] && groups[0].__CREATE__) {
        groups[0][groupOptions.value] = [...createdOption.value, ...groups[0][groupOptions.value]];
      } else {
        groups = [{
          [groupLabel.value]: " ",
          [groupOptions.value]: [...createdOption.value],
          __CREATE__: true
        }].concat(groups);
      }
    }
    return groups;
  });
  const fg = computed(() => {
    if (!groupped.value) {
      return [];
    }
    let options2 = pfg.value;
    return filterGroups((options2 || /* istanbul ignore next */
    []).map((group, index) => {
      const arrayOptions = optionsToArray(group[groupOptions.value]);
      return {
        ...group,
        index,
        group: true,
        [groupOptions.value]: filterOptions(arrayOptions, false).map((o) => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {})),
        __VISIBLE__: filterOptions(arrayOptions).map((o) => Object.assign({}, o, group[disabledProp.value] ? { [disabledProp.value]: true } : {}))
      };
    }));
  });
  const hasSelected = computed(() => {
    switch (mode.value) {
      case "single":
        return !isNullish(iv.value[valueProp.value]);
      case "multiple":
      case "tags":
        return !isNullish(iv.value) && iv.value.length > 0;
    }
  });
  const multipleLabelText = computed(() => {
    return multipleLabel !== void 0 && multipleLabel.value !== void 0 ? multipleLabel.value(iv.value, $this) : iv.value && iv.value.length > 1 ? "".concat(iv.value.length, " options selected") : "1 option selected";
  });
  const noOptions = computed(() => {
    return !eo.value.length && !resolving.value && !createdOption.value.length;
  });
  const noResults = computed(() => {
    return eo.value.length > 0 && fo.value.length == 0 && (search.value && groupped.value || !groupped.value);
  });
  const createdOption = computed(() => {
    if (createOption.value === false || !search.value) {
      return [];
    }
    if (getOptionByTrackBy(search.value) !== -1) {
      return [];
    }
    return [{
      [valueProp.value]: search.value,
      [trackBy.value[0]]: search.value,
      [label.value]: search.value,
      __CREATE__: true
    }];
  });
  const trackBy = computed(() => {
    return trackBy_.value ? Array.isArray(trackBy_.value) ? trackBy_.value : [trackBy_.value] : [label.value];
  });
  const nullValue = computed(() => {
    switch (mode.value) {
      case "single":
        return null;
      case "multiple":
      case "tags":
        return [];
    }
  });
  const busy = computed(() => {
    return loading.value || resolving.value;
  });
  const select = (option) => {
    if (typeof option !== "object") {
      option = getOption(option);
    }
    switch (mode.value) {
      case "single":
        update(option);
        break;
      case "multiple":
      case "tags":
        update(iv.value.concat(option));
        break;
    }
    context.emit("select", finalValue(option), option, $this);
  };
  const deselect = (option) => {
    if (typeof option !== "object") {
      option = getOption(option);
    }
    switch (mode.value) {
      case "single":
        clear();
        break;
      case "tags":
      case "multiple":
        update(Array.isArray(option) ? iv.value.filter((v) => option.map((o) => o[valueProp.value]).indexOf(v[valueProp.value]) === -1) : iv.value.filter((v) => v[valueProp.value] != option[valueProp.value]));
        break;
    }
    context.emit("deselect", finalValue(option), option, $this);
  };
  const finalValue = (option) => {
    return object.value ? option : option[valueProp.value];
  };
  const remove = (option) => {
    deselect(option);
  };
  const handleTagRemove = (option, e) => {
    if (e.button !== 0) {
      e.preventDefault();
      return;
    }
    remove(option);
  };
  const clear = () => {
    update(nullValue.value);
    context.emit("clear", $this);
  };
  const isSelected = (option) => {
    if (option.group !== void 0) {
      return mode.value === "single" ? false : areAllSelected(option[groupOptions.value]) && option[groupOptions.value].length;
    }
    switch (mode.value) {
      case "single":
        return !isNullish(iv.value) && iv.value[valueProp.value] == option[valueProp.value];
      case "tags":
      case "multiple":
        return !isNullish(iv.value) && iv.value.map((o) => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1;
    }
  };
  const isDisabled = (option) => {
    return option[disabledProp.value] === true;
  };
  const isMax = () => {
    if (max2 === void 0 || max2.value === -1 || !hasSelected.value && max2.value > 0) {
      return false;
    }
    return iv.value.length >= max2.value;
  };
  const handleOptionClick = (option) => {
    if (isDisabled(option)) {
      return;
    }
    if (onCreate && onCreate.value && !isSelected(option) && option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
      option = onCreate.value(option, $this);
      if (option instanceof Promise) {
        resolving.value = true;
        option.then((result) => {
          resolving.value = false;
          handleOptionSelect(result);
        });
        return;
      }
    }
    handleOptionSelect(option);
  };
  const handleOptionSelect = (option) => {
    if (option.__CREATE__) {
      option = { ...option };
      delete option.__CREATE__;
    }
    switch (mode.value) {
      case "single":
        if (option && isSelected(option)) {
          if (canDeselect.value) {
            deselect(option);
          }
          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return;
        }
        if (option) {
          handleOptionAppend(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (closeOnSelect.value) {
          clearPointer();
          close();
        }
        if (option) {
          select(option);
        }
        break;
      case "multiple":
        if (option && isSelected(option)) {
          deselect(option);
          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return;
        }
        if (isMax()) {
          context.emit("max", $this);
          return;
        }
        if (option) {
          handleOptionAppend(option);
          select(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (hideSelected.value) {
          clearPointer();
        }
        if (closeOnSelect.value) {
          close();
        }
        break;
      case "tags":
        if (option && isSelected(option)) {
          deselect(option);
          if (closeOnDeselect.value) {
            clearPointer();
            close();
          }
          return;
        }
        if (isMax()) {
          context.emit("max", $this);
          return;
        }
        if (option) {
          handleOptionAppend(option);
        }
        if (clearOnSelect.value) {
          clearSearch();
        }
        if (option) {
          select(option);
        }
        if (hideSelected.value) {
          clearPointer();
        }
        if (closeOnSelect.value) {
          close();
        }
        break;
    }
    if (!closeOnSelect.value) {
      focus();
    }
  };
  const handleGroupClick = (group) => {
    if (isDisabled(group) || mode.value === "single" || !groupSelect.value) {
      return;
    }
    switch (mode.value) {
      case "multiple":
      case "tags":
        if (areAllEnabledSelected(group[groupOptions.value])) {
          deselect(group[groupOptions.value]);
        } else {
          select(
            group[groupOptions.value].filter((o) => iv.value.map((v) => v[valueProp.value]).indexOf(o[valueProp.value]) === -1).filter((o) => !o[disabledProp.value]).filter((o, k) => iv.value.length + 1 + k <= max2.value || max2.value === -1)
          );
        }
        if (hideSelected.value && pointer.value) {
          setPointer(fg.value.filter((g) => !g[disabledProp.value])[pointer.value.index]);
        }
        break;
    }
    if (closeOnSelect.value) {
      deactivate();
    }
  };
  const handleOptionAppend = (option) => {
    if (getOption(option[valueProp.value]) === void 0 && createOption.value) {
      context.emit("tag", option[valueProp.value], $this);
      context.emit("option", option[valueProp.value], $this);
      context.emit("create", option[valueProp.value], $this);
      if (appendNewOption.value) {
        appendOption(option);
      }
      clearSearch();
    }
  };
  const selectAll = () => {
    if (mode.value === "single") {
      return;
    }
    select(fo.value.filter((o) => !o.disabled && !isSelected(o)));
  };
  const areAllEnabledSelected = (options2) => {
    return options2.find((o) => !isSelected(o) && !o[disabledProp.value]) === void 0;
  };
  const areAllSelected = (options2) => {
    return options2.find((o) => !isSelected(o)) === void 0;
  };
  const getOption = (val) => {
    return eo.value[eo.value.map((o) => String(o[valueProp.value])).indexOf(String(val))];
  };
  const getOptionByTrackBy = (val) => {
    return eo.value.findIndex((o) => {
      return trackBy.value.some((track) => {
        return (parseInt(o[track]) == o[track] ? parseInt(o[track]) : o[track]) === (parseInt(val) == val ? parseInt(val) : val);
      });
    });
  };
  const shouldHideOption = (option) => {
    return ["tags", "multiple"].indexOf(mode.value) !== -1 && hideSelected.value && isSelected(option);
  };
  const appendOption = (option) => {
    ap.value.push(option);
  };
  const filterGroups = (groups) => {
    return groupHideEmpty.value ? groups.filter(
      (g) => search.value ? g.__VISIBLE__.length : g[groupOptions.value].length
    ) : groups.filter((g) => search.value ? g.__VISIBLE__.length : true);
  };
  const filterOptions = (options2, excludeHideSelected = true) => {
    let fo2 = options2;
    if (search.value && filterResults.value) {
      let filter = searchFilter.value;
      if (!filter) {
        filter = (option, query, $this2) => {
          return trackBy.value.some((track) => {
            let target = normalize(localize(option[track]), strict.value);
            return searchStart.value ? target.startsWith(normalize(query, strict.value)) : target.indexOf(normalize(query, strict.value)) !== -1;
          });
        };
      }
      fo2 = fo2.filter((o) => {
        return filter(o, search.value, $this);
      });
    }
    if (hideSelected.value && excludeHideSelected) {
      fo2 = fo2.filter((option) => !shouldHideOption(option));
    }
    return fo2;
  };
  const optionsToArray = (options2) => {
    let uo = options2;
    if (isObject(uo)) {
      uo = Object.keys(uo).map((key) => {
        let val = uo[key];
        return { [valueProp.value]: key, [trackBy.value[0]]: val, [label.value]: val };
      });
    }
    uo = uo.map((val) => {
      return typeof val === "object" ? val : { [valueProp.value]: val, [trackBy.value[0]]: val, [label.value]: val };
    });
    return uo;
  };
  const initInternalValue = () => {
    if (!isNullish(ev.value)) {
      iv.value = makeInternal(ev.value);
    }
  };
  const resolveOptions = (callback) => {
    resolving.value = true;
    return new Promise((resolve, reject) => {
      options.value(search.value, $this).then((response) => {
        ro.value = response || [];
        if (typeof callback == "function") {
          callback(response);
        }
        resolving.value = false;
      }).catch((e) => {
        console.error(e);
        ro.value = [];
        resolving.value = false;
      }).finally(() => {
        resolve();
      });
    });
  };
  const refreshLabels = () => {
    if (!hasSelected.value) {
      return;
    }
    if (mode.value === "single") {
      let option = getOption(iv.value[valueProp.value]);
      if (option !== void 0) {
        let newLabel = option[label.value];
        iv.value[label.value] = newLabel;
        if (object.value) {
          ev.value[label.value] = newLabel;
        }
      }
    } else {
      iv.value.forEach((val, i) => {
        let option = getOption(iv.value[i][valueProp.value]);
        if (option !== void 0) {
          let newLabel = option[label.value];
          iv.value[i][label.value] = newLabel;
          if (object.value) {
            ev.value[i][label.value] = newLabel;
          }
        }
      });
    }
  };
  const refreshOptions = (callback) => {
    resolveOptions(callback);
  };
  const makeInternal = (val) => {
    if (isNullish(val)) {
      return mode.value === "single" ? {} : [];
    }
    if (object.value) {
      return val;
    }
    return mode.value === "single" ? getOption(val) || (allowAbsent.value ? {
      [label.value]: val,
      [valueProp.value]: val,
      [trackBy.value[0]]: val
    } : {}) : val.filter((v) => !!getOption(v) || allowAbsent.value).map((v) => getOption(v) || {
      [label.value]: v,
      [valueProp.value]: v,
      [trackBy.value[0]]: v
    });
  };
  const initSearchWatcher = () => {
    searchWatcher.value = watch(search, (query) => {
      if (query.length < minChars.value || !query && minChars.value !== 0) {
        return;
      }
      resolving.value = true;
      if (clearOnSearch.value) {
        ro.value = [];
      }
      setTimeout(() => {
        if (query != search.value) {
          return;
        }
        options.value(search.value, $this).then((response) => {
          if (query == search.value || !search.value) {
            ro.value = response;
            pointer.value = fo.value.filter((o) => o[disabledProp.value] !== true)[0] || null;
            resolving.value = false;
          }
        }).catch(
          /* istanbul ignore next */
          (e) => {
            console.error(e);
          }
        );
      }, delay.value);
    }, { flush: "sync" });
  };
  if (mode.value !== "single" && !isNullish(ev.value) && !Array.isArray(ev.value)) {
    throw new Error('v-model must be an array when using "'.concat(mode.value, '" mode'));
  }
  if (options && typeof options.value == "function") {
    if (resolveOnLoad.value) {
      resolveOptions(initInternalValue);
    } else if (object.value == true) {
      initInternalValue();
    }
  } else {
    ro.value = options.value;
    initInternalValue();
  }
  if (delay.value > -1) {
    initSearchWatcher();
  }
  watch(delay, (value, old) => {
    if (searchWatcher.value) {
      searchWatcher.value();
    }
    if (value >= 0) {
      initSearchWatcher();
    }
  });
  watch(ev, (newValue) => {
    if (isNullish(newValue)) {
      update(makeInternal(newValue), false);
      return;
    }
    switch (mode.value) {
      case "single":
        if (object.value ? newValue[valueProp.value] != iv.value[valueProp.value] : newValue != iv.value[valueProp.value]) {
          update(makeInternal(newValue), false);
        }
        break;
      case "multiple":
      case "tags":
        if (!arraysEqual(object.value ? newValue.map((o) => o[valueProp.value]) : newValue, iv.value.map((o) => o[valueProp.value]))) {
          update(makeInternal(newValue), false);
        }
        break;
    }
  }, { deep: true });
  watch(options, (n, o) => {
    if (typeof props.options === "function") {
      if (resolveOnLoad.value && (!o || n && n.toString() !== o.toString())) {
        resolveOptions();
      }
    } else {
      ro.value = props.options;
      if (!Object.keys(iv.value).length) {
        initInternalValue();
      }
      refreshLabels();
    }
  });
  watch(label, refreshLabels);
  watch(limit, (n, o) => {
    offset.value = infinite.value && n === -1 ? 10 : n;
  });
  return {
    pfo,
    fo,
    filteredOptions: fo,
    hasSelected,
    multipleLabelText,
    eo,
    extendedOptions: eo,
    eg,
    extendedGroups: eg,
    fg,
    filteredGroups: fg,
    noOptions,
    noResults,
    resolving,
    busy,
    offset,
    select,
    deselect,
    remove,
    selectAll,
    clear,
    isSelected,
    isDisabled,
    isMax,
    getOption,
    handleOptionClick,
    handleGroupClick,
    handleTagRemove,
    refreshOptions,
    resolveOptions,
    refreshLabels
  };
}
function usePointer(props, context, dep) {
  const {
    valueProp,
    showOptions,
    searchable,
    groupLabel,
    groups: groupped,
    mode,
    groupSelect,
    disabledProp,
    groupOptions
  } = toRefs(props);
  const fo = dep.fo;
  const fg = dep.fg;
  const handleOptionClick = dep.handleOptionClick;
  const handleGroupClick = dep.handleGroupClick;
  const search = dep.search;
  const pointer = dep.pointer;
  const setPointer = dep.setPointer;
  const clearPointer = dep.clearPointer;
  const multiselect = dep.multiselect;
  const isOpen = dep.isOpen;
  const options = computed(() => {
    return fo.value.filter((o) => !o[disabledProp.value]);
  });
  const groups = computed(() => {
    return fg.value.filter((g) => !g[disabledProp.value]);
  });
  const canPointGroups = computed(() => {
    return mode.value !== "single" && groupSelect.value;
  });
  const isPointerGroup = computed(() => {
    return pointer.value && pointer.value.group;
  });
  const currentGroup = computed(() => {
    return getParentGroup(pointer.value);
  });
  const prevGroup = computed(() => {
    const group = isPointerGroup.value ? pointer.value : (
      /* istanbul ignore next */
      getParentGroup(pointer.value)
    );
    const groupIndex = groups.value.map((g) => g[groupLabel.value]).indexOf(group[groupLabel.value]);
    let prevGroup2 = groups.value[groupIndex - 1];
    if (prevGroup2 === void 0) {
      prevGroup2 = lastGroup.value;
    }
    return prevGroup2;
  });
  const nextGroup = computed(() => {
    let nextIndex = groups.value.map((g) => g.label).indexOf(isPointerGroup.value ? pointer.value[groupLabel.value] : getParentGroup(pointer.value)[groupLabel.value]) + 1;
    if (groups.value.length <= nextIndex) {
      nextIndex = 0;
    }
    return groups.value[nextIndex];
  });
  const lastGroup = computed(() => {
    return [...groups.value].slice(-1)[0];
  });
  const currentGroupFirstEnabledOption = computed(() => {
    return pointer.value.__VISIBLE__.filter((o) => !o[disabledProp.value])[0];
  });
  const currentGroupPrevEnabledOption = computed(() => {
    const options2 = currentGroup.value.__VISIBLE__.filter((o) => !o[disabledProp.value]);
    return options2[options2.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1];
  });
  const currentGroupNextEnabledOption = computed(() => {
    const options2 = getParentGroup(pointer.value).__VISIBLE__.filter((o) => !o[disabledProp.value]);
    return options2[options2.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1];
  });
  const prevGroupLastEnabledOption = computed(() => {
    return [...prevGroup.value.__VISIBLE__.filter((o) => !o[disabledProp.value])].slice(-1)[0];
  });
  const lastGroupLastEnabledOption = computed(() => {
    return [...lastGroup.value.__VISIBLE__.filter((o) => !o[disabledProp.value])].slice(-1)[0];
  });
  const isPointed = (option) => {
    return !!pointer.value && (!option.group && pointer.value[valueProp.value] === option[valueProp.value] || option.group !== void 0 && pointer.value[groupLabel.value] === option[groupLabel.value]) ? true : void 0;
  };
  const setPointerFirst = () => {
    setPointer(options.value[0] || null);
  };
  const selectPointer = () => {
    if (!pointer.value || pointer.value[disabledProp.value] === true) {
      return;
    }
    if (isPointerGroup.value) {
      handleGroupClick(pointer.value);
    } else {
      handleOptionClick(pointer.value);
    }
  };
  const forwardPointer = () => {
    if (pointer.value === null) {
      setPointer((groupped.value && canPointGroups.value ? !groups.value[0].__CREATE__ ? groups.value[0] : options.value[0] : options.value[0]) || null);
    } else if (groupped.value && canPointGroups.value) {
      let nextPointer = isPointerGroup.value ? currentGroupFirstEnabledOption.value : currentGroupNextEnabledOption.value;
      if (nextPointer === void 0) {
        nextPointer = nextGroup.value;
        if (nextPointer.__CREATE__) {
          nextPointer = nextPointer[groupOptions.value][0];
        }
      }
      setPointer(nextPointer || /* istanbul ignore next */
      null);
    } else {
      let next = options.value.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) + 1;
      if (options.value.length <= next) {
        next = 0;
      }
      setPointer(options.value[next] || null);
    }
    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };
  const backwardPointer = () => {
    if (pointer.value === null) {
      let prevPointer = options.value[options.value.length - 1];
      if (groupped.value && canPointGroups.value) {
        prevPointer = lastGroupLastEnabledOption.value;
        if (prevPointer === void 0) {
          prevPointer = lastGroup.value;
        }
      }
      setPointer(prevPointer || null);
    } else if (groupped.value && canPointGroups.value) {
      let prevPointer = isPointerGroup.value ? prevGroupLastEnabledOption.value : currentGroupPrevEnabledOption.value;
      if (prevPointer === void 0) {
        prevPointer = isPointerGroup.value ? prevGroup.value : currentGroup.value;
        if (prevPointer.__CREATE__) {
          prevPointer = prevGroupLastEnabledOption.value;
          if (prevPointer === void 0) {
            prevPointer = prevGroup.value;
          }
        }
      }
      setPointer(prevPointer || /* istanbul ignore next */
      null);
    } else {
      let prevIndex = options.value.map((o) => o[valueProp.value]).indexOf(pointer.value[valueProp.value]) - 1;
      if (prevIndex < 0) {
        prevIndex = options.value.length - 1;
      }
      setPointer(options.value[prevIndex] || null);
    }
    nextTick(() => {
      adjustWrapperScrollToPointer();
    });
  };
  const getParentGroup = (option) => {
    return groups.value.find((group) => {
      return group.__VISIBLE__.map((o) => o[valueProp.value]).indexOf(option[valueProp.value]) !== -1;
    });
  };
  const adjustWrapperScrollToPointer = () => {
    let pointedOption = multiselect.value.querySelector("[data-pointed]");
    if (!pointedOption) {
      return;
    }
    let wrapper = pointedOption.parentElement.parentElement;
    if (groupped.value) {
      wrapper = isPointerGroup.value ? pointedOption.parentElement.parentElement.parentElement : pointedOption.parentElement.parentElement.parentElement.parentElement;
    }
    if (pointedOption.offsetTop + pointedOption.offsetHeight > wrapper.clientHeight + wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop + pointedOption.offsetHeight - wrapper.clientHeight;
    }
    if (pointedOption.offsetTop < wrapper.scrollTop) {
      wrapper.scrollTop = pointedOption.offsetTop;
    }
  };
  watch(search, (val) => {
    if (searchable.value) {
      if (val.length && showOptions.value) {
        setPointerFirst();
      } else {
        clearPointer();
      }
    }
  });
  watch(isOpen, (val) => {
    if (val) {
      let firstSelected = multiselect.value.querySelectorAll("[data-selected]")[0];
      if (!firstSelected) {
        return;
      }
      let wrapper = firstSelected.parentElement.parentElement;
      nextTick(() => {
        if (wrapper.scrollTop > 0) {
          return;
        }
        wrapper.scrollTop = firstSelected.offsetTop;
      });
    }
  });
  return {
    pointer,
    canPointGroups,
    isPointed,
    setPointerFirst,
    selectPointer,
    forwardPointer,
    backwardPointer
  };
}
function getWindow(node) {
  if (node == null) {
    return window;
  }
  if (node.toString() !== "[object Window]") {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }
  return node;
}
function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
function isShadowRoot(node) {
  if (typeof ShadowRoot === "undefined") {
    return false;
  }
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}
var max = Math.max;
var min = Math.min;
var round = Math.round;
function getUAString() {
  var uaData = navigator.userAgentData;
  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function(item) {
      return item.brand + "/" + item.version;
    }).join(" ");
  }
  return navigator.userAgent;
}
function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }
  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }
  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;
  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }
  var _ref = isElement(element) ? getWindow(element) : window, visualViewport = _ref.visualViewport;
  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  };
}
function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft,
    scrollTop
  };
}
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
function getNodeName(element) {
  return element ? (element.nodeName || "").toLowerCase() : null;
}
function getDocumentElement(element) {
  return ((isElement(element) ? element.ownerDocument : (
    // $FlowFixMe[prop-missing]
    element.document
  )) || window.document).documentElement;
}
function getWindowScrollBarX(element) {
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}
function isScrollParent(element) {
  var _getComputedStyle = getComputedStyle$1(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
}
function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }
  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element);
  var width = element.offsetWidth;
  var height = element.offsetHeight;
  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }
  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width,
    height
  };
}
function getParentNode(element) {
  if (getNodeName(element) === "html") {
    return element;
  }
  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element)
  );
}
function getScrollParent(node) {
  if (["html", "body", "#document"].indexOf(getNodeName(node)) >= 0) {
    return node.ownerDocument.body;
  }
  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }
  return getScrollParent(getParentNode(node));
}
function listScrollParents(element, list) {
  var _element$ownerDocumen;
  if (list === void 0) {
    list = [];
  }
  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    updatedList.concat(listScrollParents(getParentNode(target)))
  );
}
function isTableElement(element) {
  return ["table", "td", "th"].indexOf(getNodeName(element)) >= 0;
}
function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === "fixed") {
    return null;
  }
  return element.offsetParent;
}
function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());
  if (isIE && isHTMLElement(element)) {
    var elementCss = getComputedStyle$1(element);
    if (elementCss.position === "fixed") {
      return null;
    }
  }
  var currentNode = getParentNode(element);
  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }
  while (isHTMLElement(currentNode) && ["html", "body"].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode);
    if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || ["transform", "perspective"].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }
  return null;
}
function getOffsetParent(element) {
  var window2 = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);
  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === "static") {
    offsetParent = getTrueOffsetParent(offsetParent);
  }
  if (offsetParent && (getNodeName(offsetParent) === "html" || getNodeName(offsetParent) === "body" && getComputedStyle$1(offsetParent).position === "static")) {
    return window2;
  }
  return offsetParent || getContainingBlock(element) || window2;
}
var top = "top";
var bottom = "bottom";
var right = "right";
var left = "left";
var auto = "auto";
var basePlacements = [top, bottom, right, left];
var start = "start";
var end = "end";
var clippingParents = "clippingParents";
var viewport = "viewport";
var popper = "popper";
var reference = "reference";
var variationPlacements = /* @__PURE__ */ basePlacements.reduce(function(acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /* @__PURE__ */ [].concat(basePlacements, [auto]).reduce(function(acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []);
var beforeRead = "beforeRead";
var read = "read";
var afterRead = "afterRead";
var beforeMain = "beforeMain";
var main = "main";
var afterMain = "afterMain";
var beforeWrite = "beforeWrite";
var write = "write";
var afterWrite = "afterWrite";
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
function order(modifiers) {
  var map = /* @__PURE__ */ new Map();
  var visited = /* @__PURE__ */ new Set();
  var result = [];
  modifiers.forEach(function(modifier) {
    map.set(modifier.name, modifier);
  });
  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function(dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);
        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }
  modifiers.forEach(function(modifier) {
    if (!visited.has(modifier.name)) {
      sort(modifier);
    }
  });
  return result;
}
function orderModifiers(modifiers) {
  var orderedModifiers = order(modifiers);
  return modifierPhases.reduce(function(acc, phase) {
    return acc.concat(orderedModifiers.filter(function(modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
function debounce(fn2) {
  var pending;
  return function() {
    if (!pending) {
      pending = new Promise(function(resolve) {
        Promise.resolve().then(function() {
          pending = void 0;
          resolve(fn2());
        });
      });
    }
    return pending;
  };
}
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function(merged2, current) {
    var existing = merged2[current.name];
    merged2[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged2;
  }, {});
  return Object.keys(merged).map(function(key) {
    return merged[key];
  });
}
function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();
    if (layoutViewport || !layoutViewport && strategy === "fixed") {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }
  return {
    width,
    height,
    x: x + getWindowScrollBarX(element),
    y
  };
}
function getDocumentRect(element) {
  var _element$ownerDocumen;
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;
  if (getComputedStyle$1(body || html).direction === "rtl") {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }
  return {
    width,
    height,
    x,
    y
  };
}
function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode();
  if (parent.contains(child)) {
    return true;
  } else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;
    do {
      if (next && parent.isSameNode(next)) {
        return true;
      }
      next = next.parentNode || next.host;
    } while (next);
  }
  return false;
}
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === "fixed");
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}
function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
}
function getClippingParents(element) {
  var clippingParents2 = listScrollParents(getParentNode(element));
  var canEscapeClipping = ["absolute", "fixed"].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;
  if (!isElement(clipperElement)) {
    return [];
  }
  return clippingParents2.filter(function(clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== "body";
  });
}
function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === "clippingParents" ? getClippingParents(element) : [].concat(boundary);
  var clippingParents2 = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents2[0];
  var clippingRect = clippingParents2.reduce(function(accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
function getBasePlacement(placement) {
  return placement.split("-")[0];
}
function getVariation(placement) {
  return placement.split("-")[1];
}
function getMainAxisFromPlacement(placement) {
  return ["top", "bottom"].indexOf(placement) >= 0 ? "x" : "y";
}
function computeOffsets(_ref) {
  var reference2 = _ref.reference, element = _ref.element, placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference2.x + reference2.width / 2 - element.width / 2;
  var commonY = reference2.y + reference2.height / 2 - element.height / 2;
  var offsets;
  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference2.y - element.height
      };
      break;
    case bottom:
      offsets = {
        x: commonX,
        y: reference2.y + reference2.height
      };
      break;
    case right:
      offsets = {
        x: reference2.x + reference2.width,
        y: commonY
      };
      break;
    case left:
      offsets = {
        x: reference2.x - element.width,
        y: commonY
      };
      break;
    default:
      offsets = {
        x: reference2.x,
        y: reference2.y
      };
  }
  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;
  if (mainAxis != null) {
    var len = mainAxis === "y" ? "height" : "width";
    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference2[len] / 2 - element[len] / 2);
        break;
      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference2[len] / 2 - element[len] / 2);
        break;
    }
  }
  return offsets;
}
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
function expandToHashMap(value, keys) {
  return keys.reduce(function(hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? clippingParents : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? popper : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== "number" ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets2 = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: "absolute",
    placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets2));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect;
  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset;
  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function(key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? "y" : "x";
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }
  return overflowOffsets;
}
var DEFAULT_OPTIONS = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return !args.some(function(element) {
    return !(element && typeof element.getBoundingClientRect === "function");
  });
}
function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }
  var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers2 = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper2(reference2, popper2, options) {
    if (options === void 0) {
      options = defaultOptions;
    }
    var state = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference2,
        popper: popper2
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state,
      setOptions: function setOptions(setOptionsAction) {
        var options2 = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options2);
        state.scrollParents = {
          reference: isElement(reference2) ? listScrollParents(reference2) : reference2.contextElement ? listScrollParents(reference2.contextElement) : [],
          popper: listScrollParents(popper2)
        };
        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers2, state.options.modifiers)));
        state.orderedModifiers = orderedModifiers.filter(function(m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }
        var _state$elements = state.elements, reference3 = _state$elements.reference, popper3 = _state$elements.popper;
        if (!areValidElements(reference3, popper3)) {
          return;
        }
        state.rects = {
          reference: getCompositeRect(reference3, getOffsetParent(popper3), state.options.strategy === "fixed"),
          popper: getLayoutRect(popper3)
        };
        state.reset = false;
        state.placement = state.options.placement;
        state.orderedModifiers.forEach(function(modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }
          var _state$orderedModifie = state.orderedModifiers[index], fn2 = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
          if (typeof fn2 === "function") {
            state = fn2({
              state,
              options: _options,
              name,
              instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function() {
        return new Promise(function(resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };
    if (!areValidElements(reference2, popper2)) {
      return instance;
    }
    instance.setOptions(options).then(function(state2) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state2);
      }
    });
    function runModifierEffects() {
      state.orderedModifiers.forEach(function(_ref) {
        var name = _ref.name, _ref$options = _ref.options, options2 = _ref$options === void 0 ? {} : _ref$options, effect2 = _ref.effect;
        if (typeof effect2 === "function") {
          var cleanupFn = effect2({
            state,
            name,
            instance,
            options: options2
          });
          var noopFn = function noopFn2() {
          };
          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }
    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function(fn2) {
        return fn2();
      });
      effectCleanupFns = [];
    }
    return instance;
  };
}
var passive = {
  passive: true
};
function effect$1(_ref) {
  var state = _ref.state, instance = _ref.instance, options = _ref.options;
  var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
  var window2 = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
  if (scroll) {
    scrollParents.forEach(function(scrollParent) {
      scrollParent.addEventListener("scroll", instance.update, passive);
    });
  }
  if (resize) {
    window2.addEventListener("resize", instance.update, passive);
  }
  return function() {
    if (scroll) {
      scrollParents.forEach(function(scrollParent) {
        scrollParent.removeEventListener("scroll", instance.update, passive);
      });
    }
    if (resize) {
      window2.removeEventListener("resize", instance.update, passive);
    }
  };
}
var eventListeners = {
  name: "eventListeners",
  enabled: true,
  phase: "write",
  fn: function fn() {
  },
  effect: effect$1,
  data: {}
};
function popperOffsets(_ref) {
  var state = _ref.state, name = _ref.name;
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: "absolute",
    placement: state.placement
  });
}
var popperOffsets$1 = {
  name: "popperOffsets",
  enabled: true,
  phase: "read",
  fn: popperOffsets,
  data: {}
};
var unsetSides = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x, y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}
function mapToStyles(_ref2) {
  var _Object$assign2;
  var popper2 = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
  var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
    x,
    y
  }) : {
    x,
    y
  };
  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty("x");
  var hasY = offsets.hasOwnProperty("y");
  var sideX = left;
  var sideY = top;
  var win = window;
  if (adaptive) {
    var offsetParent = getOffsetParent(popper2);
    var heightProp = "clientHeight";
    var widthProp = "clientWidth";
    if (offsetParent === getWindow(popper2)) {
      offsetParent = getDocumentElement(popper2);
      if (getComputedStyle$1(offsetParent).position !== "static" && position === "absolute") {
        heightProp = "scrollHeight";
        widthProp = "scrollWidth";
      }
    }
    offsetParent = offsetParent;
    if (placement === top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        offsetParent[heightProp]
      );
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }
    if (placement === left || (placement === top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        offsetParent[widthProp]
      );
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }
  var commonStyles = Object.assign({
    position
  }, adaptive && unsetSides);
  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x,
    y
  }, getWindow(popper2)) : {
    x,
    y
  };
  x = _ref4.x;
  y = _ref4.y;
  if (gpuAcceleration) {
    var _Object$assign;
    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }
  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function computeStyles(_ref5) {
  var state = _ref5.state, options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration,
    isFixed: state.options.strategy === "fixed"
  };
  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive,
      roundOffsets
    })));
  }
  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: "absolute",
      adaptive: false,
      roundOffsets
    })));
  }
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    "data-popper-placement": state.placement
  });
}
var computeStyles$1 = {
  name: "computeStyles",
  enabled: true,
  phase: "beforeWrite",
  fn: computeStyles,
  data: {}
};
function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function(name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name];
    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    }
    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function(name2) {
      var value = attributes[name2];
      if (value === false) {
        element.removeAttribute(name2);
      } else {
        element.setAttribute(name2, value === true ? "" : value);
      }
    });
  });
}
function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;
  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }
  return function() {
    Object.keys(state.elements).forEach(function(name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]);
      var style = styleProperties.reduce(function(style2, property) {
        style2[property] = "";
        return style2;
      }, {});
      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }
      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function(attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
}
var applyStyles$1 = {
  name: "applyStyles",
  enabled: true,
  phase: "write",
  fn: applyStyles,
  effect,
  requires: ["computeStyles"]
};
var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1];
var createPopper = /* @__PURE__ */ popperGenerator({
  defaultModifiers
});
function getAltAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min2, value, max2) {
  var v = within(min2, value, max2);
  return v > max2 ? max2 : v;
}
function preventOverflow(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary,
    rootBoundary,
    padding,
    altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets2 = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };
  if (!popperOffsets2) {
    return;
  }
  if (checkMainAxis) {
    var _offsetModifierState$;
    var mainSide = mainAxis === "y" ? top : left;
    var altSide = mainAxis === "y" ? bottom : right;
    var len = mainAxis === "y" ? "height" : "width";
    var offset = popperOffsets2[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len];
    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide];
    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
    popperOffsets2[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }
  if (checkAltAxis) {
    var _offsetModifierState$2;
    var _mainSide = mainAxis === "x" ? top : left;
    var _altSide = mainAxis === "x" ? bottom : right;
    var _offset = popperOffsets2[altAxis];
    var _len = altAxis === "y" ? "height" : "width";
    var _min = _offset + overflow[_mainSide];
    var _max = _offset - overflow[_altSide];
    var isOriginSide = [top, left].indexOf(basePlacement) !== -1;
    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
    popperOffsets2[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }
  state.modifiersData[name] = data;
}
var preventOverflow$1 = {
  name: "preventOverflow",
  enabled: true,
  phase: "main",
  fn: preventOverflow,
  requiresIfExists: ["offset"]
};
var hash$1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash$1[matched];
  });
}
var hash = {
  start: "end",
  end: "start"
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function(matched) {
    return hash[matched];
  });
}
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }
  var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function(placement2) {
    return getVariation(placement2) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function(placement2) {
    return allowedAutoPlacements.indexOf(placement2) >= 0;
  });
  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  }
  var overflows = allowedPlacements.reduce(function(acc, placement2) {
    acc[placement2] = detectOverflow(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding
    })[getBasePlacement(placement2)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function(a, b) {
    return overflows[a] - overflows[b];
  });
}
function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }
  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}
function flip(_ref) {
  var state = _ref.state, options = _ref.options, name = _ref.name;
  if (state.modifiersData[name]._skip) {
    return;
  }
  var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements2 = [preferredPlacement].concat(fallbackPlacements).reduce(function(acc, placement2) {
    return acc.concat(getBasePlacement(placement2) === auto ? computeAutoPlacement(state, {
      placement: placement2,
      boundary,
      rootBoundary,
      padding,
      flipVariations,
      allowedAutoPlacements
    }) : placement2);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = /* @__PURE__ */ new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements2[0];
  for (var i = 0; i < placements2.length; i++) {
    var placement = placements2[i];
    var _basePlacement = getBasePlacement(placement);
    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? "width" : "height";
    var overflow = detectOverflow(state, {
      placement,
      boundary,
      rootBoundary,
      altBoundary,
      padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;
    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }
    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];
    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }
    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }
    if (checks.every(function(check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }
    checksMap.set(placement, checks);
  }
  if (makeFallbackChecks) {
    var numberOfChecks = flipVariations ? 3 : 1;
    var _loop = function _loop2(_i2) {
      var fittingPlacement = placements2.find(function(placement2) {
        var checks2 = checksMap.get(placement2);
        if (checks2) {
          return checks2.slice(0, _i2).every(function(check) {
            return check;
          });
        }
      });
      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };
    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);
      if (_ret === "break")
        break;
    }
  }
  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
}
var flip$1 = {
  name: "flip",
  enabled: true,
  phase: "main",
  fn: flip,
  requiresIfExists: ["offset"],
  data: {
    _skip: false
  }
};
function useDropdown(props, context, dep) {
  const { disabled, appendTo, appendToBody, openDirection } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const multiselect = dep.multiselect;
  const dropdown = dep.dropdown;
  const isOpen = ref(false);
  const popper2 = ref(null);
  const forcedPlacement = ref(null);
  const appended = computed(() => {
    return appendTo.value || appendToBody.value;
  });
  const placement = computed(() => {
    return openDirection.value === "top" && forcedPlacement.value === "bottom" || openDirection.value === "bottom" && forcedPlacement.value !== "top" ? "bottom" : "top";
  });
  const open = () => {
    if (isOpen.value || disabled.value) {
      return;
    }
    isOpen.value = true;
    context.emit("open", $this);
    if (appended.value) {
      nextTick(() => {
        updatePopper();
      });
    }
  };
  const close = () => {
    if (!isOpen.value) {
      return;
    }
    isOpen.value = false;
    context.emit("close", $this);
  };
  const updatePopper = () => {
    if (!popper2.value) {
      return;
    }
    let borderTopWidth = parseInt(window.getComputedStyle(dropdown.value).borderTopWidth.replace("px", ""));
    let borderBottomWidth = parseInt(window.getComputedStyle(dropdown.value).borderBottomWidth.replace("px", ""));
    popper2.value.setOptions((options) => ({
      ...options,
      modifiers: [
        ...options.modifiers,
        {
          name: "offset",
          options: {
            offset: [0, (placement.value === "top" ? borderTopWidth : borderBottomWidth) * -1]
          }
        }
      ]
    }));
    popper2.value.update();
  };
  const hasFixedParent = (element) => {
    while (element && element !== document.body) {
      const style = getComputedStyle(element);
      if (style.position === "fixed") {
        return true;
      }
      element = element.parentElement;
    }
    return false;
  };
  onMounted(() => {
    if (!appended.value) {
      return;
    }
    popper2.value = createPopper(multiselect.value, dropdown.value, {
      strategy: hasFixedParent(multiselect.value) ? (
        /* istanbul ignore next: UI feature */
        "fixed"
      ) : void 0,
      placement: openDirection.value,
      modifiers: [
        preventOverflow$1,
        flip$1,
        {
          name: "sameWidth",
          enabled: true,
          phase: "beforeWrite",
          requires: ["computeStyles"],
          fn: ({ state }) => {
            state.styles.popper.width = "".concat(state.rects.reference.width, "px");
          },
          effect: ({ state }) => {
            state.elements.popper.style.width = "".concat(state.elements.reference.offsetWidth, "px");
          }
        },
        {
          name: "toggleClass",
          enabled: true,
          phase: "write",
          fn({ state }) {
            forcedPlacement.value = state.placement;
          }
        }
      ]
    });
  });
  onBeforeUnmount(() => {
    if (!appended.value || !popper2.value) {
      return;
    }
    popper2.value.destroy();
    popper2.value = null;
  });
  return {
    popper: popper2,
    isOpen,
    open,
    close,
    placement,
    updatePopper
  };
}
function useMultiselect(props, context, dep) {
  const { searchable, disabled, clearOnBlur } = toRefs(props);
  const input = dep.input;
  const open = dep.open;
  const close = dep.close;
  const clearSearch = dep.clearSearch;
  const isOpen = dep.isOpen;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isActive = ref(false);
  const mouseClicked = ref(false);
  const tabindex = computed(() => {
    return searchable.value || disabled.value ? -1 : 0;
  });
  const blur = () => {
    if (searchable.value) {
      input.value.blur();
    }
    wrapper.value.blur();
  };
  const focus = () => {
    if (searchable.value && !disabled.value) {
      input.value.focus();
    }
  };
  const activate = (shouldOpen = true) => {
    if (disabled.value) {
      return;
    }
    isActive.value = true;
    if (shouldOpen) {
      open();
    }
  };
  const deactivate = () => {
    isActive.value = false;
    setTimeout(() => {
      if (!isActive.value) {
        close();
        if (clearOnBlur.value) {
          clearSearch();
        }
      }
    }, 1);
  };
  const handleFocusIn = (e) => {
    if (e.target.closest("[data-tags]") && e.target.nodeName !== "INPUT" || e.target.closest("[data-clear]")) {
      return;
    }
    activate(mouseClicked.value);
  };
  const handleFocusOut = () => {
    deactivate();
  };
  const handleCaretClick = () => {
    deactivate();
    blur();
  };
  const handleMousedown = (e) => {
    mouseClicked.value = true;
    if (isOpen.value && (e.target.isEqualNode(wrapper.value) || e.target.isEqualNode(tags.value))) {
      setTimeout(() => {
        deactivate();
      }, 0);
    } else if (!isOpen.value && (document.activeElement.isEqualNode(wrapper.value) || document.activeElement.isEqualNode(input.value))) {
      activate();
    }
    setTimeout(() => {
      mouseClicked.value = false;
    }, 0);
  };
  return {
    tabindex,
    isActive,
    mouseClicked,
    blur,
    focus,
    activate,
    deactivate,
    handleFocusIn,
    handleFocusOut,
    handleCaretClick,
    handleMousedown
  };
}
function useKeyboard(props, context, dep) {
  const {
    mode,
    addTagOn,
    openDirection,
    searchable,
    showOptions,
    valueProp,
    groups: groupped,
    addOptionOn: addOptionOn_,
    createTag,
    createOption: createOption_,
    reverse
  } = toRefs(props);
  const $this = getCurrentInstance().proxy;
  const iv = dep.iv;
  const update = dep.update;
  const deselect = dep.deselect;
  const search = dep.search;
  const setPointer = dep.setPointer;
  const selectPointer = dep.selectPointer;
  const backwardPointer = dep.backwardPointer;
  const forwardPointer = dep.forwardPointer;
  const multiselect = dep.multiselect;
  const wrapper = dep.wrapper;
  const tags = dep.tags;
  const isOpen = dep.isOpen;
  const open = dep.open;
  const blur = dep.blur;
  const fo = dep.fo;
  const createOption = computed(() => {
    return createTag.value || createOption_.value || false;
  });
  const addOptionOn = computed(() => {
    if (addTagOn.value !== void 0) {
      return addTagOn.value;
    } else if (addOptionOn_.value !== void 0) {
      return addOptionOn_.value;
    }
    return ["enter"];
  });
  const preparePointer = () => {
    if (mode.value === "tags" && !showOptions.value && createOption.value && searchable.value && !groupped.value) {
      setPointer(fo.value[fo.value.map((o) => o[valueProp.value]).indexOf(search.value)]);
    }
  };
  const handleKeydown = (e) => {
    context.emit("keydown", e, $this);
    let tagList;
    let activeIndex;
    if (["ArrowLeft", "ArrowRight", "Enter"].indexOf(e.key) !== -1 && mode.value === "tags") {
      tagList = [...multiselect.value.querySelectorAll("[data-tags] > *")].filter((e2) => e2 !== tags.value);
      activeIndex = tagList.findIndex((e2) => e2 === document.activeElement);
    }
    switch (e.key) {
      case "Backspace":
        if (mode.value === "single") {
          return;
        }
        if (searchable.value && [null, ""].indexOf(search.value) === -1) {
          return;
        }
        if (iv.value.length === 0) {
          return;
        }
        let deselectables = iv.value.filter((v) => !v.disabled && v.remove !== false);
        if (deselectables.length) {
          deselect(deselectables[deselectables.length - 1]);
        }
        break;
      case "Enter":
        e.preventDefault();
        if (e.keyCode === 229) {
          return;
        }
        if (activeIndex !== -1 && activeIndex !== void 0) {
          update([...iv.value].filter((v, k) => k !== activeIndex));
          if (activeIndex === tagList.length - 1) {
            if (tagList.length - 1) {
              tagList[tagList.length - 2].focus();
            } else if (searchable.value) {
              tags.value.querySelector("input").focus();
            } else {
              wrapper.value.focus();
            }
          }
          return;
        }
        if (addOptionOn.value.indexOf("enter") === -1 && createOption.value) {
          return;
        }
        preparePointer();
        selectPointer();
        break;
      case " ":
        if (!createOption.value && !searchable.value) {
          e.preventDefault();
          preparePointer();
          selectPointer();
          return;
        }
        if (!createOption.value) {
          return false;
        }
        if (addOptionOn.value.indexOf("space") === -1 && createOption.value) {
          return;
        }
        e.preventDefault();
        preparePointer();
        selectPointer();
        break;
      case "Tab":
      case ";":
      case ",":
        if (addOptionOn.value.indexOf(e.key.toLowerCase()) === -1 || !createOption.value) {
          return;
        }
        preparePointer();
        selectPointer();
        e.preventDefault();
        break;
      case "Escape":
        blur();
        break;
      case "ArrowUp":
        e.preventDefault();
        if (!showOptions.value) {
          return;
        }
        if (!isOpen.value) {
          open();
        }
        backwardPointer();
        break;
      case "ArrowDown":
        e.preventDefault();
        if (!showOptions.value) {
          return;
        }
        if (!isOpen.value) {
          open();
        }
        forwardPointer();
        break;
      case "ArrowLeft":
        if (searchable.value && tags.value && tags.value.querySelector("input").selectionStart || e.shiftKey || mode.value !== "tags" || !iv.value || !iv.value.length) {
          return;
        }
        e.preventDefault();
        if (activeIndex === -1) {
          tagList[tagList.length - 1].focus();
        } else if (activeIndex > 0) {
          tagList[activeIndex - 1].focus();
        }
        break;
      case "ArrowRight":
        if (activeIndex === -1 || e.shiftKey || mode.value !== "tags" || !iv.value || !iv.value.length) {
          return;
        }
        e.preventDefault();
        if (tagList.length > activeIndex + 1) {
          tagList[activeIndex + 1].focus();
        } else if (searchable.value) {
          tags.value.querySelector("input").focus();
        } else if (!searchable.value) {
          wrapper.value.focus();
        }
        break;
    }
  };
  const handleKeyup = (e) => {
    context.emit("keyup", e, $this);
  };
  return {
    handleKeydown,
    handleKeyup,
    preparePointer
  };
}
function useClasses(props, context, dependencies) {
  const {
    classes: classes_,
    disabled,
    showOptions,
    breakTags
  } = toRefs(props);
  const isOpen = dependencies.isOpen;
  const isPointed = dependencies.isPointed;
  const isSelected = dependencies.isSelected;
  const isDisabled = dependencies.isDisabled;
  const isActive = dependencies.isActive;
  const canPointGroups = dependencies.canPointGroups;
  const resolving = dependencies.resolving;
  const fo = dependencies.fo;
  const placement = dependencies.placement;
  const classes = computed(() => ({
    container: "multiselect",
    containerDisabled: "is-disabled",
    containerOpen: "is-open",
    containerOpenTop: "is-open-top",
    containerActive: "is-active",
    wrapper: "multiselect-wrapper",
    singleLabel: "multiselect-single-label",
    singleLabelText: "multiselect-single-label-text",
    multipleLabel: "multiselect-multiple-label",
    search: "multiselect-search",
    tags: "multiselect-tags",
    tag: "multiselect-tag",
    tagWrapper: "multiselect-tag-wrapper",
    tagWrapperBreak: "multiselect-tag-wrapper-break",
    tagDisabled: "is-disabled",
    tagRemove: "multiselect-tag-remove",
    tagRemoveIcon: "multiselect-tag-remove-icon",
    tagsSearchWrapper: "multiselect-tags-search-wrapper",
    tagsSearch: "multiselect-tags-search",
    tagsSearchCopy: "multiselect-tags-search-copy",
    placeholder: "multiselect-placeholder",
    caret: "multiselect-caret",
    caretOpen: "is-open",
    clear: "multiselect-clear",
    clearIcon: "multiselect-clear-icon",
    spinner: "multiselect-spinner",
    inifinite: "multiselect-inifite",
    inifiniteSpinner: "multiselect-inifite-spinner",
    dropdown: "multiselect-dropdown",
    dropdownTop: "is-top",
    dropdownHidden: "is-hidden",
    options: "multiselect-options",
    optionsTop: "is-top",
    group: "multiselect-group",
    groupLabel: "multiselect-group-label",
    groupLabelPointable: "is-pointable",
    groupLabelPointed: "is-pointed",
    groupLabelSelected: "is-selected",
    groupLabelDisabled: "is-disabled",
    groupLabelSelectedPointed: "is-selected is-pointed",
    groupLabelSelectedDisabled: "is-selected is-disabled",
    groupOptions: "multiselect-group-options",
    option: "multiselect-option",
    optionPointed: "is-pointed",
    optionSelected: "is-selected",
    optionDisabled: "is-disabled",
    optionSelectedPointed: "is-selected is-pointed",
    optionSelectedDisabled: "is-selected is-disabled",
    noOptions: "multiselect-no-options",
    noResults: "multiselect-no-results",
    fakeInput: "multiselect-fake-input",
    assist: "multiselect-assistive-text",
    spacer: "multiselect-spacer",
    ...classes_.value
  }));
  const showDropdown = computed(() => {
    return !!(isOpen.value && showOptions.value && (!resolving.value || resolving.value && fo.value.length));
  });
  const classList = computed(() => {
    const c = classes.value;
    return {
      container: [c.container].concat(disabled.value ? c.containerDisabled : []).concat(showDropdown.value && placement.value === "top" ? c.containerOpenTop : []).concat(showDropdown.value && placement.value !== "top" ? c.containerOpen : []).concat(isActive.value ? c.containerActive : []),
      wrapper: c.wrapper,
      spacer: c.spacer,
      singleLabel: c.singleLabel,
      singleLabelText: c.singleLabelText,
      multipleLabel: c.multipleLabel,
      search: c.search,
      tags: c.tags,
      tag: [c.tag].concat(disabled.value ? c.tagDisabled : []),
      tagWrapper: [c.tagWrapper, breakTags.value ? c.tagWrapperBreak : null],
      tagDisabled: c.tagDisabled,
      tagRemove: c.tagRemove,
      tagRemoveIcon: c.tagRemoveIcon,
      tagsSearchWrapper: c.tagsSearchWrapper,
      tagsSearch: c.tagsSearch,
      tagsSearchCopy: c.tagsSearchCopy,
      placeholder: c.placeholder,
      caret: [c.caret].concat(isOpen.value ? c.caretOpen : []),
      clear: c.clear,
      clearIcon: c.clearIcon,
      spinner: c.spinner,
      inifinite: c.inifinite,
      inifiniteSpinner: c.inifiniteSpinner,
      dropdown: [c.dropdown].concat(placement.value === "top" ? c.dropdownTop : []).concat(!isOpen.value || !showOptions.value || !showDropdown.value ? c.dropdownHidden : []),
      options: [c.options].concat(placement.value === "top" ? c.optionsTop : []),
      group: c.group,
      groupLabel: (g) => {
        let groupLabel = [c.groupLabel];
        if (isPointed(g)) {
          groupLabel.push(isSelected(g) ? c.groupLabelSelectedPointed : c.groupLabelPointed);
        } else if (isSelected(g) && canPointGroups.value) {
          groupLabel.push(isDisabled(g) ? c.groupLabelSelectedDisabled : c.groupLabelSelected);
        } else if (isDisabled(g)) {
          groupLabel.push(c.groupLabelDisabled);
        }
        if (canPointGroups.value) {
          groupLabel.push(c.groupLabelPointable);
        }
        return groupLabel;
      },
      groupOptions: c.groupOptions,
      option: (o, g) => {
        let option = [c.option];
        if (isPointed(o)) {
          option.push(isSelected(o) ? c.optionSelectedPointed : c.optionPointed);
        } else if (isSelected(o)) {
          option.push(isDisabled(o) ? c.optionSelectedDisabled : c.optionSelected);
        } else if (isDisabled(o) || g && isDisabled(g)) {
          option.push(c.optionDisabled);
        }
        return option;
      },
      noOptions: c.noOptions,
      noResults: c.noResults,
      assist: c.assist,
      fakeInput: c.fakeInput
    };
  });
  return {
    classList,
    showDropdown
  };
}
function useScroll(props, context, dep) {
  const {
    limit,
    infinite
  } = toRefs(props);
  const isOpen = dep.isOpen;
  const offset = dep.offset;
  const search = dep.search;
  const pfo = dep.pfo;
  const eo = dep.eo;
  const observer = ref(null);
  const infiniteLoader = ref(null);
  const hasMore = computed(() => {
    return offset.value < pfo.value.length;
  });
  const handleIntersectionObserver = (entries) => {
    const { isIntersecting, target } = entries[0];
    if (isIntersecting) {
      const parent = target.offsetParent;
      const scrollTop = parent.scrollTop;
      offset.value += limit.value == -1 ? 10 : limit.value;
      nextTick(() => {
        parent.scrollTop = scrollTop;
      });
    }
  };
  const observe = () => {
    if (isOpen.value && offset.value < pfo.value.length) {
      observer.value.observe(infiniteLoader.value);
    } else if (!isOpen.value && observer.value) {
      observer.value.disconnect();
    }
  };
  watch(isOpen, () => {
    if (!infinite.value) {
      return;
    }
    observe();
  });
  watch(search, () => {
    if (!infinite.value) {
      return;
    }
    offset.value = limit.value;
    observe();
  }, { flush: "post" });
  watch(eo, () => {
    if (!infinite.value) {
      return;
    }
    observe();
  }, { immediate: false, flush: "post" });
  onMounted(() => {
    if (window && window.IntersectionObserver) {
      observer.value = new IntersectionObserver(handleIntersectionObserver);
    }
  });
  return {
    hasMore,
    infiniteLoader
  };
}
function useA11y(props, context, dep) {
  const {
    placeholder,
    id,
    valueProp,
    label: labelProp,
    mode,
    groupLabel,
    aria,
    searchable
  } = toRefs(props);
  const pointer = dep.pointer;
  const iv = dep.iv;
  const hasSelected = dep.hasSelected;
  const multipleLabelText = dep.multipleLabelText;
  const label = ref(null);
  const ariaAssist = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("assist");
    return texts.join("-");
  });
  const ariaControls = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-options");
    return texts.join("-");
  });
  const ariaActiveDescendant = computed(() => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    if (pointer.value) {
      texts.push(pointer.value.group ? "multiselect-group" : "multiselect-option");
      texts.push(pointer.value.group ? pointer.value.index : pointer.value[valueProp.value]);
      return texts.join("-");
    }
  });
  const ariaPlaceholder = computed(() => {
    return placeholder.value;
  });
  const ariaMultiselectable = computed(() => {
    return mode.value !== "single";
  });
  const ariaLabel = computed(() => {
    let ariaLabel2 = "";
    if (mode.value === "single" && hasSelected.value) {
      ariaLabel2 += iv.value[labelProp.value];
    }
    if (mode.value === "multiple" && hasSelected.value) {
      ariaLabel2 += multipleLabelText.value;
    }
    if (mode.value === "tags" && hasSelected.value) {
      ariaLabel2 += iv.value.map((v) => v[labelProp.value]).join(", ");
    }
    return ariaLabel2;
  });
  const arias = computed(() => {
    let arias2 = { ...aria.value };
    if (searchable.value) {
      arias2["aria-labelledby"] = arias2["aria-labelledby"] ? "".concat(ariaAssist.value, " ").concat(arias2["aria-labelledby"]) : ariaAssist.value;
      if (ariaLabel.value && arias2["aria-label"]) {
        arias2["aria-label"] = "".concat(ariaLabel.value, ", ").concat(arias2["aria-label"]);
      }
    }
    return arias2;
  });
  const ariaOptionId = (option) => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-option");
    texts.push(option[valueProp.value]);
    return texts.join("-");
  };
  const ariaGroupId = (option) => {
    let texts = [];
    if (id && id.value) {
      texts.push(id.value);
    }
    texts.push("multiselect-group");
    texts.push(option.index);
    return texts.join("-");
  };
  const ariaOptionLabel = (label2) => {
    let texts = [];
    texts.push(label2);
    return texts.join(" ");
  };
  const ariaGroupLabel = (label2) => {
    let texts = [];
    texts.push(label2);
    return texts.join(" ");
  };
  const ariaTagLabel = (label2) => {
    return "".concat(label2, " ❎");
  };
  onMounted(() => {
    if (id && id.value && document && document.querySelector) {
      let forTag = document.querySelector('[for="'.concat(id.value, '"]'));
      label.value = forTag ? forTag.innerText : null;
    }
  });
  return {
    arias,
    ariaLabel,
    ariaAssist,
    ariaControls,
    ariaPlaceholder,
    ariaMultiselectable,
    ariaActiveDescendant,
    ariaOptionId,
    ariaOptionLabel,
    ariaGroupId,
    ariaGroupLabel,
    ariaTagLabel
  };
}
function useI18n(props, context, dep) {
  const {
    locale,
    fallbackLocale
  } = toRefs(props);
  const localize = (target) => {
    if (!target || typeof target !== "object") {
      return target;
    }
    if (target && target[locale.value]) {
      return target[locale.value];
    } else if (target && locale.value && target[locale.value.toUpperCase()]) {
      return target[locale.value.toUpperCase()];
    } else if (target && target[fallbackLocale.value]) {
      return target[fallbackLocale.value];
    } else if (target && fallbackLocale.value && target[fallbackLocale.value.toUpperCase()]) {
      return target[fallbackLocale.value.toUpperCase()];
    } else if (target && Object.keys(target)[0]) {
      return target[Object.keys(target)[0]];
    } else {
      return "";
    }
  };
  return {
    localize
  };
}
function useRefs(props, context, dep) {
  const multiselect = ref(null);
  const wrapper = ref(null);
  const tags = ref(null);
  const input = ref(null);
  const dropdown = ref(null);
  return {
    multiselect,
    wrapper,
    tags,
    input,
    dropdown
  };
}
function resolveDeps(props, context, features, deps = {}) {
  features.forEach((composable) => {
    if (composable) {
      deps = {
        ...deps,
        ...composable(props, context, deps)
      };
    }
  });
  return deps;
}
var script = {
  name: "Multiselect",
  emits: [
    "paste",
    "open",
    "close",
    "select",
    "deselect",
    "input",
    "search-change",
    "tag",
    "option",
    "update:modelValue",
    "change",
    "clear",
    "keydown",
    "keyup",
    "max",
    "create"
  ],
  props: {
    value: {
      required: false
    },
    modelValue: {
      required: false
    },
    options: {
      type: [Array, Object, Function],
      required: false,
      default: () => []
    },
    id: {
      type: [String, Number],
      required: false
    },
    name: {
      type: [String, Number],
      required: false,
      default: "multiselect"
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: false,
      default: "label"
    },
    trackBy: {
      type: [String, Array],
      required: false,
      default: void 0
    },
    valueProp: {
      type: String,
      required: false,
      default: "value"
    },
    placeholder: {
      type: String,
      required: false,
      default: null
    },
    mode: {
      type: String,
      required: false,
      default: "single"
      // single|multiple|tags
    },
    searchable: {
      type: Boolean,
      required: false,
      default: false
    },
    limit: {
      type: Number,
      required: false,
      default: -1
    },
    hideSelected: {
      type: Boolean,
      required: false,
      default: true
    },
    createTag: {
      type: Boolean,
      required: false,
      default: void 0
    },
    createOption: {
      type: Boolean,
      required: false,
      default: void 0
    },
    appendNewTag: {
      type: Boolean,
      required: false,
      default: void 0
    },
    appendNewOption: {
      type: Boolean,
      required: false,
      default: void 0
    },
    addTagOn: {
      type: Array,
      required: false,
      default: void 0
    },
    addOptionOn: {
      type: Array,
      required: false,
      default: void 0
    },
    caret: {
      type: Boolean,
      required: false,
      default: true
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    },
    noOptionsText: {
      type: [String, Object],
      required: false,
      default: "The list is empty"
    },
    noResultsText: {
      type: [String, Object],
      required: false,
      default: "No results found"
    },
    multipleLabel: {
      type: Function,
      required: false
    },
    object: {
      type: Boolean,
      required: false,
      default: false
    },
    delay: {
      type: Number,
      required: false,
      default: -1
    },
    minChars: {
      type: Number,
      required: false,
      default: 0
    },
    resolveOnLoad: {
      type: Boolean,
      required: false,
      default: true
    },
    filterResults: {
      type: Boolean,
      required: false,
      default: true
    },
    clearOnSearch: {
      type: Boolean,
      required: false,
      default: false
    },
    clearOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    canDeselect: {
      type: Boolean,
      required: false,
      default: true
    },
    canClear: {
      type: Boolean,
      required: false,
      default: true
    },
    max: {
      type: Number,
      required: false,
      default: -1
    },
    showOptions: {
      type: Boolean,
      required: false,
      default: true
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    openDirection: {
      type: String,
      required: false,
      default: "bottom"
    },
    nativeSupport: {
      type: Boolean,
      required: false,
      default: false
    },
    classes: {
      type: Object,
      required: false,
      default: () => ({})
    },
    strict: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    closeOnDeselect: {
      type: Boolean,
      required: false,
      default: false
    },
    autocomplete: {
      type: String,
      required: false
    },
    groups: {
      type: Boolean,
      required: false,
      default: false
    },
    groupLabel: {
      type: String,
      required: false,
      default: "label"
    },
    groupOptions: {
      type: String,
      required: false,
      default: "options"
    },
    groupHideEmpty: {
      type: Boolean,
      required: false,
      default: false
    },
    groupSelect: {
      type: Boolean,
      required: false,
      default: true
    },
    inputType: {
      type: String,
      required: false,
      default: "text"
    },
    attrs: {
      required: false,
      type: Object,
      default: () => ({})
    },
    onCreate: {
      required: false,
      type: Function
    },
    disabledProp: {
      type: String,
      required: false,
      default: "disabled"
    },
    searchStart: {
      type: Boolean,
      required: false,
      default: false
    },
    reverse: {
      type: Boolean,
      required: false,
      default: false
    },
    regex: {
      type: [Object, String, RegExp],
      required: false,
      default: void 0
    },
    rtl: {
      type: Boolean,
      required: false,
      default: false
    },
    infinite: {
      type: Boolean,
      required: false,
      default: false
    },
    aria: {
      required: false,
      type: Object,
      default: () => ({})
    },
    clearOnBlur: {
      required: false,
      type: Boolean,
      default: true
    },
    locale: {
      required: false,
      type: String,
      default: null
    },
    fallbackLocale: {
      required: false,
      type: String,
      default: "en"
    },
    searchFilter: {
      required: false,
      type: Function,
      default: null
    },
    allowAbsent: {
      required: false,
      type: Boolean,
      default: false
    },
    appendToBody: {
      required: false,
      type: Boolean,
      default: false
    },
    closeOnScroll: {
      required: false,
      type: Boolean,
      default: false
    },
    breakTags: {
      required: false,
      type: Boolean,
      default: false
    },
    appendTo: {
      required: false,
      type: String
    }
  },
  setup(props, context) {
    return resolveDeps(props, context, [
      useRefs,
      useI18n,
      useValue,
      usePointer$1,
      useDropdown,
      useSearch,
      useData,
      useMultiselect,
      useOptions,
      useScroll,
      usePointer,
      useKeyboard,
      useClasses,
      useA11y
    ]);
  },
  beforeMount() {
    var _a, _b;
    if (((_b = (_a = this.$root.constructor) == null ? void 0 : _a.version) == null ? void 0 : _b.match(/^2\./)) || this.vueVersionMs === 2) {
      if (!this.$options.components.Teleport) {
        this.$options.components.Teleport = {
          render() {
            return this.$slots.default ? this.$slots.default[0] : null;
          }
        };
      }
    }
  }
};
const _hoisted_1 = ["id", "dir"];
const _hoisted_2 = ["tabindex", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable", "role"];
const _hoisted_3 = ["type", "modelValue", "value", "autocomplete", "id", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_4 = ["onKeyup", "aria-label"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["type", "modelValue", "value", "id", "autocomplete", "aria-controls", "aria-placeholder", "aria-expanded", "aria-activedescendant", "aria-multiselectable"];
const _hoisted_7 = ["innerHTML"];
const _hoisted_8 = ["id"];
const _hoisted_9 = ["id"];
const _hoisted_10 = ["id", "aria-label", "aria-selected"];
const _hoisted_11 = ["data-pointed", "onMouseenter", "onMousedown"];
const _hoisted_12 = ["innerHTML"];
const _hoisted_13 = ["aria-label"];
const _hoisted_14 = ["data-pointed", "data-selected", "onMouseenter", "onMousedown", "id", "aria-selected", "aria-label"];
const _hoisted_15 = ["data-pointed", "data-selected", "onMouseenter", "onMousedown", "id", "aria-selected", "aria-label"];
const _hoisted_16 = ["innerHTML"];
const _hoisted_17 = ["innerHTML"];
const _hoisted_18 = ["value"];
const _hoisted_19 = ["name", "value"];
const _hoisted_20 = ["name", "value"];
const _hoisted_21 = ["id"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "multiselect",
    class: normalizeClass(_ctx.classList.container),
    id: $props.searchable ? void 0 : $props.id,
    dir: $props.rtl ? "rtl" : void 0,
    onFocusin: _cache[10] || (_cache[10] = (...args) => _ctx.handleFocusIn && _ctx.handleFocusIn(...args)),
    onFocusout: _cache[11] || (_cache[11] = (...args) => _ctx.handleFocusOut && _ctx.handleFocusOut(...args)),
    onKeyup: _cache[12] || (_cache[12] = (...args) => _ctx.handleKeyup && _ctx.handleKeyup(...args)),
    onKeydown: _cache[13] || (_cache[13] = (...args) => _ctx.handleKeydown && _ctx.handleKeydown(...args))
  }, [
    createBaseVNode("div", mergeProps({
      class: _ctx.classList.wrapper,
      onMousedown: _cache[9] || (_cache[9] = (...args) => _ctx.handleMousedown && _ctx.handleMousedown(...args)),
      ref: "wrapper",
      tabindex: _ctx.tabindex,
      "aria-controls": !$props.searchable ? _ctx.ariaControls : void 0,
      "aria-placeholder": !$props.searchable ? _ctx.ariaPlaceholder : void 0,
      "aria-expanded": !$props.searchable ? _ctx.isOpen : void 0,
      "aria-activedescendant": !$props.searchable ? _ctx.ariaActiveDescendant : void 0,
      "aria-multiselectable": !$props.searchable ? _ctx.ariaMultiselectable : void 0,
      role: !$props.searchable ? "combobox" : void 0
    }, !$props.searchable ? _ctx.arias : {}), [
      createCommentVNode(" Search "),
      $props.mode !== "tags" && $props.searchable && !$props.disabled ? (openBlock(), createElementBlock("input", mergeProps({
        key: 0,
        type: $props.inputType,
        modelValue: _ctx.search,
        value: _ctx.search,
        class: _ctx.classList.search,
        autocomplete: $props.autocomplete,
        id: $props.searchable ? $props.id : void 0,
        onInput: _cache[0] || (_cache[0] = (...args) => _ctx.handleSearchInput && _ctx.handleSearchInput(...args)),
        onKeypress: _cache[1] || (_cache[1] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
        onPaste: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handlePaste && _ctx.handlePaste(...args), ["stop"])),
        ref: "input",
        "aria-controls": _ctx.ariaControls,
        "aria-placeholder": _ctx.ariaPlaceholder,
        "aria-expanded": _ctx.isOpen,
        "aria-activedescendant": _ctx.ariaActiveDescendant,
        "aria-multiselectable": _ctx.ariaMultiselectable,
        role: "combobox"
      }, {
        ...$props.attrs,
        ..._ctx.arias
      }), null, 16, _hoisted_3)) : createCommentVNode("v-if", true),
      createCommentVNode(" Tags (with search) "),
      $props.mode == "tags" ? (openBlock(), createElementBlock(
        "div",
        {
          key: 1,
          class: normalizeClass(_ctx.classList.tags),
          "data-tags": ""
        },
        [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList(_ctx.iv, (option, i, key) => {
              return renderSlot(_ctx.$slots, "tag", {
                option,
                handleTagRemove: _ctx.handleTagRemove,
                disabled: $props.disabled
              }, () => [
                (openBlock(), createElementBlock("span", {
                  class: normalizeClass([
                    _ctx.classList.tag,
                    option.disabled ? _ctx.classList.tagDisabled : null
                  ]),
                  tabindex: "-1",
                  onKeyup: withKeys(($event) => _ctx.handleTagRemove(option, $event), ["enter"]),
                  key,
                  "aria-label": _ctx.ariaTagLabel(_ctx.localize(option[$props.label]))
                }, [
                  createBaseVNode(
                    "span",
                    {
                      class: normalizeClass(_ctx.classList.tagWrapper)
                    },
                    toDisplayString(_ctx.localize(option[$props.label])),
                    3
                    /* TEXT, CLASS */
                  ),
                  !$props.disabled && !option.disabled ? (openBlock(), createElementBlock("span", {
                    key: 0,
                    class: normalizeClass(_ctx.classList.tagRemove),
                    onClick: withModifiers(($event) => _ctx.handleTagRemove(option, $event), ["stop"])
                  }, [
                    createBaseVNode(
                      "span",
                      {
                        class: normalizeClass(_ctx.classList.tagRemoveIcon)
                      },
                      null,
                      2
                      /* CLASS */
                    )
                  ], 10, _hoisted_5)) : createCommentVNode("v-if", true)
                ], 42, _hoisted_4))
              ]);
            }),
            256
            /* UNKEYED_FRAGMENT */
          )),
          createBaseVNode(
            "div",
            {
              class: normalizeClass(_ctx.classList.tagsSearchWrapper),
              ref: "tags"
            },
            [
              createCommentVNode(" Used for measuring search width "),
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.classList.tagsSearchCopy)
                },
                toDisplayString(_ctx.search),
                3
                /* TEXT, CLASS */
              ),
              createCommentVNode(" Actual search input "),
              $props.searchable && !$props.disabled ? (openBlock(), createElementBlock("input", mergeProps({
                key: 0,
                type: $props.inputType,
                modelValue: _ctx.search,
                value: _ctx.search,
                class: _ctx.classList.tagsSearch,
                id: $props.searchable ? $props.id : void 0,
                autocomplete: $props.autocomplete,
                onInput: _cache[3] || (_cache[3] = (...args) => _ctx.handleSearchInput && _ctx.handleSearchInput(...args)),
                onKeypress: _cache[4] || (_cache[4] = (...args) => _ctx.handleKeypress && _ctx.handleKeypress(...args)),
                onPaste: _cache[5] || (_cache[5] = withModifiers((...args) => _ctx.handlePaste && _ctx.handlePaste(...args), ["stop"])),
                ref: "input",
                "aria-controls": _ctx.ariaControls,
                "aria-placeholder": _ctx.ariaPlaceholder,
                "aria-expanded": _ctx.isOpen,
                "aria-activedescendant": _ctx.ariaActiveDescendant,
                "aria-multiselectable": _ctx.ariaMultiselectable,
                role: "combobox"
              }, {
                ...$props.attrs,
                ..._ctx.arias
              }), null, 16, _hoisted_6)) : createCommentVNode("v-if", true)
            ],
            2
            /* CLASS */
          )
        ],
        2
        /* CLASS */
      )) : createCommentVNode("v-if", true),
      createCommentVNode(" Single label "),
      $props.mode == "single" && _ctx.hasSelected && !_ctx.search && _ctx.iv ? renderSlot(_ctx.$slots, "singlelabel", {
        key: 2,
        value: _ctx.iv
      }, () => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classList.singleLabel)
          },
          [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classList.singleLabelText)
              },
              toDisplayString(_ctx.localize(_ctx.iv[$props.label])),
              3
              /* TEXT, CLASS */
            )
          ],
          2
          /* CLASS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Multiple label "),
      $props.mode == "multiple" && _ctx.hasSelected && !_ctx.search ? renderSlot(_ctx.$slots, "multiplelabel", {
        key: 3,
        values: _ctx.iv
      }, () => [
        createBaseVNode("div", {
          class: normalizeClass(_ctx.classList.multipleLabel),
          innerHTML: _ctx.multipleLabelText
        }, null, 10, _hoisted_7)
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Placeholder "),
      $props.placeholder && !_ctx.hasSelected && !_ctx.search ? renderSlot(_ctx.$slots, "placeholder", { key: 4 }, () => [
        createBaseVNode(
          "div",
          {
            class: normalizeClass(_ctx.classList.placeholder),
            "aria-hidden": "true"
          },
          toDisplayString($props.placeholder),
          3
          /* TEXT, CLASS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Spinner "),
      $props.loading || _ctx.resolving ? renderSlot(_ctx.$slots, "spinner", { key: 5 }, () => [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classList.spinner),
            "aria-hidden": "true"
          },
          null,
          2
          /* CLASS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Clear "),
      _ctx.hasSelected && !$props.disabled && $props.canClear && !_ctx.busy ? renderSlot(_ctx.$slots, "clear", {
        key: 6,
        clear: _ctx.clear
      }, () => [
        createBaseVNode(
          "span",
          {
            "aria-hidden": "true",
            tabindex: "0",
            role: "button",
            "data-clear": "",
            "aria-roledescription": "❎",
            class: normalizeClass(_ctx.classList.clear),
            onClick: _cache[6] || (_cache[6] = (...args) => _ctx.clear && _ctx.clear(...args)),
            onKeyup: _cache[7] || (_cache[7] = withKeys((...args) => _ctx.clear && _ctx.clear(...args), ["enter"]))
          },
          [
            createBaseVNode(
              "span",
              {
                class: normalizeClass(_ctx.classList.clearIcon)
              },
              null,
              2
              /* CLASS */
            )
          ],
          34
          /* CLASS, HYDRATE_EVENTS */
        )
      ]) : createCommentVNode("v-if", true),
      createCommentVNode(" Caret "),
      $props.caret && $props.showOptions ? renderSlot(_ctx.$slots, "caret", {
        key: 7,
        handleCaretClick: _ctx.handleCaretClick,
        isOpen: _ctx.isOpen
      }, () => [
        createBaseVNode(
          "span",
          {
            class: normalizeClass(_ctx.classList.caret),
            onClick: _cache[8] || (_cache[8] = (...args) => _ctx.handleCaretClick && _ctx.handleCaretClick(...args)),
            "aria-hidden": "true"
          },
          null,
          2
          /* CLASS */
        )
      ]) : createCommentVNode("v-if", true)
    ], 16, _hoisted_2),
    createCommentVNode(" Options "),
    (openBlock(), createBlock(Teleport, {
      to: $props.appendTo || "body",
      disabled: !$props.appendToBody && !$props.appendTo
    }, [
      createBaseVNode("div", {
        id: "".concat($props.id, "-dropdown"),
        class: normalizeClass(_ctx.classList.dropdown),
        tabindex: "-1",
        ref: "dropdown"
      }, [
        renderSlot(_ctx.$slots, "beforelist", { options: _ctx.fo }),
        createBaseVNode("ul", {
          class: normalizeClass(_ctx.classList.options),
          id: _ctx.ariaControls,
          role: "listbox"
        }, [
          $props.groups ? (openBlock(true), createElementBlock(
            Fragment,
            { key: 0 },
            renderList(_ctx.fg, (group, i, key) => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(_ctx.classList.group),
                key,
                id: _ctx.ariaGroupId(group),
                "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                "aria-selected": _ctx.isSelected(group),
                role: "option"
              }, [
                !group.__CREATE__ ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  class: normalizeClass(_ctx.classList.groupLabel(group)),
                  "data-pointed": _ctx.isPointed(group),
                  onMouseenter: ($event) => _ctx.setPointer(group, i),
                  onMousedown: withModifiers(($event) => _ctx.handleGroupClick(group), ["prevent"])
                }, [
                  renderSlot(_ctx.$slots, "grouplabel", {
                    group,
                    isSelected: _ctx.isSelected,
                    isPointed: _ctx.isPointed
                  }, () => [
                    createBaseVNode("span", {
                      innerHTML: _ctx.localize(group[$props.groupLabel])
                    }, null, 8, _hoisted_12)
                  ])
                ], 42, _hoisted_11)) : createCommentVNode("v-if", true),
                createBaseVNode("ul", {
                  class: normalizeClass(_ctx.classList.groupOptions),
                  "aria-label": _ctx.ariaGroupLabel(_ctx.localize(group[$props.groupLabel])),
                  role: "group"
                }, [
                  (openBlock(true), createElementBlock(
                    Fragment,
                    null,
                    renderList(group.__VISIBLE__, (option, i2, key2) => {
                      return openBlock(), createElementBlock("li", {
                        class: normalizeClass(_ctx.classList.option(option, group)),
                        "data-pointed": _ctx.isPointed(option),
                        "data-selected": _ctx.isSelected(option) || void 0,
                        key: key2,
                        onMouseenter: ($event) => _ctx.setPointer(option),
                        onMousedown: withModifiers(($event) => _ctx.handleOptionClick(option), ["prevent"]),
                        id: _ctx.ariaOptionId(option),
                        "aria-selected": _ctx.isSelected(option),
                        "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                        role: "option"
                      }, [
                        renderSlot(_ctx.$slots, "option", {
                          option,
                          isSelected: _ctx.isSelected,
                          isPointed: _ctx.isPointed,
                          search: _ctx.search
                        }, () => [
                          createBaseVNode(
                            "span",
                            null,
                            toDisplayString(_ctx.localize(option[$props.label])),
                            1
                            /* TEXT */
                          )
                        ])
                      ], 42, _hoisted_14);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 10, _hoisted_13)
              ], 10, _hoisted_10);
            }),
            128
            /* KEYED_FRAGMENT */
          )) : (openBlock(true), createElementBlock(
            Fragment,
            { key: 1 },
            renderList(_ctx.fo, (option, i, key) => {
              return openBlock(), createElementBlock("li", {
                class: normalizeClass(_ctx.classList.option(option)),
                "data-pointed": _ctx.isPointed(option),
                "data-selected": _ctx.isSelected(option) || void 0,
                key,
                onMouseenter: ($event) => _ctx.setPointer(option),
                onMousedown: withModifiers(($event) => _ctx.handleOptionClick(option), ["prevent"]),
                id: _ctx.ariaOptionId(option),
                "aria-selected": _ctx.isSelected(option),
                "aria-label": _ctx.ariaOptionLabel(_ctx.localize(option[$props.label])),
                role: "option"
              }, [
                renderSlot(_ctx.$slots, "option", {
                  option,
                  isSelected: _ctx.isSelected,
                  isPointed: _ctx.isPointed,
                  search: _ctx.search
                }, () => [
                  createBaseVNode(
                    "span",
                    null,
                    toDisplayString(_ctx.localize(option[$props.label])),
                    1
                    /* TEXT */
                  )
                ])
              ], 42, _hoisted_15);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ], 10, _hoisted_9),
        _ctx.noOptions ? renderSlot(_ctx.$slots, "nooptions", { key: 0 }, () => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.classList.noOptions),
            innerHTML: _ctx.localize($props.noOptionsText)
          }, null, 10, _hoisted_16)
        ]) : createCommentVNode("v-if", true),
        _ctx.noResults ? renderSlot(_ctx.$slots, "noresults", { key: 1 }, () => [
          createBaseVNode("div", {
            class: normalizeClass(_ctx.classList.noResults),
            innerHTML: _ctx.localize($props.noResultsText)
          }, null, 10, _hoisted_17)
        ]) : createCommentVNode("v-if", true),
        $props.infinite && _ctx.hasMore ? (openBlock(), createElementBlock(
          "div",
          {
            key: 2,
            class: normalizeClass(_ctx.classList.inifinite),
            ref: "infiniteLoader"
          },
          [
            renderSlot(_ctx.$slots, "infinite", {}, () => [
              createBaseVNode(
                "span",
                {
                  class: normalizeClass(_ctx.classList.inifiniteSpinner)
                },
                null,
                2
                /* CLASS */
              )
            ])
          ],
          2
          /* CLASS */
        )) : createCommentVNode("v-if", true),
        renderSlot(_ctx.$slots, "afterlist", { options: _ctx.fo })
      ], 10, _hoisted_8)
    ], 8, ["to", "disabled"])),
    createCommentVNode(" Hacky input element to show HTML5 required warning "),
    $props.required ? (openBlock(), createElementBlock("input", {
      key: 0,
      class: normalizeClass(_ctx.classList.fakeInput),
      tabindex: "-1",
      value: _ctx.textValue,
      required: ""
    }, null, 10, _hoisted_18)) : createCommentVNode("v-if", true),
    createCommentVNode(" Native input support "),
    $props.nativeSupport ? (openBlock(), createElementBlock(
      Fragment,
      { key: 1 },
      [
        $props.mode == "single" ? (openBlock(), createElementBlock("input", {
          key: 0,
          type: "hidden",
          name: $props.name,
          value: _ctx.plainValue !== void 0 ? _ctx.plainValue : ""
        }, null, 8, _hoisted_19)) : (openBlock(true), createElementBlock(
          Fragment,
          { key: 1 },
          renderList(_ctx.plainValue, (v, i) => {
            return openBlock(), createElementBlock("input", {
              type: "hidden",
              name: "".concat($props.name, "[]"),
              value: v,
              key: i
            }, null, 8, _hoisted_20);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ],
      64
      /* STABLE_FRAGMENT */
    )) : createCommentVNode("v-if", true),
    createCommentVNode(" Screen reader assistive text "),
    $props.searchable && _ctx.hasSelected ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(_ctx.classList.assist),
      id: _ctx.ariaAssist,
      "aria-hidden": "true"
    }, toDisplayString(_ctx.ariaLabel), 11, _hoisted_21)) : createCommentVNode("v-if", true),
    createCommentVNode(" Create height for empty input "),
    createBaseVNode(
      "div",
      {
        class: normalizeClass(_ctx.classList.spacer)
      },
      null,
      2
      /* CLASS */
    )
  ], 42, _hoisted_1);
}
script.render = render;
script.__file = "src/Multiselect.vue";
const default_css_vue_type_style_index_0_src_true_lang = "";
export {
  AppModal as A,
  Pagination as P,
  PerPage as a,
  clonedeep as c,
  script as s
};
//# sourceMappingURL=default.css_vue_type_style_index_0_src_true_lang-9b5ba1ec.js.map
