<template>
  <section>
        <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon class="ma-2 "
          color="#616161"
          dark
          v-bind="attrs"
          v-on="on"
        >
      <v-icon  class="px-4 ">{{icon}}</v-icon>
          
        </v-btn>
        
      </template>
      <span>{{tool}}</span>
    </v-tooltip>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class ToolTips extends Vue {
    @Prop ()
         icon !:string
    @Prop ()
         tool !:string
    
       
       
    

}
</script>