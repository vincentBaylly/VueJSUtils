<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option.id"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: [String, Number],
    label: String,
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>
<!--template>
  <div>
    <label v-if="label">{{ label }}</label>
    <select
      :value="value"
      @change="updateValue"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <option
        v-for="option in options"
        :value="option"
        :key="option.id"
        :selected="option === value"
        >{{ option }}</option
      >
    </select>
  </div>
</template-->
<script>
// import { formFieldMixin } from "../mixins/formFieldMixin"; // import mixin
// export default {
//   mixins: [formFieldMixin], // register mixin
//   props: {
//     options: {
//       type: Array,
//       required: true,
//     },
//     value: [String, Number],
//   },
// };
</script>
