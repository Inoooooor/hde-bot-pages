<template>
  <el-tabs
    v-model="activeName"
    class="section-fivth--tabs"
    stretch
  >
    <el-tab-pane
      label="Аналитика"
      name="Аналитика"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Отслеживайте рост количества обращений и эффективность работы
          поддержки.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="../../images/tab-analytics.png"
            width="980"
            sizes="90vw"
            alt=""
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Визуальный конструктор"
      name="Визуальный конструктор"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Создавайте чат-ботов при помощи визуального конструктора. Без
          программирования и технических навыков.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="../../images/tab-bot-constructor.png"
            width="980"
            sizes="90vw"
            alt=""
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Заявки"
      name="Заявки"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Организуйте поддержку и консультации клиентов в разных каналах из
          единого интерфейса. Добавьте сотрудников, используйте шаблоны ответов
          и инструменты автоматизации.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="../../images/tab-tickets.png"
            width="980"
            sizes="90vw"
            alt=""
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane
      label="Список контактов"
      name="Список контактов"
    >
      <div class="text-center">
        <p class="py-4 fs-6 text-gray-500">
          Управляйте вашим списком контактов и редактируйте данные клиентов.
          Используйте фильтры, экспорт и импорт пользователей.
        </p>
        <div class="d-flex justify-content-center pb-4">
          <img
            src="../../images/tab-contacts-list.png"
            sizes="90vw"
            alt="Contacts"
            class="position-static shadow sm:w-2/3"
          />
        </div>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import { ref } from "vue"
const activeName = ref("Аналитика")
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
