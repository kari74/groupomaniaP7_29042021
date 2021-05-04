<template>
<div class="mur">
    <h2 class="text-center subtitle">Le Mur</h2>
    <p class="text-center font-italic">Ici, vous pouvez lire ce que vos collèques ont écrit ou partagé...</p>
    <Post/>
</div>
</template>

<script>
import Post from '../components/Post'

export default {
    name: 'AllPost',
    components: {
    Post
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
