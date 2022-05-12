<template>
  <div class="nb-container" :style="backgroundColor">
    <div class="grid">
      <div class="col-2">
        <nav class="centraliza">
          <div>
            <router-link :to="url || '/'">{{ logo || "Site" }}</router-link>
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
      <ul class= "nb-menu" >
        <li class="nb-usuario">usuario</li>
        <li><router-link to="/" class="nb-item">Dashboard</router-link></li>
        <li><router-link to="/lancamentos" class="nb-item">Lançamentos</router-link></li>
        <li><router-link to="/contas" class="nb-item">Contas</router-link></li>
        <li><router-link to="/categorias" class="nb-item">Categorias</router-link></li>
        <li><router-link to="/transferencias" class="nb-item">Transferências</router-link></li>
        <li><router-link to="/estatisticas" class="nb-item">Estatísticas</router-link></li>
        <li><router-link to="/plantas" class="nb-item">Plantas</router-link></li>
        <li><router-link to="/" class="nb-item">Logout</router-link></li>
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
.nb-container {
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

.nb-menu li:hover {
  border-radius: 5px;
  background-color: var(--hover-color);
  text-transform: uppercase;
}

.nb-item {
  color:  var(--primary-color-text);
}

.nb-item:hover {
  color:  var(--text-color-secondary);
}

</style>
