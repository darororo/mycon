<!-- <template>
    <Card style="width: 25rem; height: 100px;; overflow: hidden">
        <p class="role" default:>{{ role }}</p>
        <hr>
        <div>
            <p class="totally">Total {{ role }}</p>
            <p class="amount">{{ amount }}</p>
        </div>
    </Card>
</template> -->

<template>
    <Card style="width: 350px; height: 170px;; overflow: hidden">
        <template #title>
            <h1>{{ role }}</h1>
            <Icon name="material-symbols:more-horiz" size="32" alt="slotProps.option.name" class="more-icon"/>
        </template>
        <template #subtitle>
            <hr class="line">
        </template>
        <template #content>
            <div class="container">
                <p class="m-0">Total {{ role }}</p>
                <p class="number-total">{{ amount }}</p>
            </div>
        </template>
    </Card>
</template>

<script setup>
import { Card } from "primevue";

defineProps({
    role: {type: String, default: "Worker"},
    amount: {type: Number, default: 3000},
    bgcolor: {type: String, default: "var(--p-blue-100)"}
})
</script>

<style scoped>
    .p-card {
        background-color: v-bind(bgcolor);
        box-shadow: 0 6px 10px 0 gray;
        color: black;
    }

    hr {
        position: relative;
        rotate: 130deg;
        right: 40px;
        color: var(--p-gray-400);
    }

    ::v-deep(.p-card-content) {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        margin-left: 120px;
        font-family: "Montserrat", sans-serif;
    }

    ::v-deep(.p-card-title) {
        display: flex;
        justify-content: space-between;
        font-family: "Montserrat", sans-serif;
    }

    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    .number-total {
        font-size: 35px;
        font-weight: 500;
        margin-top: -8px;
    }
</style>
