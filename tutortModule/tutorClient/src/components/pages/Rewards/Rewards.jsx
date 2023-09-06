//@creator - Ishaan Pare | @TaskID = RAB-518 , @TaskTitle = Dynamic Theme , @Task completion date = 28/05/2023 (20:30) |

//Libraries 
import React, { useState } from "react";

import RewardsStatus from "./components/RewardsStatus/RewardsStatus";

import "./styles/Rewards.css";
import RewardsWallet from "./components/RewardsWallet/RewardsWallet";
import TopBar from "../../GlobalComponents/TopBar/TopBar";
import SideBar from "../../GlobalComponents/SideBar/SideBar";


//Reward -> page for rewards 
const Rewards = () => {

    const [show, setShow] = useState(true);
    return (
        <div className="rewards" >
            <SideBar show={setShow}/>
            <div style={{
                width: "100%",
                height: "100vh"
            }}>
                <TopBar />
                <RewardsStatus style={(show)?"7.29rem":"10rem"} />
            </div>
            {
                show ?
                    <RewardsWallet /> : <></>
            }
        </div>
    );
}

export default Rewards;
