<template>
  <div>
    <vmc-topBar />
    <router-view />
  </div>
</template>

<script>
import VmcTopBar from '@/components/TopBar'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'VmcApp',
  components: {
    // eslint-disable-next-line
    VmcTopBar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>