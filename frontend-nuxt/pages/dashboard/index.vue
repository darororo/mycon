<script setup lang="ts"></script>

<template>
  <div>
    <DashboardExpenseCard />
    <div class="my-4">
      <DashboardNotificationCard />
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
