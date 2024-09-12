<template>
    <v-main>
        <v-container style="height: 85vh;" class="d-flex align-center justify-center flex-column">
            <div class="text-center">
                <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="1000">
                    <h1 class="text-h4 text-md-h2 font-weight-bold my-6">
                        {{ mainViewContent[language].title }}
                    </h1>
                </div>
                <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="500" :duration="500">
                    <div class="text-body-1 text-medium-emphasis mb-10">
                        {{ mainViewContent[language].description }}
                    </div>
                </div>
            </div>
            <div v-motion :initial="{ opacity: 0, y: -100 }" :enter="{ opacity: 1, y: 0 }" :delay="1000"
                :duration="500">
                <v-btn icon large @click="scrollDown()">
                    <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </div>
        </v-container>
        <v-container>
            <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
                <h2 class="text-h2 text-md-h2 font-weight-bold my-6">
                    {{ mainViewContent[language].service.title }}
                </h2>
                <div class="text-body-1 text-medium-emphasis mb-5">
                    {{ mainViewContent[language].service.description }}
                </div>
                <v-row class="d-flex align-center mb-5" v-for="(service, i) in mainViewContent[language].service.list"
                    :key="i">
                    <v-col cols="12" md="2">
                        <div class="d-flex justify-center">
                            <v-icon :icon="service.icon" size="100"></v-icon>
                        </div>
                    </v-col>
                    <v-col cols="12" md="10">
                        <p class="text-h5 text-md-h5 font-weight-bold">
                            {{ service.title }}
                        </p>
                        <p class="text-body-1 text-medium-emphasis">
                            {{ service.description }}
                        </p>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <v-container>
            <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
                <v-row>
                    <v-col cols="12" md="6">
                        <h2 class="text-h2 text-md-h2 font-weight-bold my-6">
                            {{ mainViewContent[language].team.title }}
                        </h2>
                        <div class="text-body-1 text-medium-emphasis mb-10">
                            {{ mainViewContent[language].team.description }}
                        </div>
                    </v-col>
                    <v-col cols="12" md="6">
                        <v-row class="">
                            <v-col cols="12">
                                <div v-for="(member, i) in teamMembers" :key="i">
                                    <div v-motion :initial="{ opacity: 0, x: -100 }"
                                        :visible-once="{ opacity: 1, x: 0 }" :duration="500">
                                        <v-card class="mb-4 pa-3"
                                            :style="{ color: '#C5705D', backgroundColor: '#F5E5D7', fontSize: '20px', fontWeight: 'bold' }"
                                            elevation="
                                            2">
                                            <v-row>
                                                <v-col cols="4">
                                                    <v-img :src="member.image" aspect-ratio="1"></v-img>
                                                </v-col>
                                                <v-col cols="8">
                                                    <h3>{{ member.name }}</h3>
                                                    <h4 class="text-medium-emphasis">{{ member.position }}</h4>
                                                    <p>{{ member.description }}</p>
                                                </v-col>
                                            </v-row>
                                        </v-card>
                                    </div>
                                </div>
                                <div v-motion :initial="{ opacity: 0, x: -100 }" :visible-once="{ opacity: 1, x: 0 }"
                                    :duration="500">
                                    <v-card :style="{ backgroundColor: '#F5E5D7' }" class="mx-auto" href="about"
                                        prepend-icon="mdi-account-multiple" rel="noopener"
                                        :title="mainViewContent[language].team.moreInfo"></v-card>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </div>
        </v-container>
        <v-container>
            <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
                <v-responsive class="text-center mx-auto" max-width="700">
                    <h2 class="text-h2 text-md-h2 font-weight-bold my-6">
                        {{ mainViewContent[language].tools.title }}
                    </h2>

                    <p class="mt-4 text-body-1 text-medium-emphasis">
                        {{ mainViewContent[language].tools.description }}
                    </p>
                </v-responsive>
                <v-row class="mt-10 mx-10">
                    <v-col v-for="(item, i) in features" :key="i" class="d-flex" cols="12" md="4">
                        <v-card :style="{ backgroundColor: '#F5E5D7' }" append-icon="mdi-open-in-new" width="344px"
                            class="mx-auto" :href="item.herf" :prepend-icon="item.icon" rel="noopener" target="_blank"
                            :title="item.title"></v-card>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </v-main>
</template>

<script>
import features from '@/assets/features.json';
import mainViewContent from '@/assets/mainView.json';
import members from '@/assets/member.json';
export default {
    data() {
        return {
            features: [],
            language: sessionStorage.getItem('lang'),
            mainViewContent: mainViewContent,
            services: [],
            teamMembers: []
        };
    },
    created() {
        this.loadData();
    },
    methods: {
        loadData() {
            for (let i = 0; i < members['members'].length; i++) {
                this.teamMembers.push({
                    name: members['members'][i].name,
                    position: members['members'][i].position,
                    description: members['members'][i].description,
                    image: require(`@/assets/people/${members['members'][i].image}`)
                });
            }
            for (let i = 0; i < features['features'].length; i++) {
                this.features.push({
                    title: features['features'][i].title,
                    icon: features['features'][i].icon,
                    herf: features['features'][i].herf
                });
            }
        },
        scrollDown() {
            window.scrollBy({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        }
    }
}
</script>

<style scoped>
.v-container {
    margin-bottom: 10vh;
}
</style>