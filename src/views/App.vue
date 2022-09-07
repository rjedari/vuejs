<template>
  <v-app class="  app-background">
    <v-main class="mx-15">
      <custom-toaster/>
      <router-view  />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import customToaster from "@/components/base/customToaster.vue";
@Component({
  components: {customToaster},
})
export default class App extends Vue {

  async getUser(){
    await this.$store.dispatch('User/getUser')
  }
  mounted() {
    this.getUser()
    if(localStorage.getItem('lang')){
     this.$i18n.locale = String(localStorage.getItem('lang'))
    this.$vuetify.rtl = this.$i18n.locale==='fa';

        var root =document.getElementsByTagName('html')[0]
    root.className=this.$i18n.locale; 
    }else{
     localStorage.setItem('lang',this.$i18n.locale)
    }
  }
}
</script>
<style lang="scss">
.app-background {
  background-color: var(--v-backgroung-base) !important;
}

</style>