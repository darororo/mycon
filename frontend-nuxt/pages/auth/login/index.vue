<template>
  <div class="login-wrapper">
    <Card
      :dt="cardDt"
      class="glass-card"
    >
      <template #content>
        <div class="login-container">
          <div class="header">
            <h1 class="title">Log In</h1>
            <p class="subtitle">Login to access your personal dashboard</p>
          </div>

          <div class="input-group">
            <label class="input-label">Email</label>
            <EmailInputField v-model="userLoginDto.email" />
          </div>

          <div class="input-group">
            <label class="input-label">Password</label>
            <PassInputField v-model="userLoginDto.password" />
          </div>

          <div class="options">
            <div style="display: flex; align-items: center; gap: 10px">
              <Checkbox
                :dt="{
                  checked: {
                    background: 'white',
                    border: {
                      color: 'white',
                    },
                    hover: {
                      border: {
                        color: 'white',
                      },
                      background: 'white',
                    },
                  },
                }"
                v-model="size"
                input-id="size_small"
                name="size"
                value="Small"
                size="small"
              />
              <label
                for="size_small"
                class="remember-label"
                >Remember Me</label
              >
            </div>
            <a
              href="#"
              class="forgot-password"
              >Forgot Password?</a
            >
          </div>

          <LoginButton @click="router.push({ name: 'dashboard' })" />

          <div class="divider">
            <div class="line" />
            <span class="divider-text">Or log in with</span>
            <div class="line" />
          </div>

          <Button
            :dt="buttonStyle"
            class="social-button"
            @click="signUpWithGoogle"
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
              Don't have an account?
              <NuxtLink
                :to="{ name: 'auth-signup' }"
                class="signup-link"
                >Sign Up
              </NuxtLink>
            </label>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import EmailInputField from '~/components/auth/EmailInputField.vue'
import LoginButton from '~/components/auth/LoginButton.vue'
import PassInputField from '~/components/auth/PassInputField.vue'
import type { UserLogin } from '~/interfaces/auth.interface'

const config = useRuntimeConfig()
const googleAuthStore = useGoogleAuthStore()
const userLoginDto = reactive(<UserLogin>{
  email: '',
  password: '',
})
const isLoading = ref(false)
const isGoogleLoaded = ref(false)
const showDebug = ref(true)
definePageMeta({
  layout: false,
})

const router = useRouter()

const cardDt = {
  background: 'white',
  border: {
    color: 'black',
    radius: 'none',
  },
  body: {
    padding: '80px 100px',
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

const signUpWithGoogle = () => {
  if (!isGoogleLoaded.value) {
    return
  }

  if (typeof window === 'undefined' || !(window as any).google?.accounts?.id) {
    return
  }
  
  ;(window as any).google.accounts.id.initialize({
      client_id: config.public.googleClientId,
      callback: handleGoogleResponse,
      auto_select: false,
      cancel_on_tap_outside: false
    })

    // Try One Tap first
    ;(window as any).google.accounts.id.prompt((notification: any) => {
      if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
        // Fallback to popup
        console.log('One Tap not available, using popup')
        triggerGooglePopup()
      }
    })
}

const handleGoogleResponse = async (response: any) => {
  try {
    if (response.credential) {
      const idToken = response.credential
      await googleAuthStore.signUpWithGoogle(idToken)
    } else {
      console.log('err');
    }
  } catch (error) {
    console.log(error)
  } finally {
    isLoading.value = false
  }
}

const triggerGooglePopup = () => {
  try {
    const tempButton = document.createElement('div')
    tempButton.style.display = 'none'
    document.body.appendChild(tempButton)

    ;(window as any).google.accounts.id.renderButton(tempButton, {
      theme: 'outline',
      size: 'large',
      width: '100%',
      callback: handleGoogleResponse
    })

    // Trigger click on the hidden button
    const googleButton = tempButton.querySelector('div[role="button"]') as HTMLElement
    if (googleButton) {
      googleButton.click()
    }

    // Clean up
    setTimeout(() => {
      document.body.removeChild(tempButton)
    }, 1000)

  } catch (error) {
    console.error('Popup trigger error:', error)
    isLoading.value = false
  }
}
// Function to wait for Google script to load
const waitForGoogle = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not available'))
      return
    }

    if ((window as any).google?.accounts?.id) {
      resolve()
      return
    }

    // Wait for script to load
    let attempts = 0
    const maxAttempts = 50 // 5 seconds max wait
    
    const checkGoogle = () => {
      attempts++
      
      if ((window as any).google?.accounts?.id) {
        resolve()
      } else if (attempts >= maxAttempts) {
        reject(new Error('Google script failed to load'))
      } else {
        setTimeout(checkGoogle, 100)
      }
    }
    
    checkGoogle()
  })
}

const loadGoogleScript = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      reject(new Error('Window is not available'))
      return
    }

    if ((window as any).google?.accounts?.id) {
      resolve()
      return
    }

    const existingScript = document.querySelector('script[src*="accounts.google.com/gsi/client"]')
    if (existingScript) {
      waitForGoogle().then(resolve).catch(reject)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://accounts.google.com/gsi/client'
    script.async = true
    script.defer = true
    
    script.onload = () => {
      waitForGoogle().then(resolve).catch(reject)
    }
    
    script.onerror = () => {
      reject(new Error('Failed to load Google script'))
    }
    
    document.head.appendChild(script)
  })
}

const initializeGoogle = async () => {
  try {
    await loadGoogleScript()
    isGoogleLoaded.value = true
    console.log('Google script loaded successfully')
  } catch (error) {
    console.error('Failed to load Google script:', error)
  }
}

onMounted(() => {
  setTimeout(() => {
    initializeGoogle()
  }, 100)
})

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
