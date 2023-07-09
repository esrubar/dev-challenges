import React from "react"
import { Button} from "antd";

export interface IProps {
    type: "link" | "text" | "ghost" | "default" | "primary" | "dashed" | undefined;
}

export const ButtonComponent = ({type}: IProps) => {
    return <Button type={type}></Button>
    

}