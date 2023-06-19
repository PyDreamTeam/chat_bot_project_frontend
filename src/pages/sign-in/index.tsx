import { ComponentSignIn } from "./componentSignIn/ComponentSignIn";

const schema = [
     {
          htmlFor: "email",
          label: "E-mail",
          type: "email",
          name: "email",
          placeholder: "example@mail.com"
     },
     {
          htmlFor: "password",
          label: "Пароль",
          type: "password",
          name: "password",
          placeholder: "Введите пароль"
     }
];


function SignIn() {
     return (
          <div>
               <ComponentSignIn schema={schema}/>
          </div>
     );
}

export default SignIn;