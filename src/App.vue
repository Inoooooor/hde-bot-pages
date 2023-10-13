<script setup>
// import HeroSvgBackground from "./components/HeroSvgBackground.vue"
// import HeroPhoneImg from "./components/HeroPhoneImg.vue"
import ScreenFirst from "./components/screenFirst.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <div>
      <section id="screenSecond">
        <div
          id="sectionTwoContent"
          class="container"
        >
          <h2 class="fs-3 fw-bold">
            Automate and grow your business with BotHelp
          </h2>
          <p class="">
            We support WhatsApp, Instagram, Facebook Messenger, Telegram and
            Viber.
          </p>
          <div class="d-flex fs-1">
            <div class="">
              <i class="fa fa-whatsapp"></i>
            </div>
            <div class="">
              <i class="fa fa-telegram"></i>
            </div>

            <div class="">
              <i class="fa fa-instagram"></i>
            </div>

            <div class="">
              <i class="fa fa-vk"></i>
            </div>
            <div class="">
              <i class="fa fa-facebook"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
