<template>
  <section
    id="screenSixth"
    class="background-solid pb-5"
  >
    <div class="container">
      <div class="row">
        <div class="text-center">
          <h2 class="fs-3 fw-bold">
            Начните пользоваться HelpDeskEddy уже сегодня
          </h2>
          <p class="py-4 fs-6 text-gray-500">
            Получите бесплатный доступ на 14 дней без ограничения функционала.
            Стоимость формируется исходя из количества сотрудников в вашей
            системе: 1 сотрудник = ₽1500 в месяц (или ₽1000 в год). За каждого
            сотрудника вы получаете 250 бесплатных заявок в месяц, которые могут
            быть обработаны ботом. Например, если у вас в системе 10
            сотрудников, значит бот может бесплатно обработать 2500 заявок в
            месяц. Если вы выходите за установленные лимиты, то можно докупить
            пакет на 5000 заявок за ₽15000 – эти заявки не имеют ограничений по
            времени и остаются с вами до окончания всего пакета!
          </p>
        </div>
      </div>
      <div class="block-price">
        <div class="row">
          <div
            class="d-flex flex-column flex-md-row justify-content-md-around align-items-md-start"
          >
            <!-- <PlanCard plan-type="free" />
          <PlanCard plan-type="pro" />
          <PlanCard plan-type="business" /> -->
            <div class="col-12 col-lg-6">
              <div class="block-price-benefits saas-price">
                <div class="block-price-benefits-title">Онлайн версия</div>
                <div class="block-price-saas-switch">
                  <div class="block-price-saas-switch-left-option">
                    Оплата за год
                  </div>
                  <div
                    class="block-price-saas-switch-btn"
                    :class="{ active: isSwitchActive }"
                    @click="switchHandler"
                  ></div>
                  <div class="block-price-saas-switch-right-option">
                    Оплата за месяц
                  </div>
                </div>
                <div class="clearfix"></div>

                <div class="clearfix"></div>
                <div class="block-price-saas-price">
                  <div class="container p-0">
                    <div class="row justify-content-md-center">
                      <div class="col col-6">
                        <div class="fw-bold">
                          <span
                            v-if="isSwitchActive"
                            class="block-price-saas-price-cost inactive-switch"
                            >₽1500
                          </span>
                          <span
                            v-else
                            class="block-price-saas-price-cost active-switch"
                            >₽1000
                          </span>
                        </div>
                      </div>
                      <div class="col col-6">
                        <span
                          v-if="isSwitchActive"
                          class="block-price-saas-price-txt inactive-switch"
                        >
                          За сотрудника в месяц<br />
                          (при оплате на год)
                        </span>
                        <span
                          v-else
                          class="block-price-saas-price-txt active-switch"
                        >
                          За сотрудника в месяц<br />
                          (при оплате на месяц)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="clearfix"></div>
                <div
                  class="block-price-btn-box"
                  style="margin-bottom: 20px"
                >
                  <a
                    href="/poprobovat-besplatno"
                    class="block-price-btn"
                    >Попробовать бесплатно
                  </a>
                </div>
                <div style="text-align: center">
                  Цена фиксирована в рублях на весь оплаченный период
                </div>
                <div class="clearfix"></div>
                <ul style="margin-top: 20px; padding-top: 20px">
                  <li style="color: #2c9b75">Сервера в России</li>
                  <li style="color: #2c9b75">
                    Оплата в рублях, безналичный расчёт
                  </li>
                  <li>Подключение электронной почты и телефонии</li>
                  <li>
                    Подключение соц. сетей (VK, Odnoklassniki, Facebook,
                    Instagram)
                  </li>
                  <li>
                    Подключение мессенджеров (Whatsapp, Viber, Telegram,
                    Messenger)
                  </li>
                  <li>Неограниченное количество тикетов</li>
                  <li>История всех контактов с клиентом</li>
                  <li>Автоматизации и правила</li>
                  <li>Шаблоны ответов</li>
                  <li>Отчёты и аналитика</li>
                  <li>База знаний для сотрудников</li>
                  <li>Более 100 интеграций + API</li>
                  <li>Помощь наших специалистов</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// import PlanCard from "./UI/PlanCard.vue"
import { ref } from "vue"
const isSwitchActive = ref(true)

const switchHandler = () => (isSwitchActive.value = !isSwitchActive.value)
</script>

<style lang="scss" scoped></style>
