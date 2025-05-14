
<template>
    <div>
        <ScrollPanel class="" style="width: 60rem; height: 300px;">
            <div class="card-list">
                <Card v-for="item in projects" :key="item.id" class="card">
                    <template #content>
                        <div class="card-wrapper">
                            <img :src="item.imageUrl" class="project-image">
                            <div class="project-details">
                                <div class="project-header">
                                    <h1>{{ item.topic }}</h1>
                                    <Icon class="more-option" name="iwwa:option-horizontal"/>
                                </div>
                                <p>{{ item.content }}</p>
                                <div class="project-footer">
                                    <label class="project-author">{{ item.username }}</label>
                                    <label class="project-price">{{ item.price }}</label>
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
                content: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                username: 'Kusuo Saiki',
                price: '$34000',
            },
            {
                id: 2,
                imageUrl: 'https://i.pinimg.com/736x/5a/73/97/5a73978a2c97f271d57a4c494576ac30.jpg',
                topic: 'Blue Horizon Apartments',
                content: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                username: 'Megumi Fushiguro',
                price: '$89000',
            },
            {
                id: 3,
                imageUrl: 'https://i.pinimg.com/736x/86/40/fd/8640fdbc02e0647160d5a0035a2e4102.jpg',
                topic: 'Grandview Towers',
                content: 'Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
                username: 'Taiki Inomata',
                price: '$22000',
            }
        ])
    }
})
</script>

<style scoped>
::v-deep(.p-scrollpanel-bar) {
    background: transparent;
}
.card-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}
.project-footer {
    display: flex;
    justify-content: space-between;
}
.project-price {
    font-weight: 600;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
    color: #28a745;
}
.project-author {
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    color: #222222;    
}
.project-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    color: #333;
}
.project-header h1 {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    color: #333333;
    font-size: 14px;
}
.project-details {
    padding: 14px 28px 10px 24px;
    width: 100%;
    height: 100%;
}
.project-details p {
    line-height: 24px;
    padding-bottom: 20px;
    width: 38rem;
    font-size: 14px;
    font-weight: 400;
    color: #555555;
}
.more-option {
    align-self: center;
    font-size: 26px;
    cursor: pointer;
    color: #888888;
}
.card-wrapper {
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
.project-image {
    height: auto;
    width: 16rem;
    border-radius: 10px;
    border-color: #f8f8f8;
}

</style>
