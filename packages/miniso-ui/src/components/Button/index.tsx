import React, { FC, ReactNode } from 'react'
import { View } from '@tarojs/components'

// import cx from "classnames";
// import "./styles.css";

export interface IButtonProps {
  onClick: () => void
  disabled?: boolean
  className?: string
  children?: ReactNode
}

export const Button: FC<IButtonProps> = ({ onClick, disabled, className, children }): React.ReactElement => {
  if (disabled) {
    return <View>我被禁用了</View>
  }

  return (
    <View
      // className={cx("button", className)}
      className={className}
      onClick={onClick}
    >
      {children}
    </View>
  )
}
