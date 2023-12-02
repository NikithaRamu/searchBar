import { user } from './SearchBar'
import { SearchResult } from './SearchResult'
import './SearchResultsList.css'
export const SearchResultsList = ({results}) => {
    console.log(results)
    return (
        <>
            {results.length > 1 &&
            
            <div className="results-list">
            {
                results.map((result,id)=>{
                        return <SearchResult result={result} key={id}/>
                })
            }
        </div>
            
            
            }



        </>
    )
}
