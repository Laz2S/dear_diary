<template>
  <q-page class="full-width">
    <bookmark-table/>
  </q-page>
</template>

<script>
import BookmarkTable from 'src/components/Bookmark/Table'
export default {
  name: 'Book',
  components: {
    BookmarkTable
  },
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  computed: {
    mapRoutes () {
      return this.$router.options.routes[0].children
    }
  }
}
</script>
