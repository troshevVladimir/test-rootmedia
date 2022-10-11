<template>
  <Tabs>
    <Sort class="catalog-sort"/>
    <div class="cards">
      <Card v-for="(card, idx) in cards" :key="idx" :data="card"/>
    </div>
    <button class="load-more">ЗАГРУЗИТЬ ЕЩЕ</button>
  </Tabs>
</template>

<script>
import Tabs from './UITabs.vue'
import Card from './UICard.vue'
import Sort from './UISort.vue'

export default {
  components: {Tabs, Card, Sort},
  data() {
    return {
      cards: [
        {
          img: 'shoes1.png',
          price: '1111',
          brand: 'Nike',
          name: 'Кроссовки T-LITE XI'
        },
        {
          img: 'shoes2.png',
          price: '1111',
          brand: 'Nike',
          name: 'Nike / Кроссовки AIR MAX 720'
        },
        {
          img: 'shoes3.png',
          price: '1111',
          brand: 'Nike',
          name: 'Nike / Кроссовки MEN\'S AIR MONARCH IV TRAINING SHOE'
        },
        {
          img: 'shoes1.png',
          price: '1111',
          brand: 'Nike',
          name: 'Кроссовки T-LITE XI'
        },
        {
          img: 'shoes2.png',
          price: '1111',
          brand: 'Nike',
          name: 'Nike / Кроссовки AIR MAX 720'
        },
        {
          img: 'shoes3.png',
          price: '1111',
          brand: 'Nike',
          name: 'Nike / Кроссовки MEN\'S AIR MONARCH IV TRAINING SHOE'
        },
      ]
    }
  }
}
</script>

<style lang="less">
.catalog-sort {
  margin-bottom: 23px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 30px;
}

.load-more {
  border-radius: 8px;
  width: 100%;
  min-height: 64px;
  border: none;
  cursor: pointer;
  transition: all ease .4s;

  &:hover {
    background: #bdbdbd;
  }
}
</style>
