import React from "react"
import quotationMark from "@assets/quotation-mark.svg"
import "@components/Testimonial.css"

interface TestimonialProps {
    text: string;
    author: string;
}

const Testimonial = ({author, text}: TestimonialProps) => {
    return (
        <section className="testimonial_section">
            <figure className="testimonial_inner">
                <img className="testimonial_img" src={quotationMark} alt="quotation-mark" />
                <blockquote className="testimonial_quote">
                    <p>
                        {text}
                    </p>
                </blockquote>
                <figcaption className="testimonial_author">
                    {author}
                </figcaption>
            </figure>
        </section>
    )
}


export default Testimonial;