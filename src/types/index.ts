export interface ButtonProps {
  label?: string
  size: 'small' | 'medium' | 'large'
  outline: boolean
  color:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link'
  disabled: boolean
}
