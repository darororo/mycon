<template>
  <div class="container01">
    <slot class="slotter"></slot>
    <p class="sideitem">{{ sideitem }}</p>
    <arrowcon v-if="arrowOn"/>
  </div>
</template>

<script setup>
import arrowcon from '@/assets/icons/sidebar/arrowcon.vue';
  const props = defineProps( {
      sideitem: String,
      arrowOn: {
        type: Boolean,
        default: false
      }
  })
</script>

<style scoped>
.container01 {
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
  background-color: var(--p-blue-500);
}

.sideitem {
  justify-items: left;
  margin-left: -120px;
}

::slotted() {

}
</style>