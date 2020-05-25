<template>
  <div>
    <tw-nav />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import { TwNav } from "../components";

export default {
  name: "PrivateLayout",

  components: {
    TwNav
  }
};
</script>