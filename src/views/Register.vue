<template>
  <div>
    <div class="auth-page">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center">Sign Up</h1>
            <p class="text-xs-center">
              <router-link :to="{name: 'login'}">Have an account?</router-link>
            </p>
            <vmc-validation-errors
              v-if="validationErrors"
              :validation-errors="validationErrors"
            />
            <form @submit.prevent="onSubmit">
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Username"
                  v-model="username"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  v-model="password"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Email"
                  v-model="email"
                />
              </fieldset>

              <button
                class="btn btn-lg btn-primary pull-xs-right :disabled='isSubmitting'"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import VmcValidationErrors from '@/components/ValidationErrors'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'VmcRegister',
  components: {
    VmcValidationErrors,
  },
  data() {
    return {
      username: '',
      password: '',
      email: '',
    }
  },
  computed: {
    ...mapState({
      isSubmitting: (state) => state.auth.isSubmitting,
      validationErrors: (state) => state.auth.validationErrors,
    }),
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch(actionTypes.register, {
          username: this.username,
          password: this.password,
          email: this.email,
        }) // eslint-disable-next-line
        .then((user) => {
          this.$router.push({name: 'globalFeed'})
        })
    },
  },
}
</script>