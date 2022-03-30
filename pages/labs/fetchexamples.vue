<template>
  <main>
    <h1>Fetch Examples</h1>
    <div>
      <section>
        <h2>Simple Local Fetch</h2>
        <!-- Render Hello Nitro in this paragraph -->
        <p>{{ hello }}</p>
      </section>
      <section>
        <h2>JSON Placeholder Image Fetch</h2>
        <!-- Render some images from jsonplaceholder -->
        <img
          :src="image.url"
          :alt="image.title"
          v-for="image in filteredImages"
          :key="image.id"
        />
      </section>
    </div>
  </main>
</template>
<script setup>
// don't wrap hello in { }
const hello = await $fetch("/api/hello");
// console.log(hello);

// Fetch from our api that is calling from the jsonplaceholder api
const { data: imageData } = await useFetch("/api/images");

const filteredImages = computed(() => {
  return imageData.value.filter((image, index, arr) => {
    // This syntax is trying to return an array length of 10, but is not actually creating an array that is 10 items long
    return arr.length == 10;
  });
});
console.log(filteredImages.value);
</script>
