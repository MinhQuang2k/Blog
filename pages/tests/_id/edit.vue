<template>
  <TestEdit v-if="isLoading" />
</template>

<script>
import TestEdit from "@/components/test/testEdit";
import { mapActions } from "vuex";
export default {
  auth: "true",
  components: {
    TestEdit,
  },
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    ...mapActions("testEdit", ["getByID"]),
  },
  async mounted() {
    const id = this.$route.params.id;
    if (id) {
      await this.getByID({ id });
      this.isLoading = true;
    }
  },
};
</script>
