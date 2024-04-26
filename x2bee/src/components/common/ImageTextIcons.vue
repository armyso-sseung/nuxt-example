<template>
    <Swiper slides-per-view="auto" :space-between="0" class="slide-category">
        <SwiperSlide v-for="(icon, idx) in iconData" :key="idx" :style="{ width: 'auto'}">
            <button v-if="icon.imageList.at(0) && icon.textList.at(0)" type="button" class="flex flex-col items-center w-full">
                <span class="flex items-center justify-center size-[54px] bg-gray2 rounded-[20px]">
                    <img :src="icon.imageList.at(0)?.contPathNm" :alt="icon.imageList.at(0)?.altCont" :width="32" :height="32" />
                </span>
                <div class="mt-2 body2 pc:body1 break-keep">{{ icon.textList.at(0)?.contTitleNm }}</div>
            </button>
        </SwiperSlide>
    </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import type { ImageTextIconProps } from '~/types/common/components-type'

defineProps<ImageTextIconProps>()

const isMobile = false
</script>

<style scoped>

</style>