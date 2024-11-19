import Card from './Card';

function Tours({tours,removeTour}){

    if (!Array.isArray(tours)) {
        // Handle the case where tours is not an array
        console.error("Tours prop is not an array:", {tours});
        return null; // or any other appropriate action
    }


    return(
        <div className="container">
            <div>
            <h2 className='title'>Plan With Love</h2>
            </div>
            <div className='cards'>
                {
                    tours.map((tours)=>{
                        return<Card {...tours } removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    )

};

export default Tours;