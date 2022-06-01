<template>
    <v-app-bar flat>
        <v-app-bar-nav-icon @click="toggle" color="primary" class="mr-md-2 mr-sm-0"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-btn icon="mdi-phone-plus-outline" color="primary">
        </v-btn>
        <v-btn icon="mdi-bell-outline">
        </v-btn>
        <v-btn icon="mdi-dots-horizontal">
        </v-btn>
    </v-app-bar>
</template>

<script setup>
    import { useDrawerStore } from '@/store/drawer/index.js'
    const store = useDrawerStore()
    const {toggle} = store

</script>

<style>

</style>