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
    <video
      v-if="isVideo"
      id="my-video"
      class="video-js col-9 col-sm-5 col-lg-5 col-xl-4 bg-white"
      preload="auto"
      :poster="contentMap[cardOrder].posterSrc"
      data-setup="{}"
      muted
      autoplay
      playsinline
      loop
    >
      <source
        ref="source"
        :src="contentMap[cardOrder].videoSrc"
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
    <el-image
      v-else
      :src="contentMap[cardOrder].posterSrc"
      class="col-12 col-sm-5 col-lg-5 col-xl-4"
    />
  </div>
</template>

<script setup>
import MessangerIcon from "./images/MessangerIcon.vue"
import SendMessageIcon from "./images/SendMessageIcon.vue"
import FIlterIcon from "./images/FIlterIcon.vue"
import { ref, onMounted } from "vue"

const source = ref(null)

const props = defineProps({
  cardOrder: {
    type: String,
    default: "1",
  },
})

const isVideo = props.cardOrder !== "2"

const contentMap = {
  1: {
    posterSrc:
      "https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da07944d2c9cbb2c545bc8_img-2-en.png",
    mp4Src: "../src/images/attract-customers.mp4",
    webmSrc: "../images/attract-customers.webm",
    textHeader: "Привлекайте клиентов",
    textBody:
      "Конвертируйте трафик из соцсетей и других источников, и собирайте e-mail и телефон клиентов прямо в мессенджерах. Весь процесс полностью автоматизирован и не требует человеческого вмешательства.",
    isFlexReversed: true,
  },
  2: {
    posterSrc: "../src/images/immediate-response.png",
    mp4Src: "../images/attract-customers.mp4",
    webmSrc: "../images/attract-customers.webm",
    textHeader: "Отвечайте на сообщения мгновенно",
    textBody:
      "Бот моментально поздоровается при новом обращении клиента, соберет необходимую информацию и сам ответит на шаблонные вопросы.",
    isFlexReversed: false,
  },
  3: {
    posterSrc: "../src/images/messangers-chatbots-poster.jpg",
    mp4Src: "../src/images/messangers-chatbots.mp4",
    webmSrc: "../images/attract-customers.webm",
    textHeader: "Чат-боты в мессенджерах",
    textBody:
      "Создавайте полезные чат-боты и вариативные сценарии поддержки в мессенджерах при помощи визуального конструктора чат-ботов. Без программирования и технических навыков.",
    isFlexReversed: true,
  },
}

onMounted(() => {
  if (!isVideo) return
  source.value.src = contentMap[props.cardOrder].mp4Src
  console.log(source.value)
})
</script>

<style lang="css" scoped></style>
