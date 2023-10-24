<template>
  <el-tabs
    v-model="activeName"
    class="section-fivth--tabs"
    stretch
  >
    <el-tab-pane
      label="Broadcasting"
      name="Broadcasting"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          BotHelp helps businesses increase sales and build close relationships
          with customers via Facebook Messenger by providing powerful automation
          tools. Chatting, broadcasting and bots are all in one place!
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da172050951638bc6cd5ea_tab-01-en.jpg"
            alt="broadcasting-img"
            srcset="
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da172050951638bc6cd5ea_tab-01-en-p-800.jpeg 800w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da172050951638bc6cd5ea_tab-01-en.jpg        980w
            "
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Analytics"
      name="Analytics"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Track the growth of the subscriber list. Analyze the effectiveness of
          advertising campaigns by UTM tags.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1720d75a7372dff47a10_tab-02-en.jpg"
            width="980"
            sizes="90vw"
            alt=""
            srcset="
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1720d75a7372dff47a10_tab-02-en-p-500.jpeg 500w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1720d75a7372dff47a10_tab-02-en-p-800.jpeg 800w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1720d75a7372dff47a10_tab-02-en.jpg        980w
            "
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Flow Builder"
      name="Flow Builder"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Build chatbots or automated drill campaigns in a beautiful visual
          builder. No coding required.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da17216e72f50b89967e98_tab-03-en.jpg"
            width="980"
            sizes="90vw"
            alt=""
            srcset="
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da17216e72f50b89967e98_tab-03-en-p-800.jpeg   800w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da17216e72f50b89967e98_tab-03-en-p-1080.jpeg 1080w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da17216e72f50b89967e98_tab-03-en-p-1600.jpeg 1600w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da17216e72f50b89967e98_tab-03-en.jpg         1870w
            "
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Conversations"
      name="Conversations"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Make yourself available to your customers, with little or no effort on
          their part. Let your customers ask questions directly through
          Messenger in real time, personally and privately.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1722a0df361cafd45790_tab-04-en.jpg"
            width="980"
            sizes="90vw"
            alt=""
            srcset="
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1722a0df361cafd45790_tab-04-en-p-500.jpeg   500w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1722a0df361cafd45790_tab-04-en-p-800.jpeg   800w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1722a0df361cafd45790_tab-04-en-p-1080.jpeg 1080w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1722a0df361cafd45790_tab-04-en-p-1600.jpeg 1600w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1722a0df361cafd45790_tab-04-en.jpg         1858w
            "
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Subscriber list"
      name="Subscriber list"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Manage your contact list in different messengers and edit your profile
          data. Use filters, export and import subscribers.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1721b04d99bca3e6c439_tab-05-en.jpg"
            sizes="90vw"
            srcset="
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1721b04d99bca3e6c439_tab-05-en-p-500.jpeg 500w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1721b04d99bca3e6c439_tab-05-en-p-800.jpeg 800w,
              https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da1721b04d99bca3e6c439_tab-05-en.jpg        863w
            "
            alt=""
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from "vue"
const activeName = ref("Broadcasting")
</script>

<style>
.section-fivth--tabs .el-tabs__item {
  font-size: 1rem;
  color: #23879a;
}

.section-fivth--tabs .el-tabs__item.is-active {
  color: #23879a;
}

.section-fivth--tabs .el-tabs__active-bar {
  background-color: #23879a;
}

.section-fivth--tabs .el-tabs__nav-wrap::after {
  background-color: rgb(172, 172, 172);
}
</style>
