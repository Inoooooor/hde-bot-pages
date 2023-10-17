<script setup>
import ScreenFirst from "./components/ScreenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
import ScreenThird from "./components/ScreenThird.vue"
import ScreenFourth from "./components/ScreenFourth.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
    <ScreenFourth />
    <section id="screenFivth">
      <div class="container">
        <div class="row">
          <div class="d-flex">
            <h2 class="fs-3 fw-bold">How does it work?</h2>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
