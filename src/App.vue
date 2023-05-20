<template>
  <div class="root">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuelidate } from '@vuelidate/core'

export default defineComponent({
  name: 'AppComponent',
  components: {},
  computed: {},
  setup () {
    return {
      v$: useVuelidate(),
    }
  },
  data () {
    return {}
  },
  methods: {},
  mounted () {},
})
</script>
