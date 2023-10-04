<template>
  <v-card class="mx-auto rounded-lg py-10 px-8" width="100%" max-width="380">
    <base-logo />
    <v-card-item>
      <base-heading :class="['text-center', 'mb-8']">
        <h2 class="text-primary">Log In to Dashboard Kit</h2>
        <p>Enter your email and password</p>
      </base-heading>
    </v-card-item>
    <v-form ref="form" v-model="isValid" @submit.prevent="submitForm">
      <label
        for="email"
        class="text-grey-lighten-2 text-uppercase font-weight-bold text-caption d-inline-block mb-1"
        >email</label
      >
      <v-text-field
        class="rounded-lg"
        density="compact"
        placeholder="Email address"
        variant="outlined"
        id="email"
        v-model.trim="userData.email"
        :rules="[rules.email]"
        validate-on="blur"
      />
      <label
        for="password"
        class="text-grey-lighten-2 text-uppercase font-weight-bold text-caption d-inline-block mb-1"
        >Password</label
      >
      <v-text-field
        class="rounded-lg"
        :append-inner-icon="checkPassword"
        :type="checkVisibility"
        :rules="[rules.password]"
        density="compact"
        placeholder="Enter your password"
        variant="outlined"
        @click:append-inner="showPassword"
        id="password"
        v-model.trim="userData.password"
        validate-on="blur"
      />
      <v-card-actions class="pa-0 mb-8">
        <v-btn
          class="bg-blue text-capitalize py-6"
          block
          variant="elevated"
          rounded="lg"
          type="submit"
        >
          Log In
        </v-btn>
      </v-card-actions>
      <sign-up-link />
    </v-form>
  </v-card>
</template>

<script setup>
// imports
import { ref, watch, computed } from "vue";
import BaseLogo from "@/components/BaseLogo.vue";
import BaseHeading from "@/components/BaseHeading.vue";
import SignUpLink from "@/components/SignUpLink.vue";
import { useUserStore } from "@/store/UserStore";

// variables
const loginStore = useUserStore();
let visible = ref(false);
let isValid = ref(false);
const userData = ref({
  email: null,
  password: null,
});

const rules = ref({
  email: (v) => !!(v || "").match(/@/) || "Please enter a valid email",
  password: (v) =>
    !!(v || "").match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/) ||
    "Password must contain minimum six characters and at least one letter and one number",
});

// methods
const showPassword = () => (visible.value = !visible.value);
const submitForm = () => {
  console.log(userData);
  return loginStore.userAuthentication(userData.value);
};

// computed
const checkPassword = computed(() =>
  visible.value ? "fa-solid fa-eye" : "fa-solid fa-eye-slash"
);

const checkVisibility = computed(() => (visible.value ? "text" : "password"));
const checkFormValidity = computed(() => isValid);
</script>

<style lang="scss" scoped>
</style>