<template>
  <div>
    <div class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="8" class="box-search">
          <a-input
            v-model="keyword"
            class="input-search"
            placeholder="Search"
          />
          <a-icon type="search" class="icon-search pointer" @click="onSearch" />
        </a-col>
        <a-col :span="4" class="d-flex justify-content-end"
          ><a-button type="primary" @click="onShowModalAdd"
            >Tạo Nhóm Câu Hỏi</a-button
          ></a-col
        >
      </a-row>
    </div>
    <div v-for="item in list" :key="item.id" class="box-white">
      <a-row v-if="currentId !== item.id" type="flex" justify="space-between">
        <a-col :span="6"> {{ item.name }} </a-col>
        <a-col>
          <a-button type="link" @click="onDelete(item.id)">
            <a-icon type="delete"
          /></a-button>
          <a-button type="link" @click="onShowEdit(item)">
            <a-icon type="edit"
          /></a-button>
        </a-col>
      </a-row>
      <a-row v-else type="flex" justify="space-between">
        <a-col :span="6"><a-input v-model="currentName" /> </a-col>
        <a-col>
          <a-button @click="onResetInput"> Hủy</a-button>
          <a-button type="primary" @click="onEdit"> Cập nhật</a-button>
        </a-col>
      </a-row>
    </div>
    <div class="mt-4 d-flex justify-content-end">
      <a-pagination
        v-model="pagination.current_page"
        :total="total"
        :page-size="limit"
        show-less-items
        @change="onChangePaging"
      />
    </div>
    <ModalAdd :isShow.sync="isShowModal" @onSave="onAdd" />
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions, mapMutations } from "vuex";
import ModalAdd from "./modal/modalAdd.vue";
export default {
  name: "QuestionTag",
  components: {
    ModalAdd,
  },
  data() {
    return {
      isShowModal: false,
      currentName: "",
      currentId: null,
      keyword: "",
    };
  },
  computed: {
    ...mapFields("questionTag", {
      list: "list",
      pagination: "pagination",
      total: "pagination.total",
      limit: "pagination.limit",
    }),
  },
  mounted() {
    this.getList();
  },
  methods: {
    ...mapActions("questionTag", {
      getPaging: "getPaging",
      create: "create",
      update: "update",
      delete: "delete",
    }),
    ...mapMutations("questionTag", {
      SET_PAGINATION: "SET_PAGINATION",
    }),
    async getList(params) {
      const response = await this.getPaging(params);
      if (response?.data?.code === "SUCCESS") {
        this.list = response?.data?.data?.rows;
        this.SET_PAGINATION(response?.data?.data?.pagination);
      }
    },
    onShowEdit(item) {
      this.currentId = item.id;
      this.currentName = item.name;
    },
    onResetInput() {
      this.currentId = null;
      this.currentName = "";
    },
    async onEdit() {
      const response = await this.update({
        id: this.currentId,
        payload: {
          name: this.currentName,
        },
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Chỉnh sửa thành công",
        });
        await this.getList();
        this.onResetInput();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi chỉnh sửa",
        });
      }
    },
    async onDelete(id) {
      const response = await this.delete({
        id: id,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Xóa thành công",
        });
        await this.getList();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi xóa",
        });
      }
    },
    onShowModalAdd() {
      this.isShowModal = true;
    },
    async onAdd(data) {
      const response = await this.create(data);

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Tạo thành công",
        });
        await this.getList();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi tạo",
        });
      }
    },
    async onSearch() {
      const params = {
        name: this.keyword.trim(),
        page: 1,
        limit: this.limit,
      };
      await this.getList(params);
    },
    async onChangePaging(current) {
      const params = {
        name: this.keyword.trim(),
        page: current,
        limit: this.limit,
      };
      await this.getList(params);
    },
  },
};
</script>
