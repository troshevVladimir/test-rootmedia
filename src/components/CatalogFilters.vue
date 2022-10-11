<template>
<div class="filters">

  <div class="filters__header">
    <h2 class="filters__title">Фильтры</h2>
    <button class="filters__reset-btn">Сбросить</button>
  </div>

  <div class="filters__body">
    <div class="filters__filter filter">
      <h3 class="filter__title">
        Цена<span>, ₽</span>
      </h3>
      <div class="price-values">
        <div class="price-value">
          <span>от &nbsp;</span><strong>{{filters.price.from}}</strong>
        </div>
        <div class="price-value">
          <span>до &nbsp;</span><strong>{{filters.price.to}}</strong>
        </div>
      </div>
      <div ref="range"></div>
    </div>
    <div class="filters__filter filter">
      <h3 class="filter__title">
        Тип продукта
      </h3>

      <label class="filter__item">
        <input type="checkbox">
        <div class="filter__custom-checkbox"></div>
        <span class="filter__value">Первый тип</span>
      </label>

      <label class="filter__item">
        <input type="checkbox">
        <div class="filter__custom-checkbox"></div>
        <span class="filter__value">Второй тип</span>
      </label>

    </div>
    <div class="filters__filter filter">
      <h3 class="filter__title">
        Категория
      </h3>

      <label class="filter__item">
        <input type="radio" name="category" value="shoes">
        <div class="filter__custom-radio"></div>
        <span class="filter__value">Обувь</span>
      </label>
      <label class="filter__item">
        <input type="radio" name="category" value="clothes">
        <div class="filter__custom-radio"></div>
        <span class="filter__value">Одежда</span>
      </label>
      <label class="filter__item">
        <input type="radio" name="category" value="other">
        <div class="filter__custom-radio"></div>
        <span class="filter__value">Остальное</span>
      </label>
    </div>
  </div>

</div>
</template>

<script>
import noUiSlider from 'nouislider';
import 'nouislider/dist/nouislider.css';
export default {
  data() {
    return {
      filters: {
        price: {
          from: 0,
          to: 0
        },
      },
      sliderInstance: null
    }
  },

  methods: {
    onUpdateSlider(value) {
      this.filters.price.from = Math.round(value[0]).toLocaleString()
      this.filters.price.to = Math.round(value[1]).toLocaleString()
    }
  },

  mounted () {
    this.sliderInstance = noUiSlider.create(this.$refs.range,{
      start: [10000, 30000],
      connect: true,
      range: {
          'min': 0,
          'max': 50000
      }
    })

    this.sliderInstance.on('update', this.onUpdateSlider);
  },
  beforeUnmount () {
    this.sliderInstance.off('update', this.onUpdateSlider);
  }
}
</script>

<style lang="less">
@import '../assets/less/vars.less';

.filters {
  flex: 1 0 270px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  &__filter {
    &:not(:first-child):not(:last-child) {
      margin-bottom: 36px;
    }
  }

  &__header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;
    align-items: center;
  }

  &__reset-btn {
    font-size: 14px;
    line-height: 77%;
    color: #ACACAC;
    border: none;
    background: transparent;
    cursor: pointer;
    display: flex;
    align-items: center;

    &::after {
      margin-left: 10px;
      content: '';
      display: block;
      width: 18px;
      height: 18px;
      background-image: url('../assets/icons/x.svg');
      background-position: 0 -2px;
      background-size: cover;
      background-repeat: no-repeat;
    }
  }

  .filter {
    display: flex;
    flex-direction: column;

    &__item {
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 77%;
      color: #515151;
      margin-left: 12px;
      margin-bottom: 14px;

      input[type="checkbox"] {
        display: none;
      }

      input[type="radio"] {
        display: none;
      }

      input:checked + .filter__custom-checkbox,
      input:checked + .filter__custom-radio {
        border-color: @accent-color;
        &::after {
          display: block;
        }
      }
    }

    &__custom-checkbox {
      width: 18px;
      height: 18px;
      border: 2px solid #E7E7E7;
      border-radius: 2px;

      &::after {
        content: '';
        display: none;
        width: 100%;
        height: 100%;
        background-position: 2px 0;
        background-size: contain;
        background-repeat: no-repeat;
        background-image: url('../assets/icons/shape.svg');
      }
    }

    &__custom-radio {
      width: 20px;
      height: 20px;
      border: 2px solid #E7E7E7;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &::after {
        content: '';
        display: none;
        width: 10px;
        height: 10px;
        background-color: @accent-color;
        border-radius: 50%;
      }
    }

    &__value {
      margin-left: 10px;
    }

    &__title {
      margin-bottom: 16px;

      span {
        font-weight: 400;
      }
    }

    .price-values {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
    }

    .price-value {
      background: #F3F3F3;
      border-radius: 4px;
      padding-left: 16px;
      height: 40px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: start;

      span {
        color: #919496;
      }

      &:first-child {
        margin-right: 8px;
      }
    }
  }

  &__body {
    border: 1px solid #E7E7E7;
    border-radius: 8px;
    padding: 24px;

  }

  .noUi-target {
    background: #F3F3F3;
    border-radius: 1px;
    border: none;
    box-shadow: none;
    margin-bottom: 41px;
  }

  .noUi-horizontal {
    height: 2px;

    .noUi-connect {
      background-color: @accent-color;
    }

    .noUi-handle {
      top: -9px;
      right: -10px;
      border-radius: 9px;
      width: 20px;
      height: 20px;
      background-color: #E7E7E7;
      border-radius: 50%;
    }
  }
}


</style>