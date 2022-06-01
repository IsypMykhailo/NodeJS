<template>

    <div class="login-page">
      <transition name="fade">
        <div v-if="!registerActive" class="wallpaper-login"></div>
      </transition>
      <div class="wallpaper-register"></div>

      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
            <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
              <h1>Sign In</h1>
              <form class="form-group">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                <input type="submit" class="btn btn-primary" @click="tryLogin">
                <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign up here</a>
                </p>
                <p><a href="#">Forgot your password?</a></p>
              </form>
            </div>

            <div v-else class="card register" v-bind:class="{ error: emptyFields }">
              <h1>Sign Up</h1>
              <form class="form-group">
                <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                <input v-model="repeatPassword" type="password" class="form-control" placeholder="Confirm Password" required>
                <!-- Checkbox -->
                <div class="form-check">
                  <input v-model="registerCheck" class="form-check-input me-2" type="checkbox" value="" id="registerCheck"
                         aria-describedby="registerCheckHelpText" />
                  <label class="form-check-label" for="registerCheck">
                    I have read and agree to the terms
                  </label>
                </div>
                <input type="submit" class="btn btn-primary" @click="tryCreateUser" :disabled="canSendForm">
                <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign in here</a>
                </p>
              </form>
            </div>
          </div>
        </div>

      </div>
    </div>

</template>

<script>
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: "MyLogin",
  data() {
    return{
      registerActive: false,
      //emailLogin: "",
      //passwordLogin: "",
      //emailReg: "",
      //passwordReg: "",
      //confirmReg: "",
      emptyFields: false
    }
  },
  setup () {
    const route = useRoute()
    const store = useStore()
    console.log(route.query)
    return{
      tryLogin: () => { store.dispatch('apiTryLogin') },
      email: computed({
        get () {
          return store.getters.email
        },
        set (data) {
          store.commit('email', data)
        }
      }),
      password: computed({
        get () {
          return store.getters.password
        },
        set (data) {
          store.commit('password', data)
        }
      }),

      tryCreateUser: () =>{ store.dispatch('apiTryCreateUser') },
      canSendForm: computed(() => !store.getters.canRegister),
      repeatPassword: computed({
        get () {
          return store.getters.repeatPassword
        },
        set (data) {
          store.dispatch('repeatPassword', data)
        }
      }),
      registerCheck: computed({
        get () {
          return store.getters.registerCheck
        },
        set (data) {
          store.dispatch('registerCheck', data)
        }
      })
    }
  }
}

</script>

<style scoped>
p {
  line-height: 1rem;
}

.card {
  padding: 20px;
}

.form-group input {
  margin-bottom: 20px;
}
.login-page {
  align-items: center;
  display: flex;
  height: 65vh;
}

/*.wallpaper-login {
  background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
  no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
}*/

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/*.wallpaper-register {
  background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
  no-repeat center center;
  background-size: cover;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
}*/

h1 {
  margin-bottom: 1.5rem;
}

.error {
  animation-name: errorShake;
  animation-duration: 0.3s;
}

@keyframes errorShake {
  0% {
    transform: translateX(-25px);
  }
  25% {
    transform: translateX(25px);
  }
  50% {
    transform: translateX(-25px);
  }
  75% {
    transform: translateX(25px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>