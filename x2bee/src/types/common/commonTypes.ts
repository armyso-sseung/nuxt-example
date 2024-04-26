interface CommonProps {
  className?: string
}

type CommonEmits = {
  click: [ event: MouseEvent ]
}

type HeaderType = 'main' | 'detail' | 'search' | 'pay' | 'confirm' | 'cart' | 'simple' | undefined

interface NextImageProps {
  src?: string
  alt?: string
  width?: number
  priority?: boolean
}

export type { CommonProps, CommonEmits, HeaderType, NextImageProps }