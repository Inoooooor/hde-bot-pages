<template>
  <el-card
    body-class="px-4"
    class="border-2 hover:border-[#23879A]"
  >
    <template #header>
      <div class="text-center d-flex flex-column">
        <h3 class="fs-2 fw-bold">{{ plans[planType].header }}</h3>
        <p class="fs-6 text-gray-500 py-4">
          Free 14-days trial with access to all features
        </p>
        <div class="fs-1 fw-bold">{{ plans[planType].price }}</div>
      </div>
    </template>
    <ul>
      <li
        v-for="(item, index) in plans[planType].planList"
        :key="index"
        class="d-flex align-items-center mb-3 text-gray-500 fs-6"
      >
        <div class="w-[6px] h-[6px] bg-[#23879A] rounded me-2"></div>
        {{ item }}
      </li>
    </ul>
  </el-card>
</template>

<script setup>
const props = defineProps({
  planType: {
    type: String,
    required: true,
    validator(value) {
      return ["free", "pro", "business"].includes(value)
    },
  },
})

const plans = {
  free: {
    price: "0$",
    header: "Free",
    planList: [
      "Up to 3000 subscribers",
      "Up to 10 agents",
      "Unlimited Flows, Chatbots and Growth Tools",
      "All core features included.",
      "FB Messenger, Telegram, Viber",
    ],
  },
}
console.log(props.planType)
</script>

<style scoped>
.el-card {
  border-radius: 10px;
}
</style>
