<template>
  <div class="container">
    <h2 class="catalog-title">Каталог</h2>
    <Catalog></Catalog>
  </div>
</template>

<script>
import Catalog from "@/components/Catalog-catalog-sec.vue"
export default {
  name: 'App',
  components: {
    Catalog
  }
}
</script>

<style lang="less">
.catalog-title {
  margin-top: 88px;
  font-size: 36px;
  line-height: 45px;
  text-align: center;
  color: #374044;
  margin-bottom: 26px;
}

.container {
  margin: 0 auto;
  max-width: 1170px;
  padding: 0 45px;

  @media screen and (max-width: 600px) {
    padding: 0 15px;
  }
}
</style>
