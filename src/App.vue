<script setup>
import ScreenFirst from "./components/screenFirst.vue"
import SecondScreenMessengers from "./components/SecondScreenMessengers.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <section id="screenSecond">
      <div
        id="sectionTwoContent"
        class="container"
      >
        <div class="text-center">
          <h2 class="fs-3 fw-bold">
            Automate and grow your business with BotHelp
          </h2>
          <p class="p-4 fs-6 text-gray-500">
            We support WhatsApp, Instagram, Facebook Messenger, Telegram and
            Viber.
          </p>
          <SecondScreenMessengers />
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped></style>
