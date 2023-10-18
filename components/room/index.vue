<template>
  <div>
    <div class="box-white">
      <a-row type="flex">
        <a-col :span="8" class="box-search">
          <a-input
            v-model="keyword"
            class="input-search"
            placeholder="Search"
          />
          <a-icon type="search" class="icon-search" @click="onSearch" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select class="select" v-model="sortBy">
            <a-select-option
              v-for="item in LIST_SORT"
              :key="item.value"
              :value="item.value"
            >
              {{ item.text }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="7" class="d-flex justify-content-end"
          ><a-button type="primary" @click="onAddRoom"
            >Thêm đợt thi</a-button
          ></a-col
        >
      </a-row>
    </div>
    <div v-for="item in list" :key="item.id" class="box-white">
      <a-row type="flex" justify="space-between">
        <a-col :span="16">
          <div class="d-flex align-items-center">
            <div
              class="mr-3"
              :class="{
                'icon-dot-green': item.is_active,
                'icon-dot-gray': !item.is_active,
              }"
            ></div>
            <div>{{ item.name }}</div>
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
                >http://localhost:3000/{{ item.link_room_id }}</a
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
      <a-pagination
        v-model="pagination.currentPage"
        :total="total"
        :page-size="limit"
        show-less-items
        @change="onChangePaging"
      />
    </div>
  </div>
</template>

<script>
import { mapFields } from "vuex-map-fields";
import { mapActions } from "vuex";
import { LIST_SORT } from "@/constants/common";
export default {
  name: "rooms",
  data() {
    return {
      LIST_SORT,
      keyword: "",
      sortBy: "recent",
    };
  },
  computed: {
    ...mapFields("room", {
      list: "list",
      pagination: "pagination",
      total: "pagination.total",
      limit: "pagination.limit",
    }),
  },
  mounted() {
    this.getList();
  },
  watch: {
    sortBy() {
      this.onSearch();
    },
  },
  methods: {
    ...mapActions("room", ["getPaging", "setPagination"]),
    onAddRoom() {
      this.$router.push({ path: "/rooms/create/" });
    },
    async onSearch() {
      await this.getList();
    },
    async getList(data = {}) {
      const params = {
        content: this.keyword.trim(),
        page: 1,
        limit: this.limit,
        sort_by: this.sortBy,
        ...data,
      };
      const response = await this.getPaging(params);
      if (response?.data?.code === "SUCCESS") {
        this.list = response?.data?.data?.rows;
        this.setPagination(response?.data?.data?.pagination);
      }
    },
    async onChangePaging(current) {
      const params = {
        page: current,
      };
      await this.getList(params);
    },
    async onDelete(roomId) {
      const response = await this.delete({
        id: roomId,
      });

      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Xóa thành công",
        });
        const params = {
          page: this.pagination.currentPage,
        };
        await this.getList(params);
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi xóa",
        });
      }
    },
    async onUpdate(roomId) {
      const response = await this.update({ id: roomId });
      if (response?.data?.code === "SUCCESS") {
        this.$notification["success"]({
          message: "Cập nhật thành công",
        });
        const params = {
          page: this.pagination.currentPage,
        };
        await this.getList(params);
      } else {
        this.$notification["error"]({
          message: "Lôĩ khi cập nhật",
        });
      }
    },
  },
};
</script>
