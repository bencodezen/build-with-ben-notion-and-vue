<template>
  <h1>Hello Twitch!</h1>
  <h2>Results</h2>
  <p v-if="!notionResponse">No results</p>
  <ul v-else>
    <li v-for="item in notionResponse.results" :key="item.id">
      {{ item.properties.Name.title[0].plain_text }} ({{
        item.properties.Tags.multi_select[0].name
      }})
    </li>
  </ul>
  <button @click="fetchNotionDatabase">
    Fetch Notion Database
  </button>
</template>

<script>
export default {
  data: () => ({
    notionResponse: ''
  }),
  methods: {
    async fetchNotionDatabase() {
      const response = await fetch('/.netlify/functions/notion')
      const data = await response.json()

      console.log({ data })

      this.notionResponse = data
    }
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
