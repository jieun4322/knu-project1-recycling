
import Button from "@/Components/Common/Button"

const BackButton = (props:any) => {
    return <Button to="/ready">{props.children}</Button>
}

export default BackButton;