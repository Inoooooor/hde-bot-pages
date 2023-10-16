<script setup>
import ScreenFirst from "./components/screenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
// import MessangerIcon from "./components/Images/MessangerIcon.vue"
// import SendMessageIcon from "./components/Images/SendMessageIcon.vue"
// import FIlterIcon from "./components/Images/FIlterIcon.vue"
import ScreenThird from "./components/ScreenThird.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
  </main>
</template>

<style scoped></style>
