<template>
    <section class="section__index section__gray">
      <div class="conteiner">
        <div class="box__title">
          <h2 class="title__index">our services</h2>
          <div class="subtitle__index">Lorem ipsum dolor sit amet event landing template</div>
        </div>
        <div class="box__services">
          <ServicesBox :content="data" v-for="data in content" :key="data.id" />
        </div>
      </div>
    </section>
</template>

<script>
 import ServicesBox from "./box"
export default {
   
  data(){
    return{
      content:[
        {
          title:"Designing is The CooL LOVE FOR.", 
          text: "Lorem ipsum dolor  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse", 
          excerpt:"cillum dolore eu fugiat nulla pariatur. Excepteur  cupidatat non", 
          bg: require("@/assets/img/services/services1.png")
        }, 
        {
          title:"cool psd Design", 
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse", 
          excerpt:"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non", 
          bg: require("@/assets/img/services/services2.png")
        }, 
        {
          title: "Designing is The Cool",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse", 
          excerpt:"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          bg: require("@/assets/img/services/services3.png")
        }, 
        {
          title: "Designing is The Cool",
          text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse", 
          excerpt:"cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
          bg: require("@/assets/img/services/services4.png")
        }, 
      ]
    }
  },
  components:{
    ServicesBox: ServicesBox,
  }
}
</script>

<style lang="sass">
  @import "style"
</style>
