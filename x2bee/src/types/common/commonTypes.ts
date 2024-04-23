interface CommonProps {
  className?: string
}

type CommonEmits = {
  click: [ event: MouseEvent ]
}

export type { CommonProps, CommonEmits }