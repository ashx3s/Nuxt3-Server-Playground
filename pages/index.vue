<template>
  <main>
    <header>
      <h1>Home Page</h1>
      <ul>
        <li v-for="member in teamMembers" :key="member.id">
          {{ member.role }}
        </li>
      </ul>
    </header>
    <div>
      <!-- Demo Router Stuff-->
      <section>
        <h2>Router Demonstration</h2>
        <pre>{{ $router.options.routes }}</pre>
      </section>
      <!-- Add page content here -->
      <article>
        <h2>Router</h2>
        <p>
          Acccess router links with <code>$router.options.routes</code> in
          the template. or <code>const router = useRouter()</code> in the
          script block
        </p>
        <p>
          Try adding pre tags and render content from the router inside.
          Also, in the nav component, you can create more links and they
          should auto appear.
        </p>
      </article>
      <article>
        <h2>Server API</h2>
        <p>Create endpoints in the <code>/server/api</code> folder</p>
      </article>
    </div>
  </main>
</template>
<script setup>
const teamMembers = await $fetch("/api/teams");
</script>
<style scoped>
main {
  min-height: 85vh;
}
header ul {
  list-style-type: none;
  margin: 0;
  display: flex;
  justify-content: space-around;
  gap: 10px;
}
header ul li {
  font-family: sans-serif;
  font-size: clamp(1.2rem, 5vw, 1.8rem);
}
</style>
