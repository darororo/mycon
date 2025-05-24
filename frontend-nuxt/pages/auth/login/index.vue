<script setup lang="ts">
definePageMeta({
  layout: 'auth',
})
const router = useRouter()

function switchPage() {
  router.push({ name: 'auth-signup' })
}
</script>

<template>
  <NuxtLayout name="auth">
    <div class="login-welcome-section">
      <h1 class="welcome-title">WELCOME<br />BACK!</h1>
      <p class="welcome-description">We hope you will have a nice<br />experience with our app</p>
    </div>
    <div class="form-container">
      <h2 class="auth-title">Login</h2>
      <div class="auth-form-section">
        <AuthInputField placeholder="Email or Username">
          <Icon
            name="ic:baseline-person"
            size="42px"
          />
        </AuthInputField>
        <AuthInputField placeholder="Password">
          <Icon
            name="ic:baseline-lock"
            size="42px"
          />
        </AuthInputField>
      </div>
      <AuthButton
        class="auth-button"
        @click="switchPage"
        label="Login"
      />
      <p class="toggle-text">
        Don't have an account?
        <NuxtLink
          :to="{ name: 'auth-signup' }"
          class="text-blue-400 font-semibold underline"
        >
          Sign Up
        </NuxtLink>
      </p>
      <div class="social-login-buttons">
        <button class="social-button">
          <Icon
            name="flat-color-icons:google"
            size="40px"
          />
        </button>
        <button class="social-button">
          <Icon
            name="logos:facebook"
            size="40px"
          />
        </button>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped>
.login-page {
  background-image: url(../assets/auth/bg.jpg);
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 98.2vh;
  padding: 0 100px 100px;
}

.login-welcome-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

.welcome-title {
  font-family: 'Montserrat Subrayada', sans-serif;
  font-size: 66px;
  font-weight: 700;
  color: #333;
}

.welcome-description {
  color: #333;
  font-size: 26px;
  font-family: 'Montserrat', sans-serif;
  line-height: 2.5rem;
  margin-top: 0px;
}

.auth-form-section {
  display: flex;
  flex-direction: column;
  line-height: 100px;
  padding-left: 20px;
}

.auth-title {
  font-family: 'Montserrat', sans-serif;
  color: white;
  font-size: 40px;
  margin-bottom: 60px;
}

.form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.auth-button {
  margin-top: 30px;
}

.toggle-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  margin-top: 50px;
}

.signup-text > a {
  padding-left: 4px;
  font-weight: 600;
  text-decoration: none;
}

.social-login-buttons {
  display: flex;
  gap: 30px;
  margin-top: 30px;
}

.social-button {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: none;
  height: 70px;
  width: 70px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.1);
}
</style>
