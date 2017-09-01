<template>
  <div class="order-list">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
      <main class="mdl-layout__content">
        <div class="mdl-grid">
          <div class="mdl-card mdl-shadow--6dp mdl-cell mdl-cell--12-col mdl-cell--8-col-tablet">
            <div class="list-content">
              <!-- {{ userData }} -->
              <div class="mdl-grid mdl-grid--no-spacing" v-for="userOrder in orders">
                <div class="mdl-grid mdl-cell mdl-cell--11-col mdl-cell--7-col-tablet mdl-cell--3-col-phone">
                  <span class="mdl-cell--2-col  mdl-cell--2-col-tablet mdl-cell--2-col-phone"> 
                    {{ userOrder['.key'] }} 
                  </span>
                  <span class="mdl-cell--6-col  mdl-cell--5-col-tablet mdl-cell--2-col-phone"> 
                    {{ formatNum(userOrder.money, 'R$') }} 
                  </span>
                </div>
                <span class="mdl-cell mdl-cell--1-col">
                  <a href="#" v-on:click="removeOrder(userOrder)"><i class="material-icons mdl-color-text--grey">delete</i></a>
                </span>
                <span class="mdl-cell--12-col">
                  {{ stringAgg(userOrder.order) }}
                </span>
                <span v-if="orders[[Object.keys(orders).length - 1]]['.key'] !== userOrder['.key']" class="mdl-cell--12-col">
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
import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyA9pTVANUYdOnoJYBsk_A3zJC-WU1mzIcs',
  authDomain: 'bakeshop-orders.firebaseapp.com',
  databaseURL: 'https://bakeshop-orders.firebaseio.com',
  projectId: 'bakeshop-orders',
  storageBucket: 'bakeshop-orders.appspot.com',
  messagingSenderId: '865904261095'
}

let app = Firebase.initializeApp(config)
let ordersRef = app.database().ref('orders')

export default {
  name: 'order-list',
  data: function () {
    return {
      'username': 'Poltronieri',
      'newOrder': {
        'Eustaquinho': {
          money: 0,
          orders: {}
        }
      },
      'userData': {}
    }
  },
  ready: function () {
    // this.$bindAsArray('userData', ordersRef.child('Poltronieri'))
    // console.log(this.userData)
    console.log('YOLO')
  },
  firebase: {
    orders: ordersRef
  },
  methods: {
    stringAgg: function (arrOrder) {
      return arrOrder.join(' | ')
    },
    formatNum: function (num, prefixo) {
      return prefixo + ' ' + (num || 0).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+,)/g, '$1.')
    },
    // addOrder: function () {
    //   booksRef.push(this.newOrder);
    //     this.newBook.title = '';
    //     this.newBook.author = '';
    //     this.newBook.url = 'http://';
    // },
    removeOrder: function (order) {
      ordersRef.child(order['.key']).remove()
    }
  }
}
</script>

<style scoped>
.mdl-layout {
	align-items: center;
}

.order-list-user-name {
  overflow: hidden;
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
