import {useEffect} from "react"
import {useState} from "react"



export const Home = () =>  {

    const [inputValue, setInputValue] = useState ('')

    const inputHandler =(e) => {
        setInputValue(e.target.value)
    }

    useEffect(()=> {
        console.log(inputValue)
    }, [inputValue])

    return (
      <input name="userName" type="text" placeholder="introduce tu nombre" onChange={(e)=> inputHandler(e)} ></input>
    )

}