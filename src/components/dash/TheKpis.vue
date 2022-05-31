<template>
    <v-row>
        <v-col v-for="kpi in kpis" :key="kpi.nome + '_kpi'" cols="12" md="4">
            <v-card class="light_shadow">
                <v-card-title class="text-h6 justify-center">
                    {{kpi.nome}}
                </v-card-title>
                <v-card-text>
                    <div class="text-h4 text-center">
                        {{kpi.v}}
                    </div>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import {storeToRefs} from 'pinia'
import {useDataChartStore} from '@/store/dash_data/index.js'

const store = useDataChartStore();

const {kpis} = storeToRefs(store);

</script>

<style>

</style>