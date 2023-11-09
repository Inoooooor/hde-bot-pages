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
            <h2 class="fw-bold text-2xl lg:text-4xl">Почему HelpDeskEddy?</h2>
            <p class="py-4 text-base lg:text-2xl">
              HelpDeskEddy – это многофункциональная платформа, помогающая
              оказывать поддержку в соцсетях, мессенджерах, чате, из почты и по
              телефону. Она идеально подходит для компаний желающих
              предоставлять лучший клиентский сервис.
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
                  Мультиканальный конструктор-ботов
                </h3>
                <p class="text-base lg:text-xl">
                  Визуальный и интуитивно понятный конструктор ботов без
                  привлечения разработчиков.
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
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">База клиентов</h3>
                <p class="text-base lg:text-xl">
                  Создайте клиентскую базу и управляйте ею.
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
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">
                  Контроль обращений
                </h3>
                <p class="text-base lg:text-xl">
                  Сотрудник в любой момент может вмешаться для помощи клиенту,
                  если бот не смог решить его вопрос.
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
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">
                  Простое ценообразование
                </h3>
                <p class="text-base lg:text-xl">
                  Бесплатные обращения в зависимости от количества сотрудников в
                  системе или докупите пакет при превышении лимитов.
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
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">Аналитика</h3>
                <p class="text-base lg:text-xl">
                  Получайте развернутую аналитику по заявкам, качеству и
                  скорости обслуживания.
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
                <h3 class="fw-bold mb-2 text-xl lg:text-2xl">
                  Центр поддержки
                </h3>
                <p class="text-base lg:text-xl">
                  Создайте чат-бота для приёма обращений от клиентов. Отвечайте
                  клиентам в разных мессенджерах из единого интерфейса.
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
