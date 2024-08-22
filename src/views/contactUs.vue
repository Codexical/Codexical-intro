<template>
    <div class="contact-us">
      <h1 v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="0" :duration="1000">
        聯絡我們
      </h1>
      &nbsp;
      <h2 v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="0" :duration="1000">
        期待與您的合作
        <br>
        如果您對於我們的服務感興趣
        <br> 
        可以透過以下的方式與我們取得聯繫
      </h2>
      <form v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="200" :duration="1000" @submit.prevent="handleSubmit">
          <div >
            <label for="message">Email</label>
            <textarea v-model="message" id="message" required></textarea>
          </div>
        <button type="submit">送出</button>
      </form>

      &nbsp;
      <div v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="200" :duration="1000">
        <h1>
          其他聯絡方式
        </h1>
        <span class="mdi mdi-discord mdi-48px"></span>
      </div>
    </div>
  </template>
<script>
export default {
  data() {
    return {
      message: ''
    };
  },
  methods: {
    async handleSubmit() {
      window.open(`mailto:abc@example.com?subject=合作邀約&body=${this.message}`);
    }
  }
};
</script>

<style scoped>
.contact-us {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
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