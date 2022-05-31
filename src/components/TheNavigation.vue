<template>
    <v-navigation-drawer floating v-model="drawer" temporary>
        <v-list>
            <v-list-item v-for="item in items_drawer" :key="item.text + 'nav_item'" :prepend-icon="item.icon" :title="item.text" :to="{name: item.to}"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script setup>
    import {storeToRefs} from 'pinia'
    import { useDrawerStore } from '@/store/drawer/index.js'
    const store = useDrawerStore()
    const {drawer, items_drawer} = storeToRefs(store)
</script>

<style>

</style>