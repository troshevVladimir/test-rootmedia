<template>
  <a href="#" class="card">
    <img class="card__img" :src="`/img/${data.img}`"/>
    <span class="card__price">{{data.price}} ₽</span>
    <p class="card__name"><span>{{data.brand}}</span> / {{data.name}}</p>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="less">
.card {
  max-width: 270px;
  flex: 1 1 30%;
  padding-bottom: 18px;
  text-decoration: none;

  @media screen and (max-width: 1024px) {
    flex-basis: 40%;
    max-width: initial;
  }

  @media screen and (max-width: 600px) {
    flex-basis: 90%;
  }

  &__img {
    width: 100%;
    height: 182px;
    margin-bottom: 16px;
    border-radius: 8px;
    object-fit: cover;
  }

  &__price {
    display: block;
    font-size: 16px;
    line-height: 19px;
    margin-bottom: 8px;
    color: #374044;
    font-weight: 700;
  }

  &__name {
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ABB3B7;

    span {
      color: #374044;
    }
  }
}
</style>