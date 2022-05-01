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
        <DataTable :value="contaPesquisa" :paginator="true" :rows="5"
          paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport"
          currentPageReportTemplate="Total de contas: {totalRecords}">
          <Column field="id" header="ID"></Column>
          <Column field="descricao" header="Descrição"></Column>
          <Column field="saldo" header="Saldo"></Column>
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
      contaPesquisa: [],
      contaForm: { descricao: '' }
    };
  },
  mounted() {
    ContaService.lista().then(response => {
      this.contaPesquisa = response.data;
    });
  },
  methods: {
    pesquisar() {
      ContaService.pesquisar(this.contaForm.descricao)
        .then(response => {
          console.log(response.data.content)
          this.contaPesquisa = response.data.content;
        });
    }
  }
};
</script>

<style scoped></style>
