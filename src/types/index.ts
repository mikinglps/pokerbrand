import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
    title: string,
    containerStyles?: string,
    handleClick?: MouseEventHandler<HTMLButtonElement>
    textStyles?: string,
    leftIcon?: string
}

export interface PlanosCardProps {
    title: string,
    price: string,
    description: string
}

export interface RecursosCardProps {
    title: string,
    icon: string,
    description?: string
}

export interface SliderProps {
    type: string
}