type Props={
    names:{
        first:string
        last:string
    }[]
}
export const PersonList=(props:Props)=>{
    return(
        <div>
            {props.names.map((name)=>{
                return(
                    <h2>{name.first} {name.last}</h2>

                )
            })}

        </div>
    )
}