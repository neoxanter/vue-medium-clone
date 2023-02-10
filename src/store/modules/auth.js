import authApi from '@/api/auth'
import {resolve} from 'core-js/fn/promise'

const state = {
  isSubmitting: false,
}

const mutations = {
  registerStart(state) {
    state.isSubmitting = true
  },
}

const actions = {
  register(context, credentials) {
    return new Promise(() => {
      authApi.register(credentials).then((response) => {
        console.log('response', response)
      })
    })
  },
}

export default {
  state,
  mutations,
}
