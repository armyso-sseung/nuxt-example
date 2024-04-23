<template>
    <div :class="cn('btn-area shrink-0',
    buttonAreaVariants({
    }))">

    </div>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'
import { cn } from '~/lib/common/ui/utils'

defineProps()

const buttonAreaVariants = cva("flex", {
    variants: {
        type : {
            default:"flex",
            column: "flex-row flex-nowrap gap-x-2 justify-center items-center",
            row: "flex-col flex-wrap gap-y-2",
            right:"justify-end"
        },
        size : {
            default: "",
            full : "type-full w-full [&>button]:flex-1 [&>a]:flex-1 ",
        }
    },
    defaultVariants: {
        type: "default",
        size: "default"
    }
})

interface ButtonAreaProps {
    className?:string
}
</script>

<style scoped>

</style>