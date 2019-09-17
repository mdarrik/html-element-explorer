<template>
  <fragment>
    <github-corner />
    <main>
      <nuxt />
    </main>
  </fragment>
</template>
<script>
import { Fragment } from 'vue-fragment'
import GithubCorner from '../components/github-corner'

export default {
  components: {
    Fragment,
    GithubCorner
  }
}
</script>
