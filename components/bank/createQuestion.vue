<template>
  <div>
    <div class="box-white mb-4 d-flex justify-content-between">
      <a-radio-group default-value="a" button-style="solid">
        <a-radio-button value="a"> Nhiều đáp án </a-radio-button>
        <a-radio-button value="b"> Đúng Sai </a-radio-button>
        <a-radio-button value="c"> Matching </a-radio-button>
        <a-radio-button value="d"> Điền vào chỗ trống </a-radio-button>
      </a-radio-group>
      <div>
        <a-button type="primary"> Tạo câu hỏi </a-button>
        <a-button> Hủy </a-button>
      </div>
    </div>
    <div class="">
      <div class="df-4">
        <Setting />
      </div>
      <!-- nhiều đáp án -->
      <!-- <div class="df-8">
          <Question />
          <AnswerMuliti />
          <Note />
        </div> -->
      <!-- Dúng sai -->
      <!-- <div class="df-8">
          <Question />
          <AnswerBoolean/>
          <Note/>
        </div> -->
      <!-- Matching -->
      <!-- <div class="df-8">
          <Question />
          <AnswerMatch />
          <Note/>
        </div> -->
      <!-- Điền từ -->
      <div class="df-8">
        <QuestionFillWord />
        <AnswerFillWord />
        <Note />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bankCreate",
  data() {
    return {
      current: 2,
    };
  },
  methods: {
    onChange() {},
    handleChange(value) {
      console.log(`selected ${value}`);
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      );
    },
  },
};
</script>
