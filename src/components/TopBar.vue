<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-link" :to="{name: 'home'}"
        >MediumClone</router-link
      >
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'VmcTopBar',
  computed: {
    ...mapState({
      currentUser: (state) => state.auth.currentUser,
      isLoggedIn: (state) => state.auth.isLoggedIn,
    }),
  },
}
</script>