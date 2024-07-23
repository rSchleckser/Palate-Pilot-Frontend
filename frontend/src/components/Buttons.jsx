const Button = ({buttonName, style, onClick}) => {
    return(
        <button style={style} onClick={onClick}>
            {buttonName}
        </button>
    )
}

export default Button;