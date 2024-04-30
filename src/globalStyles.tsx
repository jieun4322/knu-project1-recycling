import { createGlobalStyle  } from 'styled-components'
import reset from 'styled-reset'
import PretendardBold2 from "@/assets/fonts/web/static/woff2/Pretendard-Bold.woff2";
import PretendardMedium2 from "@/assets/fonts/web/static/woff2/Pretendard-Medium.woff2";
import PretendardRegular2 from "@/assets/fonts/web/static/woff2/Pretendard-Regular.woff2";

import PretendardBold1 from "@/assets/fonts/web/static/woff/Pretendard-Bold.woff";
import PretendardMedium1 from "@/assets/fonts/web/static/woff/Pretendard-Medium.woff";
import PretendardRegular1 from "@/assets/fonts/web/static/woff/Pretendard-Regular.woff";


const GlobalStyle = createGlobalStyle`
    ${reset}

    @font-face {
        font-family: 'Pretendard';
        font-weight: 700;
        font-display: swap;
        src: local('Pretendard Bold'), url(${PretendardBold2}) format('woff2'), url(${PretendardBold1}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 500;
        font-display: swap;
        src: local('Pretendard Medium'), url(${PretendardMedium2}) format('woff2'), url(${PretendardMedium1}) format('woff');
    }

    @font-face {
        font-family: 'Pretendard';
        font-weight: 400;
        font-display: swap;
        src: local('Pretendard Regular'), url(${PretendardRegular2}) format('woff2'), url(${PretendardRegular1}) format('woff');
    }

    body{
        overflow: hidden;
    }
    html, body{
        font-size: 12px;
    }

    *{
        font-family: Pretendard, "Gill Sans", sans-serif !important;
    }

    :root{
        --color-primary: #225844;
        
    }

`

export default GlobalStyle
