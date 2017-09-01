<template>
  <div class="order-list">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
      <main class="mdl-layout__content">
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
                  <a href="#" v-on:click="removeOrder(name)"><i class="material-icons mdl-color-text--grey">delete</i></a>
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

           <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col">
            <div class="mdl-card__title mdl-color--blue-grey-800 mdl-color-text--white">
              <h2 class="mdl-card__title-text">Pedido</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <form action="#">
                <div class="mdl-textfield mdl-js-textfield">
                  <input class="mdl-textfield__input" type="text" id="username" />
                  <label class="mdl-textfield__label" for="username">Nome</label>
                </div>
                <div class="mdl-textfield mdl-js-textfield">
                  <input class="mdl-textfield__input" type="text" id="userpass" />
                  <label class="mdl-textfield__label" for="userpass">Iten</label>
                </div>
              </form>
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <button class="mdl-button mdl-button--colored mdl-color--blue-grey-600 mdl-color-text--white mdl-js-button mdl-js-ripple-effect">Enviar</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'order-list',
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
    },
    removeOrder: function (order) {
      // delete this.orders[order]
      Vue.delete(this.orders, order)
      console.log(this.orders)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .order-list {
  width: 100%;
} */

.mdl-layout {
	align-items: center;
  /* justify-content: center; */
}

.mdl-layout__content {
	/* padding: 24px; */
	/* flex: none; */
}

.order-list-user-name {
  overflow: hidden;
  /* width: 300px; */
  /* align-items: flex-start; */
  /* justify-content: flex-start */
}
.mdl-grid .mdl-cell span{
   font-size: 16px; 
    font-size: 2.5vw;
    /* vmax: 1vw; */
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
