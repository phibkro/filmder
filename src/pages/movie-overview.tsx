import "../styles/overview.css";

export default function MovieOverview(){
    return (
        <>
        
        <div className="wrapper">
            <div>
                <img src="" alt="" /> 
            </div>
            <div className="overviewWrapper">
                <div>
                    <h1></h1>
                    <p></p>
                </div>
                <div className="spesificInfoWrapper">
                    <div>
                        <h3>Language</h3>
                        <p></p>
                    </div>

                    <div>
                        <h3>Genre</h3>
                        <p></p>
                    </div>

                    <div>
                        <h3>Director</h3>
                        <p></p>
                    </div>
                    
                    <div>
                        <h3>Writer</h3>
                        <p></p>
                    </div>

                    <div>
                        <h3>Popularity</h3>
                        <p></p>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}