# Nuxt 3 Server Practice

This is a practice space for working with the Nitro Server. It focuses on `server/api`, but can also be used to practice with `server/middleware`

- Use the `server/api` folder to add SSR routes.
- It also has fonts imported for example as well. see the devel branch

## General Instructions

- Fork and Clone
- Use the main branch to create routes
- For examples from class, see the devel branch
- Try any of the following activities
- Use the documentation below for more ideas to practice

### Notes

- For endpoints, use the `/server/api` directory
-

## Activities

1. Routing:
   - Add more routes by creating multiple pages (put a title in each for easy recognition)
   - In the nav component, create a computed property from the navLinks that returns all of the links except for `/pages/index.vue`
   - Create folders in pages with `index.vue` and 1 other route in each
   - Modify the pages that are shown to only show the root file of each folder
2. Server:
   - Create a route and make it print out 'Hello, Nitro' when you search to the route `localhost:3000/api/hello`
   - Create a route that return a bunch of json data
   - Create a route that fetches data from a public api. Use `useAsyncData` or `useFetch`
   - Call information from your public api route onto one of your other pages (verify by checking the api endpoint and the rendered page)
   - Create a route that returns a `new Date().toLocaleTimeString() of the current time. **then** fetch the data onto a page using `$fetch()` (see ohmyfetch doc linked below)
3. Use a local JSON File to store data:
   - Create a json file in your `public/data/` folder and add content to it (JSONplaceholder is a great place to get some, or write your own)
   - Then create an endpoint that imports the data and creates an endpoint for it
   - Use `$fetch()` on a page to call the information and render it onto a page
4. Storyblok:
   - Connect storyblok to your project
   - Add fetch content and render it on a page
   - dynamically generate pages based on the pages that you've created in storyblok [nuxt dynamic routes](https://v3.nuxtjs.org/docs/directory-structure/pages#dynamic-routes)
5. **Configuration**
   - Use [this doc](https://v3.nuxtjs.org/docs/directory-structure/nuxt.config) for ideas of how to set up your configuration file

## Documentation

- [Oh My Fetch](https://github.com/unjs/ohmyfetch): The module that gives us the `$fetch` syntax
- [Nuxt Documentation](https://v3.nuxtjs.org): Main Nuxt Doc Page
- [Nuxt 3 Nitro Server](https://v3.nuxtjs.org/concepts/server-engine/): Documentation on the Server Engine
- [Nuxt 3 Request Data](https://v3.nuxtjs.org/docs/directory-structure/server#accessing-req-data)
- [H3 Server Documentation](https://github.com/unjs/h3): H3 Minimal HTTP Framework
- [Assets and Public Folders](https://medium.com/@wearethreebears/understanding-folder-file-structure-in-nuxt-604ccc04a766#:~:text=The%20static%20folder%20in%20Nuxt,copied%20to%20your%20public%20folder.)

### Videos

- [Server Middleware vs Normal Middleware 2018](https://www.youtube.com/watch?v=j-3RwvWZoaU)
- [Nuxt Nitro Server Engine 2022](https://www.youtube.com/watch?v=FeKleFJkKNY)

### Resources

- [Hero Icons](https://www.npmjs.com/package/@nuxt-hero-icons/outline)
- [A Nuxt3 Starter Template](https://github.com/denbka/nuxt3-starter-template)
