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
        <div class="gallery">
          <img
            :src="image.thumbnailUrl"
            :alt="image.title"
            v-for="image in filteredImages"
            :key="image.id"
          />
        </div>
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

// Use .value to filter the array properly
const filteredImages = computed(() => {
  return imageData.value.slice(0, 8);
});
</script>
<style setup>
.gallery {
  margin: 0 auto;
  max-width: 60vw;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
}
</style>
