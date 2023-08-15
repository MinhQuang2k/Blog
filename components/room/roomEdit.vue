<template>
  <div>
    <div class="box-white">
      <a-row type="flex">
        <a-col :span="8" class="box-search">
          <a-input class="input-search" placeholder="Search" />
          <a-icon type="search" class="icon-search" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select class="select" default-value="new" @change="handleChange">
            <a-select-option value="new"> Tạo gần đây </a-select-option>
            <a-select-option value="order"> A-Z </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end"
          ><a-button type="primary">Add Group Question</a-button></a-col
        >
      </a-row>
    </div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="16">
          <div class="d-flex align-items-center">
            <div class="icon-dot-green mr-3"></div>
            <div>text seach</div>
          </div>
          <a-row class="mt-3">
            <a-col :span="6" class="d-flex align-items-center"
              ><a-icon type="calendar" class="mr-2" /><span
                >Vô thời hạn</span
              ></a-col
            >
            <a-col :span="18" class="d-flex align-items-center"
              ><a-icon type="link" class="mr-2" />
              <a target="_blank"
                >https://e.testcenter.vn/t/cEZ7VHsOJFAOM1RcRyYED0F4SHIX</a
              >
            </a-col>
          </a-row>
        </a-col>
        <a-col>
          <a-button type="link"> <a-icon type="delete" /></a-button>
          <a-button type="link"> <a-icon type="edit" /></a-button>
          <a-switch default-checked @change="onChange" />
          <a-button class="ml-2" type="primary">Kết quả</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="16">
          <div class="d-flex align-items-center">
            <div class="icon-dot-green mr-3"></div>
            <div>text seach</div>
          </div>
          <a-row class="mt-3">
            <a-col :span="6" class="d-flex align-items-center"
              ><a-icon type="calendar" class="mr-2" /><span
                >Vô thời hạn</span
              ></a-col
            >
            <a-col :span="18" class="d-flex align-items-center"
              ><a-icon type="link" class="mr-2" />
              <a target="_blank"
                >https://e.testcenter.vn/t/cEZ7VHsOJFAOM1RcRyYED0F4SHIX</a
              >
            </a-col>
          </a-row>
        </a-col>
        <a-col>
          <a-button type="link"> <a-icon type="delete" /></a-button>
          <a-button type="link"> <a-icon type="edit" /></a-button>
          <a-switch default-checked @change="onChange" />
          <a-button class="ml-2" type="primary">Kết quả</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="mt-4 d-flex justify-content-end">
      <a-pagination v-model="current" :total="50" show-less-items />
    </div>
  </div>
</template>

<script>
export default {
  name: "rooms",

  data() {
    return {
      current: 2,
    };
  },
  methods: {
    onChange(checked) {
      console.log(`a-switch to ${checked}`);
    },
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
