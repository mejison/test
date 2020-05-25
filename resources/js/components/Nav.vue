<template>
  <header class="bg-teal-500 md:flex md:items-center md:justify-between p-4 pb-0 shadow-lg md:pb-4">
    <!-- Logo text or image -->
    <div class="flex items-center justify-between md:mb-0">
      <h1 class="leading-none text-2xl text-grey-darkest text-white">
        <div class="font-semibold text-xl tracking-tight d-flex items-center">
          <svg
            class="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
            />
          </svg>
          Tailwind CSS
        </div>
      </h1>

      <a class="text-black hover:text-orange md:hidden" href="#">
        <i class="fa fa-2x fa-bars"></i>
      </a>
    </div>
    <!-- END Logo text or image -->

    <!-- Global navigation -->
    <nav>
      <ul class="list-reset md:flex md:items-center">
        <li class="md:ml-4">
          <a
            @click.prevent="onHandleClick"
            class="border-t block no-underline hover:underline py-2 text-white md:border-none md:p-0"
            href="#"
          >Logout</a>
        </li>
      </ul>
    </nav>
    <!-- END Global navigation -->
  </header>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("auth", ["logout"]),
    onHandleClick() {
      this.logout().then(() => {
        setTimeout(() => {
          location.href = "/";
        }, 1000);
      });
    }
  }
};
</script>