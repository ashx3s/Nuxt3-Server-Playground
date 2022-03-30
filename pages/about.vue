<template>
  <main>
    <header>
      <h1>About Page</h1>
    </header>
    <div>
      <section>
        <h2>Team Members</h2>
        <ul>
          <li v-for="member in teamMembers" :key="member.id">
            <p>{{ member.name }} -- {{ member.role }}</p>
            <p>{{ member.description }}</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Router Rendering Example</h2>
        <ul>
          <li v-for="link in routerLinks" :key="link.id">
            <!-- Do Stuff here for every link -->
            <nuxt-link :to="link.path">{{ link.name }}</nuxt-link>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
<script setup>
// Team Member fetch
const teamMembers = await $fetch("/api/teams");
console.log(teamMembers);
// individual route
const newRoute = useRoute();
// full router
const router = useRouter();
// set router links to a variable to access in template
const routerLinks = router.options.routes;
</script>
