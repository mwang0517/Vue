<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals>
      <!-- Scoped Slot -->
      <template #default="slotProps">
        <h2> {{ slotProps.item }}</h2>
      </template>
    </course-goals>
  </div>
</template>

<script>
// Note this component is only available in this file! Not its child!
// Local Component
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';

export default {
  //or components: {'TheHeader': TheHeader} since Vue automatically translate it.
  //or components: {TheHeader} since it is modern JS feature.
  components: {
    'the-header': TheHeader,
    BadgeList,
    UserInfo,
    CourseGoals,
  }, 
  data() {
    return {
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>