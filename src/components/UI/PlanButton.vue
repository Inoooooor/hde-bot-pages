<template>
  <el-button
    color="#23879A"
    class="w-100 fs-4 text-white py-4"
    >{{ buttonText }}
  </el-button>
</template>

<script setup>
defineProps({
  buttonText: {
    type: String,
    required: true,
    default: "Start Trial",
    validator(value) {
      return ["Start Trial", "Contact Us"].includes(value)
    },
  },
})
</script>

<style scoped></style>
