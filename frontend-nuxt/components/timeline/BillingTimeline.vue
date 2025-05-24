<template>
    <div class="container">
        <Card 
        :pt="{
            root: {
                style: `
                background-color: white;
                color: black;
                box-shadow: none
                `
            },
            body: {
                style: 'width: 810px'
            }
        }">
            <template #title>Ash's House</template>
            <template #subtitle>
                It is a long established fact that a reader will be distracted by the
                 readable content of a page when looking at its layout. The point of using
                  Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </template>
            <template #content>
                <Timeline
                :value="events"
                layout="horizontal"
                align="top"
                :pt="{
                    event: {
                        style: `
                        height: 110px;
                        display: flex;
                        justify-content: space-between
                        `
                    },
                    eventContent: {
                        style: `
                        display: flex;
                        padding-top: 5px;
                        word-break: break-word
                        // max-width: 7ch
                        `
                    }
                }"
                :dt="{
                    event: {
                        marker: {
                            size: '35px'
                        },
                    }
                }">
                    <template #content="timeProps">
                        {{ timeProps.item }}
                    </template>
                </Timeline>
            </template>
        </Card>
        <Divider layout="vertical" type="solid" />
        <Card 
        :pt="{
            root: {
                style: `
                background-color: white;
                color: black;
                box-shadow: none
                `
            },
            body: {
                style: `
                width: 300px;
                height: 280px;
                display: flex;
                flex-direction: column;
                justify-content: space-between
                `
            }
        }">
            <template #title>
                <div class="person-info">
                    <div class="person-container">
                        <h1>{{ name }}</h1>
                        <p class="role">{{ role }}</p>
                    </div>
                    <img class="image" src="" alt=" ">
                </div>
            </template>
            <template #subtitle>
                <div class="sub-container">
                    <div class="sub">
                        <Icon name="material-symbols:schedule-outline-rounded" alt="" size="16px"/>
                        <p class="sub-p">1-8 hours / day</p>
                    </div>
                    <div class="sub">
                        <Icon name="material-symbols:location-on-outline-rounded" alt="" size="16px"/>
                        <p class="sub-p">Phnom Penh, Cambodia</p>
                    </div>
                </div>
            </template>
            <template #content>
                <div class="button">
                    <Button label="Contact" />
                    <Button class="button2" label="View Detail" />
                </div>
            </template>
        </Card>
    </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
    name: {type: String, default: "Cena Jr."},
    role: {type: String, default: "Son of the Invisible"}
})

const events = ref(['Invoice Created', 'Invoice Sent', 'Payment Pending', 'Payment Received', 'Success'])

</script>

<style scoped>
    .container {
        display: flex;
        width: 1100px;
        height: 280px;
    }

    .role {
        margin-top: -2px;
        font-weight: 400;
        font-size: 14px;
        color: var(--p-zinc-400);
    }

    .image {
        width: 50px;
        height: 50px;
        border-radius: 25px;
        background-color: white;
    }

    .person-info {
        display: flex;
        justify-content: space-between;
    }

    .sub {
        display: flex;
        align-items: center;
    }

    .sub-p {
        font-size: 14px;
        padding-left: 5px;
        font-family: "Montserrat", sans-serif;
    }

    .button {
        height: 95px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .p-button {
        background-color: var(--p-neutral-300);
        border-color: var(--p-neutral-500);
        border-radius: 12px;
    }

    .button2 {
        background-color: #4A5069;
    }

    .sub-container {
        padding-top: 15px;
    }
</style>