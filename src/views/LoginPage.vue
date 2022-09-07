<template>
  <section>
    <BarSection/>
    <Navigation v-if="menuTag" />
    <p class="text pa-10"></p>
    <LoginForm/>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LoginForm from "../components/LoginForm.vue";
import Navigation from "../components/base/Navigation.vue";
import BarSection from "../components/base/BarSection.vue";

@Component({
  components: {LoginForm,Navigation,BarSection},
})
export default class LoginPage extends Vue {
      menuTag=false
  mounted() {
    this.$eventHub.on('openbar :show',(data:any)=>{
       this.menuTag=data.open
      
      
    })
  }
}
</script>
<style>
.text {
  font-weight: bold;
}
</style>