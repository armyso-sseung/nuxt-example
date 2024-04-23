<template>
    <SlideBtnList>
        <template v-for="item in itemList">
            <SlideBtn :data="item" />
        </template>
    </SlideBtnList>
</template>

<script setup>
import SlideBtnList from "~/components/common/SlideBtnList.vue";
import SlideBtn from "~/components/common/SlideBtn.vue";

const itemList = [
    {
        id: 'slide01',
        label: 'slide01'
    }, {
        id: 'slide02',
        label: 'slide02'
    }, {
        id: 'slide03',
        label: 'slide03'
    }, {
        id: 'slide04',
        label: 'slide04'
    }, {
        id: 'slide05',
        label: 'slide05'
    }, {
        id: 'slide06',
        label: 'slide06'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }, {
        id: 'slide07',
        label: 'slide07'
    }
]
</script>