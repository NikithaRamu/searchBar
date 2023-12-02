import { user } from './SearchBar'
import './SearchResult.css'


export const SearchResult=({result}) =>{
    return(
        <div className='search-result'>{result.name}</div>
    )
}