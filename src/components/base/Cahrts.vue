<template>
  <div>
        <canvas :id="id"></canvas>
  
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ChartType} from "chart.js"
import Chart from "chart.js/auto"

@Component({
  components: {},
})
export default class Statics extends Vue {
    @Prop({default:'line'})
    chartType!:string
      @Prop({default:'chart'})
    id!:string
      @Prop({default:'[]'})
    labels!:Array<any> 
         @Prop({default:'[]'})
    data!:Array<any> 
            @Prop()
    options:any 
      create(chartData:any) {
    const canvas = document.getElementById(this.id) as HTMLCanvasElement;
    const config = {
      type:  this.chartType as ChartType,
      data: chartData,
      options: 
      this.options
      
    }
   new Chart(canvas,config)

  }
  mounted() {
      this.create({
        labels :this.labels,
        datasets:this.data
      })
  }
}
</script>
<style scoped>

</style>