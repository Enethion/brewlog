<template>
  <v-layout justify-center align-top wrap>
    <v-flex xs12 lg8 px-2>
      <short-post v-for="(item, i) in [1,2,3,4,5,6,7,8,9]" :key="i" />
    </v-flex>
    <v-flex tag="aside" xs12 lg4 px-2>
      <!-- <popular-posts /> -->
      <post-categories />
      <post-archive />
    </v-flex>
  </v-layout>
</template>

<script>
import ShortPost from "components/posts/ShortPost"
// import PopularPosts from "components/posts/PopularPosts"
import PostCategories from "components/posts/PostCategories"
import PostArchive from "components/posts/PostArchive"

export default {
  components: {
    ShortPost,
    // PopularPosts,
    PostCategories,
    PostArchive,
  }
}
</script>
