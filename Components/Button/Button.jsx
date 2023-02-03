const Button = (props) =>{
    const {children, countClick, className} = props;

    return <button className={className} onClick={countClick} >{children}</button>
}

export default Button