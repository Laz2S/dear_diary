<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md q-gutter-y-md" style="width: 50rem;">
        <div class="row justify-end">
          <q-btn
            flat
            color="positive"
            label="New Page"
            icon-right="menu_book"
            @click="$router.push({ name: 'BookPage-new', params: { 'book': 1 } })"
            />
        </div>
        <div class="row">
          <q-input
            class="full-width"
            label="Title"
            v-model="form.title"
            />
        </div>
        <div class="row">
          <span v-html="'Description'"/>
          <q-editor
            class="full-width"
            min-height="5rem"
            v-model="form.description"
            />
        </div>
        <div class="row">
          <div class="col-6">
            <q-btn
              flat
              color="negative"
              class="full-width"
              label="Back"
              @click="$router.go(-1)"
            />
          </div>
          <div class="col-6">
            <q-btn
              flat
              color="positive"
              class="full-width"
              label="Save"
              @click="save"
            />
          </div>
        </div>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      form: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    save () {
      let form = this.form
      console.log(form)
    }
  }
}
</script>
