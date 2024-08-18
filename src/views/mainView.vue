<template>
    <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="1000">
        <v-main min-height="88vh" class="d-flex">
            <v-container class="d-flex align-center justify-center flex-column">
                <div class="text-center">
                    <h1 class="text-h4 text-md-h2 font-weight-bold my-6">
                        Weaving Dreams with code.
                    </h1>

                    <div class="text-body-1 text-medium-emphasis mb-10">
                        為您的數位願景賦予生命
                    </div>
                </div>
                <v-btn icon large @click="scrollDown()">
                    <v-icon>mdi-chevron-down</v-icon>
                </v-btn>
            </v-container>
        </v-main>
    </div>
    <div v-motion :initial="{ opacity: 0 }" :enter="{ opacity: 1 }" :duration="1000">
        <v-main>
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <h2 class="text-h1 text-md-h1 font-weight-bold my-6">
                            Meet Our Team.
                        </h2>
                        <div class="text-body-1 text-medium-emphasis mb-10">
                            We are a group of creative artisans who are passionate about web art, focusing on seamlessly
                            blending technology with aesthetics to create unique digital experiences for you. We believe
                            that every website is an unfinished canvas, and our mission is to breathe life and soul into
                            it.
                        </div>
                    </v-col>
                    <v-col cols="12" md="8">
                        <v-row>
                            <v-col cols="12" v-for="member in teamMembers" :key="member.name">
                                <v-card class="mb-4 pa-3" elevation="2">
                                    <v-row>
                                        <v-col cols="4">
                                            <v-img :src="member.image" aspect-ratio="1"></v-img>
                                        </v-col>
                                        <v-col cols="8">
                                            <h3>{{ member.name }}</h3>
                                            <h4>{{ member.position }}</h4>
                                            <p>{{ member.description }}</p>
                                        </v-col>
                                    </v-row>
                                </v-card>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </div>
</template>

<script>
export default {
    data() {
        return {
            teamMembers: [
                {
                    name: "YJ Zheng",
                    position: "CEO",
                    description: "",
                    image: "https://avatars.githubusercontent.com/u/71997357",
                },
                {
                    name: "CC Tsai",
                    position: "CTO",
                    description: "",
                    image: "https://avatars.githubusercontent.com/u/63115437",
                },
                {
                    name: "PR Wang",
                    position: "COO",
                    description: "",
                    image: "https://avatars.githubusercontent.com/u/81376034",
                },
            ],
        };
    },
    methods: {
        scrollDown() {
            window.scrollTo({
                top: window.innerHeight * 0.88,
                behavior: 'smooth'
            });
        }
    }
}
</script>
