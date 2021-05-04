<template>
<div class="header">
    <div class="forum">
        <h1 class="main-title">Groupomania forum<br/>
         Partager vos idées, vos envies, vos besoins </h1>
        <div>
            <img src='../assets/icon-left-font-monochrome-black.png' alt="Icone de Groupomania">
        </div>
 
   </div>
</div>
</template>

<script>

export default {
  name: 'Header',
}
</script>


<style >
.header{
    background: slategrey;
}
.main-title{
    font-size: 1.5rem;
    color:black;
    font-family: Georgia, 'Times New Roman', Times, serif ;
}
.logo-title{
    width: 12rem;
}
 .bg-header{
    background-image: url("../assets/icon-left-font-monochrome-white.png");
 }
 .bg-header-color{
     background-color: #f0e8c7;
 }
 .title-size{
     font-size: 2.1rem;
 }
</style>