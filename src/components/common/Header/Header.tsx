import Link from "next/link"
import { BoxButton, HeaderBox, RegistrBox, LogInButton, SignUpButton, MenuBox, Logo, MenuBtnBox, MenuBtn } from "./Hader.styled"

export default function Header() {
    return (
    <HeaderBox>
        <BoxButton>
            <MenuBox>
                <Logo>
                    TOWNSEND
                </Logo>
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
            </MenuBox>
            <RegistrBox>
                <Link href={'/SignIn'} style={{
                    textDecoration:'none'
                }} >
                    <LogInButton>
                        Войти
                    </LogInButton>
                </Link>
                <Link href={'/SignUp'} style={{
                    textDecoration:'none'
                }} >
                    <SignUpButton>
                        Регистрация
                    </SignUpButton>
                </Link>
                
            </RegistrBox>
        </BoxButton>
    </HeaderBox>
  )
}