<template>
    <v-container>
        <TheKpis/>
        <v-row>
            <TheWeekChart/>
            <TheTopCustomers/>
        </v-row>
        <v-row>
            <TheChannelChart/>
        </v-row>
    </v-container>
</template>

<script setup>
import TheKpis from '@/components/dash/TheKpis'
import TheWeekChart from '@/components/dash/TheWeekAtendenceChart'
import TheTopCustomers from '@/components/dash/TheTopTenCustomerChart'
import TheChannelChart from '@/components/dash/TheCommunicationVia'

</script>

<style>

</style>