<template>
  <v-app>
    <v-navigation-drawer enable-resize-watcher temporary v-model="drawer" app class="hidden-lg-and-up">
      <v-list>
        <v-list-tile router :to="item.to" :key="i" v-for="(item, i) in items" exact>
          <v-list-tile-action>
            <v-icon v-html="`mdi-${item.icon}`"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" absolute dark app>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <router-link class="v-btn v-btn--flat" tag="button" :to="item.to" v-text="item.title" :key="i" v-for="(item, i) in items" />
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <v-container>
        <v-slide-y-transition mode="out-in">
          <router-view></router-view>
        </v-slide-y-transition>
      </v-container>
    </v-content>
    <v-footer absolute app>
      <v-container pa-0>
        <span>&copy; 2017</span>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import Meta from "mixins/meta";

export default {
  mixins: [Meta],

  data() {
    return {
      drawer: false,
      items: [
        { icon: "apps", title: "Blog", to: "/" },
        { icon: "bubble_chart", title: "Warki", to: "/inspire" }
      ],
      title: "BrewLog"
    };
  }
};
</script>
