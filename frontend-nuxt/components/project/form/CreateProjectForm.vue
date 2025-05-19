<template>
    <div class="container">
        <Button label="Show" @click="visible = true" />

        <Dialog v-model:visible="visible"
        modal
        header="Create Project"
        :style="{ width: '800px',  height: '600px'}" 
        :pt="{ 
            content: {
                style:  `
                    padding :0;
                `
            }
        }"
        :dt="{
            background: 'white',
            color: 'black',
            header: {
                padding: '30px'
            }
        }">
            <hr>
            <div class="small-container">
                <div>
                    <div class="small-fill">
                        <label for="project-name" class="tag">Project Name</label>
                        <InputText :dt="inputTextDt" id="project-name" class="input" autocomplete="off" />
                    </div>
                    <div class="small-fill">
                        <label for="owner-name" class="tag">Owner</label>
                        <InputText :dt="inputTextDt" id="owner-name" class="input" autocomplete="off" />
                    </div>
                    <div class="small-fill">
                        <label for="price" class="tag">Price</label>
                        <InputText :dt="inputTextDt" id="price" class="input" autocomplete="off" />
                    </div>
                </div>
                <!-- <div style="width: 335px; height: 200px; background-color: aqua;">Upload</div> -->
                 <UploadImage />
            </div>
            <div class="big-container">
                <div class="big-fill">
                    <label for="location" class="tag">Location</label>
                    <InputText :dt="inputTextDt" id="location" class="input-big" autocomplete="off" />
                </div>
                <div class="big-fill">
                    <label for="desc" class="tag">Description</label>
                    <InputText :dt="inputTextDt" id="desc" class="input-big" autocomplete="off" />
                </div>
            </div>
            <div class="button">
                <!-- <Button type="button" label="Cancel" severity="secondary" @click="visible = false"></Button> -->
                <Button type="button" label="Confirm" @click="visible = false"></Button>
            </div>
        </Dialog>
    </div>
</template>

<script setup>
import { Dialog } from "primevue";
import { ref } from "vue";
import UploadImage from "./UploadImage.vue";

const visible = ref(false);

const inputTextDt = {
    focus: {
        border: {
            color: "none"
        }
    }
}
</script>

<style scoped>
    .small-fill {
        display: flex;
        flex-direction: column;
        padding-top: 15px;
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
    .input:focus{
        border-color: none;
    }

    .small-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: end;
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
