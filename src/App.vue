<template>
  <v-app>
    <TheAppBar/>
    <TheNav/>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script setup>
import TheAppBar from '@/components/TheAppBar'
import TheNav from '@/components/TheNavigation'

</script>
<style>
@import '@/styles/global.css';
</style>