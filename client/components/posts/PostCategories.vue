<template>
  <div>
    <p class="title primary--text">Kategorie postów</p>
    <div class="mx--2">
      <v-badge class="mx-2 mt-1 mb-2 elevation" v-for="(tag, i) in categories" :key="i" color="accent" overlap>
        <span slot="badge" v-text="tag.count"></span>
        <v-btn class="ma-0" color="secondary">
          <span v-text="tag.name"></span>
        </v-btn>
      </v-badge>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      categories: [
        {
          name: "sprzęt",
          count: 5
        },
        {
          name: "recenzje",
          count: 1
        },
        {
          name: "wydarzenia",
          count: 3
        },
        {
          name: "warki",
          count: 6
        },
        {
          name: "konkursy",
          count: 6
        }
      ]
    };
  }
};
</script>

<style lang="scss">
.v-badge.elevation {
  .v-badge__badge {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12) !important;
  }
}
</style>


