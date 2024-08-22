<template>
    <div v-motion :initial="{ opacity: 0 }" :visible-once="{ opacity: 1 }" :duration="300">
        <v-app-bar style="padding: 3vh;" color="#212121">
            <v-btn height="auto" rounded="circle">
                <img src="https://avatars.githubusercontent.com/u/138449305" alt="Button Image"
                    style="width: 70px; height: 70px;">
            </v-btn>
            <v-toolbar-title class="font-weight-black text-orange">Codexical</v-toolbar-title>
            <div id="computer">
                <v-btn v-for="link in linkOption" :key="link.name" :href="link.url" text>{{ link.name }}</v-btn>
            </div>
            <div id="mobile">
                <v-dialog max-width="340" transition="scale-transition">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn v-bind="activatorProps" icon="mdi-dots-vertical"></v-btn>
                    </template>
                    <template v-slot:default>
                        <v-card>
                            <v-card-item>
                                <div class="d-flex flex-column">
                                    <v-btn class="ma-1" v-for="link in linkOption" :key="link.name" :href="link.url"
                                        variant="text">{{
                                            link.name }}</v-btn>
                                </div>
                            </v-card-item>
                        </v-card>
                    </template>
                </v-dialog>
            </div>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    data: () => ({
        linkOption: [
            { name: 'Home', url: '/' },
            { name: 'About Us', url: '#' },
            { name: 'Services', url: '#' },
            { name: 'Contact Us', url: 'contact' }
        ]
    })
}
</script>

<style>
#computer {
    display: block;
}

#mobile {
    display: none;
}

@media (max-width: 700px) {
    #computer {
        display: none;
    }

    #mobile {
        display: block;
    }
}
</style>
