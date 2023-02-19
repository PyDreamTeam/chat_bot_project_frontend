import {Logo} from "@/src/components/common/Logo.styled";
import Link from "next/link";
import {FooterInfo, FooterLogoBlock, FooterLeftContainer}
    from "@/src/components/common/MainWrapper/Footer/FooterLeftBlock/FooterLeftBlock.styled";
import {TelegramLogo, VkLogo, WhatsAppLogo} from "@/src/components/common/MainWrapper/Footer/SvgConfig";

const FooterLeftBlock = () => {
    return (
        <FooterLeftContainer>
            <Logo footer={'footer'}>
                TOWNSEND
            </Logo>
            <Link href={'/'}>
                <FooterInfo>
                    info@townsend.pro
                </FooterInfo>
            </Link>
            <FooterLogoBlock>
                <Link href={'/'}>
                    {WhatsAppLogo}
                </Link>
                <Link href={'/'}>
                    {VkLogo}
                </Link>
                <Link href={'/'}>
                    {TelegramLogo}
                </Link>
            </FooterLogoBlock>
        </FooterLeftContainer>
    );
};

export default FooterLeftBlock;
