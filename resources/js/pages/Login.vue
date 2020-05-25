<template>
  <div class="w-full h-full flex items-center flex-col justify-center bg-gray-400">
    <div class="w-full max-w-xs">
      <ValidationObserver v-slot="{ handleSubmit }">
        <form
          @submit.prevent="handleSubmit(onHandleSubmit)"
          class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
            <ValidationProvider rules="required|email" name="Email" v-slot="{ errors }">
              <tw-input
                id="email"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                :errors="errors"
                type="text"
                placeholder="Email"
                v-model="signin.email"
              />
              <p class="text-red-500 text-xs italic" v-if="errors.length">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
            <ValidationProvider rules="required" name="Password" v-slot="{ errors }">
              <tw-input
                id="password"
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                :errors="errors"
                type="password"
                placeholder="Password"
                v-model="signin.password"
              />
              <p class="text-red-500 text-xs italic" v-if="errors.length">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >Sign In</button>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >Forgot Password?</a>
          </div>
        </form>
      </ValidationObserver>
      <p class="text-center text-gray-500 text-xs">
        Don't have an account?
        <router-link
          to="/register"
          class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        >Sign up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { TwInput } from "../components";
import { mapActions } from "vuex";

export default {
  name: "loginPage",

  components: {
    TwInput
  },

  data() {
    return {
      signin: {
        email: "",
        password: ""
      }
    };
  },

  methods: {
    ...mapActions("auth", ["login"]),
    onHandleSubmit() {
      this.login(this.signin).then(response => {
        if (response) {
          this.$router.push("/");
        }
      });
    }
  }
};
</script>