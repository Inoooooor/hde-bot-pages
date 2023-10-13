<script setup>
import HeroSvgBackground from "./components/HeroSvgBackground.vue"
</script>

<template>
  <header class="py-3 position-fixed">HEADER</header>
  <main>
    <div
      id="block-start"
      class="block-start"
    >
      <HeroSvgBackground />
      <section
        id="screenTop"
        class="min-vh-100 container py-5"
      >
        <div class="row">
          <div
            id="contentTop"
            class="d-flex flex-column flex-sm-row align-items-center justify-content-between"
          >
            <div
              id="topText"
              class="col-12 col-sm-7 d-flex flex-column"
            >
              <h1
                class="fs-1 start-header fw-bold pb-0 mb-4 text-start text-white"
              >
                Acquire new customers and generate more sales on messaging apps
              </h1>
              <p class="mb-5 fs-6 text-white">
                The leading no-code chatbot builder. Grow your subscriber list,
                create bots and broadcast messages on WhatsApp, Instagram and
                Messenger.
              </p>
              <!-- <button class="">Get started for free</button> -->
              <el-button
                color="#23879A"
                plain
                class="col-7 fs-5 p-4"
                >Get started for free</el-button
              >
              <!-- <div
                class="short-try-form my-0 mb-5"
                data-link="/poprobovat-besplatno"
              >
                <input
                  type="text"
                  name="subscribe-name"
                  placeholder="Рабочая эл. почта"
                />
                <button class="">Попробовать бесплатно</button>
              </div> -->
            </div>
            <div
              id="heroPhone"
              class="d-flex justify-content-center align-content-center col-8 col-sm-4"
            >
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da06963e63718a54b2bbcc_img-1-en.png"
                loading="lazy"
                sizes="(max-width: 479px) 90vw, 36vw"
                data-w-id="f27de143-5224-1040-31a5-dc6ca2c9209f"
                alt=""
                srcset="
                  https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da06963e63718a54b2bbcc_img-1-en-p-500.png  500w,
                  https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da06963e63718a54b2bbcc_img-1-en-p-800.png  800w,
                  https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60da06963e63718a54b2bbcc_img-1-en.png       1015w
                "
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    <div>
      <section id="screenSecond">
        <div
          id="sectionTwoContent"
          class="container"
        >
          <h2 class="fs-3 fw-bold">
            Automate and grow your business with BotHelp
          </h2>
          <p class="">
            We support WhatsApp, Instagram, Facebook Messenger, Telegram and
            Viber.
          </p>
          <div class="d-flex fs-1">
            <div class="">
              <i class="fa fa-whatsapp"></i>
            </div>
            <div class="">
              <i class="fa fa-telegram"></i>
            </div>

            <div class="">
              <i class="fa fa-instagram"></i>
            </div>

            <div class="">
              <i class="fa fa-vk"></i>
            </div>
            <div class="">
              <i class="fa fa-facebook"></i>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped></style>
