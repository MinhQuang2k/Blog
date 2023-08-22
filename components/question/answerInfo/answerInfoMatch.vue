<template>
  <div>
    <h4>Đáp án</h4>
    <div class="d-flex justify-content-center">
      <table class="table-match">
        <tr>
          <th></th>
          <th class="text-center">A</th>
          <th class="text-center">B</th>
        </tr>
        <tr>
          <th>1</th>
          <td><a-checkbox :disabled="true" /></td>
          <td><a-checkbox :disabled="true" /></td>
        </tr>
        <tr>
          <th>2</th>
          <td><a-checkbox :disabled="true" /></td>
          <td><a-checkbox :disabled="true" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  methods: {},
};
</script>
