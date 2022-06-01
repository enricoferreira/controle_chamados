<template>
    <v-col cols="12" md="6">
        <v-card class="light_shadow">
            <v-card-title>
                Top 5 clientes chamados
            </v-card-title>
            <v-card-text>
                <apexchart type="bar" height="230" :options="top_10_customers" :series="serie_10_customers"></apexchart>
            </v-card-text>
        </v-card>
    </v-col>
</template>

<script setup>
import {useDataChartStore} from '@/store/dash_data';
import {storeToRefs} from 'pinia'

const store = useDataChartStore();
const {serie_10_customers, top_10_customers} = storeToRefs(store)
</script>

<style>

</style>