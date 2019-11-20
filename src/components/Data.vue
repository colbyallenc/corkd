<template>
  <div>
    <new-message-form />
    <div id='app'>
      <h1>Items</h1>
      <input type="text" v-model="itemName" @keyup.enter="addItem">
      <ul>
        <li v-for="item of items" :key="item.id">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// // import NewMessageForm from './components/NewMessageForm.vue';
// import axios from 'axios';

// const baseURL = 'https://localhost.3000/items';

// export default {
//   name: 'app',
//   components: {
//     // NewMessageForm,
//   },
//   data() {
//     return {
//       items: [],
//       itemName: '',
//     };
//   },
//   async created() {
//     try {
//       const res = await axios.get(baseURL);

//       this.items = res.data;
//     } catch (e) {
//       console.error(e);
//     }
//   },
//   methods: {
//     async addItem() {
//       const res = await axios.post(baseURL, { name: this.itemName });

//       this.items = [...this.items, res.data];

//       this.itemName = '';
//     },
//   },
// };
// </script>

// <style>

//   li {
//     list-style: none;
//   }

// </style>
