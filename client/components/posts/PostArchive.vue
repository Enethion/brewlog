<template>
  <div>
    <p class="title primary--text">Archiwum postów</p>
    <div class="archive-list">
      <v-list>
        <v-list-group v-for="(months, year) in archive" :key="year" prepend-icon="mdi-menu-down" append-icon="" no-action>
          <v-list-tile slot="activator" v-text="year" />

          <v-list class="ml-3">
            <v-list-group v-for="(posts, month) in months" :key="month" prepend-icon="mdi-menu-down" append-icon="" no-action>
              <v-list-tile slot="activator" v-text="month" />
              <v-list>
                <p class="pl-4 pr-3 mb-1 list-link" v-for="(post, i) in posts" :key="i">
                  <a href="#" v-text="post" />
                </p>
              </v-list>
            </v-list-group>
          </v-list>
        </v-list-group>
      </v-list>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      archive: {
        2018: {
          1: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laudantium quis ex?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, hic."
          ],
          3: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laudantium quis ex?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, hic."
          ]
        },
        2016: {
          1: [
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut laudantium quis ex?",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, hic."
          ]
        }
      }
    };
  }
};
</script>

<style lang="scss">
.archive-list .v-list {
  background: transparent;

  .archive-list .v-list__group__header__prepend-icon.primary--text .v-icon {
    transform: rotate(180deg);
  }

  .list-link {
    max-height: 21px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .v-list__group:before,
  .v-list__group:after {
    display: none;
  }
}
</style>

