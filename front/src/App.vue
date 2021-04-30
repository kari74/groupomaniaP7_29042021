<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav{
  background-color: #f0e8c7;
  }
  a {
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 1.2rem;
    color:#303030 ;
    }
    a:hover{
        color:#000;
      }

    a.router-link-exact-active {
      color: #024601;
    }
  
  
.bg-body{
  background-color: #f0e8c7;
}

</style>

