<template>
  <v-row justify="center">
    <v-col cols="12">
      <v-card ref="form">
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field
                ref="name"
                :model-value="currentUser.name?.firstname"
                :error-messages="errorMessages"
                label="İsim"
                placeholder="İsim"
                required
              ></v-text-field
            ></v-col>
            <v-col>
              <v-text-field
                ref="name"
                :model-value="currentUser.name?.lastname"
                :error-messages="errorMessages"
                label="Soyisim"
                required
              ></v-text-field>
            </v-col>
          </v-row>

          <v-text-field
            ref="name"
            :model-value="currentUser.email"
            :error-messages="errorMessages"
            label="Email"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            :model-value="currentUser.username"
            :error-messages="errorMessages"
            label="Kullanıcı Adı"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-text-field
            ref="name"
            :model-value="currentUser.phone"
            :error-messages="errorMessages"
            label="Telefon Numarası"
            placeholder="John Doe"
            required
          ></v-text-field>
          <v-row>
            <v-col>
              <v-text-field
                ref="name"
                :model-value="currentUser.address?.city"
                :error-messages="errorMessages"
                label="Bulunduğu İl"
                placeholder="Bulunduğu İl"
                required
              ></v-text-field
            ></v-col>
            <v-col>
              <v-text-field
                ref="name"
                :model-value="currentUser.address?.zipcode"
                :error-messages="errorMessages"
                label="Posta Kodu"
                required
              ></v-text-field>
            </v-col>
          </v-row>
          <v-text-field
            ref="name"
            :model-value="currentUser.address?.street"
            :error-messages="errorMessages"
            label="Açık Adress"
            required
          ></v-text-field>
        </v-card-text>
        <v-divider class="mt-12"></v-divider>
        <v-card-actions>
          <v-btn variant="text"> Cancel </v-btn>
          <v-spacer></v-spacer>
          <v-slide-x-reverse-transition>
            <v-tooltip v-if="formHasErrors" location="left">
              <template v-slot:activator="{ on, attrs }">
                <v-btn icon class="my-0" v-bind="attrs" v-on="on">
                  <v-icon>mdi-refresh</v-icon>
                </v-btn>
              </template>
              <span>Refresh form</span>
            </v-tooltip>
          </v-slide-x-reverse-transition>
          <v-btn color="primary" variant="text" @click="updateUser">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script lang="ts">
import { useToast } from "vue-toastification";
const toast = useToast();
import { defineComponent } from "vue";
import axios from "axios";
export default defineComponent({
  name: "UserInformation",
  data: () => ({
    errorMessages: "",
    body: {} as any,
    users: [] as any,
    currentUser: {} as any,
    formHasErrors: false,
    updatedUser: null,
    userId: 0 as any,
  }),
  methods: {
    async fetchUsers() {
      try {
        const response = await axios.get("https://fakestoreapi.com/users");
        this.users = response.data;

        // localStorage'dan kullanıcı adını al
        const localStorageUsername = localStorage.getItem("username");

        // localStorage'daki kullanıcı adını users dizisinde ara
        if (localStorageUsername) {
          this.currentUser = this.users.find(
            (user: any) => user.username === localStorageUsername
          );
          this.userId = this.currentUser.id;
          console.log(this.currentUser, "current");
          if (!this.currentUser) {
            console.log("User not found");
          }
        } else {
          console.log("No username found in localStorage");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    },
    async updateUser() {
      try {
        console.log(this.userId, "userId");
        const response = await fetch(
          `https://fakestoreapi.com/users/${this.userId}`,
          {
            method: "PUT",
            body: JSON.stringify({
              email: "John@gmail.com",
              username: "johnd",
              password: "m38rmF$",
              name: {
                firstname: "John",
                lastname: "Doe",
              },
              address: {
                city: "kilcoole",
                street: "7835 new road",
                number: 3,
                zipcode: "12926-3874",
                geolocation: {
                  lat: "-37.3159",
                  long: "81.1496",
                },
              },
              phone: "1-570-236-7033",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to update user.");
        }

        this.updatedUser = await response.json();
        toast.success("Değişiklik Kaydedildi");

        console.log(this.updatedUser, "sss");
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.fetchUsers();
  },
});
</script>
