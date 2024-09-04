<template>
  <div class="profile-page">
    <div 
      v-for="(person, index) in people" 
      :key="index" 
      class="profile-card"
      @click="showDetails(person)"
    >
      <img class="profile-picture" :src="person.profilePicture" :alt="person.name" />
      <h1>{{ person.name }}</h1>
      <p>{{ person.bio }}</p>
      <div class="social-links">
        <!--<a v-if="person.twitter" :href="person.twitter" target="_blank">Twitter</a>-->
        <!--<a v-if="person.linkedin" :href="person.linkedin" target="_blank">LinkedIn</a>-->
        <a v-if="person.github" :href="person.github" target="_blank">GitHub</a>
      </div>
    </div>

    <!-- 模態窗口 -->
    <div v-if="showModal" class="modal" @click.self="closeModal">
      <div class="modal-content">
        <span class="close-button" @click="closeModal">&times;</span>
        <div class="modal-body">
          <div class="modal-image">
            <img :src="selectedPerson.profilePicture" :alt="selectedPerson.name" />
          </div>
          <div class="modal-details">
            <h2>{{ selectedPerson.name }}</h2>
            <p>{{ selectedPerson.bio }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewPage',
  data() {
    return {
      people: [
        {
          name: 'CC Tsai',
          bio: 'little biography',
          profilePicture: 'https://via.placeholder.com/150',
          github: 'https://github.com/johndoe',
        },
        {
          name: 'YJ Zheng',
          bio: 'little biography',
          profilePicture: 'https://via.placeholder.com/150',
          github: 'https://github.com/janesmith',
        },
        {
          name: 'PJ Wang',
          bio: 'little biography',
          profilePicture: 'https://via.placeholder.com/150',
          github: 'https://github.com/janesmith',
        },
        // 可以繼續添加更多人的資料
      ],
      selectedPerson: null,
      showModal: false,
    };
  },
  methods: {
    showDetails(person) {
      this.selectedPerson = person;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.selectedPerson = null;
    }
  }
};
</script>

<style scoped>
.profile-page {
  display: flex;
  justify-content: center; /* 東西置中 */
  align-items: flex-start; /* 頂部對齊 */
  flex-wrap: wrap;         /* 卡片過多會換行 */
  gap: 20px;              /* 卡片之間的間距 */
  padding: 20px;          /* 卡片內提供空間 */
  background-color: #f9f9f9; /* 背景 */
}

.profile-card {
  background-color: #fff; /* 卡片背景白色 */
  padding: 20px;          /* 卡片內容和邊框為20 */
  border-radius: 10px;    /* 卡片的邊角設置為圓角 */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);  
  text-align: center;     /* 卡片內部文字置中對齊 */
  max-width: 300px;       /* 限制寬度 */
  width: 100%;            /* 如果寬度超過父容器，會隨著父容器縮小 */
  cursor: pointer;        /* 鼠標指針變為手型，表示可點擊 */
}

.profile-picture {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
}

.modal-body {
  display: flex;
}

.modal-image {
  flex: 1;
  margin-right: 20px;
}

.modal-image img {
  width: 100%;
  border-radius: 5px;
}

.modal-details {
  flex: 2;
}
</style>
