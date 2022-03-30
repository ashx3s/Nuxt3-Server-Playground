<template>
  <nav>
    <ul v-if="navLinks">
      <li v-for="link in navLinks" :key="link.id">
        <nuxt-link :to="link.path"> {{ link.name }} </nuxt-link>
      </li>
    </ul>
  </nav>
</template>
<script setup>
// useRouter() gives access to the routes
const router = useRouter();
const navLinks = router.options.routes;
</script>

<style scoped>
nav {
  color: white;
}
ul {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  list-style: none;
  font-family: sans-serif;
}
a {
  color: inherit;
  text-decoration: none;
}
</style>
