import React, { useState, useEffect } from 'react';
import Hero from '@components/Hero';
import Newsletter from '@components/Newsletter';
import Testimonial from '@components/Testimonial';
import { getRequest } from '@utils/requests.js';


type PageIdProps = {
    pageid: string;
}

type Section = {
    type: string;
    text?: string;
    author?: string;
    img?: string
}

interface PageState {
    id: string;
    url: string;
    sections: Section[]
}


const Home = ({pageid}: PageIdProps) => {

    const [pageData, setPageData] = useState<PageState | {id: "", url: "", sections: []}>()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {

        const fetchDataOnLoad = async () => {
            const resp = await getRequest(`page/${pageid}`)
            setPageData(resp.data)
            setIsLoading(false)
        }

        fetchDataOnLoad()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div>
            {!isLoading && pageData?.sections.map((el: Section, i: number) => {
                switch(el.type) {
                    case "hero":
                        return <Hero key={i} img={el.img} text={el.text}/>
                    case "testimonial":
                        return <Testimonial key={i} text={el.text} author={el.author}/>
                    case "newsletter":
                        return <Newsletter key={i} />
                    default:
                        return <></>
                }
            })}
        </div>
    
    )
}

export default Home