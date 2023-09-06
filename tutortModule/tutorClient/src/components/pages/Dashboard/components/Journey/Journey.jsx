import React from "react";
import "./styles/Journey.css";
import JourneyCard from "./JourneyCard/JourneyCard";
import { icons } from "./styles/assets/data";

const Journey = (props) => {
    return (
        <div className="journey">
            <div className="journey-head">
                User <span style={{ color: "#6764FF" }}> Journey</span>
            </div>
            
                <div className="journey-body">
                    <JourneyCard step={1} icon={icons.completed} status={"Completed"} title={"Create Account"} />
                    <JourneyCard step={2} icon={icons.completed} status={"Completed"} title={"Profile Verified"} />
                    <JourneyCard step={3} icon={icons.add} status={"Add"} title={"Add Your Students"} />
                    <JourneyCard step={4} icon={icons.locked} status={"Locked"} title={"Create Your Batch"} />
                    <JourneyCard step={5} icon={icons.locked} status={"Locked"} title={"Progress Insight"} />
                    <JourneyCard step={6} icon={icons.locked} status={"Locked"} title={"Get Monthly Feedback"} />
                    <JourneyCard step={7} icon={icons.locked} status={"Locked"} title={"Monthly Fee Credit"} />
                </div>


        </div >
    );
}
export default Journey;