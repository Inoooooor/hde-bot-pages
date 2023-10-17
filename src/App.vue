<script setup>
import ScreenFirst from "./components/ScreenFirst.vue"
import SecondScreen from "./components/SecondScreen.vue"
import ScreenThird from "./components/ScreenThird.vue"
import ScreenFourth from "./components/ScreenFourth.vue"

import { ref } from "vue"
const activeName = ref("first")
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <ScreenFirst />
    <SecondScreen />
    <ScreenThird />
    <ScreenFourth />
    <section id="screenFivth">
      <div class="container">
        <div class="row">
          <div class="d-flex">
            <h2 class="fs-3 fw-bold">How does it work?</h2>
            <!-- <div class="w-[24px] h-[24px]">
              <img
                src="./images/pointer.svg"
                alt="pointer"
              />
            </div> -->
          </div>
        </div>
        <div class="row">
          <el-tabs
            v-model="activeName"
            class="demo-tabs w-100"
          >
            <el-tab-pane
              label="Broadcasting"
              name="first"
              >User
            </el-tab-pane>
            <el-tab-pane
              label="Analytics"
              name="second"
              >Config
            </el-tab-pane>
            <el-tab-pane
              label="Flow Builder"
              name="third"
              >Role
            </el-tab-pane>
            <el-tab-pane
              label="Conversations"
              name="fourth"
              >Task
            </el-tab-pane>
            <el-tab-pane
              label="Subscriber list"
              name="fourth"
              >Task
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 5px;
  font-weight: 600;
}
</style>
