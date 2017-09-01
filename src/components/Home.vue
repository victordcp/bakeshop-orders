<template>
  <div class="home">
      <order-list></order-list>
  </div>
</template>

<script>
import OrderList from '@/components/OrderList'

export default {
  name: 'home',
  components: { OrderList }
}
</script>

<style scoped>
</style>
