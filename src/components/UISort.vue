<template>
  <div class="sort">
    <div class="sort__title">Сортировать</div>
    <button class="sort__button" :class="{'sort__button--active': btn.value}" v-for="(btn, idx) in sortTypes" :key="idx">{{btn.text}}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortTypes: [
        {
          text: 'по цене',
          value: 'DESK'
        },
        {
          text: 'по алфавиту',
          value: ''
        },
        {
          text: 'по дате добавления',
          value: ''
        }
      ]
    }
  }

}
</script>
<style lang="less">
@import '../assets/less/vars.less';

.sort {
  display: flex;
  overflow-y: auto;
  white-space: nowrap;

  &__title {
    font-size: 16px;
    line-height: 20px;
    color: #ABB3B7;
    margin-right: 32px;
  }

  &__button {
    color: #545C60;
    font-size: 16px;
    line-height: 20px;
    margin-right: 16px;
    border: none;
    background: transparent;
    cursor: pointer;

    &:hover {
      color: @accent-color;
    }

    &--active {
      color: @accent-color;
      display: flex;
      align-items: center;

      &::after {
        width: 10px;
        height: 5px;
        content: '';
        display: block;
        background-image: url('../assets/icons/arrow.svg');
        background-size: cover;
        background-position: center;
        margin-left: 9px;
      }
    }
  }
}
</style>