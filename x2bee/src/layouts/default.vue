<template>
    <div class="flex min-h-screen flex-col min-w-[1280px]">
        <HeaderLayout />
        <Container>
            <ContentsWrap>
                <NuxtPage />
            </ContentsWrap>
        </Container>
        <FooterLayout />
    </div>
</template>

<script setup lang="ts">
import HeaderLayout from '~/components/layout/HeaderLayout.vue'
import FooterLayout from '~/components/layout/FooterLayout.vue'
import Container from '~/components/layout/Container.vue'
import ContentsWrap from '~/components/layout/ContentsWrap.vue'
import 'swiper/css';
</script>

<style scoped>

</style>