<template>
  <div class="tabs">
    <div class="tabs__buttons" ref="">
      <div
        class="tabs__button"
        :class="{ 'tabs__button--active': tab.active }"
        v-for="tab in tabs"
        :key="tab.id"
        @click="changeActive(tab.id)"
      >
        <component :is="tab.icon"></component>{{ tab.name }}
      </div>
    </div>
    <div class="tabs__body">
      <div class="tabs__content">
        <slot/>
      </div>
      <div class="pooup-btn"><span class="pooup-btn__icon"></span>ОТКРЫТЬ ФИЛЬТРЫ</div>
      <CatalogFilters></CatalogFilters>
    </div>
  </div>

</template>

<script>
import CatalogFilters from "./CatalogFilters.vue";
import SVGsneakers from "@/assets/icons/SVGsneakers.vue";
import SVGsweatpants from "@/assets/icons/SVGsweatpants.vue";
// import UITab from "./UITab.vue";
export default {
  components: {CatalogFilters, SVGsneakers, SVGsweatpants},
  data() {
    return {
      selectedIndex: 0,
      tabsArray: [],
      tabs: [
        {
          id: 0,
          name: 'Обувь',
          icon: 'SVGsneakers',
          active: true
        },
        {
          id: 1,
          name: 'Другая одежда',
          icon: 'SVGsweatpants',
          active: false
        }
      ]
    }
  },
  methods: {
    changeActive (id) {
      this.tabs = this.tabs.map(el => {
        if (el.id === id ) {
          el.active = true
        } else {
          el.active = false
        }
        return el
      })
    }
  }
}
</script>

<style lang="less">
@import '../assets/less/vars.less';

.tabs {
  display: flex;
  flex-direction: column;

  &__body {
    display: flex;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }



    .pooup-btn {
      width: 100%;
      height: 64px;
      display: none;
      align-items: center;
      justify-content: center;
      display: none;
      font-size: 16px;
      line-height: 19px;
      text-transform: uppercase;
      color: #FFFFFF;
      background: linear-gradient(126.69deg, #27A8DD 0%, #1A7FB8 100%);
      border-radius: 8px;
      margin-bottom: 25px;
      cursor: pointer;

      &__icon {
        margin-right: 16px;
        display: block;
        width: 24px;
        height: 24px;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M4 21V14' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4 10V3' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 21V12' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12 8V3' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20 21V16' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M20 12V3' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M1 14H7' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M9 8H15' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M17 16H23' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
      }

      @media screen and (max-width: 768px) {
        display: flex;
        order: -1;
      }
    }
  }

  &__button-icon {
    width: 40px;
    height: 50px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0 50%;
  }

  &__content {
    margin-right: 30px;
    flex: 0 1 75%;

    @media screen and (max-width: 768px) {
      flex-basis: 100%;
      margin-right: 0;
    }
  }

  &__buttons {
    display: flex;
    position: relative;
    margin-bottom: 34px;

    &::after {
      position: absolute;
      top: 100%;
      content: '';
      display: block;
      height: 4px;
      width: 100%;
      background: #F3F3F3;
      border-radius: 2px;
    }
  }

  &__button {
    cursor: pointer;
    margin-right: 50px;
    font-size: 20px;
    line-height: 25px;
    color: #545C60;
    display: flex;
    align-items: center;
    position: relative;
    padding-bottom: 8px;
    z-index: 10;

    svg {
      margin-right: 14px;
      path {
        fill: currentColor;
      }
    }

    &--active {
      color: @accent-color;

      &::after {
        position: absolute;
        top: 100%;
        content: '';
        display: block;
        height: 4px;
        width: 100%;
        background: @accent-color;
        border-radius: 2px;
      }
    }


  }
}
</style>