<template>
  <main>
    <h1>Fetch Examples</h1>
    <div>
      <!-- Render Hello Nitro in this paragraph -->
      <p>{{ hello }}</p>
    </div>
  </main>
</template>
<script setup>
// don't wrap hello in { }
const hello = await $fetch("/api/hello");
console.log(hello);
</script>
