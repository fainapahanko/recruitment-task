import React from "react"


export type PageIdProps = {
    pageid: string;
}


const Solutions = ({pageid}: PageIdProps) => {
    return (
        <div>Just a placeholder for a page with id: {pageid}</div>
    )
}


export default Solutions