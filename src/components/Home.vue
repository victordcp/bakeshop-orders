<template>
  <div class="home">
    <!-- <form-list></form-list> -->
    <order-list></order-list>
    <!-- <order-form></order-form> -->
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm'
import OrderList from '@/components/OrderList'

export default {
  name: 'home',
  components: { OrderForm, OrderList }
}
</script>

<style>

</style>
