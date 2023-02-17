<template>
  <div>
    <vmc-topBar />
    <router-view />
  </div>
</template>

<script>
import VmcTopBar from '@/components/TopBar'
export default {
  name: 'VmcApp',
  components: {
    // eslint-disable-next-line
    VmcTopBar,
  },
}
</script>