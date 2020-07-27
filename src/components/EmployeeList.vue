<template>
    <div class="employees-list">
      <div v-for="(user, index) in users" :key="index" class="each-employee">
          <h3> {{ user.email }} </h3>
          <h3> {{ user.role == 'true' ? 'Admin' : 'User' }} </h3>
          <button @click="showEditModal(user._id)" class="edit-employee-btn"></button>
          <button class="delete-employee-btn"></button>
          <confirmation-modal :id="user._id" :ref="'modal_' + index" @close="confirmation=false" />
      </div>
      <modal-employee v-if="modal" @close="modal=false" :editEmail="email" button="Guardar cambios"/>
    </div>
</template>

<script>
import ModalEmployee from './ModalEmployee.vue';
import ConfirmationModal from './ConfirmationModal.vue';

export default {
  name: 'EmployeeList',
  props: {
    users: Array,
  },
  components: {
    ModalEmployee,
    ConfirmationModal,
  },
  data() {
    return {
      password: '',
      email: '',
      role: '',
      modal: false,
      confirmation: false,
    };
  },
  methods: {
    showEditModal(index) {
      this.modal = true;
      const userToEdit = this.users.filter(function(user) {
        return index === user._id;
      });
      this.$emit('click', userToEdit[0]);
      this.email=userToEdit[0].email;
      // const modalId = `modal_${index}`;
      // this.$refs[modalId][0].show(index);
    },
    // eliminar(id) {
    //   this.$store.dispatch('deleteEmployee', id);
    // },
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
