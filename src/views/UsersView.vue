<template>
  <div>
    <BarSection />
    <navigation v-if="menuTag" />
    <div>
      <div>
        <v-dialog v-model="show" v-if="show" persistent max-width="600px">
          <v-card>
            <v-card-title>
              <span class="text-h5">User Profile</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-form v-model="validation">
                  <v-text-field
                    v-model="User.first_name"
                    label="Legal first name*"
                    required
                  >
                  </v-text-field>

                  <v-text-field
                    label="Legal last name*"
                    hint="example of persistent helper text"
                    persistent-hint
                    :rules="[rules.required, ]"
                    v-model="User.last_name"
                  ></v-text-field>

                  <v-text-field
                    :rules="[rules.required, rules.isEmail]"
                    v-model="User.email"
                    label="Email*"
                  ></v-text-field>

                  <v-text-field
                    label="Password*"
                    type="password"
                    :rules="[
                      rules.required,
                      rules.mustNumber,
                      rules.lengthNumber,
                      rules.minChar
                    ]"
                    v-model="User.password"
                  >
                  </v-text-field>

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
                      v-model="User.createdAt"
                      @input="menu2 = false"
                    ></v-date-picker>
                  </v-menu>
                  <v-col v-else class="mt-2">
                    <VuePersianDatetimePicker
                      v-model="User.createdAt"
                      format="YYYY-MM-DD "
                      displayFormat="jYY-jMM-jDD "
                    />
                  </v-col>
                </v-form>
              </v-container>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="show = false">
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
               
                @click="userAdd"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>
      <v-btn @click="createAcc" color="primary" class="mx-5">
        create new acount</v-btn
      >
    </div>
    <v-card elevation="0" class="ma-5 py-3 px-6">
      <v-row>
        <v-col cols="6" class="d-flex text-body-1 align-center" md="3">
          <div class="font-weight-bold pl-10">first name</div>
        </v-col>

        <v-col cols="6" md="3" class="d-flex text-body-1 align-center">
          <div>last name</div>
        </v-col>
        <v-col class="d-flex text-body-1 align-center" cols="6" md="3">
          <div>email</div>
        </v-col>
        <v-col class="d-flex text-body-1 px-5 align-center" cols="6" md="3">
          <div>phone</div>
        </v-col>
      </v-row>
    </v-card>
    <div v-if="loading" class="d-flex flex-column align-center justify-center">
      <v-progress-circular indeterminate color="green"> </v-progress-circular>
      <span>loading</span>
    </div>

    <Users
      v-else
      v-for="(user, index) in usersParser"
      :user="user"
      :key="index"
    />
    <div>
      <v-pagination v-model="page" :length="lastPage"></v-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import BarSection from "@/components/base/BarSection.vue";
import Navigation from "@/components/base/Navigation.vue";
import VuePersianDatetimePicker from "vue-persian-datetime-picker";
import Users from "@/components/users/Users.vue";
import { Authentication } from "@/store/Type";
import User = Authentication.User;
import { Mixins } from "vue-property-decorator";
import {ValidationMixin} from "@/Mixins/ValidationMixin"


@Component({
  components: { BarSection, VuePersianDatetimePicker, Navigation, Users,  },
})
export default class UsersView extends Mixins(ValidationMixin) {
    menuTag=false
  validation = false;
  rules = {
    required: (v: any) => this.required(v) || "input is required",
    isEmail: (v: any) => this.isEmail(v) || "email is not valid",
    mustNumber: (v: any) => this.mustNumber(v) || " items must be number",
    lengthNumber: (v: any) => this.lengthNumber(v) || "not valid in your country",
    minChar: (v: any) => this.minChar(v,5) || "too short",

  };
 
  $refs!:{
    form:HTMLFormElement
  }
userAdd(){
        this.$refs.form.resetvalidation()
}
  date = new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
    .toISOString()
    .substr(0, 10);
  menu2 = false;
  show = false;
  createAcc() {
    this.show = true;
  }
  User: User = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    createdAt: "",
  };
  page = this.currrentPage;
  get currrentPage(): Array<User> {
    return this.$store.getters["User/current_page"];
  }
  @Watch("page")
  onchangePage() {
    this.$store.commit("User/setPage", this.page);
    this.getUsers();
  }

  get lastPage(): Array<User> {
    return this.$store.getters["User/last_page"];
  }
  private loading = false;
  get Users(): Array<User> {
    return this.$store.getters["User/items"];
  }
  get usersParser() {
    return this.Users.map((user: User) => {
      return {
        first_name: user.first_name || "none",
        last_name: "Ms. " + user.last_name || "none",
        avatar: user.avatar || "none",
        phone: user.phone || "none",
        email: user.email || "none",
        password: user.password || "no pass",
      };
    });
  }
  async getUsers(): Promise<void> {
    try {
      this.loading = true;
      await this.$store.dispatch("User/getUsers");
    } catch (error) {
      console.log(error);
    } finally {
      this.loading = false;
    }
  }
  mounted(): void {
    this.getUsers();
        this.$eventHub.on('openbar :show',(data:any)=>{
       this.menuTag=data.open
        })
  }
    
  
}
</script>
<style scoped>
.v-progress-circular {
  margin: 1rem;
}
</style>

function watch(arg0: string) {
  throw new Error("Function not implemented.");
}
