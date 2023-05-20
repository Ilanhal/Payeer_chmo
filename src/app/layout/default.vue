<template>
  <div class="pages">
    <div class="pages-header">
      <Header />
    </div>

    <br
      v-for="item in 25"
      :key="item"
    >
    <div class="pages-body">
      <router-view />
    </div>
  </div>
</template>

<script>
import HeaderVue from 'widgets/global/Header.vue'

const Header = HeaderVue

export default {
  name: 'DefaultLayout',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Header, },
  data () {
    return {
    }
  },
  methods: {},
}
</script>

<style lang="scss">
.pages {
  background-image: url('https://wallpapers.com/images/featured/cfljc4haleghnajo.jpg');
  background-size: cover;
  background-repeat: no-repeat;

  &-body {
    padding: 40px 60px;
    background: #fff;
  }
}
</style>
