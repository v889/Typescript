type ButttonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const Button=(props:ButttonProps)=>{
    return(
        <button onClick={props.handleClick}>Click</button>
    )

}