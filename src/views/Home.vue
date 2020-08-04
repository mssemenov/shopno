<template>
  <div id="home">
      <VueHeader/>
      <SectionAbout/>
      <SectionWorks/>
      <SectionServices/>
      <SectionTeam/>
      <SectionSays/>
      <SectionLogo/>
      <SectionContact />
      <VueFooter/>
    </div>
</template>

<script>
    import  VueHeader from "../components/header/index"
    import  SectionAbout from "../components/section/about/index"
    import  SectionWorks from "../components/section/works/index"
    import  SectionServices from "../components/section/services/index"
    import  SectionTeam from "../components/section/team/index"
    import  SectionSays from "../components/section/says/index"
    import  SectionLogo from "../components/section/logo/index"
    import  SectionContact from "../components/section/contact/index"
    import  VueFooter from "../components/footer/index"
    export default {
        components:{
            VueHeader:VueHeader,
            SectionAbout:SectionAbout,
            SectionWorks:SectionWorks,
            SectionServices:SectionServices,
            SectionTeam:SectionTeam,
            SectionSays:SectionSays,
            SectionLogo:SectionLogo,
            SectionContact:SectionContact,
            VueFooter:VueFooter,
        }
    }
</script>

<style lang="sass">

</style>