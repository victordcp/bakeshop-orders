<template>
  <div class="shopping-cart">
    <div class="mdl-grid">
        <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet">
        <div class="list-content">
            <div class="mdl-grid mdl-grid--no-spacing" v-for="(user, name) in orders">
            <div class="mdl-grid mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone">
                <span class="mdl-cell--2-col  mdl-cell--2-col-tablet mdl-cell--2-col-phone"> 
                {{ name }} 
                </span>
                <span class="mdl-cell--6-col  mdl-cell--5-col-tablet mdl-cell--2-col-phone"> 
                {{ formatNum(user.money, 'R$') }} 
                </span>
            </div>
            <span class="mdl-cell mdl-cell--1-col">
                <a href="#"><i class="material-icons mdl-color-text--grey">delete</i></a>
            </span>
            <span class="mdl-cell--12-col">
                {{ stringAgg(user.order) }}
            </span>
            <span v-if="Object.keys(orders)[Object.keys(orders).length - 1] !== name" class="mdl-cell--12-col">
                <hr>
            </span>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopping-cart',
  data: function () {
    return {
      'orders': {
        'Eduaro': {
          'order': [ 'Picolé de Carne', 'Salsicha', 'Salame de metro', 'B=======Ð' ],
          'money': 8.7
        },
        'Ispoudi': {
          'order': [ 'Burguês', 'Opressor', 'Captalista coxinha', 'Bolsominion' ],
          'money': 999
        },
        'Cremilson': {
          'order': [ '30 Sacas de Soja', 'Pochete', 'Boné do posto Ipiranga' ],
          'money': null
        },
        'Tio2Bri': {
          'order': [ 'Tudo o que tiver' ],
          'money': 10
        }
      }
    }
  },
  methods: {
    stringAgg: function (arrOrder) {
      return arrOrder.join(' | ')
    },
    formatNum: function (num, prefixo) {
      return prefixo + ' ' + (num || 0).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.')
    }
  }
}
</script>

<style scoped>

.mdl-layout {
	align-items: center;
  /* justify-content: center; */
}

.mdl-grid .mdl-cell span{
   font-size: 16px; 
    font-size: 2.5vw;
}

@media (min-width: 600px) {
  .mdl-grid .mdl-cell span {
    font-size: 16px;
  }
}

.list-content {
  padding: 20px 10px;
}
</style>
