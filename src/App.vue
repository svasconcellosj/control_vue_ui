<template>
  <div>
    <header>
      <nav-bar logo="Controle" url="/" background="var(--primary-color)">
        <li><router-link to="/">Dashboard</router-link></li>
        <li><a href="usuario.html">Usuário</a></li>
      </nav-bar>
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer />
  </div>
</template>

<script>
import NavBar from "@/components/layouts/NavBar";

export default {
  name: "App",
  components: {
    NavBar
  }
};
</script>

<style>
:root {
  --secundary-color: var(--blue-800);
  --hover-color: var(--blue-300);
}

* {
  margin: 0;
  padding: 0;

  font-family: var(--font-family);
}

a {
  text-decoration: none;
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
    margin: 0 auto;
  }
}

.centraliza {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.containerInterno {
  margin-top: 20px;
  padding-bottom: 20px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px 5px 0 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1);
}

.barTitle {
  padding: 10px;
  font-size: 2em;
  background-color: var(--blue-400);
  border-radius: 5px 5px 0 0;
}

.formDados {
  padding: 10px;
}

.btn {
  color: var(--text-primary-color);
}

</style>
