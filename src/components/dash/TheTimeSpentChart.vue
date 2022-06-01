<template>
    <v-col cols="12" md="6">
        <v-card class="light_shadow" style="height: 100% !important">
            <v-card-title class="pb-0">
                Tempo gasto por atendimento
                <v-icon size="17" class="ml-2" color="grey">mdi-information-outline</v-icon>
                <v-spacer></v-spacer>
                <v-btn flat icon="mdi-filter-outline">
                </v-btn>
            </v-card-title>
            <v-card-subtitle>
                De 20/05/2022 até 31/05/2022
            </v-card-subtitle>
            <v-card-text>
                <apexchart type="donut" height="300" :options="options_time_spent" :series="series_time_spent"></apexchart>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
import {useDataChartStore} from '@/store/dash_data';
import {storeToRefs} from 'pinia'

const store = useDataChartStore();
const {options_time_spent, series_time_spent} = storeToRefs(store)
</script>

<style>

</style>