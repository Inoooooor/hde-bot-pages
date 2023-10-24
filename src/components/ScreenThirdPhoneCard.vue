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
    <el-image
      :src="contentMap[cardOrder].imageSrc"
      class="col-6 p-sm-5 col-lg-5 col-xl-4"
    />
  </div>
</template>

<script setup>
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
    textHeader: "Capture leads and accelerate sales via messengers",
    textBody:
      "Link your ads, website and social media profiles directly to a conversation, and help to simplify the buying process for both you and your customers.",
    isFlexReversed: true,
  },
  2: {
    imageSrc:
      "https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da07946d6122f5120e6bf4_img-3-en.png",
    textHeader: "Send messages with an 80% open rate",
    textBody:
      "Segment your audience using tags and attributes and broadcast personalized messages in just a few clicks. The messenger channel works much better than email, and it allows you to initiate a conversation and close deals within the chat itself.",
    isFlexReversed: false,
  },
  3: {
    imageSrc:
      "https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da079577254763204d8342_img-4-en.png",
    textHeader: "Automate sales funnels",
    textBody:
      "Build sequences and chatbots to automate the sales or lead qualification process – without coding. Bots can help you give a coupon, ask common questions or share content..",
    isFlexReversed: true,
  },
}

import MessangerIcon from "./images/MessangerIcon.vue"
import SendMessageIcon from "./images/SendMessageIcon.vue"
import FIlterIcon from "./images/FIlterIcon.vue"
</script>

<style lang="scss" scoped></style>
