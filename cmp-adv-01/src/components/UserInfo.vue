<template>
  <section>
    <!-- base-card: Wrapper as dynamic content inside. -->
    <base-card>
        <!-- v-slot: can be used to let Vue know where certain content should go to. -->
        <!-- <header> -->
        <template v-slot:header>
          <h3>{{ fullName }}</h3>
          <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
        </template>
        <!-- </header> -->
      <!-- Rest content will automatically go to the default slot. -->
      <!-- <template v-slot: default>
        <p>{{ infoText }}</p>
      </template> -->
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>

<style scoped>
section header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>