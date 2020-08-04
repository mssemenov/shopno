<template>
    <section class="section__index">
      <div class="conteiner">
          <div class="wrapper__contact">
            <form action="" class="form__contect">
                <div class="col__contect">
                  <label class="label__contect" for="name">Name*</label>
                  <input  class="input__contect" type="text" id="name">
                </div>
                <div class="col__contect">
                  <label class="label__contect" for="subject" name="">Subject*</label>
                  <input class="input__contect" type="text" id="subject">
                </div>
                <div class="col__contect">
                  <label class="label__contect" for="email">E-mail*</label>
                  <input class="input__contect" type="text" id="email">
                </div>
                <div class="col__contect col__textarea">
                  <label class="label__contect" for="Massage">Massage*</label>
                  <textarea class="textarea___contect" name="" id="Massage"></textarea>
                </div>
                <button class="bnt__contect">SEND MESSAGE</button>
            </form>
            <div class="contect__data">
                <div class="box__contact">
                  <span class="text__adress">Adress line 1 </span>
                  <span class="text__adress">Adress line 2 </span>
                  <span class="text__adress">Phone: +548 945645 </span>
                  <span class="text__adress">  Fax: +456456 54546 </span> 
                </div>
                <div class="box__contact">
                  <span class="text__adress">  Web: www.designagency.net  </span> 
                  <span class="text__adress">   E-mail: info@designagency.net </span> 
                </div>
                <div class="img__contect"><img src="~@/assets/img/form_car.png" alt=""></div>
            </div>
          </div>
      </div>
    </section>
</template>

<script>
 
export default {
  data(){
    return{
 
    }
  },
  components:{
       
  }
}
</script>

<style lang="sass">
  @import "style"
</style>
