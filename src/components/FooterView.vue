<template>
    <footer class="footer">
        <v-row class="options">
            <v-btn v-for="link in linkOption" :key="link.name" variant="text" :href="link.url">{{ link.name
                }}</v-btn>
        </v-row>
        <div class="copyright">
            &copy; 2024 Codexical. All rights reserved.
        </div>
    </footer>
</template>

<script>
export default {
    data: () => ({
        linkOption: [
        ]
    }),
    created() {
        this.linkOption = sessionStorage.getItem('lang') === 'en' ? [
            { name: 'Home', url: '#/' },
            // { name: 'About Us', url: 'about' },
            // { name: 'Services', url: 'service' },
            { name: 'Contact Us', url: '#/contact' }
        ] : [
            { name: '首頁', url: '#/' },
            // { name: '關於我們', url: 'about' },
            // { name: '服務內容', url: 'service' },
            { name: '聯絡我們', url: '#/contact' }
        ];
    }
}
</script>

<style scoped>
@keyframes backgroundColorChange {
    from {
        background-color: #F8EDE3;
        color: #F8EDE3;

    }

    to {
        background-color: #D0B8A8;
        color: black;
    }
}

.footer {
    animation: backgroundColorChange 1s forwards;
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.options {
    padding: 1rem 0;
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
}

.copyright {
    font-size: 0.8rem;
}
</style>