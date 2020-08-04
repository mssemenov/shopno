<template>
    <section class="section__index">
      <div class="conteiner">
          <div class="flex__row row__logo">
            <div class="img__logo" v-for="data in img" :key="data.id">
              <img :src="data.src" alt="">
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
        {src: require('@/assets/img/logo/SportSystem.png')},
        {src: require('@/assets/img/logo/Infunity.png')},
        {src: require('@/assets/img/logo/SportSystem.png')},
        {src: require('@/assets/img/logo/RKO.png')},
        {src: require('@/assets/img/logo/AudioPro.png')},
        {src: require('@/assets/img/logo/Infunity.png')},
        {src: require('@/assets/img/logo/SportSystem.png')},
        {src: require('@/assets/img/logo/AudioPro.png')},
        {src: require('@/assets/img/logo/AudioPro.png')},
        
      ],
    }
  },
  components:{
       
  }
}
</script>

<style lang="sass">
  @import "style"
</style>
