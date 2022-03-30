<template>
  <div id="app">
    <TheHeader />
    <NuxtPage />
    <TheFooter />
  </div>
</template>
<style>
body {
  margin: 0;
}

main {
  margin: 0 2rem;
  min-height: 90vh;
}
article {
  display: flex;
  flex-direction: column;
}
code {
  background-color: rgba(195, 199, 204, 0.5);
  padding: 2px 6px;
}
h1,
h2,
h3 {
  text-align: center;
  font-family: sans-serif;
}
p {
  max-width: 75ch;
}
</style>
