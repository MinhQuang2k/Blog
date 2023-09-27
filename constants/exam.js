export const TYPE_EXAM = {
  ONE_QUESTION_PAGE: 1,
  ALL_QUESTION_PAGE: 2,
};
export const LIST_TYPE_EXAM = [
  {
    value: TYPE_EXAM.ONE_QUESTION_PAGE,
    text: "Hiển thị một câu hỏi trên một trang",
  },
  {
    value: TYPE_EXAM.ALL_QUESTION_PAGE,
    text: "Hiển thị tất cả các câu hỏi trên một trang",
  },
];

export const MORE = {
  PRINT: 1,
  EXPORT: 2,
  DELETE: 3,
};

export const ADD_QUESTION = {
  BY_HAND: 1,
  MY_BANK: 2,
  QUESTION_BANK: 3,
  EXCEL_FILE: 4,
};

export const REQUIRE = {
  IS_REQUIRE_PHONE: 1,
  IS_REQUIRE_EMAIL: 2,
  IS_REQUIRE_FULLNAME: 3,
  IS_REQUIRE_IDENTIFY_CODE: 4,
  IS_REQUIRE_GROUP: 5,
  IS_REQUIRE_POSITION: 6,
};

export const SCORE_SHOWN = {
  IS_SCORE_SHOWN: 1,
  IS_PERCENT_SHOWN: 2,
};

export const RESULT_SHOWN = {
  IS_DETAIL_RESULT_SHOWN: 1,
  IS_PASSED_RESULT_SHOWN: 2,
};

export const TYPE_CODE = {
  NO_CODE: 0,
  ONE_CODE: 1,
  LIST_CODE: 2,
};
