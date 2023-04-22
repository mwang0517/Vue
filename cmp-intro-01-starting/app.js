const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '01234 5678 991',
          email: 'manuel@localhost.com',
        },
        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '09876 543 221',
          email: 'julie@localhost.com',
        },
      ],
    };
  },
});

// Component is reusable pieces of HTML!
// We want to create a new component! It is a new Vue app, but it will connected to our main app.
// First Argument: identifier (your own HTML tag), always contains a '-' to avoid conflict!
// Second Argument: a config object, just as you pass it to createApp.
app.component('friend-contact', {
  // We have to add a template (not the best way now)
  template: `
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails()">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
  `,
  data () {
    return {
      detailsAreVisible: false,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenzo',
        phone: '01234 5678 991',
        email: 'manuel@localhost.com',
      },
    }
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    }
  }
});

app.mount('#app');