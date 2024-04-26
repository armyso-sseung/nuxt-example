<template>
    <SwiperSlide :style="{...slideSize}">
        <slot />
    </SwiperSlide>
</template>


<script lang="ts">
export default {
    name: 'SwiperSlide'
}
</script>
<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import type { BannerSlideProps } from '~/types/common/components-type'
import { cardSize, fullSize } from '~/lib/common/component/swiper-variables'

const { type } = withDefaults(defineProps<BannerSlideProps>(), {
    type: 'card'
})

const isMobile = false
const full = type === 'full'

// swiper 기본 css의 width, height 를 덮어쓰기 위해 인라인으로 적용
const slideSize = {
    width: full ? "100%" : !isMobile ? cardSize.pc.width : cardSize.mo.width,
    height: full ? (!isMobile ? fullSize.pc.height : fullSize.mo.height) : (!isMobile ? cardSize.pc.height : cardSize.mo.height)
}
</script>

<style scoped>

</style>