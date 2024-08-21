<template>
    <div class="contact-us">
      <h1>聯絡我們</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="name">姓名:</label>
          <input type="text" v-model="form.name" id="name" required>
        </div>
        <div>
          <label for="email">電子郵件:</label>
          <input type="email" v-model="form.email" id="email" required>
        </div>
        <div>
          <label for="message">訊息:</label>
          <textarea v-model="form.message" id="message" required></textarea>
        </div>
        <button type="submit">送出</button>
      </form>
    </div>
  </template>
  
<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    async handleSubmit() {
      try {
        const response = await axios.post('/api/contact', this.form);
        console.log('表單已成功提交', response.data);
      } catch (error) {
        console.error('提交表單時出錯', error);
      }
    }
  }
};

</script>

<style scoped>
.contact-us {
    max-width: 600px;
    margin: 0 auto;
}

label {
    display: block;
    margin-bottom: 5px;
}

input, textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    background-color: #4CAF50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>