const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      fullname: ''
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = '';
    }
  },
  computed: {
    // fullname() {
    //   if (this.name === '' || this.lastName === '') {
    //     return '';
    //   }
    //   return this.name + ' ' + this.lastName;
    // }
  },
  watch: {
    // Whenever name changes, this name method will re-execute.
    // A watcher function automatically gets the last value,
    // the latest value of the watch property as an argument.
    // So value argument is passed automatically by Vue.
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // Drawback: lots of code (E.g, fullName)
    name (value) {
      if (value === '') {
        this.fullname = '';
      } else{
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName (value) {
      if (value === '') {
        this.fullname = '';
      } else{
        this.fullname = this.name + ' ' + value;
      }
    }
  }
});

app.mount('#events');
