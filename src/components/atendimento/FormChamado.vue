<template>
    <v-form>
        <v-row>
            <!-- <v-col cols="12" class="text-h4 pb-0">
                Informações chamado
            </v-col>
            <v-col cols="12">
                <v-divider></v-divider>
            </v-col> -->
            <v-col style="color: #6e6e6e" class="pb-0 text-body-1 pb-0" cols="12">
                Informações solicitante
            </v-col>
            <!-- <v-col cols="12" class="pt-0">
                <v-divider></v-divider>
            </v-col> -->
            <v-col cols="12" md="5">
                <v-text-field hide-details label="Nome" color="primary" density="comfortable" variant="filled"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-select hide-details label="Escolher perfil" density="comfortable" variant="filled"></v-select>
            </v-col>
            <v-col cols="12" md="3">
                <v-text-field hide-details label="Caracteristícas" density="comfortable" variant="filled"></v-text-field>
            </v-col>
            <v-col cols="12" class="py-0">
                <v-radio-group hide-details v-model="inline" inline>
                    <v-radio label="Multiplicador" value="radio-1"></v-radio>
                    <v-radio label="Atenção" value="radio-2"></v-radio>
                </v-radio-group>
            </v-col>
            <v-col style="color: #6e6e6e" class="text-body-1 pb-0" cols="12">
                Solicitação
            </v-col>
            <v-col cols="12" md="12">
                <v-autocomplete label="Canal" hide-details color="primary" density="comfortable" variant="filled"></v-autocomplete>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field hide-details label="Data início" color="primary" density="comfortable" variant="filled"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field hide-details label="Hora nício" color="primary" density="comfortable" variant="filled"></v-text-field>
            </v-col>
            <v-col cols="12" md="4">
                <v-autocomplete label="Cargos" hide-details color="primary" density="comfortable" variant="filled"></v-autocomplete>
            </v-col>
            <v-col class="py-0" cols="12">
                <v-row>
                    <v-col cols="6">
                        <v-textarea label="Observação" hide-details color="primary" density="comfortable" variant="filled"></v-textarea>
                    </v-col>
                    <v-col cols="6">
                        <v-textarea label="Todo" hide-details color="primary" density="comfortable" variant="filled"></v-textarea>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-form>
</template>

<script>
export default {

}
</script>

<style>

</style>