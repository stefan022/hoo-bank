const Paragraph = ({ text, additionalClass }) => {
    return (
        <p className={`paragraph ${additionalClass}`}>
            {text}
        </p>
    )
}

export default Paragraph