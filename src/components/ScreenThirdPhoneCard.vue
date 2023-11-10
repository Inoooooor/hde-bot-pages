<template>
  <div
    class="d-flex flex-column flex-sm-row align-items-center justify-content-sm-around mb-5"
    :class="{ 'flex-sm-row-reverse': contentMap[cardOrder].isFlexReversed }"
  >
    <div
      class="text-center d-flex flex-column align-items-center text-sm-start align-items-sm-start col col-sm-6"
    >
      <MessangerIcon v-if="cardOrder === '1'" />
      <SendMessageIcon v-if="cardOrder === '2'" />
      <FIlterIcon v-if="cardOrder === '3'" />
      <h2 class="fw-bold text-2xl lg:text-4xl">
        {{ contentMap[cardOrder].textHeader }}
      </h2>
      <p class="py-4 text-gray-500 text-base lg:text-2xl">
        {{ contentMap[cardOrder].textBody }}
      </p>
    </div>
    <!-- <el-image
      :src="contentMap[cardOrder].imageSrc"
      class="col-6 p-sm-5 col-lg-5 col-xl-4"
    /> -->
    <video
      id="my-video"
      ref="video"
      class="video-js col-9 col-sm-5 col-lg-5 col-xl-4 bg-white"
      preload="auto"
      poster="../images/attract-customers-poster.jpg"
      data-setup="{}"
      muted
      autoplay
      playsinline
      loop
    >
      <source
        src="../images/attract-customers-test.mp4"
        type="video/mp4"
      />
      <!-- <source
        src="../images/attract-customers.webm"
        type="video/webm"
      /> -->
      <p class="vjs-no-js">
        To view this video please enable JavaScript, and consider upgrading to a
        web browser that
        <a
          href="https://videojs.com/html5-video-support/"
          target="_blank"
          >supports HTML5 video
        </a>
      </p>
    </video>
  </div>
</template>

<script setup>
// import { ref, onMounted } from "vue"
// const video = ref(null)
// onMounted(() => console.log(video.value.play()))
defineProps({
  cardOrder: {
    type: String,
    default: "1",
  },
})

const contentMap = {
  1: {
    imageSrc:
      "https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da07944d2c9cbb2c545bc8_img-2-en.png",
    textHeader: "Привлекайте клиентов",
    textBody:
      "Конвертируйте трафик из соцсетей и других источников, и собирайте e-mail и телефон клиентов прямо в мессенджерах. Весь процесс полностью автоматизирован и не требует человеческого вмешательства.",
    isFlexReversed: true,
  },
  2: {
    imageSrc:
      "https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da07946d6122f5120e6bf4_img-3-en.png",
    textHeader: "Отвечайте на сообщения мгновенно",
    textBody:
      "Бот моментально поздоровается при новом обращении клиента, соберет необходимую информацию и сам ответит на шаблонные вопросы.",
    isFlexReversed: false,
  },
  3: {
    imageSrc:
      "https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da079577254763204d8342_img-4-en.png",
    textHeader: "Чат-боты в мессенджерах",
    textBody:
      "Создавайте полезные чат-боты и вариативные сценарии поддержки в мессенджерах при помощи визуального конструктора чат-ботов. Без программирования и технических навыков.",
    isFlexReversed: true,
  },
}

import MessangerIcon from "./images/MessangerIcon.vue"
import SendMessageIcon from "./images/SendMessageIcon.vue"
import FIlterIcon from "./images/FIlterIcon.vue"
</script>

<style lang="css" scoped></style>
