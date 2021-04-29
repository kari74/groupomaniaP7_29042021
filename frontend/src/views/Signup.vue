<template>
<div class="d-flex flex-column align-items-center">
    <h2 class="text-center subtitle pt-5 pb-4">Inscription</h2>
    <p class="text-center font-italic">Inscription rapide et simple au forum !</p>
    <Inscription/>
</div>
</template>

<script>
import Inscription from '../components/Inscription'

export default {
    name: 'Signup',
    components: {
    Inscription   
    }
}
</script>


<style >
.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color:#024601;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
</style>
