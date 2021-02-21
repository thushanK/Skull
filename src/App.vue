<template>
  <v-app>
    <v-main>
      <NavBar/>
      <div class="router-view">
        <transition name="router-anime" enter-active-class="animate__animated animate__fadeInDown" >
          <router-view></router-view>
        </transition>
      </div>
      <Footers/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footers from "./components/Footers";
export default {
  name: 'App',

  components: {
    Footers,
    NavBar
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";
*{
  font-family: Poppins,serif;
}

</style>