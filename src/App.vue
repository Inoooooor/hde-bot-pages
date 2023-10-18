<script setup>
import ScreenFirst from "./components/ScreenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
import ScreenThird from "./components/ScreenThird.vue"
import ScreenFourth from "./components/ScreenFourth.vue"
import ScreenFivth from "./components/ScreenFivth.vue"
import PlanCard from "./components/UI/PlanCard.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
    <ScreenFourth />
    <ScreenFivth />
    <section class="background-solid">
      <div class="container">
        <div class="row">
          <div class="text-center">
            <h2 class="fs-3 fw-bold">Choose a plan that's right for you</h2>
            <p class="py-4 fs-6 text-gray-500">
              You start for free and pay as you go, with honest pricing that
              scales as you grow. BotHelp accounts are billed based on the
              number of active subscribers. Tools, messages and agents are
              unlimited.
            </p>
          </div>
        </div>
        <div class="row">
          <div class="d-flex flex-column">
            <PlanCard plan-type="free" />
            <PlanCard plan-type="pro" />
            <div>card business</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
