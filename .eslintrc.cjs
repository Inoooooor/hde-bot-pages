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
      "warn",
      {
        html: {
          void: "always",
          normal: "never",
          component: "always",
        },
        svg: "always",
        math: "never",
      },
    ],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/html-indent": "off",
  },
}
