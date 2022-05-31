<template>
    <v-row>
        <v-col cols="12">
            <v-card class="light_shadow">
                <v-card-title>
                    Últimos 7 dias
                </v-card-title>
                <v-card-text>
                    <apexchart height="300" type="area" :options="week_options" :series="serie_7_dias"></apexchart>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import {useDataChartStore} from '@/store/dash_data';
import {storeToRefs} from 'pinia'

const store = useDataChartStore();
const {serie_7_dias, week_options} = storeToRefs(store)
</script>

<style>

</style>