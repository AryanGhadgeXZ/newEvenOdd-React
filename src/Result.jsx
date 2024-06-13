import {useLocation,Link} from "react-router-dom";

function Result(){
    const loc = useLocation();
    return(
        <>
        <center>
            <div class="div2">
                <h1 class="zh1">Result Page</h1>
                {loc.state != null ? loc.state.res : "Get out of here"}
                <br/><br/>
                <div class="L">
                <Link to = "/">Home</Link>
                </div>
            </div>
        </center>
        </>
    );
}

export default Result;