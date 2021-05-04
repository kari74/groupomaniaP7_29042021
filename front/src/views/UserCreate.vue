<template>
<div class="newarticle">
    <h2 class="text-center subtitle">Créer un nouvel article</h2>
    <p class="text-center font-italic">Ici, vous pouvez écrire ou partager le lien d'un article qui vous intéresse...</p>
    <CreatePost/>
</div>
</template>

<script>
import CreatePost from '../components/CreatePost'

export default {
    name: 'UserCreate',
    components: {
    CreatePost
    }
}
</script>


<style>
.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color: #f02906;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
</style>

