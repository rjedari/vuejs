<template>
  <div>
    <BarSection />
    <Navigation v-if="menuTag" />

    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout class="my-5" row>
        <v-tooltip top>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              small
              plain
              class="gay---text"
              v-bind="attrs"
              v-on="on"
              color="gray"
            >
              <span>person</span>
            </v-btn>
          </template>
          <span>person</span>
        </v-tooltip>
        <v-btn small plain class="gay---text" color="gray">
          <span>title</span>
        </v-btn>
      </v-layout>
      <v-card
        flat
        class="pa-3"
        v-for="project in projects"
        :key="project.title"
      >
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs2 sm4 md2>
            <div class="right">
              <v-chip
                small
                :class="` ${project.status} white--text my-2 caption`"
                >{{ project.status }}</v-chip
              >
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>

    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
      <v-list-content>
        <v-list-title>
          {{ link.text }}
        </v-list-title>
        <v-icon>
          {{ link.icon }}
        </v-icon>
      </v-list-content>
    </v-list-item>
    <v-layout class="d-flex justify-center">    <v-expansion-panels  style="maxWidth: 700px" >
          <v-expansion-panel v-for="project in projects" :key="project">
            <v-expansion-panel-header>
              {{ project.title }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card flat> 
              {{ project.content }}

              </v-card>

            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels></v-layout>
    
    

    <v-btn plain color="pink">
    </v-btn>
    <v-btn fab depressed dark color="pink">
      <v-icon> mdi-heart</v-icon>
      <span> me</span>
    </v-btn>
    <span class="text-uppercase grey--text"
      ><span class="ml-4 font-weight-light text-uppercase grey--text"
        >This is an about page</span
      >
      <span>razi</span></span
    >
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navigation from "../components/base/Navigation.vue";
import BarSection from "../components/base/BarSection.vue";
import WellcomBaner from "../components/WellcomBaner.vue";
@Component({
  components: { Navigation, BarSection, WellcomBaner },
})
export default class LoginPage extends Vue {
  menuTag = false;
  // sortby(){
  //  this.projects.sort((a, b) => a.title:String < b.title:string )
  // }
  mounted() {
    this.$eventHub.on("openbar :show", (data: any) => {
      this.menuTag = data.open;
    });
  }
  links = [{ icon: "mdi-account-multiple-plus", text: "account", route: "/" }];
  projects = [
    {
      title: "Design a new website",
      person: "The Net Ninja",
      due: "1st Jan 2019",
      status: "ongoing",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
    },
    {
      title: "Code up the homepage",
      person: "Chun Li",
      due: "10th Jan 2019",
      status: "complete",
      content:
        "Ldipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
    },
    {
      title: "Design video thumbnails",
      person: "Ryu",
      due: "20th Dec 2018",
      status: " overdue",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
    },
    {
      title: "Create a community forum",
      person: "Gouken",
      due: "20th Oct 2018",
      status: "complete",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
    },
  ];
}
</script>
<style>
.project.complete {
  border-left: 4px solid #3cd1c2;
}
.project.ongoing {
  border-left: 4px solid #ffaa2c;
}
.project.overdue {
  border-left: 4px solid #f83e70;
}
.v-chip.complete {
  background-color: #3cd1c2 !important;
}
.v-chip.ongoing {
  background-color: #ffaa2c !important;
}
.v-chip.overdue {
  background-color: #f83e70 !important;
  align-content: center !important;
}
</style>
