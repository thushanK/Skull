<template>
  <div class="container">
    <v-toolbar flat class="align-center">

      <v-btn to="/" text color="#00BD9D">
        Home
      </v-btn>

      <v-btn to="/blog" text color="#00BD9D">
        Blog
      </v-btn>

      <v-btn to="/about" text color="#00BD9D">
        About
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>

</style>