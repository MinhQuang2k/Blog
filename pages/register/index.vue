<template>
  <RegisterForm />
</template>

<script>
import RegisterForm from "@/components/auth/RegisterForm";
export default {
  layout: "auth",
  auth: "guest",
  components: {
    RegisterForm,
  },
};
</script>
