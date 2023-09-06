import React from "react"
export const panelDetail = () => {
  return {
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 50 50" fill="none">
      <path d="M16.0176 25.5247L16.0176 25.5247C15.7337 25.2408 15.7337 24.7576 16.0176 24.4737L15.3104 23.7666L16.0176 24.4737C16.3013 24.1899 16.784 24.1899 17.0677 24.4737C17.0677 24.4737 17.0677 24.4737 17.0677 24.4737L21.4619 28.869L22.1691 29.5764L22.8763 28.869L32.874 18.8691C33.1577 18.5853 33.6404 18.5853 33.9241 18.8691C34.208 19.153 34.2079 19.6362 33.9242 19.92L33.9241 19.9201L22.6942 31.1526C22.5541 31.2928 22.3658 31.3713 22.1691 31.3713C21.9724 31.3713 21.7842 31.2928 21.6441 31.1527C21.644 31.1526 21.644 31.1526 21.644 31.1526L16.0176 25.5247Z" stroke="white" stroke-width="2" />
      <path d="M17.8941 5.40395L17.9051 5.395L17.9158 5.38574L21.5879 2.2243C21.5882 2.22406 21.5885 2.22382 21.5888 2.22357C23.4925 0.592167 26.4958 0.592142 28.3996 2.2235C28.3999 2.22376 28.4002 2.22403 28.4005 2.2243L32.0664 5.38041C32.0676 5.38147 32.0688 5.38254 32.0701 5.38361C32.3968 5.66815 32.86 5.88081 33.2386 6.01675C33.6232 6.15485 34.1035 6.27907 34.5153 6.27907H38.4678C41.3564 6.27907 43.6989 8.62183 43.6989 11.5116V15.4651C43.6989 15.8876 43.8347 16.375 43.978 16.756C44.1208 17.136 44.3391 17.5911 44.6175 17.9107C44.6185 17.9119 44.6195 17.9131 44.6205 17.9142L47.7759 21.5809C47.7763 21.5813 47.7766 21.5818 47.777 21.5822C49.4077 23.4864 49.4077 26.4903 47.777 28.3946C47.7766 28.395 47.7763 28.3954 47.7759 28.3958L44.6205 32.0625C44.6195 32.0637 44.6185 32.0649 44.6175 32.066C44.3391 32.3857 44.1208 32.8407 43.978 33.2207C43.8347 33.6017 43.6989 34.0891 43.6989 34.5116V38.4651C43.6989 41.3549 41.3564 43.6977 38.4678 43.6977H34.5153C34.0939 43.6977 33.6073 43.8331 33.2315 43.9713C32.8523 44.1107 32.4065 44.319 32.0943 44.5728L32.0833 44.5817L32.0725 44.591L28.399 47.7538L28.3989 47.7538L28.3917 47.7601C27.4528 48.5842 26.2295 49 24.9826 49C23.735 49 22.5071 48.5835 21.565 47.776C21.5649 47.7759 21.5648 47.7758 21.5647 47.7757L17.8987 44.6196C17.8976 44.6186 17.8966 44.6177 17.8955 44.6167C17.5687 44.332 17.1053 44.1192 16.7265 43.9832C16.3419 43.8451 15.8617 43.7209 15.4499 43.7209H11.4508C8.56226 43.7209 6.21971 41.3782 6.21971 38.4884V34.5116C6.21971 34.0978 6.09452 33.6218 5.95561 33.2413C5.81861 32.8661 5.60682 32.415 5.32715 32.0924L2.19366 28.401C2.19342 28.4007 2.19318 28.4004 2.19294 28.4002C0.602338 26.5172 0.602354 23.5059 2.19299 21.623C2.19321 21.6228 2.19343 21.6225 2.19366 21.6222L5.32705 17.9309C5.60677 17.6084 5.81859 17.1572 5.95561 16.7819C6.09452 16.4015 6.21971 15.9255 6.21971 15.5116V11.5116C6.21971 8.62183 8.56226 6.27907 11.4508 6.27907H15.4731C15.8945 6.27907 16.381 6.14361 16.7569 6.00545C17.1361 5.86607 17.5818 5.6577 17.8941 5.40395ZM6.46115 18.8595L6.46113 18.8595L6.45687 18.8645L3.3198 22.5601C3.31956 22.5604 3.31933 22.5607 3.31909 22.561C2.73156 23.2498 2.47012 24.1441 2.47012 24.9884C2.47012 25.8326 2.73154 26.7268 3.31904 27.4157C3.3193 27.416 3.31955 27.4163 3.3198 27.4166L6.4538 31.1086C6.45426 31.1092 6.45471 31.1097 6.45517 31.1103C7.1688 31.9601 7.70726 33.4074 7.70726 34.4884V38.4651C7.70726 40.5288 9.38703 42.2093 11.4508 42.2093H15.4731C16.5829 42.2093 18.0479 42.7517 18.8882 43.4777L18.8895 43.4788L22.5631 46.6416L22.5662 46.6442C23.2572 47.2342 24.1588 47.4942 25.0059 47.4942C25.8529 47.4942 26.7545 47.2342 27.4455 46.6442L27.4486 46.6415L31.1173 43.4829C31.9708 42.7671 33.4401 42.2093 34.5385 42.2093H38.4911C40.5548 42.2093 42.2346 40.5288 42.2346 38.4651V34.5116C42.2346 33.4014 42.777 31.936 43.5028 31.0954L43.5039 31.0941L46.6659 27.4197L46.6686 27.4166C47.2584 26.7255 47.5183 25.8238 47.5183 24.9767C47.5183 24.1297 47.2584 23.228 46.6686 22.5369L46.6659 22.5338L43.5039 18.8593L43.5028 18.8581C42.777 18.0175 42.2346 16.5521 42.2346 15.4419V11.5116C42.2346 9.44793 40.5549 7.76744 38.4911 7.76744H34.5385C33.4287 7.76744 31.9638 7.22501 31.1234 6.49907L31.1222 6.49799L27.4486 3.33519L27.4455 3.33253C26.7545 2.74251 25.8529 2.48256 25.0059 2.48256C24.1588 2.48256 23.2572 2.74251 22.5662 3.33253L22.5662 3.33251L22.5604 3.33756L18.8928 6.51835C18.0482 7.22572 16.5594 7.76744 15.4731 7.76744H11.4508C9.38703 7.76744 7.70726 9.44794 7.70726 11.5116V15.4884C7.70726 16.576 7.16443 18.042 6.46115 18.8595Z" stroke="white" stroke-width="2" />
    </svg>,
    button: "Add Students",
    style: "panelcontent-bottom",
    buttonIcon: <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 30 30" fill="none">
      <path d="M21.285 0H8.715C3.255 0 0 3.255 0 8.715V21.27C0 26.745 3.255 30 8.715 30H21.27C26.73 30 29.985 26.745 29.985 21.285V8.715C30 3.255 26.745 0 21.285 0ZM24 16.125H16.125V24C16.125 24.615 15.615 25.125 15 25.125C14.385 25.125 13.875 24.615 13.875 24V16.125H6C5.385 16.125 4.875 15.615 4.875 15C4.875 14.385 5.385 13.875 6 13.875H13.875V6C13.875 5.385 14.385 4.875 15 4.875C15.615 4.875 16.125 5.385 16.125 6V13.875H24C24.615 13.875 25.125 14.385 25.125 15C25.125 15.615 24.615 16.125 24 16.125Z" fill="white" />
    </svg>
  }
}
