<script setup lang="ts"></script>

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
      <DashboardNotificationCard />
    </div>
    <hr style="margin: 12px 0; border-color: #ccc" />
    <div
      style="margin-bottom: 10px; gap: 10px"
      class="flex flex-row gap-2 rounded-md"
    >
      <DashboardExpenseCard />
      <div class="w-full max-w-[800px] h-auto">
        <DashboardTotalExpenseChart />
      </div>
    </div>

    <div class="flex flex-row gap-2">
      <div class="w-full">
        <DashboardCategoryExpenseChart title="Labor Expense" />
      </div>
      <div class="w-full">
        <DashboardCategoryExpenseChart title="Material Expense" />
      </div>
    </div>
    <TopProjectItem />
  </div>
</template>
