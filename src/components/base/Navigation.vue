<template>
  <section>
    <v-navigation-drawer app v-model="menuTag" :right="$vuetify.rtl" permanent class="pa-5">
      <div class="d-flex align-center mb-5">
        <div>
          <v-img width="70px" :src="require('@/assets/logo.svg')"></v-img>
        </div>
        <div class="font-weight-bold text-h5">
          lumus <span class="primary--text">learn</span>
        </div>
      </div>
      <v-list>
        <v-list-item-group v-model="route">
          <template v-for="(route, i) in Routers">
            <router-link
              color="primary"
              class="text-decoration-none primary"
              :to="{ name: route.name }"
              :key="i"
              v-if="route.meta.visible"
            >
              <v-list-item :value="route.name">
                <v-list-item-icon>
                  <v-icon>
                    {{ route.meta.icon }}
                  </v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ $t(`menu.${route.meta.title}`) }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </router-link>
          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </section>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {},
})
export default class Navigation extends Vue {

  route = "";
  get Routers() {
    return this.$router.options.routes;
  }
}
</script>