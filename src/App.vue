<script setup>
import ScreenFirst from "./components/ScreenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
import ScreenThird from "./components/ScreenThird.vue"
import ScreenFourth from "./components/ScreenFourth.vue"

import { ref } from "vue"
const activeName = ref("Broadcasting")
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
    <ScreenFourth />
    <section
      id="screenFivth"
      class="mb-4"
    >
      <div class="container">
        <div class="row">
          <div class="d-flex">
            <h2 class="fs-3 fw-bold">How does it work?</h2>
          </div>
        </div>
        <div class="row">
          <el-tabs
            v-model="activeName"
            class="demo-tabs"
          >
            <el-tab-pane
              label="Broadcasting"
              name="Broadcasting"
            >
              <div class="text-center">
                <p class="py-4 fs-6 text-gray-500">
                  BotHelp helps businesses increase sales and build close
                  relationships with customers via Facebook Messenger by
                  providing powerful automation tools. Chatting, broadcasting
                  and bots are all in one place!
                </p>
                <div class="d-flex justify-content-center pb-4">
                  <img
                    src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da172050951638bc6cd5ea_tab-01-en.jpg"
                    loading="lazy"
                    sizes="90vw"
                    width="980"
                    alt=""
                    srcset="
                      https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da172050951638bc6cd5ea_tab-01-en-p-800.jpeg 800w,
                      https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da172050951638bc6cd5ea_tab-01-en.jpg        980w
                    "
                    class="position-static shadow"
                  />
                </div>
              </div>
            </el-tab-pane>
            <el-tab-pane
              label="Analytics"
              name="Analytics"
              >Config
            </el-tab-pane>
            <el-tab-pane
              label="Flow Builder"
              name="Flow Builder"
              >Role
            </el-tab-pane>
            <el-tab-pane
              label="Conversations"
              name="Conversations"
              >Task
            </el-tab-pane>
            <el-tab-pane
              label="Subscriber list"
              name="Subscriber list"
              >Task
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>
    <section class="min-vh-100"></section>
  </main>
</template>

<style scoped></style>
