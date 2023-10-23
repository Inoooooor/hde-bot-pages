<template>
  <el-card
    body-class="px-4"
    class="border-2 hover:border-[#23879A] mb-3 position-relative col-md-4 md:w-[32%] pb-md-4"
  >
    <template #header>
      <template v-if="isProPlan">
        <div class="corner"></div>
        <span class="popular-text">Popular</span>
      </template>
      <div class="text-center d-flex flex-column">
        <h3 class="fs-2 fw-bold">{{ plans[planType].header }}</h3>
        <p class="fs-6 text-gray-500 py-4">{{ plans[planType].description }}</p>
        <div class="fs-1 fw-bold pb-3">
          {{ plans[planType].price }}
          <span
            v-if="isProPlan"
            class="fw-light fs-5 text-gray-500"
          >
            / mo
          </span>
        </div>
      </div>
    </template>
    <ul class="mb-5">
      <li
        v-for="(item, index) in plans[planType].planList"
        :key="index"
        class="d-flex align-items-center mb-3 text-gray-500 fs-6"
      >
        <div class="w-[6px] h-[6px] bg-[#23879A] rounded me-2"></div>
        {{ item }}
      </li>
    </ul>
    <PlanButton :button-text="plans[planType].buttonText" />
    <div
      v-if="isProPlan"
      class="d-flex justify-content-center pt-4"
    >
      <a
        class="fs-6 underline decoration-[#23879A] underline-offset-8 text-[#23879A] hover:text-[#23879A] hover:cursor-pointer"
        target="_blank"
        >View all pricing tiers
      </a>
    </div>
  </el-card>
</template>

<script setup>
import PlanButton from "./PlanButton.vue"
const props = defineProps({
  planType: {
    type: String,
    required: true,
    validator(value) {
      return ["free", "pro", "business"].includes(value)
    },
  },
})

const isProPlan = props.planType === "pro"

const plans = {
  free: {
    header: "Free",
    description: "Free 14-days trial with access to all features",
    price: "0$",
    planList: [
      "Up to 3000 subscribers",
      "Up to 10 agents",
      "Unlimited Flows, Chatbots and Growth Tools",
      "All core features included.",
      "FB Messenger, Telegram, Viber",
    ],
    buttonText: "Start Trial",
  },
  pro: {
    header: "Pro",
    description: "Starts from $10/mo and scales with number of subscribers",
    price: "From $14",
    planList: [
      "Up to 300 000 subscribers",
      "Unlimited agents",
      "Unlimited Flows, Chatbots and Growth Tools",
      "WhatsApp Business API, Instagram, FB Messenger, Telegram, Viber",
      "API and Integrations",
    ],
    buttonText: "Start Trial",
  },
  business: {
    header: "Business",
    description: "Get access to all features in Pro and custom services",
    price: "Contact us",
    planList: [
      "Unlimited subscribers",
      "Unlimited agents",
      "Unlimited Flows, Chatbots and Growth Tools",
      "WhatsApp Business API, Instagram, FB Messenger, Telegram, Viber",
      "API and Integrations",
      "Customer service and dedicated account manager",
    ],
    buttonText: "Contact us",
  },
}
</script>

<style>
.el-card {
  border-radius: 10px;
}

.el-card .el-card__header {
  padding: 0;
  margin: 18px 20px;
  border-bottom: 1px solid #23879a;
}

.corner {
  width: 0;
  height: 0;
  border-top: 80px solid #23879a;
  border-bottom: 80px solid transparent;
  border-right: 80px solid transparent;
  position: absolute;
  top: 0;
  left: 0;
}

.popular-text {
  position: absolute;
  top: 20px;
  left: 1px;
  text-align: center;
  font-size: 14px;
  transform: rotate(-45deg);
  display: block;
  color: white;
}
</style>
