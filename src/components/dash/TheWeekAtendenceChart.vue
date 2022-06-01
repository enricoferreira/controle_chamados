<template>
    <v-col cols="12" md="6">
        <v-card class="light_shadow">
            <v-card-title>
                Quantidade de chamados nos 7 dias anteriores
                <v-icon size="17" class="ml-2" color="grey">mdi-information-outline</v-icon>
                <v-spacer></v-spacer>
                <v-btn flat icon="mdi-filter-outline">
                </v-btn>
            </v-card-title>
            <v-card-text>
                <apexchart height="230" type="area" :options="week_options" :series="serie_7_dias"></apexchart>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
import {useDataChartStore} from '@/store/dash_data';
import {storeToRefs} from 'pinia'

const store = useDataChartStore();
const {serie_7_dias, week_options} = storeToRefs(store)
</script>

<style>

</style>