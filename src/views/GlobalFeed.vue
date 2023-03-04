<template>
  <div class="home-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <vmc-feed />
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import VmcFeed from '@/components/Feed'
export default {
  name: 'VmcGlobalFeed',
  components: {
    VmcFeed,
  },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>