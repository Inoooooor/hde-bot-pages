<template>
  <section id="sectionSixth">
    <div class="container">
      <div class="row pb-5">
        <div class="text-center py-4">
          <div class="d-flex justify-content-center mb-2">
            <img
              src="../images/free-trial.svg"
              alt="free trial icon"
            />
          </div>
          <h2 class="fs-3 fw-bold">Try it for free</h2>
          <p class="py-4 fs-6 text-gray-500">
            Try HelpDeskEddy for free – no coding experience is needed. It’s
            easy, fun and proven to get results.
          </p>
          <FreeTrialButton />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import FreeTrialButton from "./UI/FreeTrialButton.vue"
</script>

<style lang="scss" scoped></style>
