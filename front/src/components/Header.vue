<template>
<div class="header">
    <div class="forum">
        <h1 class="main-title"><span class='title-size'>Groupomania forum</span><br/>
         Partager vos idées, vos envies, vos besoins </h1>
        <div>
            <img class="logo-title" src='../assets/white_logo.png' alt="Icone de Groupomania">
        </div>
   </div>
</div>
</template>

<script>

export default {
  name: 'Header',
}
</script>


<style>
.main-title{
    font-size: 1.5rem;
    color: #fff;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
.logo-title{
    width: 12rem;
}
 .header{
    background-image: url("../assets/ile.jpg");
 }
 .header-color{
     background-color: #f0e8c7;
 }
 .title-size{
     font-size: 2.1rem;
 }
</style>