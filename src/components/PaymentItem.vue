<template>
  <tr>
    <td class="td">{{ index + 1 }}</td>
    <td class="td">{{ item.date}}</td>
    <td class="td">{{ item.category}}</td>
    <td class="td">{{ item.value}}</td>
    <td><button  v-on:click="$emit('remove-item', item.id)" class="rm">&times;</button></td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    index: Number,
  },
  
};
</script>

<style>
.rm{
  background: rgb(38, 0, 255);
  color: #ffffff;
  border: none;
}
td{
  border: 1px solid #000000;
  font-weight: 600;
  width: 100px;
  
}
</style>
