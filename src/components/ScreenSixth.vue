<template>
  <section class="background-solid pb-5">
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2 class="fs-3 fw-bold">Choose a plan that's right for you</h2>
          <p class="py-4 fs-6 text-gray-500">
            You start for free and pay as you go, with honest pricing that
            scales as you grow. BotHelp accounts are billed based on the number
            of active subscribers. Tools, messages and agents are unlimited.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="d-flex flex-column flex-md-row justify-content-md-around align-items-md-start"
        >
          <PlanCard plan-type="free" />
          <PlanCard plan-type="pro" />
          <PlanCard plan-type="business" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PlanCard from "./UI/PlanCard.vue"
</script>

<style lang="scss" scoped></style>
