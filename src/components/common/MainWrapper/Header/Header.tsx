import Link from "next/link"
import Logo, {LogoVariantProps} from "../../Logo/Logo"
import {
    BoxButton,
    HeaderBox,
    RegistrBox,
    MenuBox,
    MenuBtnBox,
    MenuBtn
} from "./Header.styled"

import {Button} from "@/src/components/common/Button.styled";

export default function Header() {
    return (
        <HeaderBox>
            <BoxButton>
                <Logo variant={LogoVariantProps.primary}/>
                <MenuBox>
                    <MenuBtnBox>
                        <MenuBtn>
                            О сервисе
                        </MenuBtn>
                        <MenuBtn>
                            Тарифы
                        </MenuBtn>
                        <MenuBtn>
                            Статьи
                        </MenuBtn>
                    </MenuBtnBox>
                    <RegistrBox>
                        <Link href={'/SignIn'} style={{
                            textDecoration: 'none'
                        }}>
                            <Button SignInButton="SignInButton">
                                Войти
                            </Button>
                        </Link>
                        <Link href={'/SignUp'} style={{
                            textDecoration: 'none'
                        }}>
                            <Button SignUpButton="SignUpButton">
                                Регистрация
                            </Button>
                        </Link>
                    </RegistrBox>
                </MenuBox>
            </BoxButton>
        </HeaderBox>
    )
}