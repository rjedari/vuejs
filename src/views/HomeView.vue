<template>
  <div class="py-0">
   
    <BarSection/>
    <Dashboard />
   <Navigation  v-if="menuTag" />
   <custom-toaster/>

    
  </div>
  
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Dashboard from "../components/Dashboard.vue";
import Navigation from "../components/base/Navigation.vue";
import BarSection from "../components/base/BarSection.vue";

@Component({
  components: { Dashboard,Navigation,BarSection  },
})
export default class HomeView extends Vue {
    menuTag=false
  mounted() {
    this.$eventHub.on('openbar :show',(data:any)=>{
       this.menuTag=data.open
      
      
    })
  }
  
 
  
}
</script>
