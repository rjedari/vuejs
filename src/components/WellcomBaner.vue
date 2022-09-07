<template>
  <div>
    <v-card elevation="0" :color="color" class="rounded-lg ma-5" dark>
      <v-row>
        <v-col cols="8">
          <v-card-title class="text-h5 font-weight-bold">
            {{
              $t("dashboard.wellcome.hello", { name: currentUser.first_name })
            }}
          </v-card-title>
          <v-card-text class="text-body-1 font-weight-bold">{{
            $t("dashboard.wellcome.text")
          }}</v-card-text>
        </v-col>
        <v-col cols="4">
          <v-img :src="require('@/assets/imgs/WebDesignHero.png')"> </v-img>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class WellcomBaner extends Vue {
  color = "primary";

  mounted() {
    this.$eventHub.on("toaster :show", (data: any) => {
      if (this.$i18n.locale==='eng'){
              this.color = data.color;

      }else{
  this.color = "pink darken-1";

      }
    });
  }
  get currentUser(): any {
    return this.$store.getters["User/item"];
  }
}
</script>