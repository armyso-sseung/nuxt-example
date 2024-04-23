<template>
    <div class="flex justify-center">
        <ul class="w-full flex-col flex items-center">
            <NuxtLink
                v-for="content in contents"
                v-slot="{ navigate }"
                :to="`/guide/${ content.path }`"
                custom
            >
                <li
                    class="my-3 py-2 border-y-2 w-[50%] cursor-pointer flex justify-center"
                    @click="navigate()"
                >{{ content.title }}</li>
            </NuxtLink>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta, reactive } from '#imports'

const contents = reactive([
    { title: 'Select', path: 'select' },
    { title: 'Button', path: 'button' },
    { title: 'Swiper', path: 'swiper' },
])

definePageMeta({
})
</script>

<style scoped>

</style>