function Button(props) {
    return (
        <button {...props} className="bg-slate-400 text-xl text-slate-100 p-2 rounded-md ">{props.children}</button>
    )
}

export default Button;