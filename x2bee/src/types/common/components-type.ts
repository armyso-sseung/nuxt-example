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

export type { SwiperProps, SwiperSlideProps }