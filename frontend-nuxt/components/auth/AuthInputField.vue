<template>
  <Form>
    <div class="input-container">
      <InputText
        class="username-input-field"
        name="username"
        type="text"
        :placeholder="placeholder"
      />
      <slot></slot>
    </div>
  </Form>
</template>

<script setup>
defineProps(['placeholder'])
</script>

<style scoped>
.username-input-field {
  height: 50px;
  width: 612px;
  background-color: transparent;
  border-width: 1px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: white;
  padding: 0;
  border-radius: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 24px;
  font-weight: 300;
  padding-right: 40px;
}

.p-inputtext:enabled:hover {
  border-color: gray;
}

.p-inputtext:enabled:focus {
  border-color: gray;
}

:slotted(.iconify) {
  position: relative;
  top: 12px;
  right: 36px;
}
</style>
