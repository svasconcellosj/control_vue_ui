<template>
  <span>
    <header>
      <nav-bar logo="Controle" url="#" background="var(--primary-color)">
        <li><a href="sass.html">Dashboard</a></li>
        <li><a href="collapsible.html">Usuário</a></li>
      </nav-bar>
    </header>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
    <footer />
  </span>
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

</style>
