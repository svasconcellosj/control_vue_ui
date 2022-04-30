<template>
  <div class="containerInterno" :style="backgroundColor">
    <div class="grid">
      <div class="col-2">
        <nav class="centraliza">
          <div>
            <a v-bind:href="url || '#'">{{ logo || "Site" }}</a>
          </div>
        </nav>
      </div>
      <div class="col-2">
        <Button icon="pi pi-align-justify" iconPos="right" @click="exibirMenu1 = true" />
      </div>
      <div class="col-8">
        <nav class="menu">
          <ul>
            <slot />
          </ul>
        </nav>
      </div>
    </div>

    <Sidebar :visible.sync="exibirMenu1" position="right" >
      <ul class= "navbar-menu" >
        <li class="navbar-usuario">usuario</li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="dashboard">Dashboard</a></li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="lancamentos">Lançamentos</a></li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="contas">Contas</a></li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="categorias">Categorias</a></li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="transferencias">Transferências</a></li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="estatisticas">Estatísticas</a></li>
        <li class="navbar-item" routerLinkActive="ativo"><a routerLink="plantas">Plantas</a></li>
        <li class="navbar-item" ><a >Logout</a></li>
      </ul>
    </Sidebar>


  </div>
</template>

<script>
import Button from "primevue/button";
import Sidebar from 'primevue/sidebar';

export default {
  name: "NavBar",
  props: ["logo", "url", "background"],
  computed: {
    backgroundColor() {
      return {
        "--backgroundColor": this.background
      };
    }
  },
  components: {
    Button,
    Sidebar
  },
  data() {
    return {
      exibirMenu1: false,

    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.containerInterno {
  background-color: var(--backgroundColor);
}

li {
  list-style: none;
  padding: 10px;
}

.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
}

.menu li {
  display: inline;
}

.p-sidebar {
  background-color: var(--secundary-color);
  color:  var(--primary-color-text);

}

.navbar-menu li:hover {
  border-radius: 5px;
  background-color: var(--hover-color);
  text-transform: uppercase;
}

</style>
