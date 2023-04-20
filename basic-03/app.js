const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
      address: ''
    };
  },
  methods: {
    //When you add an event listener. then point at a function that should be 
    //executed when that event occurs.
    //The function will automatically get one argument when that event occurs.
    //The argument will be an object describing the event that occured.
    setName (event) {
      //event.target: It give access to the element on which the event occurred.
      this.name = event.target.value;
    },
    confirmInput () {
      this.confirmedName = this.name;
    },
    //get event without overwriting by the city.
    setAddress (event, city) {
      this.address = event.target.value + ' ' + city;
    },
    //num override default argument (event). 
    add (num) {
      this.counter += num;
    },
    //num override default argument (event).
    reduce (num) {
      this.counter -= num;
    },
    //if we apply event modifier, this function can be removed.
    submitForm (event) {
      //preventDefault(): The form should not be submitted.
      event.preventDefault();
    }
   }
});

app.mount('#events');
