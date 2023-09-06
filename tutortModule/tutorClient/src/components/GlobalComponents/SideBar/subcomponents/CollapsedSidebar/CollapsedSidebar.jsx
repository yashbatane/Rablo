import React,{useState} from "react";
import "./styles/CollapsedSidebar.css";
import Modal from '../Modal/Modal'
import { useEffect } from "react";

const CollapsedSidebar = (props) => {
    const [modalOpen, setModalOpen] = useState(false);
    const openLogout =()=> {
        setModalOpen(!modalOpen)
        // console.log(modalOpen)
    }
    return (
        (
            <div className="collapsed">
                <div className="collapsed-menu" onClick={() => { props.expand.setExpand(!props.expand.expand); props.show(props.expand.expand) }} >
                    <svg width="26.18" height="18.48" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 2H27" stroke="white" stroke-width="4" stroke-linecap="round" />
                        <path d="M2 12H32" stroke="white" stroke-width="4" stroke-linecap="round" />
                        <path d="M2 22H25" stroke="white" stroke-width="4" stroke-linecap="round" />
                    </svg>
                </div>

                <div className="collapsed-items">
                    <div
                        className={(props.state == 0) ? "selected-item" : "items"}
                        onClick={() => props.eventHandler("comp-home")}
                    >
                        <svg width="19.2" height="19.2" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.5048 20.4928C12.0281 20.4928 11.6328 20.0907 11.6328 19.6057V16.0571C11.6328 15.5721 12.0281 15.1699 12.5048 15.1699C12.9815 15.1699 13.3767 15.5721 13.3767 16.0571V19.6057C13.3767 20.0907 12.9815 20.4928 12.5048 20.4928Z" fill="white" />
                            <path d="M19.0144 25H5.99312C3.87715 25 1.94721 23.344 1.59842 21.2266L0.0521357 11.7992C-0.203641 10.3324 0.505557 8.45162 1.65655 7.51715L9.7135 0.95223C11.2714 -0.325269 13.7245 -0.31344 15.294 0.964059L23.351 7.51715C24.4903 8.45162 25.1879 10.3324 24.9554 11.7992L23.4091 21.2148C23.0603 23.3085 21.0839 25 19.0144 25ZM12.4921 1.78024C11.8759 1.78024 11.2597 1.9695 10.8063 2.33619L2.74941 8.91294C2.09835 9.44523 1.6333 10.6755 1.77281 11.5153L3.3191 20.9309C3.52837 22.1729 4.74912 23.2257 5.99312 23.2257H19.0144C20.2584 23.2257 21.4792 22.1729 21.6884 20.9191L23.2347 11.5035C23.3626 10.6755 22.8976 9.42158 22.2581 8.90111L14.2012 2.34802C13.7361 1.9695 13.1083 1.78024 12.4921 1.78024Z" fill="white" />
                        </svg>
                    </div>

                    <div
                        className={(props.state == 1) ? "selected-item" : "items"}
                        onClick={() => props.eventHandler("comp-addstudent")}
                    >
                        <svg width="14.636" height="21.56" viewBox="0 0 19 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.8285 23.584H12.7806" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M15.3046 26.1085V21.0605" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.82767 12.6938C9.70147 12.6812 9.55003 12.6812 9.41121 12.6938C6.40766 12.5928 4.02251 10.132 4.02251 7.1032C4.00989 4.01135 6.52123 1.5 9.61313 1.5C12.705 1.5 15.2163 4.01135 15.2163 7.1032C15.2163 10.132 12.8186 12.5928 9.82767 12.6938Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.61298 26.5003C7.31617 26.5003 5.03203 25.9198 3.2905 24.7587C0.236501 22.7143 0.236501 19.3827 3.2905 17.3509C6.76095 15.0289 12.4524 15.0289 15.9229 17.3509" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>

                    <div
                        className={(props.state == 2) ? "selected-item" : (props.state==3)?"items":"items  rewards-item"}
                        onClick={() => props.eventHandler("comp-verifyyourprofile")}
                    >
                        <svg width="23.1" height="23.1" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.53934 15.3855L9.53934 15.3855C9.32999 15.1761 9.32999 14.8229 9.53934 14.6135C9.74862 14.4042 10.1016 14.4042 10.3109 14.6135C10.3109 14.6135 10.3109 14.6135 10.3109 14.6135L12.9474 17.2507L13.301 17.6044L13.6546 17.2507L19.6532 11.2508C19.8625 11.0414 20.2154 11.0414 20.4247 11.2508C20.6341 11.4602 20.634 11.8134 20.4247 12.0227L20.4247 12.0228L13.6868 18.7623C13.5841 18.8649 13.4458 18.9228 13.301 18.9228C13.1561 18.9228 13.0178 18.8649 12.9152 18.7623L9.53934 15.3855Z" stroke="white" />
                            <path d="M10.6734 3.16476L10.6789 3.16029L10.6843 3.15566L12.8877 1.25866C12.8878 1.25854 12.888 1.25842 12.8881 1.2583C14.0678 0.247222 15.9253 0.247235 17.105 1.25833C17.1052 1.25844 17.1053 1.25855 17.1054 1.25866L19.3057 3.15299C19.3063 3.1535 19.3069 3.15401 19.3074 3.15452C19.4895 3.31314 19.7537 3.43576 19.9769 3.51593C20.2033 3.59719 20.4789 3.66744 20.7092 3.66744H23.0807C24.8691 3.66744 26.3194 5.11789 26.3194 6.90698V9.27907C26.3194 9.51475 26.396 9.79391 26.4804 10.0184C26.5646 10.2424 26.6906 10.5026 26.8461 10.681C26.8466 10.6816 26.8471 10.6821 26.8476 10.6827L28.7415 12.8835C28.7416 12.8836 28.7417 12.8838 28.7418 12.8839C29.7527 14.0639 29.7527 15.9218 28.742 17.1019C28.7418 17.1021 28.7417 17.1023 28.7415 17.1026L26.8476 19.3033C26.847 19.304 26.8465 19.3046 26.8459 19.3053C26.6905 19.4837 26.5646 19.7437 26.4804 19.9676C26.396 20.1921 26.3194 20.4713 26.3194 20.707V23.0791C26.3194 24.8682 24.8691 26.3186 23.0807 26.3186H20.7092C20.4741 26.3186 20.1953 26.3951 19.9734 26.4766C19.7498 26.5588 19.4944 26.6793 19.3196 26.8213L19.3141 26.8258L19.3088 26.8304L17.1046 28.7281L17.1046 28.728L17.101 28.7312C16.5176 29.2433 15.7595 29.5 14.9896 29.5C14.2193 29.5 13.4588 29.2429 12.8739 28.7415C12.8738 28.7414 12.8738 28.7414 12.8737 28.7413L10.6734 26.847C10.6729 26.8465 10.6723 26.8461 10.6718 26.8456C10.4898 26.6869 10.2255 26.5643 10.0021 26.4841C9.77582 26.4028 9.50023 26.3326 9.26992 26.3326H6.87048C5.0821 26.3326 3.63182 24.8821 3.63182 23.093V20.707C3.63182 20.4756 3.56109 20.2027 3.47943 19.9791C3.39875 19.7581 3.27659 19.5006 3.12042 19.3206L1.23982 17.1052C1.23963 17.1049 1.23945 17.1047 1.23926 17.1045C0.253532 15.9375 0.253579 14.0762 1.2394 12.9093C1.23954 12.9091 1.23968 12.909 1.23982 12.9088L3.12035 10.6934C3.27656 10.5135 3.39873 10.2559 3.47943 10.0349C3.56109 9.81121 3.63182 9.53833 3.63182 9.30698V6.90698C3.63182 5.11789 5.0821 3.66744 6.87048 3.66744H9.28387C9.51896 3.66744 9.7977 3.59099 10.0196 3.50941C10.2432 3.42722 10.4987 3.30676 10.6734 3.16476ZM3.9525 11.3809L3.95249 11.3809L3.95036 11.3834L2.06794 13.601C2.06779 13.6012 2.06763 13.6014 2.06747 13.6015C1.7331 13.9936 1.58207 14.5058 1.58207 14.993C1.58207 15.4801 1.73303 15.9922 2.06723 16.3842C2.06747 16.3845 2.06771 16.3848 2.06794 16.3851L3.94883 18.6008C3.94909 18.6011 3.94935 18.6015 3.94961 18.6018C4.3924 19.129 4.72436 20.02 4.72436 20.693V23.0791C4.72436 24.2621 5.68747 25.2256 6.87048 25.2256H9.28387C9.97363 25.2256 10.8758 25.5596 11.3983 26.0109L11.3989 26.0115L13.6031 27.9092L13.6047 27.9105C13.9978 28.2462 14.5143 28.3965 15.0035 28.3965C15.4927 28.3965 16.0092 28.2462 16.4024 27.9105L16.4039 27.9091L18.6057 26.0135C19.1347 25.5696 20.0391 25.2256 20.7231 25.2256H23.0946C24.2777 25.2256 25.2408 24.2621 25.2408 23.0791V20.707C25.2408 20.017 25.5747 19.1145 26.026 18.5919L26.0265 18.5913L27.9238 16.3866L27.9251 16.3851C28.2607 15.9918 28.411 15.4753 28.411 14.986C28.411 14.4968 28.2607 13.9803 27.9251 13.587L27.9238 13.5855L26.0265 11.3808L26.026 11.3802C25.5747 10.8576 25.2408 9.95513 25.2408 9.26512V6.90698C25.2408 5.72397 24.2777 4.76046 23.0946 4.76046H20.7231C20.0333 4.76046 19.1312 4.42646 18.6087 3.97511L18.608 3.97458L16.4039 2.0769L16.4024 2.07557C16.0092 1.73986 15.4927 1.58953 15.0035 1.58953C14.5143 1.58953 13.9978 1.73986 13.6047 2.07557L13.6047 2.07556L13.6018 2.07808L11.4006 3.98711C10.876 4.42682 9.95953 4.76046 9.28387 4.76046H6.87048C5.68747 4.76046 4.72436 5.72397 4.72436 6.90698V9.29302C4.72436 9.9694 4.39016 10.8721 3.9525 11.3809Z" stroke="white" />
                        </svg>
                    </div>
                </div>

                <div className="collapsed-bottom">
                    <div
                        className={(props.state == 3) ? "selected-option" : "options"}
                        onClick={() => props.eventHandler("comp-myprofile")}

                    >
                        <svg width="23.1" height="23.1" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.1674 17.1349C15.1395 17.1349 15.0976 17.1349 15.0697 17.1349C15.0279 17.1349 14.9721 17.1349 14.9302 17.1349C11.7627 17.0372 9.39062 14.5674 9.39062 11.5256C9.39062 8.42791 11.9162 5.90234 15.0139 5.90234C18.1116 5.90234 20.6372 8.42791 20.6372 11.5256C20.6232 14.5814 18.2372 17.0372 15.2093 17.1349C15.1814 17.1349 15.1814 17.1349 15.1674 17.1349ZM15 7.9814C13.0465 7.9814 11.4697 9.57209 11.4697 11.5116C11.4697 13.4233 12.9628 14.9721 14.8604 15.0419C14.9023 15.0279 15.0418 15.0279 15.1814 15.0419C17.0511 14.9442 18.5162 13.4093 18.5302 11.5116C18.5302 9.57209 16.9535 7.9814 15 7.9814Z" fill="white" />
                            <path d="M15.0022 29.9992C11.2487 29.9992 7.66269 28.6039 4.88595 26.0644C4.63478 25.8411 4.52315 25.5062 4.55106 25.1853C4.73246 23.5249 5.76501 21.976 7.48129 20.8318C11.6394 18.0691 18.379 18.0691 22.5231 20.8318C24.2394 21.99 25.272 23.5249 25.4534 25.1853C25.4952 25.5202 25.3696 25.8411 25.1185 26.0644C22.3417 28.6039 18.7557 29.9992 15.0022 29.9992ZM6.74176 24.9062C9.05804 26.8458 11.9743 27.9062 15.0022 27.9062C18.0301 27.9062 20.9464 26.8458 23.2627 24.9062C23.0115 24.0551 22.3417 23.2318 21.351 22.5621C17.9185 20.2737 12.0999 20.2737 8.63943 22.5621C7.64874 23.2318 6.99292 24.0551 6.74176 24.9062Z" fill="white" />
                            <path d="M15 29.9999C6.72558 29.9999 0 23.2743 0 14.9999C0 6.72555 6.72558 0 15 0C23.2744 0 30 6.72555 30 14.9999C30 23.2743 23.2744 29.9999 15 29.9999ZM15 2.09301C7.88372 2.09301 2.09302 7.88368 2.09302 14.9999C2.09302 22.1162 7.88372 27.9068 15 27.9068C22.1163 27.9068 27.907 22.1162 27.907 14.9999C27.907 7.88368 22.1163 2.09301 15 2.09301Z" fill="white" />
                        </svg>
                    </div>


                    <div className="options openModalBtn"  onClick={openLogout}>
                        <svg width="23.1" height="23.1" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.4048 20.7778C24.0835 20.7778 23.7621 20.6578 23.5085 20.4007C23.018 19.9035 23.018 19.0807 23.5085 18.5835L26.9417 15.1035L23.5085 11.6235C23.018 11.1264 23.018 10.3036 23.5085 9.80645C23.9989 9.30931 24.8107 9.30931 25.3012 9.80645L29.6307 14.195C30.1212 14.6921 30.1212 15.515 29.6307 16.0121L25.3012 20.4007C25.0475 20.6578 24.7261 20.7778 24.4048 20.7778Z" fill="white" />
                            <path d="M28.6167 16.3878H11.4169C10.7235 16.3878 10.1484 15.805 10.1484 15.1021C10.1484 14.3993 10.7235 13.8164 11.4169 13.8164H28.6167C29.3101 13.8164 29.8851 14.3993 29.8851 15.1021C29.8851 15.805 29.3101 16.3878 28.6167 16.3878Z" fill="white" />
                            <path d="M14.7983 30C6.08841 30 0 23.8286 0 15C0 6.17143 6.08841 0 14.7983 0C15.4917 0 16.0667 0.582857 16.0667 1.28571C16.0667 1.98857 15.4917 2.57143 14.7983 2.57143C7.57669 2.57143 2.53684 7.68 2.53684 15C2.53684 22.32 7.57669 27.4286 14.7983 27.4286C15.4917 27.4286 16.0667 28.0114 16.0667 28.7143C16.0667 29.4171 15.4917 30 14.7983 30Z" fill="white" />
                        </svg>
                      
                    </div>
                </div>
                
                {modalOpen && <Modal openLogout={openLogout}/>}
                
            </div>
        )
    );
}

export default CollapsedSidebar;