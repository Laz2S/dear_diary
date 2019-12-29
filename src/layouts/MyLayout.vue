<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          Dear Diary
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list v-for="(item, index) in mapRoutes" :key="index">
        <q-expansion-item
        :icon="item.meta.icon"
        :label="item.meta.title"
        :caption="item.meta.caption"
        v-if="item.children"
        header-class="text-primary"
        >
          <q-list v-for="(children, index) in item.children" :key="index">
            <q-item clickable @click="$router.push({ name: children.name })">
            <q-item-section avatar>
              <q-icon :name="children.meta.icon" color="primary"/>
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="children.meta.title"/>
              <q-item-label caption v-html="children.meta.caption"/>
            </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
        <q-item clickable @click="$router.push({ name: item.name })" v-else>
          <q-item-section avatar>
            <q-icon :name="item.meta.icon" color="primary"/>
          </q-item-section>
          <q-item-section>
            <q-item-label v-html="item.meta.title"/>
            <q-item-label caption v-html="item.meta.caption"/>
          </q-item-section>
        </q-item>
        <q-separator/>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',

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
