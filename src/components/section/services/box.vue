<template>
   <div class="block__services">
        <div class="box__serivces__index" v-if="!checkContent" :style="{backgroundImage:`url(${content.bg})`}" >
            <div class="box__content">
                <div class="box__data">
                    <h3 class="title__items">{{content.title }}</h3>
                    <p class="services__text">{{content.excerpt }}</p>
                    <button class="bnt__services__more" v-on:click="checkContent = true">Know More</button>
                </div>
             </div>            
        </div>



        <div class="box__serivces__subindex" v-if="checkContent">
            <div class="box__flex">
                <h3 class="title__items title__services">{{ content.title }}</h3>
                <p class="services__text">{{ content.text }}</p>
            </div>
            <button  class="bnt__close" v-on:click="checkContent = false"><img src="@/assets/img/close.svg" alt=""></button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            checkContent: false
        }
    },
    props: ["content"] 
}
</script>

<style>

</style>