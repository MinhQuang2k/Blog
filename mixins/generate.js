export default {
  methods: {
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
    upperCaseAnswer(str) {
      return str.toUpperCase() + ")";
    },
    upperCase(str) {
      return str.toUpperCase();
    },
  },
};
