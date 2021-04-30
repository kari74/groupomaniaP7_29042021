<template>
<div class="footer">
      <a class="mention" href='#'>Mentions légales</a>
      <a class="mails" href='mailto:forumetsgroupomania@contact.com'>Contact</a>
  <div class="site">
      <p>Site internet créé par CONNECT-E</p>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>


<style>
a{
  color:#fff;
}
a:hover{
      text-decoration: underline;
      font-weight: bold;
    }

.footer-bg{
  background-image: url("../assets/ile.jpg");
}
.text-company{
  font-size: 0.5rem;
  color:#fff;
}
</style>