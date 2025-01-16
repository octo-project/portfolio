import { FC } from "react"

type LinkProps = {
    target: string
}

const Link: FC<LinkProps> = (props) => {
    const {target, children} = props

    return (
        <a href={target} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}

export default Link