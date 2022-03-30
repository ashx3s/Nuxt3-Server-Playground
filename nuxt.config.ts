import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  setup() {
    useMeta({
      meta: [
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, maximum-scale=1",
        },
      ],
    });
  },
  buildModules: [
    ["@storyblok/nuxt", { accessToken: "aO54lwvbURX9K3rQFRVSvwtt" }],
  ],
});
