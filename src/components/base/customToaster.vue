<template>
  <section>
      <div>
      <v-snackbar v-model="snackbar" :timeout="timeout" :color="color ">
        {{ message}}

        <template v-slot:action="{ attrs }">
          <v-btn color="pink" text icon  v-bind="attrs" @click="snackbar = false">
            <v-icon color="black">mdi-close</v-icon>
          </v-btn>
        </template>
      </v-snackbar>
    </div>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class customToaster extends Vue {
  snackbar = false;
  message=''
  color="error"
   timeout= 1000

  mounted() {
    this.$eventHub.on('toaster :show',(data:any)=>{
       this.snackbar=data.open
       this.message=data.message 
       this.color=data.color
       this.timeout=data.timeout
if (this.$i18n.locale==='eng'){
              this.color = data.color;

      }else{
  this.color = "pink darken-1";

      }
      
    })
  }
 
}
</script>