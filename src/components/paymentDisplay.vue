<template>
  <div class="list">
    <table class="table">
      <tr>
        <td class="td">#</td>
        <td class="td">Дата</td>
        <td class="td">Категория</td>
        <td class="td">Сумма</td>
        <td class="td">#</td>
      </tr>
      
      <PaymentItem 
        v-for="(item, i) in paymentsList"
        v-bind:item="item" :key="i"
        v-bind:index="i"
        v-on:remove-item="removeItem"
      />
    </table>     
  </div>
</template>

<script>
import PaymentItem from './PaymentItem.vue'
export default {
  name: "PaymentsDisplay",
  components: {
    PaymentItem,
  },
  props: {
    paymentsList: {
      type: Array,
      default: () => [],
    },
  },
  methods:{
    removeItem(id){
      this.$emit('remove-item',id)
    }
  }
};
</script>

<style lang="scss" scoped>
.td {
  font-weight: 600;
  width: 100px;
  
}
.td {
  width: 100px;
  border: 1px solid #000000;
  margin-bottom: 5px;
}
.table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
