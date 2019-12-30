<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-md q-gutter-y-md" style="width: 50rem;">
        <div class="row justify-end">
          <q-btn
            flat
            color="positive"
            label="New Page"
            icon-right="menu_book"
            />
        </div>
        <div class="row">
          <span v-html="'Page'"/>
          <q-editor
            :content-style="{ wordWrap: 'anywhere' }"
            class="full-width"
            min-height="5rem"
            v-model="form.page"
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
        page: ''
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
