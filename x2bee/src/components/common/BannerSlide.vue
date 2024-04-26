<template>
    <div :class="`swiper-type-${ full ? 'full' : 'card' }`">
        <Swiper
            ref="swiperRef"
            :space-between="space"
            :slides-per-group="!isMobile ? slideCount : 1"
            slides-per-view="auto"
            :navigation="true"
            :pagination="{
                enabled: true,
                type: 'fraction',
                clickable: true
            }"
            :modules="[Pagination, Navigation, Autoplay]"
            :class="cn(
                SlideBannerVariants({
                    type: props.type
                })
            )"
            :loop="props.loop"
            :autoplay="props.autoplay"
        >
            <slot />
            <div
                v-if="full"
                class="absolute z-10 bottom-5 right-[72px] pc:right-auto pc:left-[calc(50%-38px)] pc:-translate-x-1/2 size-5 leading-5"
            >
                <button type="button" @click="toggleAutoPlay" class="btn-play-control">
                    <ImgMedia :src="isPlaying ? '/images/icons/ico_swiper_stop.svg' : '/images/icons/ico_swiper_play.svg'" alt="isPlaying ? 'Pause' : 'Play'" />
                </button>
            </div>
        </Swiper>
    </div>
</template>

<script setup lang="ts">
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/vue'
import { ref } from '#imports'
import { cn } from '~/lib/common/ui/utils'
import type { BannerSlideProps } from '~/types/common/components-type'
import { SlideBannerVariants } from '~/lib/common/component/swiper-variables'
import ImgMedia from '~/components/common/ImgMedia.vue'

type PropsType = Pick<BannerSlideProps, "type"> & {
    loop: boolean,
    autoplay: boolean
}
const props = withDefaults(defineProps<PropsType>(), {
    type: 'card',
    loop: false,
    autoplay: false
})

const swiperRef = ref<any>(null)
const isPlaying = ref(true)
const isMobile = false

const full = props.type === 'full'
const slideCount = full ? 1 : 3
const space = full ? 0 : !isMobile ? 24: 12

const toggleAutoPlay = () => {
    const swiperInstance = swiperRef.value.$el.swiper
    console.log(swiperInstance.autoplay)
    isPlaying.value ? swiperInstance.autoplay.stop() : swiperInstance.autoplay.start()
    isPlaying.value = !isPlaying.value
}
</script>

<style scoped>

</style>