<template>
    <section class="section__index">
      <div class="conteiner">
        <div class="box__title">
          <h2 class="title__index">featured works</h2>
          <div class="subtitle__index">Lorem ipsum dolor sit amet event landing template</div>
        </div>
        <div class="flex__row">
          <div class="box__col-3" v-for="data in img" :key="data.id" >
            <img :src="data.src" :alt="data.alt">
          </div>
        </div>
      </div>
    </section>
</template>

<script>
 
export default {
  data(){
    return{
      img:[
        {src:require('@/assets/img/works/works1.png'), alt:"worsk1"},
        {src:require('@/assets/img/works/works2.png'), alt:"worsk2"},
        {src:require('@/assets/img/works/works3.png'), alt:"worsk3"},
        {src:require('@/assets/img/works/works4.png'), alt:"worsk4"},
        {src:require('@/assets/img/works/works5.png'), alt:"worsk5"},
        {src:require('@/assets/img/works/works6.png'), alt:"worsk6"},
      ]
    }
  },
  components:{
       
  }
}
</script>

<style lang="sass">
  @import "style"
</style>
