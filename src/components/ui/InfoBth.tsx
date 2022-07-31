import "./InfoBtn.css"

interface InfpBtnProps {
    type?: 'submit' | 'reset' | 'button';
    text: string;
}

const InfoBtn = ({type, text}: InfpBtnProps) => {
    return <button type={type} className="button_info">{text}</button>
}

export default InfoBtn;