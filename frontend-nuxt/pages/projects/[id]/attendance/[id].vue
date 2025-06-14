<template>
  <div class="card">
    <Toast
      :dt="{
        success: {
          background: '#e6f4ea',
          detailColor: '#2e7d32',
          border: {
            color: '#a5d6a7',
            width: '1px',
            style: 'solid',
          },
          padding: '12px 16px',
          shadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
          borderRadius: '8px',
          font: {
            weight: 500,
            family: 'Montserrat, sans-serif',
          },
        },
        error: {
          background: '#fdecea',
          detailColor: '#b00020',
          border: {
            color: '#f44336',
            width: '1px',
            style: 'solid',
          },
          padding: '12px 16px',
          shadow: '0 4px 10px rgba(244, 67, 54, 0.3)',
          borderRadius: '8px',
          font: {
            weight: 600,
            family: 'Montserrat, sans-serif',
          },
        },
        warn: {
          background: '#fff4e5',
          detailColor: '#9f6000',
          border: {
            color: '#ff9800',
            width: '1px',
            style: 'solid',
          },
          padding: '12px 16px',
          shadow: '0 4px 10px rgba(255, 152, 0, 0.3)',
          borderRadius: '8px',
          font: {
            weight: 600,
            family: 'Montserrat, sans-serif',
          },
        },
      }"
    />

    <DataTable
      :value="users"
      editMode="cell"
      :pt="{
        table: { style: 'min-width: 50rem' },
        column: {
          bodycell: ({ state }) => ({
            class: [{ '!py-0': state['d_editing'] }],
          }),
        },
      }"
      @cell-edit-complete="onCellEditComplete"
    >
      <Column
        header="No."
        style="width: 10%"
      >
        <template #body="{ index }">
          {{ index + 1 }}
        </template>
      </Column>

      <Column
        v-for="col of columns"
        :key="col.field"
        :field="col.field"
        :header="col.header"
        style="width: 30%"
      >
        <template #editor="{ data, field }">
          <div style="display: flex; flex-direction: column">
            <!-- Show non-editable field as plain text -->
            <span v-if="!isEditableField(field)">
              {{ data[field] }}
            </span>

            <!-- Editable field (hours only) -->
            <InputNumber
              v-else
              v-model="data[field]"
              autofocus
              :class="{ 'p-invalid': errors[data.id]?.[field] }"
            />

            <!-- Inline error using Message -->
            <Message
              v-if="errors[data.id]?.[field]"
              severity="error"
              size="small"
              variant="simple"
            >
              {{ errors[data.id][field] }}
            </Message>
          </div>
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import InputNumber from 'primevue/inputnumber'
import Message from 'primevue/message'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

// Table columns
const columns = ref([
  { field: 'name', header: 'Name' },
  { field: 'role', header: 'Role' },
  { field: 'hours', header: 'Hours' },
])

// Table data
const users = ref([])

// Error object (per user per field)
const errors = ref({})

// Toast for notifications
const toast = useToast()

// Only hours are editable
const isEditableField = field => field === 'hours'

// Cell edit validation
const onCellEditComplete = event => {
  const { data, newValue, field } = event

  if (field === 'hours') {
    if (!newValue || isNaN(newValue) || newValue <= 0) {
      if (!errors.value[data.id]) errors.value[data.id] = {}
      errors.value[data.id][field] = 'Please enter a valid number of hours.'
      event.preventDefault()

      toast.add({
        severity: 'error',
        summary: 'Invalid Input',
        detail: errors.value[data.id][field],
        life: 3000,
      })
    } else if (newValue > 16) {
      if (!errors.value[data.id]) errors.value[data.id] = {}
      errors.value[data.id][field] = 'Hours cannot be more than 16.'
      event.preventDefault()

      toast.add({
        severity: 'warn',
        summary: 'Validation Warning',
        detail: errors.value[data.id][field],
        life: 3000,
      })
    } else {
      delete errors.value[data.id]?.[field]
      data[field] = newValue

      toast.add({
        severity: 'success',
        summary: 'Updated Successfully',
        detail: `Hours updated to ${newValue}`,
        life: 2000,
      })
    }
  }
}

// Fetch user data
const fetchUsers = async () => {
  const response = await fetch('https://6817864126a599ae7c3aa650.mockapi.io/api/users')
  const result = await response.json()

  users.value = result.map(user => ({
    ...user,
    hours: 0, // Default editable value
  }))
}

onMounted(fetchUsers)
</script>

<style scoped>
.p-error {
  color: red;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
</style>
