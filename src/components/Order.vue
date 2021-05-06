<template>
  <div class="order-page">
    <div v-for="product in allItems" :key="product.id" class="order-header">
      <h3>{{product.strCategory}}</h3>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name:'Order',
  computed : mapGetters(["allItems"])
}
</script>

<style>

</style>