<template>
  <div class="container">
    <hr />
    <div class="small-container">
      <div class="">
        <div class="small-fill">
          <label
            for="project-name"
            class="tag"
            >Project Name</label
          >
          <InputText
            :dt="inputTextDt"
            id="project-name"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="owner-name"
            class="tag"
            >Owner</label
          >
          <InputText
            :dt="inputTextDt"
            id="owner-name"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="price"
            class="tag"
            >Price</label
          >
          <InputText
            :dt="inputTextDt"
            id="price"
            class="input"
            autocomplete="off"
          />
        </div>
      </div>
      <div style="width: 100%; height: 100%; padding: 2rem">
        <ProjectFormUploadImage />
      </div>
    </div>
    <div class="big-container">
      <div class="big-fill">
        <label
          for="location"
          class="tag"
          >Location</label
        >
        <InputText
          :dt="inputTextDt"
          id="location"
          class="input-big"
          autocomplete="off"
        />
      </div>
      <div class="big-fill">
        <label
          for="desc"
          class="tag"
          >Description</label
        >
        <InputText
          :dt="inputTextDt"
          id="desc"
          class="input-big"
          autocomplete="off"
        />
      </div>
    </div>
    <div class="button">
      <!-- <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button> -->
      <Button
        type="button"
        label="Confirm"
        @click="visible = false"
      ></Button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const inputTextDt = {
  focus: {
    border: {
      color: 'none',
    },
  },
}
</script>

<style scoped>
.small-fill {
  display: flex;
  flex-direction: column;
  padding-left: 40px;
}

.big-fill {
  display: flex;
  flex-direction: column;
  padding: 15px 40px 0;
}

.input {
  width: 335px;
  color: black;
  background-color: white;
}

.input-big {
  width: 720px;
  color: black;
  background-color: white;
}
.input:focus {
  border-color: none;
}

.small-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 40px;
}

.button {
  display: flex;
  justify-content: end;
  padding-right: 40px;
  padding-top: 18px;
}
label {
  padding-bottom: 2px;
}
</style>
