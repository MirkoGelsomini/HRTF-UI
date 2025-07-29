<script setup>
const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <v-list-item
    class="nav-header"
    :title="props.item.title"/>
</template>