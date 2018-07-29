<template>
  <v-card tag="article" horizontal class="mb-3">
    <v-card-media class="hidden-sm-and-down" style="width: 220px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
    <v-card-media class="hidden-md-and-up" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
    <div class="card-stacked">
      <v-card-title class="pb-0">
        <div>
          <h3 class="headline">Number 10</h3>
          <v-btn to="asdf" depressed small class="grey lighten-2 grey--text text--darken-2" style="text-transform: none">
            <v-icon small>mdi-account</v-icon> Author: Enethion</v-btn>
          <v-btn depressed small class="grey lighten-2 grey--text text--darken-2" style="text-transform: none">
            <v-icon small>mdi-calendar</v-icon> 12 czerwca 2018</v-btn>
          <v-btn depressed small class="grey lighten-2 grey--text text--darken-2 hidden-sm-and-down" style="text-transform: none">
            <v-icon small>mdi-comment</v-icon> 12 komentarzy</v-btn>
        </div>
      </v-card-title>
      <v-card-text>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut sequi beatae autem laborum? Accusantium, nisi distinctio reprehenderit nihil error porro eaque cumque, illo deserunt eveniet, minima minus dolorum laudantium?
        </p>
      </v-card-text>
      <v-card-actions right>
        <v-btn to="#" flat color="orange">Czytaj dalej</v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>
