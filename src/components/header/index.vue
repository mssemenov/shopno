<template>
  <header class="header">
    <div class="conteiner">
      <div class="header__wrapper">
        <div class="nav__top">
          <div class="logo">
            <h1 class="title__logo">
              sh<span class="span__logo">o</span>pno
            </h1>
          </div>
          <navbar />
        </div>
        <div class="box__title">
          <div class="title__header">
            Say Hello to SHOPNO! <br> Agency CORPORATE SHOPNO Theme
          </div>
        </div>
        <div class="box__bnt">
          <button class="bnt__header">CONTACT US</button>
          <div class="header__img">
            <img src="@/assets/img/header_img.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import navbar from "../navbar/index"
export default {
  data(){
    return{
    }
  },
  components:{
      navbar: navbar,
  }
}
</script>

<style lang="sass">
  @import "style"
</style>
