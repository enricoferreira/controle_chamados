<template>
    <v-col cols="12" md="12">
        <v-card class="light_shadow">
            <v-card-title>
                Por onde os atendimentos foram feitos
                <v-icon size="17" class="ml-2" color="grey">mdi-information-outline</v-icon>
                <v-spacer></v-spacer>
                <v-btn flat icon="mdi-filter-outline">
                </v-btn>
            </v-card-title>
            <v-card-text>
                <apexchart type="bar" height="290" :options="options_channel" :series="series_channel"></apexchart>
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