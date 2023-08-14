<template>
  <LoginForm />
</template>

<script>
import LoginForm from "@/components/auth/LoginForm";
export default {
  layout: "auth",
  auth: "guest",
  components: {
    LoginForm,
  },
};
</script>
