<template>
  <FormQuestion v-if="isLoading" />
</template>

<script>
import FormQuestion from "@/components/question/formQuestion";
import { mapActions } from "vuex";
export default {
  auth: "true",
  components: {
    FormQuestion,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("question", ["resetState", "getByID"]),
  },
  async mounted() {
    this.resetState();
    const id = this.$route.params.id;
    if (id) {
      await this.getByID({ id });
      this.isLoading = true;
    }
  },
};
</script>
