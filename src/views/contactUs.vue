<template>
  <div class="contact-us">
    <h1 v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="0" :duration="1000" style="text-align: center;">
      Contact Us
    </h1>
    &nbsp;
    <h2 v-motion :initial="{ opacity: 0, x: -100}" :enter="{ opacity: 1, x: 0}" :delay="0" :duration="1000">
      Codexical look forward to collaborate with you.
      <br>
      If you are intrested in our services.
      <br> 
      You can contact us via the following methods.
    </h2>
  </div>
  <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000" class="contact-us">
    <form @submit.prevent="handleSubmit">
        <div >
          <label for="message">Email</label>
          <textarea v-model="message" id="message" required></textarea>
        </div>
      <button type="submit">Submit</button>
    </form>
    <div>
      <h1>
        Others
      </h1>
      <span class="mdi mdi-discord mdi-48px"></span>
      <v-img src="@/assets/line.png" style="width: 48px;"></v-img>
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