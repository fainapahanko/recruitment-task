import React, { useState } from "react"
import { postRequest } from '@utils/requests';
import EmailForm from "@components/ui/EmailForm";
import "@components/Newsletter.css"

interface NewsletterState {
    email: string;
}


const Newsletter = () => {

    const [email, setEmail] = useState<NewsletterState | {emai: ""}>()
    const [success, setSuccess] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")

    const updateEmail = (inputEmail:string) => {
        setEmail({email: inputEmail})
    }

    const updateState = (success: boolean, alert: boolean, msg: string) => {
        setAlertMessage(msg)
        setSuccess(success)
        setShowAlert(alert)
    }

    const newsletterSigning= async (e) => {
        e.preventDefault()
        if(isValidEmail(email["email"])) {
            let resp = await postRequest("newsletter", email)
            if(resp.status === 200) {
                updateState(true, true, "Thank you for signing up for the Breally newsletter.")
            } else {
                updateState(false, true, "Something went wrong. Please try again.")
            }
        } else {
            updateState(false, true, "Something went wrong. Please try again.")
        }
        setTimeout(() => {
            updateState(false, false, "")
        }, 1600)
    }

    return (
        <section className="newsletter_section">
            <h2 className="newsletter_title">
                Sign up for Newsletter
            </h2>
            <EmailForm placeholder="Type your email" text="Submit" newsletterSigning={newsletterSigning} updateEmail={updateEmail}/>
            {showAlert && <p className={`newsletter_alert ${success ? "success" : "error"}`}>
                {alertMessage}
            </p>}
        </section>
    )
}


const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
}


export default Newsletter