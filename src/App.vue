<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <h1>Hello Twitch!</h1>
</template>

<script>
export default {
  async created() {
    const response = await fetch('/.netlify/functions/notion')
    const data = await response.json()

    console.log({ data })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
