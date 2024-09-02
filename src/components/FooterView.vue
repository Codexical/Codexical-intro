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
            { name: 'Home', url: '/' },
            { name: 'About Us', url: 'about' },
            { name: 'Services', url: 'service' },
            { name: 'Contact Us', url: 'contact' }
        ]
    })
}
</script>

<style scoped>
.footer {
    background-color: #D0B8A8;
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