import React from "react";
import NotFound from "../../../../../../GlobalComponents/NotFound/NotFound";

const Financials = ()=>{
    return(
        <div className="financials">
            <NotFound message={"Oops! Sorry couldn't find any Feedbacks"} link={"Get Verified"} />
        </div>
    );
}

export default Financials;