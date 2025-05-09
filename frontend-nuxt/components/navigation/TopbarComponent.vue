<template>
    <div class="card">
        <Toolbar>
            <template #start>
                <div class="start-section">
                    <logo />
                    <span class="logo-name">CONSTRUCTION</span>
                </div>
                <hr class="line-left" />
            </template>

            <template #center>
                <div class="center-section">
                    <SearchIcon class="search-icon" />
                    <InputText class="search-bar" placeholder="Search for content" />
                </div>
            </template>

            <template #end>
                <div class="end-section">
                    <div class="tool-bar-group">
                        <div class="notification-alert">
                            <span class="info-language">{{ language }}</span>
                            <EmailIcon />
                            <BellIcon />
                        </div>
                        <hr class="line-right" />
                        <div class="account-menu">
                            <img :src="urlProfile" alt="profile" class="user-profile" />
                            <div class="username-role">
                                <span class="name">{{ name }}</span>
                                <span class="role">{{ role }}</span>
                            </div>
                            <DownLineIcon />
                        </div>
                    </div>
                </div>
            </template>
        </Toolbar>
    </div>
</template>

<script setup>
import Toolbar from "primevue/toolbar";
defineProps({
    language: {
        type: String,
        default: "Cambodia",
    },
    name: {
        type: String,
        default: "Jonh Cena",
    },
    role: {
        type: String,
        default: "Super admin",
    },
    urlProfile: {
        type: String,
        default: "https://picsum.photos/id/237/200/300",
    },
});
</script>

<style scoped>
.start-section {
    display: flex;
    align-items: center;
    padding-left: 20px;
    gap: 4px;
}

:deep(.p-toolbar) {
    /* background-color: white; */
}

.logo-name {
    font-size: 20px;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
}

.end-section {
    display: flex;
    align-items: center;
    padding-right: 20px;
}

.search-bar {
    padding: 0 20px 0 50px;
    width: 650px;
    height: 42px;
    border-radius: 100px;
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
}

.center-section {
    display: flex;
    align-items: center;
    gap: 4px;
}

.search-icon {
    position: relative;
    left: 44px;
}

.notification-alert {
    display: flex;
    align-items: center;
    gap: 30px;
}

.tool-bar-group {
    display: flex;
    align-items: center;
    gap: 20px;
}

.info-language {
    font-size: 16px;
    font-family: "Montserrat", sans-serif;
    color: white;
    font-weight: 500;
}

.user-profile {
    height: 34px;
    border-radius: 100px;
}

.account-menu {
    display: flex;
    align-items: center;
    gap: 18px;
}

.username-role {
    display: flex;
    flex-direction: column;
    font-family: "Montserrat", sans-serif;
    line-height: 18px;
}

.name {
    font-weight: 500;
    font-size: 14px;
}

.role {
    font-size: 12px;
    color: grey;
}

.line-right {
    width: 36px;
    transform: rotate(90deg);
    border: 1px solid grey;
    border-radius: 10px;
}

.line-left {
    position: relative;
    width: 36px;
    transform: rotate(90deg);
    border: 1px solid grey;
    border-radius: 10px;
    left: 110px;
}
</style>