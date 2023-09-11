<template>
  <FormQuestion />
</template>

<script>
import FormQuestion from "@/components/question/formQuestion";
import { mapActions } from "vuex";
export default {
  auth: "true",
  components: {
    FormQuestion,
  },
  methods: {
    ...mapActions("question", ["resetState"]),
  },
  mounted() {
    this.resetState();
  },
};
</script>
