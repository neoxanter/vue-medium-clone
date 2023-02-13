<template>
  <div>Here a validation errors</div>
</template>

<script>
export default {
  name: 'VmcValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
}
</script>