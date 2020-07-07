<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    v-model="email"
                    label="Login"
                    name="login"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>

                  <v-text-field
                    v-model="password"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="loginWithMicrosoft">Microsoft</v-btn>
                <v-btn color="primary" @click="loginWithGmail">Google</v-btn>
                <v-btn color="primary" @click="loginWithFacebook">Facebook</v-btn>
                <v-btn color="primary" @click="login">Login</v-btn>
                <v-btn color="secondary" @click="register">Register</v-btn>
                <v-btn color="red" @click="resetPassword">Reset</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import firebase from "firebase";
import "firebase/auth";
import { db } from "../main";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: ""
    };
  },
  methods: {
    async register() {
      try {
        const user = await firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "DataTable" });
      } catch (err) {
        console.log(err);
      }
    },
    async login() {
      try {
        const user = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        console.log(user);
        this.$router.replace({ name: "DataTable" });
      } catch (err) {
        console.log(err);
        if (err.code == "auth/invalid-email") {
          alert("Please Fill Your Email");
        } else if (err.code == "auth/wrong-password") {
          alert("Wrong Password");
        } else {
        }
      }
    },

    resetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          alert("Password Reset Email Sent!");
        });
    },

    async loginWithFacebook() {
      let provider = new firebase.auth.FacebookAuthProvider();

      try {
        let user = await firebase.auth().signInWithPopup(provider);
        console.log(user);
        this.$router.replace({ name: "DataTable" });
      } catch (err) {
        console.log(err);
        if (err.code == "auth/invalid-email") {
          alert("Please Fill Your Email");
        } else if (err.code == "auth/wrong-password") {
          alert("Wrong Password");
        } else {
        }
      }
    },

    async loginWithGmail() {
      let provider = new firebase.auth.GoogleAuthProvider();

      try {
        let user = await firebase.auth().signInWithPopup(provider);
        console.log(user);
        this.$router.replace({ name: "DataTable" });
      } catch (err) {
        console.log(err);
        if (err.code == "auth/invalid-email") {
          alert("Please Fill Your Email");
        } else if (err.code == "auth/wrong-password") {
          alert("Wrong Password");
        } else {
        }
      }
    },

    async loginWithMicrosoft() {
      let provider = new firebase.auth.OAuthProvider("microsoft.com");

      try {
        let user = await firebase.auth().signInWithPopup(provider);
        console.log(user);
        this.$router.replace({ name: "DataTable" });
      } catch (err) {
        console.log(err);
        if (err.code == "auth/invalid-email") {
          alert("Please Fill Your Email");
        } else if (err.code == "auth/wrong-password") {
          alert("Wrong Password");
        } else {
        }
      }
    }
  }
};
</script>
