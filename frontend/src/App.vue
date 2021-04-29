<template>
<div id="app">

  <header>
    <div id="nav" class="bg-nav py-2">
      <!--non connecté -->
      <div class="" v-if =" id === null " >
        <router-link to="/signup">Inscription</router-link> |
        <router-link to="/login">Connexion</router-link>  
      </div>
      <!--connecté-->
      <div class="" v-else>  
        <router-link to="/allpost">Voir tous les posts</router-link> |
        <router-link to="/create">Créer un post</router-link> |
        <router-link to="/profil">Profil</router-link> |
        <a href="#" v-on:click="exitUser">Exit</a> 
      </div>
    </div> 
    <Header/>
  </header>

  <body class="bg-body">
    <router-view/>
  </body>

  <footer>
    <Footer/>
  </footer>

</div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
      id: ''
    }
    
  },
  mounted() {
    let idUser = localStorage.getItem('Id');
    console.log(idUser);
    this.id = idUser;
  },
  methods: {
    exitUser (){
       localStorage.removeItem('Id');
       localStorage.removeItem('token');
       localStorage.removeItem('isAdmin');
       localStorage.removeItem('email');
       location.replace(location.origin + "/signup#/signup");
       location.reload();
    }
  }
}
</script>

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
 #nav a {
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: bold;
    font-size: 1.2rem;
    color:#303030 ;
    }
      #nav a:hover{
        color:#000;
      }

    a.router-link-exact-active {
      color: #024601;
    }
.bg-body{
  background-color: #f0e8c7;
}

</style>
