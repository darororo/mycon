
<template>
    <div>
        <ScrollPanel class="" style="width: 60rem; height: 300px;">
            <div class="project-history-list">
                <Card v-for="item in projects" :key="item.id">
                    <template #content>
                        <div class="history-card-wrapper">
                            <img :src="item.imageUrl" class="project-history-image">
                            <div class="project-history-details">
                                <div class="project-history-header">
                                    <h1>{{ item.topic }}</h1>
                                    <div class="header-action">
                                        <span class="history-date">{{ item.date }}</span>
                                        <Icon class="close-icon" name="material-symbols:close"/></div>
                                    </div>
                                <p>{{ item.content }}</p>
                                <label class="history-location">Booking Location<span>{{ item.location }}</span></label>
                                <div class="project-history-footer">
                                    <label class="history-status">{{ item.status }}</label>
                                    <label class="history-details">More Details</label>
                                </div>
                            </div>
                        </div>
                    </template>
                </Card>
            </div>
        </ScrollPanel>
    </div>
</template>

<script setup>

defineProps({
    projects: {
        type: Array,
        default: () => ([
            {
                id: 1,
                imageUrl: 'https://i.pinimg.com/736x/5c/2a/63/5c2a637d9a96fcf32d28d57d89ba9f14.jpg',
                topic: 'Skyline Tower',
                date: '03/04/2025',
                content: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                location: 'Phnom Penh City',
                status: 'In Progress',
            },
            {
                id: 2,
                imageUrl: 'https://i.pinimg.com/736x/25/bb/24/25bb24305a9db641bbcfad9a748a1607.jpg',
                topic: 'Chip Mong Tower',
                date: '03/04/2025',
                content: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                location: 'Phnom Penh City',
                status: 'In Progress',
            },
            {
                id: 3,
                imageUrl: 'https://i.pinimg.com/736x/fb/4c/b7/fb4cb7488464e53463375233d72d969f.jpg',
                topic: 'Garden City Water Park',
                date: '03/04/2025',
                content: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                location: 'Phnom Penh City',
                status: 'In Progress',
            },
        ])
    }
})
</script>

<style scoped>
.history-location {
    display: flex;
    gap: 10px;
    padding-bottom: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    font-weight: 500;
}
.history-location span {
    font-weight: 400;
    color: grey;
}
.history-date {
    font-size: 12px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    color: rgb(83, 83, 83);

}
.header-action {
    display: flex;
    align-items: center;
    gap: 20px;
}
::v-deep(.p-scrollpanel-bar) {
    background: transparent;
}
.project-history-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.project-history-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.history-details {
    cursor: pointer;
    font-weight: 500;
    font-family: 'Montserrat', sans-serif;
    font-size: 15px;
    color: #333;
}
.history-status {
    font-weight: 500;
    padding: 10px 18px 10px 18px;
    background-color: #cef0d1;
    color: #4CAF50;
    border-radius: 10px;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
}
.project-history-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #333;
}
.project-history-header h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #333333;
    font-size: 14px;
}
.project-history-details {
    padding: 14px 28px 10px 24px;
    width: 100%;
    height: 100%;
}
.project-history-details p {
    line-height: 24px;
    padding-bottom: 10px;
    width: 38rem;
    font-size: 14px;
    font-weight: 400;
    color: #555555;
}
.close-icon {
    align-self: center;
    font-size: 26px;
    cursor: pointer;
    color: #888888;
}
.history-card-wrapper {
    display: flex;
    color: black;
}
::v-deep(.p-card-body) {
    padding: 0;
    }
::v-deep(.p-card) {
    width: 60rem;
    height: auto;
    display: flex;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;    
    background-color:#f8f8f8;
}
.project-history-image {
    height: auto;
    width: 16rem;
    border-radius: 10px;
    border-color: #f8f8f8;
}

</style>
