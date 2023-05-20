<template>
  <div class="auth">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AuthLayout',
  data: () => ({}),
  components: {},
  props: {},
  computed: {},
  methods: {},
  mounted () { },
})
</script>

<style lang="scss">
// .auth- {}
</style>
