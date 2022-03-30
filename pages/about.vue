<template>
  <main>
    <header>
      <h1>About Page</h1>
    </header>
    <div>
      <ul>
        <li v-for="link in routerLinks" :key="link.id">
          <!-- Do Stuff here for every link -->
          <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
        </li>
      </ul>
    </div>
  </main>
</template>
<script setup>
// individual route
const newRoute = useRoute();
// full router
const router = useRouter();
// set router links to a variable to access in template
const routerLinks = router.options.routes;
</script>
