<script setup>
import ScreenFirst from "./components/ScreenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
import ScreenThird from "./components/ScreenThird.vue"
import ScreenFourth from "./components/ScreenFourth.vue"
// import ScreenFivthTabs from "./components/UI/ScreenFivthTabs.vue"
import ScreenFivth from "./components/ScreenFivth.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
    <ScreenFourth />
    <ScreenFivth />
    <section class="min-vh-100"></section>
  </main>
</template>

<style scoped>
.background-solid {
  background-color: #23869a10;
}
</style>
