import {FooterWrapper, FooterBox} from "@/src/components/common/MainWrapper/Footer/Footer.styled";

import FooterLeftBlock from "./FooterLeftBlock/FooterLeftBlock"
import FooterRightBlock from "./FooterRightBlock/FooterRightBlock"

const Footer = () => {

    return (
        <FooterWrapper>
            <FooterBox>
                <FooterLeftBlock/>
                <FooterRightBlock/>
            </FooterBox>
        </FooterWrapper>
    );
};

export default Footer;
