<template>
  <v-card tag="article" horizontal class="mb-3">
    <v-card-media class="hidden-sm-and-down" style="width: 220px; min-width: 220px" :src="post.cover" />
    <v-card-media class="hidden-md-and-up" style="min-height: 200px" :src="post.cover" />
    <div class="card-stacked">
      <v-card-title class="pb-0">
        <div>
          <v-tooltip bottom>
            <h3 slot="activator" class="headline" v-text="post.title"></h3>
            <span v-text="post.title" />
          </v-tooltip>
          <v-chip class="ml-0" label to="asdf" small>
            <v-icon small left class="mr-1">mdi-account</v-icon>
            <span>Author: </span>
            <span v-text="post.user" />
          </v-chip>
          <v-chip label to="asdf" small>
            <v-icon small left class="mr-1">mdi-calendar</v-icon>
            <span v-text="post.created_at" />
          </v-chip>
          <!-- <v-chip label to="asdf" small>
            <v-icon small left class="mr-1">mdi-comment</v-icon>
            <span>12 komentarzy</span>
          </v-chip> -->
        </div>
      </v-card-title>
      <v-card-text>
        <p v-text="post.body" />
      </v-card-text>
      <v-card-actions right>
        <v-btn to="#" flat color="orange">Czytaj dalej</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptatem.",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut sequi beatae autem laborum? Accusantium, nisi distinctio reprehenderit nihil error…",
        cover: "https://cdn.vuetifyjs.com/images/cards/docks.jpg",
        created_at: "2018-06-12",
        user: "Enethion"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.headline {
  max-height: 32px;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.v-card {
  max-height: 220px + 200px;

  .v-card__text {
    overflow: hidden;
    max-height: 88px;

    p {
      margin: 0;
    }
  }
}

@media (min-width: 960px) {
  .v-card {
    max-height: 220px;

    v-card__text {
      max-height: auto;
    }
  }
}
</style>


