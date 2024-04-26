export const COMMON = {
  API_URL: process.env.API_URL,
  REDIS_HOST: process.env.REDIS_HOST,
  REDIS_PORT: process.env.REDIS_PORT,
  REDIS_PWD: process.env.REDIS_PWD,
  STORE_PREFIX: process.env.STORE_PREFIX
} as const

export const S3_IMAGE_URL = process.env.S3_IMAGE_URL
export const NO_IMAGE_PATH = '/images/common/no_img.svg'
export const ADULT_IMAGE_PATH = '/images/common/img_adult.svg'

export const PC = 'pc'
export const MO = 'mo'

export const TEST = {
  TEST1: 'test1',
  TEST2: 'test2',
  TEST3: 'test3'
} as const

export const RESPONSE = {
  RESULT_CODE_SUCCESS: '0000'
}
