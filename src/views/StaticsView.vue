<template>
  <section>
    <BarSection />
    <Navigation v-if="menuTag"  />
    <v-row>
      <v-col cols="12" md="6">
        <Cahrts
          :labels="lineChartLabels"
          chart-type="line"
          :data="lineChartLabelsData"
          :id="'lineChart'"
        />
      </v-col>

      <v-col cols="12" md="5">
        <Cahrts
          :labels="barChartLabels"
          chart-type="bar"
          :data="barChartLabelsData"
          :id="'barChart'"
        />
      </v-col>

      <v-col cols="12" md="3">
        <Cahrts
          :labels="donatChartLabels"
          chart-type="doughnut"
          :data="donatChartLabelsData"
          :id="'donatChart'"
        />
      </v-col>

      <v-col cols="12" md="3">
        <Cahrts
          :labels="bubleChartLabels"
          chart-type="polarArea"
          :data="bubleChartLabelsData"
          :id="'bubleChart'"
        />
      </v-col>

    </v-row>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "../components/base/Navigation.vue";
import BarSection from "../components/base/BarSection.vue";
import Cahrts from "../components/base/Cahrts.vue";

@Component({
  components: { Navigation, BarSection, Cahrts },
})
export default class StaticsView extends Vue {
      menuTag=false
  mounted() {
    this.$eventHub.on('openbar :show',(data:any)=>{
       this.menuTag=data.open
      
      
    })
  }
  lineChartLabelsData = [
    {
      label: " income",
      data: [90, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ];
  lineChartLabels = ["pro", "eng", "fr", "yout", "work", "workout"];
  barChartLabelsData = [
    {
      label: "My First Dataset",
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ];
  barChartLabels = ["pro", "eng", "fr", "yout", "work", "workout"];
  bubleChartLabelsData = [
    {
      label: "My First Dataset",
      data: [11, 16, 7, 3, 14],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(75, 192, 192)",
        "rgb(255, 205, 86)",
        "rgb(201, 203, 207)",
        "rgb(54, 162, 235)",
      ],
    },
  ];
  bubleChartLabels = ["pro", "eng", "fr", "yout", "work", "workout"];


  donatChartLabelsData = [{
    label: 'My First Dataset',
    data: [300, 50, 100],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)'
    ],
    hoverOffset: 4
  }]
  donatChartLabels = ["pro", "eng", "fr", "yout", "work", "workout"];
}
</script>
<style>
.text {
  font-weight: bold;
}
</style>