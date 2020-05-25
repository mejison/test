<template>
  <input
    :class="{'focus:outline-none border-red-500': errors.length, 'focus:shadow-outline': ! errors.length}"
    :type="type"
    :placeholder="placeholder"
    @input="onHandleInput"
    v-model="content"
  />
</template>
<script>
export default {
  name: "Input",

  props: {
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String
    },
    errors: {
      type: Array,
      default: () => []
    }
  },

  data() {
    return {
      content: this.value
    };
  },

  methods: {
    onHandleInput() {
      this.$emit("input", this.content);
    }
  }
};
</script>