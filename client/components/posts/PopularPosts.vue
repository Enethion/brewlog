<template>
  <div class="">
    <p class="headline primary--text">Popularne posty</p>
    <v-card>
      <v-list two-line class="py-0">
        <template style="text-decoration: none" v-for="(item, i) in [1,2,3,4,5]">
          <v-list-tile :key="i" href="#" tag="a">
            <v-list-tile-avatar>
              <img src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" />
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                <h3 class="title">Number 10</h3>
              </v-list-tile-title>
              <v-list-tile-sub-title>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ut sequi beatae autem laborum?</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider :key="i"/>
        </template>
      </v-list>
    </v-card>
  </div>
</template>
