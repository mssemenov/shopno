<template>
    <section class="section__index">
      <div class="conteiner">
        <div class="box__title">
          <h2 class="title__index">small team</h2>
          <div class="subtitle__index">Lorem ipsum dolor sit amet event landing template</div>
        </div>
        <div class="flex__row">
          <div class="box__col-3 col__team" v-for="data in data" :key="data.id" >
            <img :src="data.src" :alt="data.alt">
            <div class="team__content">
              <div class="col__content">
                <div class="row__team">
                  <h3 class="title__team">{{ data.name }}</h3>
                  <div class="desc__team"> {{ data.dol }} </div>
                </div>
                <p class="text__team">{{ data.text }} </p>
              </div>
                <ul class="nav__cosial">
                  <a href="#"  v-for="link in data.links" :key="link.id" class="link__cosial" v-html="link.name"></a>
                </ul>
              </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
 
export default {
  data(){
    return{
      data:[
        {
          links:[
            {name: `&#xf09a;`,},
            {name:"&#xf099;",},
            {name:"&#xf17d;",},
            {name:"&#xf003;",},
          ],
          src:require('@/assets/img/team/team1.png'), 
          alt:"worsk1",
          name: "AL RAYHAN",
          dol: " UI Designer",
          text: "Lorem Ipsum is not simply is an action designer random text it has roots in a piece."
        },
        {
          links:[
            {name: `&#xf09a;`,},
            {name:"&#xf099;",},
            {name:"&#xf17d;",},
            {name:"&#xf003;",},
          ],
          src:require('@/assets/img/team/team2.png'), 
          alt:"worsk2",
          name: "AL RAYHAN",
          dol: " UI Designer",
          text: "Lorem Ipsum is not simply is an action designer random text it has roots in a piece."
        },
        {
          links:[
            {name: `&#xf09a;`,},
            {name:"&#xf099;",},
            {name:"&#xf17d;",},
            {name:"&#xf003;",},
          ],
          src:require('@/assets/img/team/team3.png'), 
          alt:"worsk1",
          name: "AL RAYHAN",
          dol: " UI Designer",
          text: "Lorem Ipsum is not simply is an action designer random text it has roots in a piece."
        },
        {
          links:[
            {name: `&#xf09a;`,},
            {name:"&#xf099;",},
            {name:"&#xf17d;",},
            {name:"&#xf003;",},
          ],
          src:require('@/assets/img/team/team3.png'), 
          alt:"worsk4",
          name: "AL RAYHAN",
          dol: " UI Designer",
          text: "Lorem Ipsum is not simply is an action designer random text it has roots in a piece."
        },
        {
          links:[
            {name: `&#xf09a;`,},
            {name:"&#xf099;",},
            {name:"&#xf17d;",},
            {name:"&#xf003;",},
          ],
          src:require('@/assets/img/team/team5.png'), 
          alt:"worsk4",
          name: "AL RAYHAN",
          dol: " UI Designer",
          text: "Lorem Ipsum is not simply is an action designer random text it has roots in a piece."
        },
        {
          links:[
            {name: `&#xf09a;`,},
            {name:"&#xf099;",},
            {name:"&#xf17d;",},
            {name:"&#xf003;",},
          ],
          src:require('@/assets/img/team/team6.png'), 
          alt:"worsk4",
          name: "AL RAYHAN",
          dol: " UI Designer",
          text: "Lorem Ipsum is not simply is an action designer random text it has roots in a piece."
        },
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
