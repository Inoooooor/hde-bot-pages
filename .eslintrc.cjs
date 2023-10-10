/* eslint-env node */
module.exports = {
  root: true,
  extends: ["plugin:vue/vue3-recommended", "eslint:recommended"],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "vue/no-v-html": "off",
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "always",
          normal: "always",
          component: "always",
        },
        svg: "never",
        math: "always",
      },
    ],
    "vue/singleline-html-element-content-newline": [
      "error",
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ["pre", "textarea", "h1"],
      },
    ],
  },
}
