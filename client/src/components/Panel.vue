<template>
    <div class="white elevation-2">
        <v-toolbar flat dense dark color="green">
            <v-toolbar-title>
                {{title}}
            </v-toolbar-title>
        </v-toolbar>

        <div class="px-4 py-2">
            <slot>No slot content defined</slot>
        </div>
    </div>
</template>

<script>
export default {
  props: ['title']
}
</script>
