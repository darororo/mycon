<template>
  <Dialog v-model:visible="visible" modal header="Create Task" :style="{ width: '90vw' }" :closable="true">
    <div class="grid grid-cols-2 gap-4">
      <div>
        <label for="task" class="block mb-1 font-semibold">Task</label>
        <InputText  id="task" v-model="form.task" class="w-full" />
      </div>
      <div>
        <label for="amount" class="block mb-1 font-semibold">Amount</label>
        <InputText id="amount" v-model="form.amount" class="w-full" />
      </div>
      <div>
        <label for="unit" class="block mb-1 font-semibold">Unit</label>
        <InputText id="unit" v-model="form.unit" class="w-full" />
      </div>
      <div>
        <label for="category" class="block mb-1 font-semibold">Category</label>
        <InputText id="category" v-model="form.category" class="w-full" />
      </div>
    </div>

    <div class="flex justify-end mt-5">
      <Button label="Confirm" class="bg-indigo-900 text-white px-4 py-2 rounded" @click="submitForm" />
    </div>
  </Dialog>
</template>

<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Dialog from 'primevue/dialog'

const visible = ref(true)
const form = ref({
  task: '',
  amount: '',
  unit: '',
  category: ''
})

function submitForm() {
  console.log('Form submitted:', form.value)
  visible.value = false
}
</script>

<style scoped>
.w-full{
    width: 350px;
}


</style>
