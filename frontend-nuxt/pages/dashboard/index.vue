<script setup lang="ts"></script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center mb-2">
      <h2 class="text-black text-2xl font-bold">Dashboard</h2>
      <DashboardNotificationCard />
    </div>
    <div class="flex flex-row max-w-[1440px] gap-2 p-4 rounded-md border-2 border-gray-200">
      <DashboardExpenseCard />
      <div class="w-full max-w-[800px] h-auto">
        <DashboardTotalExpenseChart />
      </div>
    </div>

    <div class="flex flex-row gap-2 max-w-[1440px]">
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
