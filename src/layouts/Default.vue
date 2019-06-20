<template>
  <div id="app" class="layout">
    <header class="header">
      <div class="container">
        <div class="header-ht flex jc-between ai-center">
          <g-link to="/"><h1 class="logo">bespoke.</h1></g-link>
          <nav class="nav">
            <ul class="flex">
              <li><g-link class="nav__link" to="/about">About</g-link></li>
              <li><g-link class="nav__link" to="/portfolio">Portfolio</g-link></li>
              <li><g-link class="nav__link" to="/shop">Shop</g-link></li>
              <li><g-link class="nav__link" to="/press">Press</g-link></li>
              <li><g-link class="nav__link" to="/contact">Contact</g-link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
    <div class="container">
      <slot/>
    </div>
  </div>
</template>

<style lang="scss">
  @import '../styles/main';
</style>

