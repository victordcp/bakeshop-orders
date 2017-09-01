<template>
  <div id="app">
    <div class="sidebar">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer mdl-layout--fixed-header">
        <header class="mdl-layout__header mdl-color--grey-100 mdl-color-text--grey-600">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title"></span>
            <div class="mdl-layout-spacer"></div>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label class="mdl-button mdl-js-button mdl-button--icon" for="search">
                <i class="material-icons">search</i>
              </label>
              <div class="mdl-textfield__expandable-holder">
                <input class="mdl-textfield__input" type="text" id="search">
                <label class="mdl-textfield__label" for="search">Enter your query...</label>
              </div>
            </div>
            <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
              <i class="material-icons">more_vert</i>
            </button>
            <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
              <li class="mdl-menu__item">About</li>
              <li class="mdl-menu__item">Contact</li>
              <li class="mdl-menu__item">Legal information</li>
            </ul>
          </div>
        </header>
        <div class="mdl-layout__drawer mdl-color--blue-grey-900 mdl-color-text--blue-grey-50">
          <header>
            <!-- <img src="images/user.jpg" class="demo-avatar"> -->
            <div>
              <span>Poltronieri</span>
              <!-- <div class="mdl-layout-spacer"></div>
              <button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
                <i class="material-icons" role="presentation">arrow_drop_down</i>
                <span class="visuallyhidden">Accounts</span>
              </button> -->
              <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
                <li class="mdl-menu__item">hello@example.com</li>
                <li class="mdl-menu__item">info@example.com</li>
                <li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
              </ul>
            </div>
          </header>
          <nav class="demo-navigation mdl-navigation">
            <router-link class="mdl-navigation__link" to="/"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">assignment</i>Meus Pedidos</router-link>
            <router-link class="mdl-navigation__link" to="/cart"><i class="mdl-color-text--blue-grey-400 material-icons" role="presentation">shopping_cart</i>Carrinho</router-link>
            <div class="mdl-layout-spacer"></div>
          </nav>
        </div>
        <main class="mdl-layout__content mdl-color--grey-100">
        <router-view></router-view>
        </main>
      </div>
    </div>
  </div>
</template>

<script scoped>
export default {
  name: 'app'
}
</script>

<style scoped>
html, body {
  margin: 0;
  height: calc(100% - 100px);
  font-family: 'Roboto', 'Helvetica', sans-serif;
}

.mdl-layout__content {
    overflow-y:hidden;
    ::-webkit-scrollbar { display: none; }
}

@media only screen and (max-width:960px){
    .mdl-layout__content {
        overflow-y:scroll;
    }
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

main {
  text-align: center;
  /* margin-top: 40px; */
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  /* background-color: #35495E; */
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}

.mdl-layout__header .mdl-layout__drawer-button {
  color: #37474f;
}

.demo-drawer .demo-navigation {
  z-index: -2;
}

.demo-navigation {
  flex-grow: 1;
}

.demo-layout .demo-navigation .mdl-navigation__link {
  display: flex !important;
  flex-direction: row;
  align-items: center;
  color: rgba(255, 255, 255, 0.56);
  font-weight: 500;
}
.demo-layout .demo-navigation .mdl-navigation__link:hover {
  background-color: #00BCD4;
  color: #37474F;
}
.demo-navigation .mdl-navigation__link .material-icons {
  font-size: 24px;
  color: rgba(255, 255, 255, 0.56);
  margin-right: 32px;
}

</style>
