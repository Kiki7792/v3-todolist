<template>
  <div class="form-group">
    <label for="exampleInputEmail1">添加待办事项</label>
    <input
      type="text"
      class="form-control"
      id="exampleInputEmail1"
      aria-describedby="emailHelp"
      v-model.trim="inputValue"
      @keyup.enter="addItem"
    >
    <small id="emailHelp" class="form-text text-muted">回车即添加</small>
  </div>
  <ul class="list-group">
    <li class="list-group-item" v-for="(item, index) in todos" :key="index">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" @click.prevent="checkItem(index)">
        <label class="form-check-label" for="defaultCheck1">
          {{ item }}
        </label>
        <button
          type="button"
          class="btn btn-outline-danger btn-sm float-right"
          @click="deleteItem(index)"
        >删除</button>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, reactive, ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'Add',
  setup () {
    const store = useStore()
    const inputValue = ref('')
    const addItem = () => {
      if (inputValue.value !== '') {
        store.commit('add', inputValue.value)
        inputValue.value = ''
      }
    }

    const deleteItem = (index:number) => {
      store.commit('delete', index)
    }

    const checkItem = (index:number) => {
      store.commit('check', index)
    }

    return reactive({
      inputValue,
      todos: computed(() => store.state.todos),
      addItem,
      deleteItem,
      checkItem
    })
  }
}
</script>
<style lang="scss" scoped></style>
