import { FaSearch } from "react-icons/fa";
import "./SearchBar.css"
import { useState } from "react";


export interface geo{
    lat:string;
    lng:string;
}
export interface company {
    bs:string;
    catchPhrase:string;
    zipcode:string;
}
export interface address{
    city:string;
    geo: geo;
    street: string;
    suite:string;
    zipcode:string;

}
export interface user {
    address: address;
    company:company;
    email:string;
    id: number;
    name:string;
    phone:string;
    username:string;
    website:string;


}
export const SearchBar=({setResults}) =>{


    const [input,setInput] = useState("");
    const fetchData = (value:string) =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then((json)=>
            {
                // console.log(json)
                // console.log(value)
                const results = json.filter((user:user)=>{
                    
                    return value && user && user.name && user.name.toLowerCase().includes(value.toLocaleLowerCase())
                })
                setResults(results)
            })
    }

    const handleChange = (value:string)=>{
        setInput(value);
        fetchData(value);
    }
    return(
        <div className="input-wrapper">
             <FaSearch id="search-icon"/>
             <input placeholder="Type to search"
             value={input}
             onChange={(e)=>handleChange(e.target.value)}
             ></input>
        </div>
    )
}