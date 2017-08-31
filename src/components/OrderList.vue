<template>
  <div class="order-list">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
      <main class="mdl-layout__content">
        <div class="mdl-grid">
          <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col">
          {{ orders }}
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'order-list',
  data: function () {
    return {
      'orders': {
        'eduaro': {
          'items': [ 'Picolé de Carne', 'Salsicha' ],
          'money': 8.7
        }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mdl-layout {
	align-items: center;
  justify-content: center;
}

.mdl-layout__content {
	padding: 24px;
	flex: none;
}

.view-content {
  max-width: 1080px;
}

</style>
