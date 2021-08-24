<template>
  <div>
    <el-table :data="list" hover stripe>
      <el-table-column label="参数">
        <template slot-scope="{ row }">
          {{ row.query }}
        </template>
      </el-table-column>
      <el-table-column label="说明">
        <template slot-scope="{ row }">
          {{ row.desc }}
        </template>
      </el-table-column>
      <el-table-column label="类型">
        <template slot-scope="{ row }">
          {{ row.type }}
        </template>
      </el-table-column>
      <el-table-column label="可选值">
        <template slot-scope="{ row }">
          {{ row.options }}
        </template>
      </el-table-column>
      <el-table-column label="默认值">
        <template slot-scope="{ row }">
          {{ row.default }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "api",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
table {
  border-collapse: collapse; //表格的边框合并，如果相邻，则共用一个边框。
  border-spacing: 0px; //设置行与单元格边框的间距。
}
</style>