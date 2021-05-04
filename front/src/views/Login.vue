<template>
<div class="connexion">
    <h2 class="text-center subtitle">Connexion</h2>
    <p class="text-center font-italic">Connectez-vous pour accéder au forum !</p>
    <Connexion/>
</div>
</template>

<script>
import Connexion from '../components/Connexion'

export default {
  name: 'Signup',
  components: {
  Connexion
    }
}
</script>


<style>
.subtitle{
    font-size: 2rem;
    font-weight: bold;
    color:#f02906;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
</style>