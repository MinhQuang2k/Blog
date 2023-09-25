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
            >Tạo Nhóm</a-button
          ></a-col
        >
      </a-row>
    </div>
    <a-collapse expand-icon-position="right">
      <template #expandIcon>
        <a-icon type="caret-right" :rotate="90" />
      </template>
      <a-collapse-panel v-for="item in list" :key="item.id">
        <template #header>
          <a-row type="flex" justify="space-between">
            <a-col>
              <h4>{{ item.name }}</h4>
              <b>{{ formatSubject(item.subjects) }}</b>
            </a-col>
            <a-col
              ><a-button type="link" @click="onShowModalEdit($event, item)">
                <a-icon type="edit"
              /></a-button>
              <a-button type="link" @click="onDelete(item.id)">
                <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div v-for="sub in item.subjects" :key="sub.id" class="box-white">
          <a-row
            v-if="subId !== sub.id || typeSub !== TYPE_SUB.EDIT"
            type="flex"
            justify="space-between"
          >
            <a-col :span="6"> {{ sub.name }}</a-col>
            <a-col>
              <a-button type="link" @click="onShowEditSub(sub, item.id)">
                Sửa</a-button
              >
              <a-button type="link" @click="onShowModalMoveSub(sub.id, item)">
                Di chuyển</a-button
              >
              <a-button type="link" @click="onDeleteSub(sub.id, item.id)">
                Xóa</a-button
              >
            </a-col>
          </a-row>
          <a-row v-else type="flex" justify="space-between">
            <a-col :span="6"><a-input v-model="subName" /> </a-col>
            <a-col>
              <a-button @click="onReset"> Hủy</a-button>
              <a-button type="primary" @click="onEditSub"> Cập nhật</a-button>
            </a-col>
          </a-row>
        </div>
        <div class="box-white">
          <a-button type="primary" @click="onShowModalAddSub(item)"
            >Tạo danh mục con</a-button
          >
        </div>
      </a-collapse-panel>
    </a-collapse>
    <div class="mt-4 d-flex justify-content-end">
      <a-pagination
        v-model="pagination.currentPage"
        :total="total"
        :page-size="limit"
        show-less-items
        @change="onChangePaging"
      />
    </div>
    <ModalAdd :isShow.sync="isShowAdd" @onSave="onAdd" />
    <ModalEdit
      :isShow.sync="isShowEdit"
      @onSave="onEdit"
      :value.sync="categoryName"
    />
    <ModalAddSub :isShow.sync="isShowAddSub" @onSave="onAddSub" />
    <ModalMove
      :isShow.sync="isShowMoveSub"
      @onSave="onMoveSub"
      :categoryId="categoryId"
      :categoryName="categoryName"
    />
  </div>
</template>

<script>
import ModalAdd from "./modal/modalAdd.vue";
import ModalEdit from "./modal/modalEdit.vue";
import ModalAddSub from "./modal/modalAddSub.vue";
import ModalMove from "./modal/modalMove.vue";
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { TYPE_SUB } from "~/constants/category.js";
export default {
  name: "category",
  components: {
    ModalAdd,
    ModalEdit,
    ModalAddSub,
    ModalMove,
  },
  data() {
    return {
      TYPE_SUB,
      isShowAdd: false,
      isShowEdit: false,
      isShowAddSub: false,
      isShowMoveSub: false,
      categoryName: "",
      categoryId: null,
      subName: "",
      subId: null,
      typeSub: "",
      keyword: "",
    };
  },
  computed: {
    ...mapFields("category", {
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
    ...mapActions("category", [
      "getPaging",
      "create",
      "update",
      "delete",
      "createSub",
      "updateSub",
      "deleteSub",
      "moveSub",
      "setPagination",
    ]),
    onShowModalAdd() {
      this.isShowAdd = true;
    },
    onShowModalEdit(event, data) {
      event.stopPropagation();
      this.isShowEdit = true;
      this.categoryName = data.name;
      this.categoryId = data.id;
    },
    onShowModalAddSub(data) {
      this.isShowAddSub = true;
      this.categoryId = data.id;
    },
    onShowModalMoveSub(subId, category) {
      this.isShowMoveSub = true;
      this.subId = subId;
      this.categoryName = category.name;
      this.categoryId = category.id;
      this.typeSub = TYPE_SUB.MOVE;
    },
    onShowEditSub(sub, categoryId) {
      this.typeSub = TYPE_SUB.EDIT;
      this.subId = sub.id;
      this.subName = sub.name;
      this.categoryId = categoryId;
    },
    onReset() {
      this.subId = null;
      this.subName = "";
      this.categoryId = null;
      this.categoryName = "";
      this.typeSub = "";
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
    async onEdit(data) {
      const response = await this.update({
        id: this.categoryId,
        payload: data,
      });
      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Chỉnh sửa thành công",
        });
        await this.getList();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi chỉnh sửa",
        });
      }
      this.onReset();
    },
    async onAddSub(data) {
      const response = await this.createSub({
        category_id: this.categoryId,
        ...data,
      });

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
      this.onReset();
    },
    async onEditSub() {
      const response = await this.updateSub({
        id: this.subId,
        payload: {
          category_id: this.categoryId,
          name: this.subName,
        },
      });
      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Chỉnh sửa thành công",
        });
        await this.getList();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi chỉnh sửa",
        });
      }
      this.onReset();
    },
    async onDeleteSub(id, categoryId) {
      const response = await this.deleteSub({
        id: id,
        categoryId: categoryId,
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
    async onMoveSub(data) {
      const response = await this.moveSub({
        id: this.subId,
        payload: data,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Di chuyển thành công",
        });
        await this.getList();
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi di chuyển",
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
    async getList(params) {
      const response = await this.getPaging(params);
      if (response?.data?.code === "SUCCESS") {
        this.list = response?.data?.data?.rows;
        this.setPagination(response?.data?.data?.pagination);
      }
    },
    async onChangePaging(current) {
      const params = {
        name: this.keyword.trim(),
        page: current,
        limit: this.limit,
      };
      await this.getList(params);
    },
    formatSubject(subjects) {
      return subjects.map((item) => item.name).join(", ");
    },
  },
};
</script>
