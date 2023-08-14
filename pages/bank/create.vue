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
        <div class="box-white">
          <h4>Cài đặt</h4>
          <div class="mb-4">
            <h4>Điểm</h4>
            <a-input />
          </div>
          <div class="mb-4">
            <h4>Nhóm câu hỏi</h4>
            <a-select
              show-search
              placeholder="Select a person"
              option-filter-prop="children"
              class="wr-100"
              :filter-option="filterOption"
              @change="handleChange"
            >
              <a-select-option value="jack"> Jack </a-select-option>
              <a-select-option value="lucy"> Lucy </a-select-option>
              <a-select-option value="tom"> Tom </a-select-option>
            </a-select>
          </div>
          <div class="mb-4">
            <h4>Thời gian làm bài</h4>
            <a-time-picker class="wr-100" @change="onChange" />
          </div>
        </div>
      </div>
      <!-- nhiều đáp án -->
      <!-- <div class="df-8">
        <div class="box-white mb-4">
          <h4>Câu hỏi</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
        <div class="box-white mb-4">
          <h4>Đáp án</h4>
          <div class="d-flex align-items-center my-3">
            <a-checkbox @change="onChange" class="mr-3"></a-checkbox>
            <div class="mr-3">A)</div>
            <a-input placeholder="Nhập nội dung" />
            <a-button type="link"><a-icon type="close-circle" /></a-button>
          </div>
          <div class="d-flex align-items-center my-3">
            <a-checkbox @change="onChange" class="mr-3"></a-checkbox>
            <div class="mr-3">A)</div>
            <a-input placeholder="Nhập nội dung" />
            <a-button type="link"><a-icon type="close-circle" /></a-button>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <a-button type="primary">Thêm đáp án</a-button>
            <div>
              (*) Chọn <b>đáp án đúng</b> bằng cách Click vào ô vuông cạnh đáp
              án
            </div>
          </div>
        </div>
        <div class="box-white">
          <h4>Giải thích đáp án</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
      </div> -->
      <!-- Dúng sai -->
      <!-- <div class="df-8">
        <div class="box-white mb-4">
          <h4>Câu hỏi</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
        <div class="box-white mb-4">
          <h4>Đáp án</h4>
          <div class="d-flex align-items-center my-3">
            <a-radio @change="onChange" class="mr-3"></a-radio>
            <div class="mr-3">A)</div>
            <a-input placeholder="Nhập nội dung" />
            <a-button type="link"><a-icon type="close-circle" /></a-button>
          </div>
          <div class="d-flex align-items-center my-3">
            <a-radio @change="onChange" class="mr-3"></a-radio>
            <div class="mr-3">A)</div>
            <a-input placeholder="Nhập nội dung" />
            <a-button type="link"><a-icon type="close-circle" /></a-button>
          </div>
        </div>
        <div class="box-white">
          <h4>Giải thích đáp án</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
      </div> -->
      <!-- Matching -->
      <!-- <div class="df-8">
        <div class="box-white mb-4">
          <h4>Câu hỏi</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
        <div class="box-white mb-4">
          <h4>Đáp án</h4>
          <div class="d-flex g-4">
            <div class="df-1">
              <div class="d-flex align-items-center my-3">
                <div class="mr-3">1.</div>
                <a-input placeholder="Nhập nội dung" />
                <a-button type="link"><a-icon type="close-circle" /></a-button>
              </div>
              <div class="d-flex align-items-center my-3">
                <div class="mr-3">2.</div>
                <a-input placeholder="Nhập nội dung" />
                <a-button type="link"><a-icon type="close-circle" /></a-button>
              </div>
              <a-button type="primary" class="mt-3">Thêm đáp án</a-button>
            </div>
            <div class="df-1">
              <div class="d-flex align-items-center my-3">
                <div class="mr-3">A.</div>
                <a-input placeholder="Nhập nội dung" />
                <a-button type="link"><a-icon type="close-circle" /></a-button>
              </div>
              <div class="d-flex align-items-center my-3">
                <div class="mr-3">B.</div>
                <a-input placeholder="Nhập nội dung" />
                <a-button type="link"><a-icon type="close-circle" /></a-button>
              </div>
              <a-button type="primary" class="mt-3">Thêm đáp án</a-button>
            </div>
          </div>
          <h4 class="mt-5">Chọn đáp án</h4>
          <p>
            Bạn hãy chọn đáp án ở cột 2 tương ứng với mỗi câu ở cột 1 để hệ
            thống tự động chấm điểm cho ứng viên
          </p>
          <div class="d-flex justify-content-center">
            <table class="table-match">
              <tr>
                <th></th>
                <th class="text-center">A</th>
                <th class="text-center">B</th>
              </tr>
              <tr>
                <th>1</th>
                <td><a-checkbox /></td>
                <td><a-checkbox /></td>
              </tr>
              <tr>
                <th>2</th>
                <td><a-checkbox /></td>
                <td><a-checkbox /></td>
              </tr>
            </table>
          </div>
        </div>
        <div class="box-white">
          <h4>Giải thích đáp án</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
      </div> -->
      <!-- Điền từ -->
      <div class="df-8">
        <div class="box-white mb-4">
          <h4>Câu hỏi</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
          <p>
            <b>Hướng dẫn</b> Để tạo chỗ trống tại vị trí con trỏ chuột của bạn,
            hãy nhập theo định dạng sau [%Tên_chỗ_trống%]. Tên chỗ trống chỉ
            nhập số, không được nhập chữ cái và các ký tự đặc biệt
          </p>
          <p>Ví dụ: Điền đáp án vào chỗ trống</p>
          <p>Công cha như núi thái [%1%]</p>
          <p>[%2%] như nước trong nguồn chảy ra</p>
          <div class="d-flex justify-content-end">
            <a-button type="primary">Lưu và cài đặt đáp án</a-button>
          </div>
        </div>
        <div class="box-white mb-4">
          <h4>Cài đặt đáp án</h4>
          <p>- Hệ thống không phân biệt in hoa, in thường.</p>
          <p>
            - Để ghi nhận nhiều hơn một đáp án đúng, vui lòng ngăn cách các đáp
            án bằng dấu chấm phẩy
          </p>
          <div class="d-flex align-items-center my-3">
            <div class="mr-3">1</div>
            <a-input placeholder="Nhập nội dung" />
          </div>
          <div class="d-flex align-items-center my-3">
            <div class="mr-3">2</div>
            <a-input placeholder="Nhập nội dung" />
          </div>
        </div>
        <div class="box-white">
          <h4>Giải thích đáp án</h4>
          <a-textarea placeholder="Nhập nội dung" :rows="8" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "bankCreate",
  auth: "true",
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
