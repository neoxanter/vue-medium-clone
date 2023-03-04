<template>
  <div>Feed {{ apiUrl }}</div>
</template>

<script>
export default {
  name: 'VmcFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
}
</script>