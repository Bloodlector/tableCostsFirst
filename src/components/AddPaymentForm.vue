<template>
  <div class="table">
    <button @click="visible = !visible" class="add__payment">
      {{ btnText }}
    </button>
    <form v-show="visible" @submit.prevent="onSave">
      <input
        type="number"
        placeholder="Введите сумму"
        v-model.lazy.trim="value"
      /><br />
      <input
        placeholder="Введите описание"
        v-model.lazy.trim="category"
      /><br />
      <input
        type="date"
        placeholder="Введите дату"
        v-model="date"
      /><br />
      <button id="date" class="add__payment" type="submit">Добавить запись</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPaymentForm",
  data() {
    return {
      value: "",
      category: "",
      date: "",
      visible: true,      
    };
  },
  computed: {
    getCurrentDate() {
      const today = document.getElementById("date");
      const d = today.getDate();
      const m = today.getMonth() + 1;
      const y = today.getFullYear();
      return `${d}.${m}.${y}`;
    },
    btnText() {
      if (this.visible == true) {
        return "Скрыть";
      }
      return "Добавить запись";
    },
  },
  methods: {
    onSave() {     
           const data = {
             id: Math.floor(Math.random() * 100000),
        value: this.value,
        category: this.category,
        date: this.date || this.getCurrentDate,
      };
      this.$emit("addNewPayment", data);
      this.category = "";
      this.value = "";
      this.date = "";
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  margin-bottom: 10px;
  width: 200px;
  padding: 4px 8px;
}
.add__payment {
  margin: 10px;
  background: #42b983;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 5px;
  cursor: pointer;
  align-self: center;
}
.table {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
