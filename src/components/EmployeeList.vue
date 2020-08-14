<template>
    <div class="employees-list">
      <div v-for="(user, index) in users" :key="user._id" class="each-employee">
        <h3> {{ user.email }} </h3>
        <h3 class="employee-role"> {{ user.roles.admin === true ? 'Admin' : 'User' }} </h3>
        <button @click="showEditModal(user._id)" class="edit-employee-btn"></button>
        <button @click="showDeleteConfirmationModal" class="delete-employee-btn"></button>
        <confirmation-modal v-if="shouldShowConfirmation" :id="user._id" :ref="'modal_' + index" 
        @close="onConfirmationClose" />
      </div>
      <modal-employee
        v-if="shouldShowEditModal"
        :userToEdit="userToEdit"
        :isEdition="true"
        @close="onEditClose" />
    </div>
</template>

<script>

import ConfirmationModal from './ConfirmationModal.vue';
import ModalEmployee from './ModalEmployee.vue';
import { defaultUser } from './employee-helpers';

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
      userToEdit: defaultUser(),
      shouldShowEditModal: false,
      shouldShowConfirmation: false,
    };
  },
  methods: {
    showEditModal(userId) {
      this.shouldShowEditModal = true;
      const userToEdit = this.users.filter(function(user) {
        return userId === user._id;
      });
      this.userToEdit = userToEdit[0];
    },
    showDeleteConfirmationModal() {
      this.shouldShowConfirmation = true;
    },
    onConfirmationClose() {
      this.shouldShowConfirmation = false;
    },
    onEditClose() {
      this.shouldShowEditModal = false;
      this.userToEdit = defaultUser();
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
          font-size: 22px;
          width: 10%;
        }

        .employee-role {
          margin-left: 80px;
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
