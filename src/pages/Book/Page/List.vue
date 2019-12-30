<template>
  <q-page class="full-width">
    <book-table/>
  </q-page>
</template>

<script>
import BookTable from 'src/components/Book/Table'
export default {
  name: 'Book',
  components: {
    BookTable
  }
}
</script>
