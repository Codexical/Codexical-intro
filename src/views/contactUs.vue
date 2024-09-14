<template>
  <v-main>
    <v-container style="margin-bottom: 20vh;">
      <div>
        <h1 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0}" :delay="0" :duration="1000">
          {{ contactUsContent[language].title }}
        </h1>
        &nbsp;
        <h2 v-motion :initial="{ opacity: 0, y: 100 }" :enter="{ opacity: 1, y: 0}" :delay="0" :duration="1000">
          {{ contactUsContent[language].Description }}
        </h2>
      </div>
      <div v-motion :initial="{ opacity: 0, y: 100 }" :visible-once="{ opacity: 1, y: 0 }" :delay="1500" :duration="1000" style="margin-top: 5vh; text-align: center;">
        <form @submit.prevent="handleSubmit">
            <div >
              <label for="message">{{ contactUsContent[language].EmailDescription }}</label>
              <textarea v-model="message" id="message" required></textarea>
            </div>
          <button id="submit" type="submit">Submit</button>
        </form>
      </div>
    </v-container>
    <v-container>
      <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
        <h2>
          {{ contactUsContent[language].OtherContact }}
        </h2>
        <v-btn height="70px" width="70px" variant="text" href="https://discord.gg/MX5VBqtw3r" target="_blank">
          <v-icon icon="mdi-discord" size="60" ></v-icon>
        </v-btn>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import contactUsContent from '@/assets/contactUs.json';
export default {
  data() {
    return {
      message: '',
      language: sessionStorage.getItem('lang'),
      contactUsContent: contactUsContent
    };
  },
  methods: {
    async handleSubmit() {
      window.open(`mailto:contact@codex.tw?subject=合作邀約&body=${this.message}`);
    }
  }
};
</script>

<style scoped>
.v-container {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 10vh;
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

#submit{
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#submit:hover {
  background-color: #45a049;
}
</style>