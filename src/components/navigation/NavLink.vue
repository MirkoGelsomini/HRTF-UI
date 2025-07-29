<script setup>
const router = useRouter()

const props = defineProps({
  item: {
    type: Object,
    required: true
  }
})


const navigateToRoute = () => {
  if (props.item.route) {
    router.push({ name: props.item.route })
  }
}

const isActive = computed(() => {
  return router.currentRoute.value.name === props.item.route
})
</script>
<template>
  <v-list-item 
    :class="{
      'custom-prepend': true,
      'v-list-item--active': isActive
    }"
    :title="props.item.title"
    @click="navigateToRoute">
    <template v-slot:prepend>
      <v-icon>{{ props.item.icon }}</v-icon>
    </template>
    <template v-slot:append>
      <v-badge
        color="primary"
        :content="props.item.tag"
        inline
        v-if="props.item.tag !== undefined"/>
    </template>
  </v-list-item>
</template>

<style scoped>
.custom-prepend :deep(.v-list-item__prepend .v-list-item__spacer) {
  width: 16px;
}
</style>