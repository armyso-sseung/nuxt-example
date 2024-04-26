import type { CommonProps } from '~/types/common/commonTypes'
import type { DisplayCategory } from '~/types/display/DisplayTypes'

interface SwiperProps extends CommonProps {
  type?: 'page' | 'popup',
  subCategoryList? : DisplayCategory[]
}

type SwiperSlideProps = {
  data: SwiperSlideDataType,
  text?: string,
  active?: boolean,
}

type SwiperSlideDataType = {
  id: string,
  label: string
}

type BannerSlideProps = {
  type: 'full' | 'card'
}

interface ImageTextIconProps extends CommonProps {
  iconData: IconDataType[]
}

type IconDataType = {
  imageList: ContentsType[],
  textList: ContentsType[]
}

type ContentsType = {
  linkUrlAddr?: string
  movFrmeCd?: string
  contTitleNm?: string
  contPathNm?: string
  contFileNm?: string
  pcContPathNm?: string
  pcContFileNm?: string
  altCont?: string
  htmlFileCont?: string
  ttlClorText?: string
  wrdClorText?: string
}

interface ThumbnailSlideProps extends CommonProps {
  thumbnailData: ThumbnailData[]
  zoom?: boolean
  showThumbNavMobile?: boolean
}

type ThumbnailData =  {
  type: string
  thumbnailUrl: string
  alt: string
}

interface VideoPlayerProps extends CommonProps{
  source: string
  videoClassName?: string
  controls?: boolean
  isPlayable?: boolean
}

export type { SwiperProps, SwiperSlideProps, BannerSlideProps, ImageTextIconProps, ContentsType, ThumbnailSlideProps, VideoPlayerProps }