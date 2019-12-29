<template>
  <div class="q-pa-md">
    <q-table
      grid
      grid-header
      card-class="bg-primary text-white"
      :card-style="cardStyle"
      :title="$route.meta.title"
      :data="dataTable"
      :columns="columnTable"
      row-key="name"
      :filter="filter"
      hide-header
      hide-bottom
      table-style="max-height: 400px"
      virtual-scroll
      :pagination.sync="pagination"
      :rows-per-page-options="[0]"
      :virtual-scroll-slice-size="10"
    >
      <template v-slot:top-right>
        <q-input borderless dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search"/>
          </template>
        </q-input>
      </template>
    </q-table>
  </div>
</template>

<script>
export default {
  name: 'BookTable',
  data () {
    return {
      filter: '',
      pagination: { rowsPerPage: 0 },
      columns: [
        { name: 'book', align: 'center', label: 'Book', field: 'book', sortable: true },
        {
          name: 'description',
          align: 'center',
          label: 'Description',
          field: 'description',
          format: val => `${val.split('').splice(0, 150).join('')} ${val.split('').length > 150 ? '...' : ''}`,
          sortable: true
        },
        { name: 'page', align: 'center', label: 'Page', field: 'page', sortable: true }
      ],
      data: [
        {
          book: 'Meu Primeiro Livro',
          description: 'Frase Marcante',
          page: 1
        },
        {
          book: 'Meu Primeiro Livro',
          description: 'Frase Marcante',
          page: 2
        },
        {
          book: 'Meu Primeiro Livro',
          description: 'Frase Marcante',
          page: 3
        },
        {
          book: 'Meu Primeiro Livro',
          description: 'Frase Marcante',
          page: 4
        }
      ]
    }
  },
  computed: {
    dataTable () {
      return this.data
    },
    columnTable () {
      return this.columns
    },
    cardStyle () {
      let value = 0
      if (screen.width >= 2560 && screen.height >= 1600) value = 12
      else if (screen.width >= 2560 && screen.height >= 1440) value = 13
      else if (screen.width >= 1920 && screen.height >= 1200) value = 16
      else if (screen.width >= 1920 && screen.height >= 1080) value = 18
      else if ((screen.width >= 1680 && screen.height >= 1050) ||
      (screen.width >= 1440 && screen.height >= 900) ||
      (screen.width >= 768 && screen.height >= 1024)) value = 19
      else if (screen.width >= 1600 && screen.height >= 900) value = 22
      else if ((screen.width >= 1366 && screen.height >= 768) ||
      (screen.width >= 1360 && screen.height >= 768)) value = 24
      else if (screen.width >= 1280 && screen.height >= 1024) value = 20
      else if (screen.width >= 1280 && screen.height >= 800) value = 25
      else if (screen.width >= 1280 && screen.height >= 720) value = 28
      else if (screen.width >= 720 && screen.height >= 1280) value = 15
      else if (screen.width >= 640 && screen.height >= 480) value = 43
      else if (screen.width >= 480 && screen.height >= 800) value = 23
      else if (screen.width >= 360 && screen.height >= 640) value = 32
      else if (screen.width >= 320 && screen.height >= 568) value = 36
      else if (screen.width >= 320 && screen.height >= 480) value = 43
      return `min-height: ${value}vh; max-height: ${value}vh`
    }
  }
}
</script>
