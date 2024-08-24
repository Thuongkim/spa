import {
  resolveComponent as e,
  mergeProps as t,
  withCtx as a,
  createTextVNode as r,
  useSSRContext as s,
} from 'vue';
import {
  ssrRenderAttrs as i,
  ssrRenderComponent as o,
} from 'vue/server-renderer';
import { _ as l } from '../app2.mjs';
import 'vuex';
import 'moment';
import '@headlessui/vue';
import '@heroicons/vue/24/outline';
import 'vue-router';
import 'vue-gtag-next';
import 'vuex-shared-mutations';
import 'axios';
import 'js-cookie';
import 'vuex-persistedstate';
import 'vue-sweetalert2';
import 'vue-tippy';
import 'v-tables-3';
import '@sentry/vue';
import '@sentry/tracing';
import 'vue-html-secure';
const d = {
  name: 'Terms',
  components: {},
  props: {},
  data: () => ({}),
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
const n = d.setup;
d.setup = (e, t) => {
  const a = s();
  return (
    (a.modules || (a.modules = new Set())).add(
      'resources/js/views/pages/Terms.vue',
    ),
    n ? n(e, t) : void 0
  );
};
const m = l(d, [
  [
    'ssrRender',
    function (s, l, d, n, m, p, c, h) {
      const u = e('Link');
      l(
        `<div${i(
          t({ class: 'py-12' }, n),
        )}><section class=""><div class="mx-auto max-w-screen-xl py-8 px-4 sm:py-16 lg:px-6"><h2 class="mb-8 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"> Terms of Service </h2><div class="grid border-t border-gray-200 pt-8 text-left dark:border-gray-700 md:grid-cols-2 md:gap-16"><div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What do you mean by &quot;Figma assets&quot;? </h3><p class="text-gray-500 dark:text-gray-400"> You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens. </p></div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What does &quot;lifetime access&quot; exactly mean? </h3><p class="text-gray-500 dark:text-gray-400"> Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge. </p></div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> How does support work? </h3><p class="text-gray-500 dark:text-gray-400"> We&#39;re aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project. </p><p class="text-gray-500 dark:text-gray-400"> Feel free to <a href="#" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500" target="_blank" rel="noreferrer">contact us</a> and we&#39;ll help you out as soon as we can. </p></div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> I want to build more than one project. Is that allowed? </h3><p class="text-gray-500 dark:text-gray-400"> You can use Windster for an unlimited amount of projects, whether it&#39;s a personal website, a SaaS app, or a website for a client. As long as you don&#39;t build a product that will directly compete with Windster either as a UI kit, theme, or template, it&#39;s fine. </p><p class="text-gray-500 dark:text-gray-400"> Find out more information by `,
      ),
        l(
          o(
            u,
            {
              to: '/license',
              class:
                'font-medium text-primary-600 underline hover:no-underline dark:text-primary-500',
            },
            {
              default: a((e, t, a, s) => {
                if (!t) return [r('reading the license')];
                t('reading the license');
              }),
              _: 1,
            },
            d,
          ),
        ),
        l(
          '. </p></div></div><div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What does &quot;free updates&quot; include? </h3><p class="text-gray-500 dark:text-gray-400"> The free updates that will be provided is based on the <a href="#" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">roadmap</a> that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well. </p></div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What does the free version include? </h3><p class="text-gray-500 dark:text-gray-400"> The <a href="#" class="font-medium text-primary-600 underline hover:no-underline dark:text-primary-500">free version</a> of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it. </p><p class="text-gray-500 dark:text-gray-400"> You can use this version for any purposes, because it is open-source under the MIT license. </p></div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> What is the difference between Windster and Tailwind UI? </h3><p class="text-gray-500 dark:text-gray-400"> Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes. </p><p class="text-gray-500 dark:text-gray-400"> Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces. </p></div><div class="mb-10"><h3 class="mb-4 flex items-center text-lg font-medium text-gray-900 dark:text-white"><svg class="mr-2 h-5 w-5 flex-shrink-0 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg> Can I use Windster in open-source projects? </h3><p class="text-gray-500 dark:text-gray-400"> Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself. </p><p class="text-gray-500 dark:text-gray-400"> With that being said, feel free to use this design kit for your open-source projects. </p><p class="text-gray-500 dark:text-gray-400"> Find out more information by ',
        ),
        l(
          o(
            u,
            {
              to: '/license',
              class:
                'font-medium text-primary-600 underline hover:no-underline dark:text-primary-500',
            },
            {
              default: a((e, t, a, s) => {
                if (!t) return [r('reading the license')];
                t('reading the license');
              }),
              _: 1,
            },
            d,
          ),
        ),
        l('. </p></div></div></div></div></section></div>');
    },
  ],
]);
export { m as default };
