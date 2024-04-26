<template>
    <SwiperSlide :style="{ width: 'auto' }">
        <button
            type="button"
            :data-state="`${ active ? 'active' : 'inactive' }`"
            @click="(event) => $emit('click', event)"
        >
            <span>{{ data.label }}</span>
        </button>
    </SwiperSlide>
</template>
<script lang="ts">
export default {
    name: 'SwiperSlide'
}
</script>
<script setup lang="ts">
import { SwiperSlide } from 'swiper/vue';
import type { SwiperSlideProps } from '~/types/common/components-type'
import type { CommonEmits } from '~/types/common/commonTypes'

type SwiperEmits = Pick<CommonEmits, "click">
defineEmits<SwiperEmits>()
withDefaults(defineProps<SwiperSlideProps>(), {
    active: false
})
</script>

<style scoped>

</style>