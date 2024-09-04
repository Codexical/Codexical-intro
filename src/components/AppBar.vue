<template>
    <v-app-bar style="padding: 3vh;" color="#DFD3C3">
        <v-btn height="auto" rounded="circle">
            <img :src="logo" alt="Button Image" style="width: 70px; height: 70px;">
        </v-btn>
        <v-toolbar-title class=""
            :style="{ color: '#C5705D', fontSize: '30px', fontWeight: 'bold' }">Codexical</v-toolbar-title>
        <div id="computer">
            <v-btn v-for="link in linkOption" :key="link.name" :href="link.url" text>{{ link.name }}</v-btn>
            <v-btn @click="changeLang">中文/English</v-btn>
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
                                <v-btn class="ma-1" @click="changeLang" variant="text">中文/English</v-btn>
                            </div>
                        </v-card-item>
                    </v-card>
                </template>
            </v-dialog>
        </div>
    </v-app-bar>
</template>

<script>
export default {
    data: () => ({
        logo: require('@/assets/logo.png'),
        linkOption: []
    }),
    created() {
        if (!sessionStorage.getItem('lang')) {
            sessionStorage.setItem('lang', 'zh');
        }
        this.linkOption = sessionStorage.getItem('lang') === 'en' ? [
            { name: 'Home', url: '/' },
            { name: 'About Us', url: 'about' },
            { name: 'Services', url: 'service' },
            { name: 'Contact Us', url: 'contact' }
        ] : [
            { name: '首頁', url: '/' },
            { name: '關於我們', url: 'about' },
            { name: '服務內容', url: 'service' },
            { name: '聯絡我們', url: 'contact' }
        ];
    },
    methods: {
        changeLang() {
            sessionStorage.setItem('lang', sessionStorage.getItem('lang') === 'en' ? 'zh' : 'en');
            location.reload();
        }
    }
}
</script>

<style>
@keyframes AppBar {
    from {
        opacity: 0;
        top: -100px;
    }

    to {
        opacity: 1;
        top: 0px;
    }
}

/* .v-app-bar {
    animation: AppBar 0.5s;
} */

#computer {
    display: block;
}

#mobile {
    display: none;
}

@media (max-width: 900px) {
    #computer {
        display: none;
    }

    #mobile {
        display: block;
    }
}
</style>
