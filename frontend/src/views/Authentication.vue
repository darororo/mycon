<template>
  <div class="auth-page">
    <div class="login-page">
      <div class="login-welcome-section">
        <h1 class="welcome-title">WELCOME<br />BACK!</h1>
        <p class="welcome-description">
          We hope you will have a nice<br />experience with our app
        </p>
      </div>
      <div class="form-container">
        <h2 class="auth-title">{{ isLogin ? "Login" : "Sign Up" }}</h2>
        <div class="auth-form-section">
          <AuthInputField placeholder="Username">
            <UserIcon />
          </AuthInputField>
          <AuthInputField v-if="!isLogin" placeholder="Email">
            <EmailIcon />
          </AuthInputField>
          <AuthInputField placeholder="Password">
            <PasswordIcon />
          </AuthInputField>
        </div>
        <AuthButton class="auth-button" @click="switchPage" :label="isLogin ? 'Login' : 'Sign up'" />
        <p class="toggle-text">
          {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
          <a href="#" class="toggle-link" @click.prevent="toggleAuthMode">
            {{ isLogin ? "Sign up" : "Login" }}
          </a>
        </p>
        <div class="social-login-buttons">
          <button class="social-button">
            <GoogleIcon />
          </button>
          <button class="social-button">
            <FacebookIcon />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AuthInputField from "@/components/Auth/AuthInputField.vue";
import AuthButton from "@/components/Auth/AuthButton.vue";
import UserIcon from "@/assets/icons/authentication/userIcon.vue";
import PasswordIcon from "@/assets/icons/authentication/passwordIcon.vue";
import FacebookIcon from "@/assets/icons/authentication/facebookIcon.vue";
import GoogleIcon from "@/assets/icons/authentication/googleIcon.vue";
import EmailIcon from "@/assets/icons/authentication/emailIcon.vue";
import { ref } from "vue";
import router from "@/router";

const props = defineProps({
  isLogin: {
    type: Boolean,
    default: false,
  },
});

function switchPage() {
  let pageToSwitch = props.isLogin ? 'signup' : 'login'
  router.push({ name: pageToSwitch });
}

</script>

<style scoped>
.login-page {
  background-image: url(@/assets/images/backgroundImage.jpg);
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
  font-family: "Montserrat Subrayada", sans-serif;
  font-size: 66px;
  font-weight: 700;
  color: #333;
}

.welcome-description {
  color: #333;
  font-size: 26px;
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
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
  font-family: "Montserrat", sans-serif;
  font-size: 20px;
  margin-top: 50px;
}

.signup-text>a {
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
