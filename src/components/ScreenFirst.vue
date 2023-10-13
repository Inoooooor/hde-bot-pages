<template>
  <HeroSvgBackground />
  <section
    id="screenTop"
    class="min-vh-100 container py-5"
  >
    <div class="row">
      <div
        id="contentTop"
        class="d-flex flex-column flex-sm-row align-items-center justify-content-between"
      >
        <div
          id="topText"
          class="col-12 col-sm-7 d-flex flex-column"
        >
          <h1 class="fs-1 fw-bold pb-0 mb-4 text-start text-white pt-5">
            Acquire new customers and generate more sales on messaging apps
          </h1>
          <p class="mb-5 fs-6 text-white">
            The leading no-code chatbot builder. Grow your subscriber list,
            create bots and broadcast messages on WhatsApp, Instagram and
            Messenger.
          </p>
          <HeroButton />
        </div>
        <div
          id="heroPhone"
          class="d-flex justify-content-center align-content-center col-8 col-sm-4"
        >
          <HeroPhoneImg />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import HeroSvgBackground from "./HeroSvgBackground.vue"
import HeroPhoneImg from "./HeroPhoneImg.vue"
import HeroButton from "./UI/HeroButton.vue"
</script>
