<template>
  <section>
    <v-dialog v-model="show" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="User.first_name"
                  label="Legal first name*"
                  required
                >
                </v-text-field>
              </v-col>

              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                  v-model="User.last_name"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  v-model="User.email"
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                  v-model="User.password"
                >
                </v-text-field>
              </v-col>
              <v-col>
                <v-menu
                  v-if="$i18n.locale === 'eng'"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Picker without buttons"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                   
                  ></v-date-picker>
                </v-menu>
  <v-col v-else class="mt-2">

                <VuePersianDatetimePicker      format="YYYY-MM-DD " 
    displayFormat="jYY-jMM-jDD "/>
  </v-col>
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="[
                    'Skiing',
                    'Ice hockey',
                    'Soccer',
                    'Basketball',
                    'Hockey',
                    'Reading',
                    'Writing',
                    'Coding',
                    'Basejump',
                  ]"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="show = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="show = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-card elevation="0" class="ma-5 py-3 px-6">
      <v-row>
        <v-col cols="6" class="d-flex text-body-1 align-center" md="3">
          <v-avatar>
            <img :src="User.avatar" :alt="User.first_name" />
          </v-avatar>
          <div class="font-weight-bold px-5">{{ User.first_name }}</div>
        </v-col>

        <v-col cols="6" md="3" class="d-flex text-body-1 align-center">
          <div>{{ User.last_name }}</div>
        </v-col>
        <v-col class="d-flex text-body-1 align-center" cols="6" md="3">
          <div>{{ User.email }}</div>
        </v-col>
        <v-col class="d-flex text-body-1 px-5 align-center" cols="6" md="2">
          <div>{{ User.phone }}</div>
        </v-col>
        <v-col class="d-flex text-body-1 px-5 align-center" cols="6" md="1">
          <v-btn icon color="primary" @click="openDialog">
            <v-icon class="mdi-circle-edit-outline"
              >mdi-circle-edit-outline</v-icon
            ></v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </section>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Authentication } from "@/store/Type";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";

import User = Authentication.User;
@Component({
  components: { VuePersianDatetimePicker, },
})
export default class Users extends Vue {
  date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  menu2 = false;
  @Prop()
  User!: User;
  dialog = false;
  show = false;
  openDialog() {
    this.show = true;
  }
}
</script>