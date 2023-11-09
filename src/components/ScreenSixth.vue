<template>
  <section class="background-solid pb-5">
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
      <div class="row">
        <div
          class="d-flex flex-column flex-md-row justify-content-md-around align-items-md-start"
        >
          <PlanCard plan-type="free" />
          <PlanCard plan-type="pro" />
          <PlanCard plan-type="business" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import PlanCard from "./UI/PlanCard.vue"
</script>

<style lang="scss" scoped></style>
