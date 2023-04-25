<template>
  <div>
    <header> 
      <!-- $: we can know whether we do receive data for a specific slot. -->
      <!-- And if we don't, we could use that information to not render a certain element. -->
      <slot name="header" v-if="$slots.header">
        <!-- If we pass in some HTML content here, the default will not show up. -->
        <h2>The Default</h2>
      </slot>
    </header>
    <!-- slot: It allows us to receive HTML content and use Vue features outside the component.
    Like props, props are for data while slots are used for HTML code. -->
    <!-- You don't have to name all slots. If you leave one unnamed slot,
    that will be the default slot, but you must only have one unnamed slot. -->
    <slot></slot>
  </div>
</template>


<script>
export default {
  mounted() {
    // $: we can know whether we do receive data for a specific slot.
    // And if we don't, we could use that information to not render a certain element.
    console.log(this.$slots.header);
    console.log(this.$slots.default);
  }
}
</script>


<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>