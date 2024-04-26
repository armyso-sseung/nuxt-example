<template>
    <picture>
        <source
            v-if="pcSrc"
            :srcset="getNextImage({
                src: pcSrc,
                alt: pcAlt,
                width: pcWidth / 2,
                priority
            })"
        @error="handleError"
        :class="pcClassName"
        :media="`(min-width: ${breakPoints.pc})`"
        />
        <img
            :src="getNextImage({
                src,
                alt,
                width: width / 2,
                priority
            })"
        :alt="alt"
        @error="handleError"
        :loading="priority ? 'eager' : 'lazy'"
        :class="className"
        />
    </picture>
</template>

<script setup lang="ts">
import { NO_IMAGE_PATH } from '~/constants/x2beeConstants'
import { breakPoints } from '~/lib/common/ui/variables'
import type { CommonProps } from '~/types/common/commonTypes'
import { getNextImage } from '~/lib/common/ui/image/image-utils'
import { watch } from '#imports'

interface ImgProps extends CommonProps{
    // MO 이미지 정보
    src?: string
    alt?: string
    width?: number

    // PC 이미지 정보
    pcSrc?: string
    pcAlt?: string
    pcWidth?: number
    pcClassName?: string

    priority?: boolean
}

const props = withDefaults(defineProps<ImgProps>(), {
    src: '',
    alt: '',
    width: 500,
    pcSrc: '',
    pcAlt: '',
    pcWidth: 1024,
    pcClassName: '',
    priority: false,
    isPlaying: false
})

const handleError = (event: any ) => {
    event.currentTarget.src = NO_IMAGE_PATH
}

watch(() => props, (n, o) => {
    console.log(n)
    console.log(o)
    console.log(props)
})
</script>

<style scoped>

</style>