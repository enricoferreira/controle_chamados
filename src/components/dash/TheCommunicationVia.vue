<template>
    <v-col cols="12" md="12">
        <v-card class="light_shadow">
            <v-card-title>
                Por onde os atendimentos foram feitos
            </v-card-title>
            <v-card-text>
                <apexchart type="bar" height="350" :options="options_channel" :series="series_channel"></apexchart>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
import {useDataChartStore} from '@/store/dash_data';
import {storeToRefs} from 'pinia'

const store = useDataChartStore();
const {options_channel, series_channel} = storeToRefs(store)
</script>

<style>

</style>