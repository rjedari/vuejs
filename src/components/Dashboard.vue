<template>
  <section>
    <v-layout wrap row justify-space-between>
      <v-flex xs12 md8>
        <v-flex>
          <WellcomBaner />
          <div style="width: 100%">
            <v-card-title class="d-flex align-baseline justify-between">
              <span class="font-h5 font-weight-bold"> new aplication</span>

              <v-hover v-slot="{ hover }">
                <v-btn text color="transparent"
                  ><span
                    class="text-caption black--text"
                    :class="
                      hover
                        ? 'text-decoration-underline primary--text'
                        : 'text-decoration-none'
                    "
                    >show deateils</span
                  ></v-btn
                >
              </v-hover>
            </v-card-title>
          </div>
          <div style="width: 100%" class="static-section">
            <Statics
              v-for="(item, index) in staticData"
              :data="item"
              :key="index"
            /></div
        ></v-flex>
      </v-flex>
      <v-flex xs12 md3>
        <v-layout   style="width:350px" class="d-flex column align-center   justify-end">
            <v-date-picker
                elevation="0"
                
                width="350px"
                height="200px"
                color="primary"
                no-title
                class="border-none "
                v-model="picker"
              ></v-date-picker>
           
               <v-card elevation="0" class="mt-3" width="350">
                <v-card-title class="d-flex align-baseline justify-between">
                  new aplication
                  <v-hover v-slot="{ hover }">
                    <v-btn text color="transparent"
                      ><span
                        class="text-caption black--text"
                        :class="
                          hover
                            ? 'text-decoration-underline primary--text'
                            : 'text-decoration-none'
                        "
                        >show deateils</span
                      ></v-btn
                    >
                  </v-hover>
                </v-card-title>

                <v-card-text class="pa-0">
                  <v-list two-line>
                    <template v-for="item in items">
                      <v-subheader
                        v-if="item.header"
                        :key="item.header"
                        v-text="item.header"
                      ></v-subheader>

                      <v-list-item v-else :key="item.title">
                        <v-list-item-avatar>
                          <v-img :src="item.avatar"></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                          <v-list-item-title
                            class="d-flex flex-row justify-between"
                          >
                            <div>{{ item.title }}</div>
                            <div>
                              <button class="ma-1">
                                <v-avatar color="indigo  lighten-2" size="25">
                                  <v-icon dark small>
                                    mdi-account-circle
                                  </v-icon>
                                </v-avatar>
                              </button>
                              <button class="ma-1">
                                <v-avatar color="error lighten-2" size="25">
                                  <v-icon dark small>
                                    mdi-phone-outline
                                  </v-icon>
                                </v-avatar>
                              </button>
                              <button class="ma-1">
                                <v-avatar color="success lighten-2" size="25">
                                  <v-icon dark small>
                                    mdi-message-processing
                                  </v-icon>
                                </v-avatar>
                              </button>
                            </div></v-list-item-title
                          >

                          <v-list-item-subtitle v-html="item.subtitle">
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </template>
                  </v-list>
                </v-card-text>
              </v-card>

          
         
          
        </v-layout>
      </v-flex>
    </v-layout>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import WellcomBaner from "./WellcomBaner.vue";
import Statics from "./base/Statics.vue";
import { statics } from "@/store/Type";
import staticData = statics.staticData;
@Component({
  components: { WellcomBaner, Statics },
})
export default class Dashboard extends Vue {
  picker = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  items = [
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
      title: "Brunch this weekend?",
      subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
    },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      title: "Summer BBQ ",
      subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
    },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      title: "Oui oui",
      subtitle: `<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?`,
    },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/5.jpg",
      title: "Recipe to try",
      subtitle: `<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.`,
    },
  ];
  staticData: Array<staticData> = [
    {
      number: 1,
      title: "razi",
      subtitle: "she is a hero",
      value: 30,
    },
    {
      number: 2,
      title: "razi",
      subtitle: "she is a hero",
      value: 65,
    },
    {
      number: 3,
      title: "razi",
      subtitle: "she is a hero",
      value: 80,
    },
    {
      number: 4,
      title: "razi",
      subtitle: "she is a hero",
      value: 100,
    },
  ];
}
</script>

<style>
.static-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}
</style>