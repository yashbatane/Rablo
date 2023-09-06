import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import RequestTabs from "./components/pages/RequestTabs/RequestTabs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store.js";
import FileDataState from "./context/fileData/formDataState";
import AddStudents from "./components/pages/TutorDashboard/AddStudents/AddStudents";
import Rewards from "./components/pages/Rewards/Rewards.jsx";
import DemoVideo from "./components/pages/DemoVideo/DemoVideo";
import InviteStudentForm from "./components/pages/TutorDashboard/AddStudents/InviteStudentForm/InviteStudentForm";
import ThemeManager from "./components/GlobalComponents/ThemeManager/ThemeManager.jsx";
import ProfileOverview from "./components/pages/ProfileOverview/ProfileOverview";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import TutorRegistrationMultistep from "./components/pages/TutorRegForm/TutorRegistrationMultistep";
import Profile from "./components/pages/SettingPage/Profile";
import TutorRegistration from "./components/pages/TutorRegistration/TutorRegistration";
import OTPverification from "./components/pages/TutorRegistration/subcomponents/OTPverification/OTPverification";
import Payment from "./components/pages/Payment/Payment";
import TutorVarification from "./components/pages/TutorDashboard/TutorVarification/TutorVarification/TutorVarification";

const App = () => (
  <ThemeManager>
    <Provider store={store}>
      <FileDataState>
          <Router>
            <Routes>
            <Route  exact path="/Varification" element={<TutorVarification/>}/>
              <Route path="/register" element={<TutorRegistration/>}/>
              <Route exact path="/" element={<Dashboard/>}/>
              <Route path="/requests" element={<RequestTabs />} />
              <Route path="/addstudents" element={<AddStudents />} />
              <Route path="/editprofiletutor" element={<Profile />} />
              <Route path="/payments" element={<Payment />} />
              <Route path="/rewards" element={<Rewards/>}/>
              <Route path="/inviteStudent" element={<InviteStudentForm/>}></Route>
              <Route path="/demoVideo" element={<DemoVideo/>}></Route>
              <Route path="/register/verify" element={<TutorRegistration/>}/>
              <Route path="/profileoverview" element={<ProfileOverview/>}/>
            </Routes>
          </Router>
      </FileDataState>
    </Provider>
  </ThemeManager>
);

ReactDOM.render(<App />, document.getElementById("app"));
Footer



