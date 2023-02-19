import Link from "next/link"
import {
    BoxButton,
    HeaderBox,
    RegistrBox,
    MenuBox,
    MenuBtnBox,
    MenuBtn
} from "./Header.styled"

import {Button} from "@/src/components/common/Button.styled";
import {Logo} from "@/src/components/common/Logo.styled";

export default function Header() {
    return (
        <HeaderBox>
            <BoxButton>
                <Logo header="header">
                    TOWNSEND
                </Logo>
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