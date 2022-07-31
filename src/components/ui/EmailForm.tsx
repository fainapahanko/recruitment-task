import React from "react"
import "./EmailForm.css"

interface EmailFormType {
    updateEmail: (inputEmail: string) => void;
    newsletterSigning: (e: React.FormEvent<HTMLFormElement>) => void;
    text: string;
    placeholder: string;
}

const EmailForm = ({updateEmail, newsletterSigning, text, placeholder}: EmailFormType) => {
    return (
        <form className="email_form" onSubmit={(e) => newsletterSigning(e)}>
            <label className="email_label">
                <input onChange={(e) => updateEmail(e.target.value)} className="email_input" type="text" placeholder={placeholder} />
            </label>
            <button type="submit" className="email_submit button_pink">{text}</button>
        </form>
    )
}

export default EmailForm