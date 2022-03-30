<template>
  <main>
    <header>
      <h1>Storyblok API Example</h1>
    </header>
    <div>
      <section>
        <header>
          <h2>{{ pageContent.title }}</h2>
          <p>{{ pageContent.description }}</p>
        </header>
        <div>
          <h2>Rendering a list of Storyblok Components</h2>
          <!-- Cool stuff would be better done as a group of cards -->
          <p>{{ pageContent.cool_stuff[0].text_area }}</p>
          <div class="cards">
            <p v-for="item in pageContent.cool_stuff" :key="item.id">
              {{ item.text_area }}
            </p>
          </div>
        </div>
      </section>
      <pre>
        {{ pageContent }}
      </pre>
    </div>
  </main>
</template>
<script setup>
// use storyblok api object
const storyapi = useStoryApi();

// fetch data
const { data: home } = await storyapi.get("cdn/stories/home", {
  version: "draft",
});

// make the data reactive and easier to work with
const state = reactive({ story: home.story });

// use this to access page information
const pageContent = state.story.content;

//console.log(state);
</script>

<style setup>
.cards {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  border: solid 2px black;
  gap: 1rem;
  width: 40vw;
}
.cards p {
  max-width: 20ch;
}
</style>
