<template>
  <router-view></router-view>
</template>

<style lang="scss">

@import '~@/../mdb/scss/index.free.scss';
@import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap');
#app {
  font-family: 'Baloo 2', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.a-class {
  background-color: #ffff00;
  h1 {
    font-style: italic;
  }
}
</style>
