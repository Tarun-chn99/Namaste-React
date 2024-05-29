import { useState } from "react";

const Filter = ({resList,setResList}) => {

    const [text, setText] = useState("");  

    const handleTopRated = () => {
        const filteredList = resList.filter((res) => res.info.avgRating > 4);
        if (filteredList.length !== resList.length) {
            setResList(filteredList);
        }
    }

    const handleDefault = () => {
        setResList(resList);
    };

    const onChange = (e) => {
        setText(e.target.value);
    }
    
    const handleSearch = () => {
        const arr = resList?.filter((val) => {
            return val.info.name.toLowerCase().includes(text.toLowerCase())
        });
        setResList(arr);
    }

    return (
            <div className="search">
                <input type='text' name="Search items..." value={text} onChange={onChange} className="border m-4"/>
                <button onClick={handleSearch}>Search</button>
                <button onClick={handleTopRated}>Top Rated</button>
                <button onClick={handleDefault}>Default</button>
            </div>
    )
}

export default Filter;






