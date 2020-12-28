<template>
  <div>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      :disable-resize-watcher="true"     
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
      class="justify-center"
    >
      <span>&copy; {{ new Date().getFullYear() }} Treehouse Internet Group</span>
    </v-footer>
  </v-app>
  </div>
</template>
<script>

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-pine-tree',
          title: 'Sassafras',
          to: '/'
        },
        {
          icon: 'mdi-dump-truck',
          title: 'Junkluggers',
          to: '/junkluggers'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Template Menu'
    }
  }, components: {
   
  }
}
</script>
<style>
.v-application--is-ltr .v-toolbar__content > .v-btn.v-btn--icon:first-child + .v-toolbar__title, .v-application--is-ltr .v-toolbar__extension > .v-btn.v-btn--icon:first-child + .v-toolbar__title {
    padding-left: 0;
}
.v-application--is-ltr .v-list-item__action:first-child, .v-application--is-ltr .v-list-item__icon:first-child {
    margin-right: 10px;
}
.v-toolbar__title {
  font-weight: 500;
}
</style>