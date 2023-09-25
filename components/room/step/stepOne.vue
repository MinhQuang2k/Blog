<template>
  <div>
    <div class="box-white">
      <h4>Chọn đề thi</h4>
      <a-row type="flex">
        <a-col :span="8" class="box-search">
          <a-input class="input-search" placeholder="Search" />
          <a-icon type="search" class="icon-search" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select class="select" default-value="lucy" @change="selectSubject">
            <a-select-opt-group>
              <span slot="label"><a-icon type="user" />Manager</span>
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
            </a-select-opt-group>
            <a-select-opt-group label="Engineer">
              <a-select-option value="Yiminghe"> yiminghe </a-select-option>
            </a-select-opt-group>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end">
          <a-button class="mr-3" type="primary">Tiếp tục</a-button>
          <a-button>Hủy</a-button>
        </a-col>
      </a-row>
    </div>
    <a-row class="box-white" type="flex">
      <a-col><a-radio /></a-col>
      <a-col>
        <h4>Đề Test Kỹ Sư Mạng Máy Tính</h4>
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center mr-4">
            <a-icon type="calendar" class="mr-2" />
            <div>26/07/2023</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="folder" class="mr-2" />
            <div>DEF</div>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="box-white" type="flex">
      <a-col><a-radio /></a-col>
      <a-col>
        <h4>Đề Test Kỹ Sư Mạng Máy Tính</h4>
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center mr-4">
            <a-icon type="calendar" class="mr-2" />
            <div>26/07/2023</div>
          </div>
          <div class="d-flex align-items-center mr-4">
            <a-icon type="folder" class="mr-2" />
            <div>DEF</div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  name: "roomsCreate0",
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
