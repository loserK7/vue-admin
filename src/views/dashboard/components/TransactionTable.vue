<template>
  <el-table :data="items" style="width: 100%;padding-top: 15px;">
    <el-table-column label="Order_No" min-width="200">
      <template slot-scope="scope">
        {{ scope.row.order_no | orderNoFilter }}
      </template>
    </el-table-column>
    <el-table-column label="Price" width="195" align="center">
      <template slot-scope="scope">
        ¥{{ scope.row.price  }}
      </template>
    </el-table-column>
    <el-table-column label="Status" width="100" align="center">
      <template slot-scope="{row}">
        <el-tag :type="row.status | statusFilter">
          {{ row.status }}
        </el-tag>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          'order_no': 'fc5CDD70-1cAA-4e33-Fccd-841172a3c86c',
          'timestamp': 663929622169,
          'username': 'Eric Taylor',
          'price': 14244.92,
          'status': 'success'
        }, {
          'order_no': 'F9Bd8d8e-0c78-FaF4-62c2-AeF1e98FE692',
          'timestamp': 663929622169,
          'username': 'Barbara Martin',
          'price': 3068,
          'status': 'success'
        }, {
          'order_no': '91aBB3Ad-D9CA-3B10-AF39-8f148b66DA9e',
          'timestamp': 663929622169,
          'username': 'Sarah Wilson',
          'price': 1413,
          'status': 'pending'
        }, {
          'order_no': 'F0eAbd76-57cA-7b4A-AEB6-DfdC6EEABee5',
          'timestamp': 663929622169,
          'username': 'Jennifer Clark',
          'price': 14099,
          'status': 'pending'
        }, {
          'order_no': '755f3eE0-Fd17-558E-eAF0-72fEb62ebe7C',
          'timestamp': 663929622169,
          'username': 'Lisa Thompson',
          'price': 10056.2,
          'status': 'pending'
        }, {
          'order_no': '4cAA7d46-4490-dB62-ACFb-3321932CcC92',
          'timestamp': 663929622169,
          'username': 'Paul Thompson',
          'price': 12893.8,
          'status': 'pending'
        }, {
          'order_no': 'b5Ec3bc2-22Bc-EC0e-BFAc-e5DCa45aD8cd',
          'timestamp': 663929622169,
          'username': 'James Wilson',
          'price': 1112.3,
          'status': 'success'
        }, {
          'order_no': '25Cf3F4d-eCED-da77-7538-3c5EC64DF328',
          'timestamp': 663929622169,
          'username': 'Timothy Brown',
          'price': 11210.51,
          'status': 'success'
        }, {
          'order_no': 'ac7df5eb-cb4E-70C6-0D9B-c79ebae9fDfA',
          'timestamp': 663929622169,
          'username': 'Sandra Harris',
          'price': 11368,
          'status': 'pending'
        }, {
          'order_no': 'BDfE136f-f3AD-ee4F-5e4C-2BDAEbFf9178',
          'timestamp': 663929622169,
          'username': 'Ruth Williams',
          'price': 13532.6,
          'status': 'pending'
        }, {
          'order_no': '332AF03A-2e36-3CCE-AbCF-b19D9DD9FB2f',
          'timestamp': 663929622169,
          'username': 'Amy Hall',
          'price': 5773,
          'status': 'success'
        }, {
          'order_no': '63fA92Cd-0447-8bEd-67cC-C58A3bCFEd2E',
          'timestamp': 663929622169,
          'username': 'Kenneth Jones',
          'price': 10833.23,
          'status': 'pending'
        }, {
          'order_no': 'ba9e11B7-e0f9-fD2c-47F8-12efBbA29BbF',
          'timestamp': 663929622169,
          'username': 'Kenneth Lewis',
          'price': 8516.4,
          'status': 'pending'
        }, {
          'order_no': '6cCB5ec2-FA78-6F5e-FD42-fAA7cA8Ef4b9',
          'timestamp': 663929622169,
          'username': 'Eric Jackson',
          'price': 1038.37,
          'status': 'success'
        }, {
          'order_no': '1E7cb891-dA3E-E17b-4f9B-f5dDd3DEAA2a',
          'timestamp': 663929622169,
          'username': 'Laura Gonzalez',
          'price': 5642.6,
          'status': 'pending'
        }, {
          'order_no': '7e502a4F-DBfe-fDDb-db1d-f0A2EE3A6F7d',
          'timestamp': 663929622169,
          'username': 'Jennifer White',
          'price': 3613.4,
          'status': 'pending'
        }, {
          'order_no': '466556cD-1949-d702-e37c-8b09Ec65EB6E',
          'timestamp': 663929622169,
          'username': 'Patricia Smith',
          'price': 6731.8,
          'status': 'pending'
        }, {
          'order_no': 'CBded36F-e9D3-5fCc-D425-71D6eF90bdd9',
          'timestamp': 663929622169,
          'username': 'Brian Lopez',
          'price': 2591.6,
          'status': 'success'
        }, {
          'order_no': 'fBd73BC1-6620-ab43-AFf9-BaE3E63F1ebB',
          'timestamp': 663929622169,
          'username': 'Christopher Jones',
          'price': 1851,
          'status': 'success'
        }, {
          'order_no': '6Ff0f7F4-1fca-C87c-5295-66c72B4Ae970',
          'timestamp': 663929622169,
          'username': 'Laura Brown',
          'price': 9662.5,
          'status': 'success'
        }]
    }
  },
  filters: {
    statusFilter (status) {
      const statusMap = {
        success: 'success',
        pending: 'danger'
      }
      return statusMap[status]
    },
    orderNoFilter (str) {
      return str.substring(0, 30)
    }
  }
}
</script>

<style>
</style>
