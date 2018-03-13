<template>
    <div>
        <div class="paragraph">
            <h3>列固定</h3>
            <w-table :data="tableData" headerColor="#e5e7e9">
                <w-column :fixed="true" name="排序" prop="no" width="40px"></w-column>
                <w-column :fixed="true" name="姓名" prop="name" width="80px"></w-column>
                <w-column name="财富" prop="money" width="40px"></w-column>
                <w-column name="年龄" prop="age" width="40px"></w-column>
                <w-column name="财富来源" prop="from" width="100px"></w-column>
                <w-column name="备注" prop="more" width="40px"></w-column>
            </w-table>
        </div>

        <div class="paragraph">
            <h3>自定义列内容</h3>
            <w-table :data="tableData" headerColor="#e5e7e9">
                <w-column name="姓名" width="150px">
                     <template slot-scope="scope">
                        <b style="color: dodgerblue">{{scope.row.name}}</b>
                    </template>
                </w-column>
                <w-column name="年龄" width="80px" prop="age"></w-column>
                <w-column name="财富" width="80px" prop="money"></w-column>
            </w-table>
        </div>

    </div>

</template>

<script>
import { Table } from 'packages/table'
import { TableColumn } from 'packages/table-column'

export default {
  components: {
    'w-table': Table,
    'w-column': TableColumn
  },
  data() {
    return {
      tableData: [
        {
          name: '王健林/Wang Jianlin',
          money: 313,
          age: 62,
          from: '房地产',
          more: '',
          no: 1
        },
        {
          name: '马云/Jack Ma',
          money: 283,
          age: 52,
          from: '电子商务',
          more: '',
          no: 2
        },
        {
          name: '马化腾/Ma Huateng',
          money: 249,
          age: 45,
          from: '网络服务',
          more: '',
          no: 3
        },
        {
          name: '丁磊/William Ding',
          money: 173,
          age: 45,
          from: '网游',
          more: '',
          no: 4
        },
        {
          name: '王卫/Wang Wei',
          money: 159,
          age: 46,
          from: '快递',
          more: '',
          no: 5
        },
        {
          name: '王文银/Wang Wenyin',
          money: 140,
          age: 49,
          from: '采矿，铜产品',
          more: '',
          no: 6
        },
        {
          name: '李彦宏/Robin Li',
          money: 133,
          age: 48,
          from: '互联网搜索',
          more: '',
          no: 7
        },
        {
          name: '何享健/He Xiangjian',
          money: 123,
          age: 74,
          from: '家电',
          more: '',
          no: 8
        },
        {
          name: '许家印/Hui Ka Yan',
          money: 102,
          age: 58,
          from: '房地产',
          more: '',
          no: 9
        },
        {
          name: '杨惠妍/Yang Huiyan',
          money: 90,
          age: 35,
          from: '房地产',
          more: '',
          no: 10
        },
        {
          name: '何享健/He Xiangjian',
          money: 123,
          age: 74,
          from: '家电',
          more: '',
          no: 11
        },
        {
          name: '姚振华/Yao Zhenhua',
          money: 84,
          age: 47,
          from: '联合大企业',
          more: '',
          no: 12
        },
        {
          name: '张志东/Zhang Zhidong',
          money: 84,
          age: 45,
          from: '网络媒体',
          more: '',
          no: 13
        },
        {
          name: '何享健/He Xiangjian',
          money: 123,
          age: 74,
          from: '家电',
          more: '',
          no: 14
        },
        {
          name: '刘强东/Liu Qiangdong',
          money: 77,
          age: 42,
          from: '电子商务',
          more: '',
          no: 15
        }
      ]
    }
  }
}
</script>
