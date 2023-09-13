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
    goBack() {
      this.$router.back();
    },
    convertToHTML(input = "") {
      var regex = /\[(.*?)\]/g;
      var matches = input.match(regex) || [];

      for (var i = 0; i < matches.length; i++) {
        var replacement =
          "<b>" + matches[i].replace("[%", "_").replace("%]", "_") + "</b>";
        input = input.replace(matches[i], replacement);
      }
      return input;
    },
    copyText(text) {
      navigator.clipboard
        .writeText(text)
        .then(() => {
          this.$notification["success"]({
            message: "Sao chép thành công",
          });
        })
        .catch((error) => {
          this.$notification["error"]({
            message: "Lỗi sao chép",
          });
        });
    },
  },
};
