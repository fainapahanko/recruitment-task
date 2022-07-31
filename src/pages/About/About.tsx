import React from "react"

export type PageIdProps = {
    pageid: string;
}

const About = ({pageid}: PageIdProps) => {
    return (
        <div>Just a placeholder for a page with id: {pageid}</div>
    )
}


export default About