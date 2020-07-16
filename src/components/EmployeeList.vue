<template>
    <div class="employees-list">
        <div v-for="item in info" :key="item.id" class="each-employee">
            <h3 v-bind:firstName="item.firstName"> {{ item.firstName }} </h3>
            <h3> {{ item.role }} </h3>
            <button @click="editEmployee" class="edit-employee-btn"></button>
            <button class="delete-employee-btn"></button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'EmployeeList',
  data() {
    return {

    };
  },
  computed: {
    info() {
      return this.$store.state.employees;
    },
  },
  created() {
    this.$store.dispatch('getEmployees');
  },
  methods: {
    editEmployee() {

    },
  },
};
</script>

<style lang="scss">
    .employees-list {
        display: flex;
        width: 90%;
        overflow: scroll;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        flex-direction: column;
        border-radius: 20px;
        border: 1px solid black;
        box-sizing: content-box;
        margin: 40px auto;

        .each-employee {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
            box-sizing: border-box;

            h3 {
                font-family: Livvic, Helvetica, Arial, sans-serif;
                font-size: 25px;
                width: 10%;
            }

            .edit-employee-btn, .delete-employee-btn {
                width: 50px;
                height: 50px;
                background-size: contain;
                border: none;
                background-color: transparent;
                outline: none;
                cursor: pointer;
            }

            .edit-employee-btn {
                background-image: url(../assets/btn-edit.svg);
            }

            .delete-employee-btn {
                background-image: url(../assets/btn-delete.svg);
            }
        }
    }
</style>
