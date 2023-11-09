<template>
  <section
    id="screenSecond"
    class="mb-5 py-5"
  >
    <div
      id="sectionTwoContent"
      class="container"
    >
      <div class="text-center">
        <h2 class="fs-3 fw-bold">Общайтесь с клиентами где им комфортно!</h2>
        <p class="py-4 text-base lg:text-xl text-gray-500">
          Мы поддерживаем каналы ВК, Instagram, Facebook Messenger, Telegram,
          Viber и онлайн-чат.
        </p>
        <SecondScreenMessengers />
      </div>
    </div>
  </section>
</template>

<script setup>
import SecondScreenMessengers from "./SecondScreenMessengers.vue"
</script>

<style lang="scss" scoped></style>
