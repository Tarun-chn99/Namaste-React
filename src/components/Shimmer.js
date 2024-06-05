import ShimmerCard from './ShimmerCard';

const Shimmer = () => {
    const arr = Array.from({length:20},(_,index) => index);
    return(
            <div className="res-container flex wrap space-evenly" >
                {arr.map((index)=> <ShimmerCard key={index}/>)}
            </div>
    );
}

export default Shimmer;


