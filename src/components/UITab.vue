<template>
  <div v-show="isActive">
    <div class="tabs__body">
      <div class="tabs__content">
        <slot></slot>
      </div>
      <div class="pooup-btn"><span class="pooup-btn__icon"></span>ОТКРЫТЬ ФИЛЬТРЫ</div>
      <CatalogFilters></CatalogFilters>
    </div>
  </div>
</template>

<script>
import CatalogFilters from "./CatalogFilters.vue";

export default {
  components: { CatalogFilters },
  data() {
    return {
      isActive: false
    }
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    },
    selected: {
      type: Boolean,
      required: false
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  mounted() {
    this.isActive = this.selected
  },
  created() {
    this.$parent.tabsArray.push(this)
  }
}
</script>

<style>

</style>