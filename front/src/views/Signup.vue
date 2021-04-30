<template>
<div class="inscription">
    <h2 class="text-center subtitle">Inscription</h2>
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


<style scoped lang="scss">
.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color:#024601;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
</style>