<template>
    <SlideBtnList className="mb-5">
        <CommonSlideBtn
            v-for="item in itemList"
            :key="`terms_tab_${item.id}`"
            :data="item"
            :active="activeId === item.id"
            @click="() => handleSlideClick(item.id)"
        />
    </SlideBtnList>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <BannerSlide type="card" :loop="false" :autoplay="false" >
        <CommonBannerSlideContents v-for="(item, idx) in cardSlideBannerData" :key="idx" type="card">
            <NuxtLink :to="item.linkUrl" :class="cardStyles.linkBox">
                <ImgMedia
                    :src="item.imgUrl"
                    :alt="item.title"
                    :width="isMobile ? 242 : 384"
                    :class="cardStyles.img"
                />
                <div :class="cn(cardStyles.textBox, item.fontColor ? `text-${ item.fontColor }` : 'text-black')">
                    <div :class="cardStyles.title">{{ item.title }}</div>
                    <div :class="cardStyles.description">
                        {{ item.description }}
                    </div>
                </div>
            </NuxtLink>
        </CommonBannerSlideContents>
    </BannerSlide>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <BannerSlide type="full" loop autoplay>
        <CommonBannerSlideContents v-for="(item, idx) in fullSlideBannerData" :key="idx" type="full">
            <NuxtLink :to="item.linkUrl" :class="fullStyles.linkBox">
                <ImgMedia
                    :src="item.imgUrl"
                    :alt="item.title"
                    :class="fullStyles.img"
                    :pcSrc="item.imgUrlPc"
                    :pcAlt="item.title"
                    :pcClassName="fullStyles.img"
                    :pcWidth="SwiperImageWidth.full"
                />
                <div :class="cn(fullStyles.textBox, item.fontColor ? `text-${ item.fontColor }` : 'text-black')">
                    <div :class="fullStyles.title">{{ item.title }}</div>
                    <div :class="fullStyles.description">
                        {{ item.description }}
                    </div>
                </div>
            </NuxtLink>
        </CommonBannerSlideContents>
    </BannerSlide>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ImageTextIcons :icon-data="categoryListData" />
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <ThumbnailSlide :thumbnail-data="thumbnailSildeData" className="goods-main-slide mo:mt-10" />
</template>

<script setup lang="ts">
import {computed, ref, watch} from "#imports";
import SlideBtnList from '~/components/common/SlideBtnList.vue'
import BannerSlide from '~/components/common/BannerSlide.vue'
import ImgMedia from '~/components/common/ImgMedia.vue'
import { cardStyles, fullStyles } from '~/lib/common/component/swiper-variables'
import { SwiperImageWidth } from '~/lib/common/ui/image/image-variables'
import { cn } from '~/lib/common/ui/utils'
import ImageTextIcons from '~/components/common/ImageTextIcons.vue'
import ThumbnailSlide from '~/components/common/ThumbnailSlide.vue'

const isMobile = false
const testBtn = ref(true)
const testStr = ref('')
const imgAttr = computed(() => {
    console.log(testBtn.value ? '/images/thumb/banner/small_01.jpg' : '/images/thumb/banner/small_02.jpg')
    return testBtn.value ? '/images/thumb/banner/small_01.jpg' : '/images/thumb/banner/small_02.jpg'
})

const handleChangeClick = () => {
    console.log('clicked')
    testStr.value = 'ffffff'
    testBtn.value = !testBtn.value
}

watch(imgAttr, () => {
    console.log(imgAttr.value)
})

watch(testBtn, () => {
    console.log(testBtn.value)
})

const itemList = [
    { id: '1', label: '전체' },
    { id: '2', label: '뷰티' },
    { id: '3', label: '럭셔리' },
    { id: '4', label: '여성패션' },
    { id: '5', label: '남성패션' },
    { id: '6', label: '식품' },
    { id: '7', label: '생활/건강' },
    { id: '8', label: '가구/홈데코' }
]
const activeId = ref(itemList.at(0)?.id)
const handleSlideClick = (id: string) => {
    activeId.value = id
}



const cardSlideBannerData = [
    {
        imgUrl: '/images/thumb/banner/small_01.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    },
    {
        imgUrl: '/images/thumb/banner/small_02.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: 'orange'
    },
    {
        imgUrl: '/images/thumb/banner/small_03.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    },
    {
        imgUrl: '/images/thumb/banner/small_01.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    },
    {
        imgUrl: '/images/thumb/banner/small_03.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    },
    {
        imgUrl: '/images/thumb/banner/small_01.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    },
    {
        imgUrl: '/images/thumb/banner/small_03.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    },
    {
        imgUrl: '/images/thumb/banner/small_01.jpg',
        linkUrl: '',
        title: '새콤달콤,종류도 맛도 다양한 향긋한 딸기 백화점',
        description: '맛과 영양이 농축된 60일 딸기',
        fontColor: ''
    }
]

const fullSlideBannerData = [
    {
        imgUrl: '/images/thumb/banner/big_mo.jpg',
        imgUrlPc: '/images/thumb/banner/big_01.jpg',
        linkUrl: '',
        title: '마트 대란 난축맛돈부터 우리 흑돈MANIAC 1',
        description: '베스트 상품 최대 30%',
        fontColor: 'white'
    },
    {
        imgUrl: '/images/thumb/banner/big_mo.jpg',
        imgUrlPc: '/images/thumb/banner/big_01.jpg',
        linkUrl: '',
        title: '마트 대란 난축맛돈부터 우리 흑돈MANIAC 2',
        description: '베스트 상품 최대 30%',
        fontColor: 'primary'
    },
    {
        imgUrl: '/images/thumb/banner/big_mo.jpg',
        imgUrlPc: '/images/thumb/banner/big_01.jpg',
        linkUrl: '',
        title: '마트 대란 난축맛돈부터 우리 흑돈MANIAC 3',
        description: '베스트 상품 최대 30%',
        fontColor: ''
    }
]

const categoryListData = [
    {

        imageList: [
            { contPathNm: '/images/category-icons/category_food.svg',
                altCont: '식품' }
        ],
        textList: [
            { contTitleNm: '식품'  }
        ]
    },
    {

        imageList: [
            { contPathNm: '/images/category-icons/category_beauty.svg',
                altCont: '뷰티' }
        ],
        textList: [
            { contTitleNm: '뷰티' }
        ]
    },
    {

        imageList: [
            { contPathNm: '/images/category-icons/category_branded_fashon.svg',
                altCont: '브랜드패션' }
        ],
        textList: [
            { contTitleNm: '브랜드패션' }
        ]
    },
    {

        imageList: [
            { contPathNm: '/images/category-icons/category_trend_fashon.svg',
                altCont: '트렌드패션' }
        ],
        textList: [
            { contTitleNm: '트렌드패션' }
        ]
    },
    //... 생략
]

const thumbnailSildeData = [
    {
        type: 'video',
        thumbnailUrl:
            'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        alt: ''
    },
    {
        type: 'image',
        thumbnailUrl: '/images/thumb/products/img_slider_01.jpg',
        alt: '상품1'
    },
    {
        type: 'image',
        thumbnailUrl: '/images/thumb/products/img_slider_02.jpg',
        alt: '상품2'
    },

    {
        type: 'image',
        thumbnailUrl: '/images/thumb/products/img_slider_03.jpg',
        alt: '상품3'
    },

    {
        type: 'image',
        thumbnailUrl: '/images/thumb/products/img_slider_04.jpg',
        alt: '상품4'
    },
    {
        type: 'image',
        thumbnailUrl: '/images/thumb/products/img_slider_05.jpg',
        alt: '상품5'
    }
]
</script>