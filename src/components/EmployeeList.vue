<template>
    <div class="employees-list">
        <div class="each-employee">
            <h3>Name</h3>
            <h3>Role</h3>
            <button class="edit-employee-btn"></button>
            <button class="delete-employee-btn"></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'listEmployees',
};
</script>

<style lang="scss">
    .employees-list {
        display: flex;
        width: 90%;
        height: fit-content;
        grid-column: 2 / 3;
        grid-row: 2 / 3;
        flex-direction: column;
        border-radius: 20px;
        border: 1px solid black;
        box-sizing: content-box;
        margin: 40px auto;

        .each-employee {
            height: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 20px 30px;
            box-sizing: border-box;

            h3 {
                font-size: 25px;
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
