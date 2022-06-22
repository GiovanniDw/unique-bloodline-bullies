<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <RouterLink to="/">
        <img
          alt="Vue logo"
          class="logo"
          src="@/assets/logo.svg"
          width="44"
          height="44"
        />
      </RouterLink>
      <nav>
        <RouterLink class="nav-item" to="/">Home</RouterLink>
        <RouterLink class="nav-item" to="/about">About</RouterLink>
      </nav>
      <div class="social">
        <a href="">Facebook</a>
        <a href="">Insta</a>
      </div>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss">
@import '@/assets/base.css';
@import url('https://fonts.googleapis.com/css2?family=Play:wght@400;700&display=swap');

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  /* background-color: var(--color-background); */
  font-weight: normal;
}
.white-space {
  top: 0;
  height: 500px;
}
header {
  line-height: 1.5;
  min-height: 4rem;
  max-height: 10rem;
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  z-index: 10;
  /* padding: 1rem 2rem; */
  overflow: hidden;
  -webkit-overflow-scrolling: none;
  overscroll-behavior: none;
  width: 100%;
  border: 1px solid red;
}

main {
  padding-top: 4rem;
}

header .wrapper {
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  align-items: center;
  padding: 1rem 2rem;
}
.logo {
  display: inline-block;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover.nav-item {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  font-size: 12px;
  text-align: center;
  display: inline-block;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  text-shadow: 0 0 1px var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  /* font-weight: bold; */
  transition: text-shadow 0.4s ease-in-out;
  text-shadow: 0 0 1px black;
}

/* nav a.router-link-exact-active::before {
} */
nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
//desktop
@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
    /* background: red; */
  }

  #app {
    display: grid;
    grid-template-rows: auto;
    padding: 1rem 2rem;
    border: 1px solid #000;
    width: 100%;
  }

  /* header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */

  header .wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: no-wrap;
    align-items: center;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
  }
}
</style>
