import { S3_IMAGE_URL } from '~/constants/x2beeConstants'
import { prependSlash } from '~/utils/displayUtils'

export default function s3Image({ src } : {src: string}) {
  return /^(http)|(\/images)/i.test(src)
      ? src
      : `${S3_IMAGE_URL}${prependSlash(src)}`
}