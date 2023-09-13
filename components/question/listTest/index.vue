<template>
  <div class="mt-4">
    <h4>Các đề thi đang sử dụng câu hỏi này</h4>
    <div v-for="(item, index) in tests" :key="index">
      {{ index + 1 }}) <a class="ml-2">{{ item.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListTest",
  props: {
    tests: Array,
    default: () => [],
  },
};
</script>
