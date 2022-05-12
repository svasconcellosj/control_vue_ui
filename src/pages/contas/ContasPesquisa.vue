<template>
  <div class="containerInterno">
    <div class="grid">
      <div class="col-12">
        <h1 class="barTitle">Cadastro de contas</h1>
      </div>
    </div>
    <form class="formDados" autocomplete="off"  @submit.prevent="pesquisar">
      <div class="grid">
        <div class="col-12 p-fluid">
          <label>Descrição</label>
          <InputText type="text" v-model="contaForm.descricao" v-tooltip.top="'Entre com uma conta'"
            placeholder="Digite parte da descrição ou deixe em branco para todos"
          />
        </div>
      </div>
      <div class="col-12">
        <Button type="submit" label="Pesquisar" ></Button>
        <Button label="Link">
          <router-link class="btn" to="cadastro">Nova Conta</router-link>
        </Button>
      </div>
    </form>

    <div class="grid">
      <div class="col-12">
        <DataTable :value="contaPesquisa" :paginator="true" :rows="5" :loading="loading" dataKey="id"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Total de contas: {totalRecords}">
          <Column field="id" header="ID" sortable></Column>
          <Column field="descricao" header="Descrição" sortable></Column>
          <Column field="saldo" header="Saldo" ></Column>
          <Column field="" header="Opções"></Column>
          <template #loading>
              Carregando contas... Por favor aguarde!
          </template>
          <template #empty>
            Nenhuma conta encontrada
          </template>
        </DataTable>
      </div>
    </div>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Tooltip from "primevue/tooltip";
import Button from "primevue/button";

import DataTable from "primevue/datatable";
import Column from "primevue/column";

import axios from "axios";
import ContaService from "@/services/contas/ContaService";

export default {
  name: "ContasPesquisa",
  components: {
    InputText,
    Tooltip,
    Button,
    DataTable,
    Column,
    axios,
    ContaService
  },
  directives: {
    tooltip: Tooltip
  },
  data() {
    return {
      loading: true,
      lazyParams: {},
      totalRecords: 0,

      contaPesquisa: [],
      contaForm: { descricao: '' }
    };
  },
  mounted() {
    ContaService.lista().then(response => {
      this.contaPesquisa = response.data;
      this.loading = false;
    });

  },
  methods: {
    pesquisar() {
      this.loading = true;
      ContaService.pesquisar(this.contaForm.descricao)
        .then(response => {
          console.log(response.data)
          this.contaPesquisa = response.data.content;
          this.totalRecords = response.data.totalElements;
        });
      this.loading = false;
    },

  }
};
</script>

<style scoped></style>
