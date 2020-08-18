<template>
  <div class="employees-list">
    <div
      v-for="(user, index) in users"
      :key="user._id"
      class="each-employee"
    >
      <h3> {{ user.email }} </h3>
      <h3 class="employee-role">
        {{ user.roles.admin === true ? 'Admin' : 'User' }}
      </h3>
      <button
        class="edit-employee-btn"
        @click="showEditModal(user._id)"
      />
      <button
        class="delete-employee-btn"
        @click="showDeleteConfirmationModal"
      />
      <confirmation-modal
        v-if="shouldShowConfirmation"
        :id="user._id"
        :ref="'modal_' + index"
        @onDelete="confirmDelete(user)"
        @close="onConfirmationClose"
      />
    </div>
    <modal-employee
      v-if="shouldShowEditModal"
      :user-to-edit="userToEdit"
      :is-edition="true"
      @close="onEditClose"
      @onSubmit="onEditSave"
    />
  </div>
</template>

<script>

import ConfirmationModal from './ConfirmationModal.vue';
import ModalEmployee from './ModalEmployee.vue';
import { editEmployee, deleteEmployee } from '../controllers/users';
import { defaultUser } from './employee-helpers';

const AUTH_TOKEN_NAME = 'token';
const token = window.localStorage.getItem(AUTH_TOKEN_NAME);

export default {
  name: 'EmployeeList',
  components: {
    ModalEmployee,
    ConfirmationModal,
  },
  props: {
    users: {
      type: Array,
      default: () => [],
    },
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
      // eslint-disable-next-line no-underscore-dangle
      const userToEdit = this.users.filter((user) => userId === user._id);
      // eslint-disable-next-line prefer-destructuring
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
    onEditSave(user) {
      editEmployee(token, user)
        // .then(this.userToEdit = user)
        .then(this.shouldShowEditModal = false)
        .then(this.$emit('dataUpdated'));
    },
    confirmDelete(user) {
      deleteEmployee(token, user)
        .then(this.shouldShowConfirmation = false);
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
