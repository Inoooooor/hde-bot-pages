<script setup>
import ScreenFirst from "./components/ScreenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
import ScreenThird from "./components/ScreenThird.vue"
import ScreenFourth from "./components/ScreenFourth.vue"
import ScreenFivthTabs from "./components/UI/ScreenFivthTabs.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
    <ScreenFourth />
    <section
      id="screenFivth"
      class="mb-4"
    >
      <div class="container">
        <div class="row">
          <div class="d-flex py-2">
            <h2 class="fs-3 fw-bold">How does it work?</h2>
          </div>
        </div>
        <div class="row">
          <ScreenFivthTabs />
        </div>
      </div>
    </section>
    <section class="min-vh-100"></section>
  </main>
</template>

<style scoped></style>
