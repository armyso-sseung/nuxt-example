<template>
    <div>
        <CommonButton
            variant="bgcolor"
            size="base"
            @click="handleClickButton"
        >test</CommonButton>
    </div>
</template>

<script setup lang="ts">
const handleClickButton = () => {
    alert('버튼이 클릭 되었습니다.')
}
</script>

<style scoped>

</style>