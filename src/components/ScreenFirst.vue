<template>
  <div class="background1">
    <section
      id="screenTop"
      class="py-5 mb-5"
    >
      <div class="container">
        <div class="row">
          <div
            id="contentTop"
            class="d-flex flex-column flex-sm-row align-items-center justify-content-between justify-content-xl-evenly"
          >
            <div
              id="topText"
              class="col-12 col-sm-7 d-flex flex-column"
            >
              <h1 class="fs-1 fw-bold pb-0 mb-4 text-start text-white pt-5">
                Автоматизируйте и ускорьте обработку обращений с помощью
                чат-ботов
              </h1>
              <p class="mb-5 text-base lg:text-2xl text-white">
                Конструктор HelpDeskEddy – интуитивно понятный конструктор
                чат-ботов для мессенджеров, соцсетей или чатов.
              </p>
              <HeroButton />
            </div>
            <div
              id="heroPhone"
              class="d-flex justify-content-center align-content-center col-8 col-sm-3 p-xl-4"
            >
              <HeroPhoneImg />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import HeroPhoneImg from "./images/HeroPhoneImg.vue"
import HeroButton from "./UI/HeroButton.vue"
</script>

<style scoped>
.background1 {
  background-image: url("../images/background-1.svg");
  background-position: -100px 100%;
  background-attachment: scroll;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
