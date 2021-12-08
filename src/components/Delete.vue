<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(item, index) in deletes" :key="index">
      <div class="form-check">
        <label class="form-check-label" for="defaultCheck1">{{ item }}</label>
      </div>
    </li>
  </ul>
</template>
<script lang="ts">
import { computed, reactive } from 'vue'
import store from '@/store'

export default {
  name: 'Delete',
  setup () {
    return reactive({
      deletes: computed(() => store.state.deletes)
    })
  }
}
</script>
<style lang="scss" scoped></style>
