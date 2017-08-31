<template>
  <div class="order-form">
    <div class="mdl-layout mdl-js-layout mdl-color--grey-100">
      <main class="mdl-layout__content">
        <div class="mdl-grid">
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
export default {
  name: 'order-form'
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
