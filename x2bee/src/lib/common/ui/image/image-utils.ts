import { breakPoints } from '~/lib/common/ui/variables'
import s3Image from '~/utils/S3Image'
import type { NextImageProps } from '~/types/common/commonTypes'

const getImageSize = (moSize: number, pcSize: number) => {
  return `(max-width: ${breakPoints.mo.max}) ${moSize}vw, ${pcSize}vw`
}

const getNextImage = ({src = '', alt = '', width = 242, priority} : NextImageProps) => {
  return s3Image({ src })
}

export { getImageSize, getNextImage }
