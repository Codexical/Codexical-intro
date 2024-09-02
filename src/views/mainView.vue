<template>
    <v-main min-height="88vh" class="d-flex">
        <v-container class="d-flex align-center justify-center flex-column">
            <div class="text-center">
                <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="1000">
                    <h1 class="text-h4 text-md-h2 font-weight-bold my-6">
                        Weaving Dreams with code.
                    </h1>
                </div>
                <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :delay="500" :duration="500">
                    <div class="text-body-1 text-medium-emphasis mb-10">
                        為您的數位願景賦予生命
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
    </v-main>
    <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
        <v-main>
            <v-container>
                <h2 class="text-h2 text-md-h2 font-weight-bold my-6">
                    What we can do for you.
                </h2>
                <div class="text-body-1 text-medium-emphasis mb-5">
                    We offer a range of services to help you create a website that meets your needs. From web
                    design to
                    development, we can help you every step of the way. Our team is dedicated to delivering
                    high-quality
                    websites that are tailored to your business.
                </div>
                <v-row class="d-flex align-center mb-5">
                    <v-col cols="12" md="2">
                        <div class="d-flex justify-center">
                            <v-icon icon="mdi-vuejs" size="100"></v-icon>
                        </div>
                    </v-col>
                    <v-col cols="12" md="10">
                        <p class="text-h5 text-md-h5 font-weight-bold">
                            Frontend Development
                        </p>
                        <p class="text-body-1 text-medium-emphasis">
                            Our team builds dynamic and responsive user interfaces using modern technologies like Vue,
                            Vuetify, CSS, and JavaScript. We focus on creating visually appealing and user-friendly
                            designs that engage your audience.
                        </p>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mb-5">
                    <v-col cols="12" md="2">
                        <div class="d-flex justify-center">
                            <v-icon icon="mdi-language-python" size="100"></v-icon>
                        </div>
                    </v-col>
                    <v-col cols="12" md="10">
                        <p class="text-h5 text-md-h5 font-weight-bold">
                            Backend Development
                        </p>
                        <p class="text-body-1 text-medium-emphasis">
                            Our back-end expertise includes using Flask, FastAPI, and Django to create robust and
                            scalable server-side applications. We ensure your website operates efficiently and handles
                            complex data interactions securely.
                        </p>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mb-5">
                    <v-col cols="12" md="2">
                        <div class="d-flex justify-center">
                            <v-icon icon="mdi-docker" size="100"></v-icon>
                        </div>
                    </v-col>
                    <v-col cols="12" md="10">
                        <p class="text-h5 text-md-h5 font-weight-bold">
                            Web Deployment
                        </p>
                        <p class="text-body-1 text-medium-emphasis">
                            We deploy your website using Docker and Kubernetes (k8s) for reliable, scalable, and
                            efficient hosting. Our deployment strategies ensure your site remains accessible and
                            performs well under varying loads.
                        </p>
                    </v-col>
                </v-row>
                <v-row class="d-flex align-center mb-5">
                    <v-col cols="12" md="2">
                        <div class="d-flex justify-center">
                            <v-icon icon="mdi-database" size="100"></v-icon>
                        </div>
                    </v-col>
                    <v-col cols="12" md="10">
                        <p class="text-h5 text-md-h5 font-weight-bold">
                            Database Management
                        </p>
                        <p class="text-body-1 text-medium-emphasis">
                            We use PostgreSQL to manage and store your data effectively. Our database solutions are
                            designed for reliability and performance, supporting your website's and its users' needs.
                        </p>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
    <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
        <v-main class="d-flex pa-5">
            <v-container>
                <v-row>
                    <v-col cols="12" md="6">
                        <h2 class="text-h2 text-md-h2 font-weight-bold my-6">
                            Meet Our Team.
                        </h2>
                        <div class="text-body-1 text-medium-emphasis mb-10">
                            Our team is made up of talented web developers and designers. We work together to create
                            websites that are both beautiful and functional. Each member brings their skills and
                            creativity, ensuring we deliver our clients the best results.
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
                                        prepend-icon="mdi-account-multiple" rel="noopener" target="_blank"
                                        title="Learn more about our team."></v-card>
                                </div>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
    <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="1000">
        <v-main class="d-flex pa-5">
            <v-container>
                <v-responsive class="text-center mx-auto" max-width="700">
                    <h2 class="text-h2 text-md-h2 font-weight-bold my-6">
                        Everything we used to create a website.
                    </h2>

                    <p class="mt-4 text-body-1 text-medium-emphasis">
                        We use the best tools and technologies to build websites. From coding languages to design
                        software,
                        everything we use is top quality. We aim to create websites that are easy to use and look great
                        on
                        any device.
                    </p>
                </v-responsive>
                <v-row class="mt-10 mx-10">
                    <v-col v-for="(item, i) in features" :key="i" class="d-flex" cols="12" md="4">
                        <v-card :style="{ backgroundColor: '#F5E5D7' }" append-icon="mdi-open-in-new" width="344px"
                            class="mx-auto" :href="item.herf" :prepend-icon="item.icon" rel="noopener" target="_blank"
                            :title="item.title"></v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
import members from '@/assets/member.json';
import features from '@/assets/features.json';
export default {
    data() {
        return {
            teamMembers: [],
            features: []
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
                top: window.innerHeight * 0.88,
                behavior: 'smooth'
            });
        }
    }
}
</script>
