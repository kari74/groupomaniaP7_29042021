<template>
<div class="profil">
    <h2 class="text-center subtitle">Profil</h2>
    <p class="text-center font-italic">Ici, vous pouvez modifier votre pseudo ou supprimer votre compte du forum...</p>
    <Profil/>
</div>
</template>

<script>
import Profil from '../components/Profil'

export default {
    name: 'Profil',
    components: {
    Profil
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
