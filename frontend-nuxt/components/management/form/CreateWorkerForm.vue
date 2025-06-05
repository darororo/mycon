<template>
    <div class="form-wrapper">
      <div class="small-container">
        <div class="small-fill">
          <label
            for="username"
            class="tag"
            >Username</label
          >
          <InputText
            :dt="inputTextDt"
            id="username"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="gender"
            class="tag"
            >Gender</label
          >
          <InputText
            :dt="inputTextDt"
            id="gender"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="field"
            class="tag"
            >Field</label
          >
          <InputText
            :dt="inputTextDt"
            id="field"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="project-field"
            class="tag"
            >Project Field</label
          >
          <InputText
            :dt="inputTextDt"
            id="project-field"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="hourly-rate"
            class="tag"
            >Hourly Rate</label
          >
          <InputText
            :dt="inputTextDt"
            id="hourly-rate"
            class="input"
            autocomplete="off"
          />
        </div>
        <div class="small-fill">
          <label
            for="date"
            class="tag"
            >Date Joined</label
          >
          <DatePicker
          v-model="value"
          placeholder="Date"
          showIcon
          iconDisplay="input"
          class=""
          :dt="{
            input: {
              color: 'red'
            },
            panel: {
              background: 'white',
              color: 'red'
            }
          }"
          />
        </div>
      </div>
  
      <div style="margin-top: 24px">
        <UploadImage />
      </div>
  
      <div class="button">
        <Button
          type="button"
          label="Confirm"
          class="creative-button"
          :dt="{
            primary: {
              background: 'red',
              border: { color: 'none' },
              active: {
                background: 'blue',
                color: 'white',
                border: { color: 'none' },
              },
              hover: {
                background: 'blue',
                color: 'white',
                border: { color: 'none' },
              },
            },
            focus: {
              ring: { width: 'none' },
            },
          }"
          @click="visible = false"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import UploadImage from '~/components/project/form/UploadImage.vue'
  
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
  .form-wrapper {
    padding: 30px;
    padding-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    background: #f9f9fb;
    border-radius: 20px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
  
  .small-container {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    justify-content: space-between;
  }
  
  .small-fill,
  .big-fill {
    display: flex;
    flex-direction: column;
    flex: 1 1 30%;
  }
  
  .big-container {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .input,
  .input-big {
    padding: 10px 14px;
    border: 1.5px solid #ddd;
    border-radius: 8px;
    transition: 0.3s ease;
    background-color: white;
    font-size: 15px;
  }
  
  .input-big {
    width: 100%;
  }
  
  .input:focus,
  .input-big:focus {
    border-color: grey;
    outline: none;
  }
  
  .tag {
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 14px;
    color: #333;
  }
  
  .button {
    display: flex;
    justify-content: flex-end;
    margin-top: 30px;
  }

  .creative-button {
    padding: 10px 24px;
    font-size: 15px;
    font-weight: 500;
    color: white;
    border-radius: 6px;
    background-color: #007bff;
    transition: background-color 0.2s ease;
    cursor: pointer;
  }

  </style>
  