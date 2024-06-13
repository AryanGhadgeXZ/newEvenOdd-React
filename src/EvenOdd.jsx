import {useState,useRef} from "react";
import {useNavigate} from "react-router-dom";

function EvenOdd(){
    const nav = useNavigate();
    const rNum = useRef();
    const [num,setNum] = useState("");

    const hNum = (event) => {setNum(event.target.value);}

    const find = (event) => {
        event.preventDefault();
        if (num == ""){
            alert("You did not Enter Interger");
            rNum.current.focus();
            return;
        }

        let n = parseInt(num);
        let r = n % 2 == 0 ? "Even" : "Odd";
        nav("/result",{state : {"res":r}});
    }

    return(
        <>
        <center>
            <div class="div">
                <h1>Even Odd Finder</h1>
                <form onSubmit={find}>
                    <input type="number" placeholder="Enter Integer" onChange={hNum} ref={rNum}/>
                    <br/>
                    <input type="submit" value="Find Even/Odd" class="btn"/>
                </form>
            </div>
        </center>
        </>
    );
}

export default EvenOdd;