type ButttonProps={
    handleClick:(event:React.MouseEvent<HTMLButtonElement>)=>void
}
export const Button2=(props:ButttonProps)=>{
    return(

        <button onClick={props.handleClick}>Click2</button>
    )
}