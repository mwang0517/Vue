// {}: to config the various options of this app
const app = Vue.createApp({

  // Anything that's part of the object you return in data, 
  // can now be used in your Vue controlled HTML part.
  // data itself is a function, and it has always to return an object!
  data: function() {
    return {
      //Can setup any key-value pairs!
      courseGoalA: 'Learn Vue',
      courseGoalB: 'Master Vue',
      vueLink: 'https://vuejs.org/guide/quick-start.html'
    };
  },

  // Define functions. Methods takes objects which contain full of methods.
  methods: {
    outputGoal: function () {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        // Vue does some magic here. It basically takes all the data you return
        // in previous data object (which you return in the data function),
        // and it merges it into a global Vue instance object.
        return this.courseGoalA;
      } else {
        return this.courseGoalB;
      }
    }
  }
});

// Which part to control through by selecting ID.
app.mount('#user-goal');

