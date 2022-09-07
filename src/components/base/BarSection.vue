<template>
  <section >
    <v-bar class="py-0 px-8" app permanent>
      <div class="d-flex justify-space-between" style="width: 100%">
        <div class="d-flex align-center">
          <v-btn elevation="2" @click="openMenue" class="ma-4" icon  plain>
            <v-icon> mdi-format-list-bulleted-square </v-icon>
          </v-btn>
          <v-icon small class="px-3" color="razi">{{
            $route.meta.icon
          }}</v-icon>
          <p class="subtitle mb-0 grey--text">
            {{ $t(`barsection.${$route.name}`) }}
          </p>
        </div>
        <div class="d-flex mx-5">
          <div>
            <v-select
              height="14px"
              v-model="language"
              item-text="text"
              item-value="value"
              label="language "
              :items="lang"
            ></v-select>
          </div>

          <ToolTips icon="mdi-bell-ring-outline " tool="notefication" />

          <v-badge
            color="error"
            offset-x="30"
            offset-y="20"
            overlap
            bordered
            :content="counte((number = '200'))"
          ></v-badge>
          <span @click="showAlert">
            <ToolTips icon="mdi-email-check-outline" tool="mail" />
          </span>
          <ToolTips icon=" mdi-magnify" tool="search" />

          <v-list-item-avatar class="">
            <img src="https://randomuser.me/api/portraits/women/81.jpg" />
          </v-list-item-avatar>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-icon class="mx-1" v-bind="attrs" v-on="on">
                mdi-menu-down
              </v-icon>
            </template>
            <v-list>
              <v-list-item v-for="(item, index) in items" :key="index">
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>
      </div>
    </v-bar>
  </section>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import ToolTips from "@/components/ToolTips.vue";

@Component({
  components: { ToolTips },
})
export default class BarSection extends Vue {
  menuTag = false;
  openMenue() {
    this.$eventHub.emit("openbar :show", {
      open: this.menuTag=!this.menuTag
   
    });
  }
  counte(number: number): number {
    if (number > 100) {
      return 99;
    } else {
      return number;
    }
  }
  items = [
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me 2" },
  ];
  lang = [
    {
      text: this.$t("menu.persian"),
      value: "fa",
    },
    {
      text: this.$t("menu.english"),
      value: "eng",
    },
  ];
  language = this.$i18n.locale;
  showAlert() {
    this.$eventHub.emit("toaster :show", {
      open: true,
      message: "email ",
      color: "info",
      timeout: 1000,
    });
  }
  @Watch("language")
  changeLange() {
    this.$vuetify.rtl = this.language === "fa";
    this.$i18n.locale = this.language;
    localStorage.setItem("lang", this.language);
    var root = document.getElementsByTagName("html")[0];
    root.className = this.language;
  }
}
</script>