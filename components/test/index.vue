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
          <a-icon type="search" class="icon-search" @click="onSearch" />
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select class="select" v-model="subjectId">
            <a-select-option value=""> Tất cả các danh mục </a-select-option>
            <a-select-opt-group
              v-for="item in categories"
              :key="item.id"
              :label="item.name"
            >
              <a-select-option
                v-for="sub in item.subjects"
                :key="sub.id"
                :value="sub.id"
              >
                {{ sub.name }}
              </a-select-option>
            </a-select-opt-group>
          </a-select>
        </a-col>
        <a-col :span="5" class="pl-4">
          <a-select v-model="sortBy" class="select">
            <a-select-option
              v-for="item in LIST_SORT"
              :key="item.value"
              :value="item.value"
            >
              {{ item.text }}
            </a-select-option>
          </a-select>
        </a-col>
        <a-col :span="4" :offset="2" class="d-flex justify-content-end"
          ><a-button type="primary" @click="onOpenAddModal"
            >Tạo đề thi</a-button
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
              <div class="d-flex align-items-center">
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="calendar" class="mr-2" />
                  <div>{{ $dayjs(item.createdAt).format(DATE) }}</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="link" class="mr-2" />
                  <div>{{ item.rooms.length }} Đợt thi</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="question-circle" class="mr-2" />
                  <div>{{ item.total_questions }} Câu hỏi</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="crown" class="mr-2" />
                  <div>{{ item.total_score }} Điểm</div>
                </div>
                <div class="d-flex align-items-center mr-4">
                  <a-icon type="folder" class="mr-2" />
                  <div>{{ item.subject.name }}</div>
                </div>
              </div>
            </a-col>
            <a-col
              ><a-button type="link" @click.stop="onEditTest(item.id)">
                <a-icon type="edit"
              /></a-button>
              <a-button type="link" @click.stop="onAddRoom"
                ><a-icon type="form"
              /></a-button>
              <a-button type="link" @click.stop="onDeleteTest(item.id)">
                <a-icon type="delete" /></a-button
            ></a-col>
          </a-row>
        </template>
        <div v-for="room in item.rooms" :key="room.id" class="box-white">
          <a-row type="flex" justify="space-between">
            <a-col :span="6"
              ><h4>{{ room.name }}</h4>
              <p class="ma-0">
                {{ room.link_room_exam }}
              </p>
            </a-col>
            <a-col>
              <a-button type="link" @click="copyText(room.link_room_exam)">
                Sao chép liên kết</a-button
              >
              <a-button type="link" @click="onSettingRoom(1)">
                Cài đặt</a-button
              >
              <a-button type="primary" @click="onShowResult">
                Xem kết quả</a-button
              >
            </a-col>
          </a-row>
        </div>
        <div v-if="!item.rooms.length" class="box-white">
          <h4>Chưa có đợt thi tuyển nào được tạo ra từ đề thi này</h4>
          <a-button type="primary" @click="onAddRoom">Tạo đợt thi</a-button>
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
    <ModalAdd
      :isShow.sync="isShowModal"
      @onSave="onAdd"
      :categories="categories"
    />
  </div>
</template>

<script>
import generate from "@/mixins/generate";
import ModalAdd from "./modal/modalAdd.vue";
import { mapActions } from "vuex";
import { mapFields } from "vuex-map-fields";
import { LIST_SORT } from "@/constants/common";
import { DATE } from "@/constants/common";
export default {
  name: "Test",
  mixins: [generate],
  components: {
    ModalAdd: ModalAdd,
  },
  data() {
    return {
      LIST_SORT,
      DATE,
      isShowModal: false,
      keyword: "",
      sortBy: "recent",
      categories: [],
      subjectId: "",
    };
  },
  computed: {
    ...mapFields("test", {
      list: "list",
      pagination: "pagination",
      total: "pagination.total",
      limit: "pagination.limit",
    }),
    searchSelect() {
      return {
        sortBy: this.sortBy,
        subjectId: this.subjectId,
      };
    },
  },
  mounted() {
    this.getListCategory();
    this.getList();
  },
  watch: {
    searchSelect() {
      this.onSearch();
    },
  },
  methods: {
    ...mapActions("test", [
      "getPaging",
      "setPagination",
      "getCategory",
      "create",
      "delete",
    ]),
    async onSearch() {
      await this.getList();
    },
    async getList(data = {}) {
      const params = {
        name: this.keyword.trim(),
        page: 1,
        limit: this.limit,
        sort_by: this.sortBy,
        subject_id: this.subjectId,
        ...data,
      };
      const response = await this.getPaging(params);
      if (response?.data?.code === "SUCCESS") {
        this.list = response?.data?.data?.rows;
        this.setPagination(response?.data?.data?.pagination);
      }
    },
    async getListCategory() {
      const response = await this.getCategory();
      if (response?.data?.code === "SUCCESS") {
        this.categories = response?.data?.data;
      }
    },
    async onChangePaging(current) {
      const params = {
        page: current,
      };
      await this.getList(params);
    },
    onOpenAddModal() {
      this.isShowModal = true;
    },
    onShowResult() {},
    onSettingRoom(roomID) {
      this.$router.push(`rooms/${roomID}/edit/`);
    },
    onEditTest(roomID) {
      this.$router.push(`tests/${roomID}/edit/`);
    },
    onAddRoom() {
      this.$router.push(`rooms/create/step-0/`);
    },
    async onDeleteTest(testID) {
      const response = await this.delete({
        id: testID,
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
  },
};
</script>
