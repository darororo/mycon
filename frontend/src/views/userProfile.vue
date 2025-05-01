<template>
    <div class="app">
      <header class="app-header">
        <div class="logo">
          <img src="@/assets/images/logo.png" alt="Logo" />
        </div>
        <div class="header-right">
          <userProfileDropdown 
            @logout="handleLogout" 
            @settings="handleSettings" 
            @help="handleHelp"
          />
        </div>
      </header>
    </div>
  </template>
  
  <script>
  import userProfileDropdown from '@/components/userProfileDropdown.vue'
  
  export default {
    name: 'userProfile',
    components: {
      userProfileDropdown
    },
    methods: {
      handleLogout() {
        console.log('Logout clicked');
      },
      handleSettings() {
        console.log('Settings clicked');
      },
      handleHelp() {
        console.log('Help clicked');
      }
    }
  };
  </script>
  
  <style>
  body {
    margin: 0;
    font-family: var(--font-family);
    background-color: #f5f7fa;
  }
  
  .app {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.25rem;
    background-color: white;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  }
  
  .logo img {
    height: 30px;
    width: 30px;
  }
  
  .app-content {
    padding: 1.25rem;
  }
  </style>