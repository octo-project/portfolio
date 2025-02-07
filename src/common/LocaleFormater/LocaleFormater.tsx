import { FC } from "react"

type LocaleFormaterProps = {
    children: any
}

const LocaleFormater: FC<LocaleFormaterProps> = (props) => {
    const {children} = props

    return (
        <>
            {children}
        </>
    )
}

export default LocaleFormater