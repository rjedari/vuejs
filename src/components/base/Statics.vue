<template>
  <div>
    <div>
      <div elevation="0" class="mt-3">
        <v-card @click="showAlert" class="ma-4 px-5" elevation="0">
          <v-row>
            <v-col cols="2" class="static-number pa-0">{{ data.number }}</v-col>
            <v-col cols="7" class="d-flex flex-column justify-center">
              <div>{{ data.title }}</div>
              <div>
                {{ data.subtitle }}
              </div>
            </v-col>
            <v-col cols="3" class="d-flex align-center justify-center">
              <v-progress-circular
                :size="90"
                :width="10"
                :value="data.value"
                color="orange lighten-1"
              >
                {{ data.value }}%
              </v-progress-circular></v-col
            >
          </v-row>
        </v-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { statics } from "@/store/Type";
import staticData = statics.staticData;

@Component({
  components: {},
})
export default class Statics extends Vue {
  snackbar = false;
  showAlert() {
    this.$eventHub.emit("toaster :show", {
      open: true,
      message: "hi ",
      color: "amber",
      timeout: 2000,
    });
  }
  @Prop()
  data!: staticData;
}
</script>
<style scoped>
.static-number {
  font-size: 80px;
  text-align: center;
  font-weight: bold;
}
</style>