<template>
<div>
        <div v-if="isAdmin === 'true'" class="admin">
            <h3 class="manager-title"> modérateur...</h3>
            <input placeholder="Numéro du post" v-model="idPost">
        <button class="btn btn-submit-color" v-on:click="deletePost" >Supprimer l'article</button>
    </div>
    <article class="article" v-for="(post, id) in posts" v-bind:key="id">
        <p class="text-center line"></p>
        <div class="info_publication">
            <p class="p-2" v-if="isAdmin === 'true'">N° {{post.id}}</p>
            <p class="p-2" >Date de publication : {{post.updatedAt}}</p>
        </div>
        <h3 class="title-color">{{post.title}}</h3>
        <p class="text-justify">{{post.content}}</p>  
    </article>
</div>
</template>

<script>
export default {
  name: 'Post',
  data() { 
      return {
          isAdmin: '',
          posts: [],
          idPost: ''
      }
      },
  mounted(){
      //Modérateur 
      this.isAdmin = localStorage.getItem('isAdmin');
      console.log(this.isAdmin)

      //Obtenir tous les posts
      fetch("http://localhost:3000/api/post",  {
             headers: {
                'authorization': 'bearer ' + localStorage.getItem('token')
            }})
      .then (response => response.json())
      .then(data=>this.posts = data)
  },
  methods : {
      deletePost() {
        let idPost = JSON.stringify({id: this.idPost});
            async function postForm(dataForm) {
    try {
        let response = await fetch("http://localhost:3000/api/post", {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': 'bearer ' + localStorage.getItem('token')
            },
            body: dataForm
        });
        if (response.ok) {
            let responseId = await response.json();
           console.log(responseId)
            location.reload();
        } else {
            console.error('Retour du serveur : ', response.status);
        }
    } catch (e) {
        console.log(e);
    }
}
postForm(idPost);
   }
  }}
</script>


<style scoped lang="scss">
.title-color {
    color:#024601;
}
.btn-submit-color{
    background-color: #024601;
    color:#f0e8c7;
    font-weight: bold;
        &:hover{
            font-weight:bold;
            background-color: #f0e8c7;
            color: #024601;
        }
.line{
    color:#024601;
    }
}
.manager-title{
    font-size: 1.5rem;
    color:#024601;
    font-family: Georgia, 'Times New Roman', Times, serif ;
    }
</style>