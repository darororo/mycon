<template>
  <div style="display: flex; gap: 20px; flex-wrap: wrap">
    <Button
      v-for="item in btnAction"
      :key="item.id"
      :pt="{
        root: {
          style: `
              width: 260px;
              padding: 10px 18px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              background: white;
              border: 1px solid #ddd;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0,0,0,0.05);
              transition: all 0.3s ease;
              cursor: pointer;
            `,
        },
      }"
      :dt="buttonDT"
    >
      <div style="display: flex; align-items: center; gap: 12px">
        <Icon
          :name="item.icon"
          style="color: #444; font-size: 24px; transition: transform 0.3s ease"
          class="icon-hover"
        />
        <label
          style="color: #222; font-size: 15px; font-family: 'Poppins', sans-serif; font-weight: 500"
        >
          {{ item.BtnName }}
        </label>
      </div>
      <span
        style="
          font-weight: 600;
          color: white;
          background: linear-gradient(135deg, #ff4d4f, #ff7875);
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 12px;
          font-family: 'Montserrat', sans-serif;
        "
      >
        {{ item.quantity }}
      </span>
    </Button>
  </div>
</template>

<script setup>
const buttonDT = {
  primary: {
    background: 'white',
    border: {
      color: '#ddd',
    },
    hover: {
      background: 'linear-gradient(135deg, #f9f9f9, #f1f1f1)',
      border: {
        color: '#bbb',
      },
    },
    active: {
      background: '#f0f0f0',
      border: {
        color: '#aaa',
      },
    },
  },
  border: {
    radius: '12px',
  },
}

defineProps({
  btnAction: {
    type: Array,
    default: () => [
      {
        id: 1,
        BtnName: 'Client Notification',
        icon: 'clarity:group-solid',
        quantity: '20+',
      },
      {
        id: 2,
        BtnName: 'Emergency Alert',
        icon: 'mdi:alert',
        quantity: '14+',
      },
    ],
  },
})
</script>

<style scoped>
.icon-hover:hover {
  transform: scale(1.1) rotate(5deg);
}
</style>
