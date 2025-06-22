<script setup lang="ts">
import CategoryExpenseChart from '~/components/dashboard/CategoryExpenseChart.vue'
import ExpenseCard from '~/components/dashboard/ExpenseCard.vue'
import NotificationCard from '~/components/dashboard/NotificationCard.vue'
import TotalExpenseChart from '~/components/dashboard/TotalExpenseChart.vue'
import TopProjectItem from '~/components/TopProjectItem/TopProjectItem.vue'
</script>

<template>
  <div class="max-w-[1500px]">
    <div
      style="display: flex; flex-direction: row; justify-content: space-between; align-items: end"
    >
      <h2
        style="
          font-weight: 600;
          font-size: 22px;
          color: black;
          font-family: 'Montserrat', sans-serif;
        "
      >
        Dashboard
      </h2>
      <NotificationCard />
    </div>
    <hr style="margin: 12px 0; border-color: #ccc" />
    <div
      style="margin-bottom: 10px; gap: 10px"
      class="flex flex-row gap-2 rounded-md"
    >
      <ExpenseCard />
      <div class="w-full max-w-[800px] h-auto">
        <TotalExpenseChart />
      </div>
    </div>

    <div class="flex flex-row gap-2">
      <div class="w-full">
        <CategoryExpenseChart title="Labor Expense" />
      </div>
      <div class="w-full">
        <CategoryExpenseChart title="Material Expense" />
      </div>
    </div>
    <TopProjectItem style="margin-bottom: 12px" />
  </div>
</template>
