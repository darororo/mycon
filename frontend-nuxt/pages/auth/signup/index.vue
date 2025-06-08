<template>
  <div class="login-wrapper">
    <Card
      :dt="cardDt"
      class="glass-card"
    >
      <template #content>
        <div class="login-container">
          <div class="header">
            <h1 class="title">Sign Up</h1>
            <p class="subtitle">Sign up to get started-it's fast and easy</p>
          </div>

          <div class="input-group">
            <label class="input-label">Full Name</label>
            <UserInputField v-model="userSignupDto.username" />
          </div>

          <div class="input-group">
            <label class="input-label">Email</label>
            <EmailInputField v-model="userSignupDto.email" />
          </div>

          <div class="input-group">
            <label class="input-label">Password</label>
            <PassInputField v-model="userSignupDto.password" />
          </div>

          <div class="input-group">
            <label class="input-label">Confirm Password</label>
            <PassInputField />
          </div>

          <SignupButton @click="handleSubmit()" />

          <div class="divider">
            <div class="line" />
            <span class="divider-text">Or sign up with </span>
            <div class="line" />
          </div>

          <Button
            :dt="buttonStyle"
            class="social-button"
          >
            <Icon
              name="flat-color-icons:google"
              style="font-size: 26px"
            />
            <span class="button-text">Google</span>
          </Button>

          <Button
            :dt="buttonStyle"
            class="social-button"
            style="margin: 14px 0"
          >
            <Icon
              name="logos:facebook"
              style="font-size: 26px"
            />
            <span class="button-text">Facebook</span>
          </Button>

          <div class="signup-prompt">
            <label class="signup-label">
              Already have an account?
              <NuxtLink
                :to="{ name: 'auth-login' }"
                href="#"
                class="signup-link"
                >Log In</NuxtLink
              >
            </label>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import EmailInputField from '~/components/auth/EmailInputField.vue'
import PassInputField from '~/components/auth/PassInputField.vue'
import SignupButton from '~/components/auth/SignupButton.vue'
import UserInputField from '~/components/auth/UserInputField.vue'
import type { UserSignup } from '~/interfaces/auth.interface'

definePageMeta({
  layout: false,
})

const userSignupDto = reactive<UserSignup>({
  username: 'bruh',
  email: 'bruh2',
  firstName: 'john',
  lastName: 'batista',
  gender: 'male',
  role: 'client',
  password: '',
})

console.log(userSignupDto)
console.log(userSignupDto.email)

watch(userSignupDto, newValue => {
  console.log(newValue)
})

const { data, error, execute } = useFetch('http://localhost:3100/users', {
  method: 'POST',
  body: userSignupDto,
  immediate: false,
  watch: false,
})

async function handleSubmit() {
  await execute()
  if (error) {
    console.log(error.value?.response)
  }
  console.log(data.value)
}

const cardDt = {
  background: 'white',
  border: {
    color: 'black',
    radius: 'none',
  },
  body: {
    padding: '40px 100px',
  },
}

const buttonStyle = {
  primary: {
    background: 'white',
    border: {
      color: '#ccc',
    },
    hover: {
      background: 'white',
      border: {
        color: '#ccc',
      },
    },
    active: {
      background: '#f1f1f1',
      border: {
        color: '#ccc',
      },
    },
  },
}
</script>

<style scoped>
.login-wrapper {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
  animation: gradientShift 15s ease infinite;
}

.glass-card {
  backdrop-filter: blur(20px);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.37);
  padding: 20px;
}

.login-container {
  width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  text-align: center;
  margin-bottom: 30px;
}

.title {
  font-family: 'Montserrat', sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
}

.subtitle {
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  color: #ccc;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  margin-bottom: 20px;
}

.input-label {
  color: #ffffff;
  font-size: 14px;
  margin-bottom: 5px;
  font-weight: 400;
}

.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 16px 0 24px;
  font-size: 14px;
}

.remember-label,
.forgot-password {
  color: #ffffff;
}

.forgot-password {
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
}

.forgot-password:hover {
  color: #00c3ff;
}

.divider {
  display: flex;
  align-items: center;
  width: 100%;
  margin: 24px 0;
}

.line {
  flex-grow: 1;
  height: 1px;
  background-color: #ccc;
}

.divider-text {
  margin: 0 16px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.social-button {
  width: 100%;
  justify-content: center;
  background: #fff;
  color: #333;
  transition: transform 0.2s ease;
  border-radius: 8px;
}
.social-button:hover {
  color: #333;
}
.button-text {
  margin-left: 10px;
  font-size: 14px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
}

.signup-prompt {
  margin-top: 24px;
  font-size: 14px;
  color: #ffffff;
}

.signup-link {
  color: #00c3ff;
  text-decoration: underline;
  margin-left: 6px;
}
</style>
