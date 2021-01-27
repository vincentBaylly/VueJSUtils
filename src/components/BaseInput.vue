<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <input :value="value" @input="updateValue" v-bind="$attrs" />
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: "",
    },
    value: [String, Number],
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
    <input
      :value="value"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
    />
  </div>
</template-->
<script>
// import { formFieldMixin } from "../mixins/formFieldMixin"; // import mixin
// export default {
//   mixins: [formFieldMixin], // register mixin
//   props: {
//     value: [String, Number],
//   },
//   computed: {
//     listeners() {
//       return {
//         ...this.$listeners,
//         input: this.updateValue,
//       };
//     },
//   },
// };
</script>
