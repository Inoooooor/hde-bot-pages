<template>
  <section id="screenFourth">
    <div class="d-none d-lg-flex justify-content-lg-center">
      <img
        src="../images/background-2-top.svg"
        alt=""
      />
    </div>
    <div class="background2">
      <div class="container">
        <div class="d-flex flex-column flex-lg-row-reverse py-lg-5">
          <div
            class="d-flex flex-column align-items-center text-center text-white pt-5 mb-4 col-lg-4 justify-content-lg-center"
          >
            <StarIcon />
            <h2 class="fw-bold text-2xl lg:text-4xl">Why HelpDeskEddy?</h2>
            <p class="py-4 text-base lg:text-2xl">
              HelpDeskEddy is an all-in-one platform that helps you sell on
              WhatsApp, Instagram, Facebook, Telegram and Viber. It’s ideal for
              marketers and digital product owners.
            </p>
          </div>
          <div
            class="d-flex flex-column flex-lg-row text-white col-lg-8 flex-lg-wrap justify-content-lg-around"
          >
            <div class="d-flex mb-4 mb-lg-0 py-lg-5 col-lg-5">
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60cc74917f4df790f25e65e8_i-sm-01.svg"
                alt=""
                class="me-4 w-[45px] h-[45px]"
              />
              <div class="d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">
                  Multi-channel chatbot builder
                </h3>
                <p class="text-base lg:text-xl">
                  The visual and intuitive no-code chatbot builder.
                </p>
              </div>
            </div>
            <div class="d-flex mb-4 mb-lg-0 py-lg-5 col-lg-5">
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60cc7491b03c622f2db7a7e8_i-sm-03.svg"
                alt=""
                class="me-4 w-[45px] h-[45px]"
              />
              <div class="d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">
                  Subscriber base
                </h3>
                <p class="text-base lg:text-xl">
                  Segment and manage your subscriber base.
                </p>
              </div>
            </div>
            <div class="d-flex mb-4 mb-lg-0 py-lg-5 col-lg-5">
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60cc7491521f5d2664de3a60_i-sm-05.svg"
                alt=""
                class="me-4 w-[45px] h-[45px]"
              />
              <div class="d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">Growth tools</h3>
                <p class="text-base lg:text-xl">
                  Ready-made growth tools for websites, Instagram and Facebook
                  to help acquire new subscribers.
                </p>
              </div>
            </div>
            <div class="d-flex mb-4 mb-lg-0 py-lg-5 col-lg-5">
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60cc74919f1dda72666e437d_i-sm-02.svg"
                alt=""
                class="me-4 w-[45px] h-[45px]"
              />
              <div class="d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">Broadcasts</h3>
                <p class="text-base lg:text-xl">
                  Engage with prospects and send tailored content.
                </p>
              </div>
            </div>
            <div class="d-flex mb-4 mb-lg-0 py-lg-5 col-lg-5">
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60cc74919f1ddab1ce6e4383_i-sm-04.svg"
                alt=""
                class="me-4 w-[45px] h-[45px]"
              />
              <div class="d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">Analytics</h3>
                <p class="text-base lg:text-xl">
                  Get detailed analytics on conversions and traffic sources.
                </p>
              </div>
            </div>
            <div class="d-flex mb-4 mb-lg-0 py-lg-5 col-lg-5">
              <img
                src="https://uploads-ssl.webflow.com/60cb5213aeb6e63bf7b6b47a/60cc74910261301164fda893_i-sm-06.svg"
                alt=""
                class="me-4 w-[45px] h-[45px]"
              />
              <div class="d-flex flex-column justify-content-center">
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">Chat center</h3>
                <p class="text-base lg:text-xl">
                  Respond to clients in different messengers from a single
                  window.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-none d-lg-flex justify-content-lg-center">
      <img
        src="../images/background-2-bot.svg"
        alt=""
      />
    </div>
  </section>
</template>

<script setup>
import StarIcon from "./images/StarIcon.vue"
</script>

<style scoped>
.background2 {
  background-image: url("../images/background-2.svg");
  background-position: 50%;
  background-attachment: scroll;
  background-repeat: no-repeat;
}
</style>
