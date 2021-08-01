import { useState, FC, FormEvent } from "react";
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from "react-google-login";
import { isLoggedInVar } from "../../../apollo/cache";
import { Button } from "../../common/Button";
import { Input } from "../../common/Input";
import { Form } from "../../common/Form";
import { Modal, ModalProps } from "../../Modal";
import { useLoginMutation } from "./generated/Login.mutatuion.generated";
import { useGoogleAuthMutation } from "./generated/GoogleAuth.mutation.generated";

export const LoginModal: FC<ModalProps> = ({ ...rest }) => {
  const [login] = useLoginMutation();
  const [authGoogle] = useGoogleAuthMutation();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      if (data?.login?.refreshToken && data?.login?.accessToken) {
        localStorage.setItem("refreshToken", data?.login?.refreshToken);
        localStorage.setItem("token", data?.login?.accessToken);
        isLoggedInVar(true);
      }
    } catch (error) {
      console.log(error);
    }
    rest.closeModal();
  };
  const authByGoogle = async (
    res: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    const tokenId = (res as GoogleLoginResponse)?.tokenId;
    if (tokenId) {
      const { data } = await authGoogle({
        variables: { accessToken: tokenId },
      });
      if (data?.authGoogle?.refreshToken && data?.authGoogle?.accessToken) {
        localStorage.setItem("refreshToken", data?.authGoogle?.refreshToken);
        localStorage.setItem("token", data?.authGoogle?.accessToken);
        isLoggedInVar(true);
      }
    }
    rest.closeModal();
  };
  return (
    <Modal {...rest}>
      <Form onSubmit={onSubmit}>
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-10"
          placeholder="Enter email"
        />
        <Input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-10"
          placeholder="Enter password"
          type="password"
        />
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID || ""}
          buttonText="Log in with Google"
          onSuccess={authByGoogle}
          onFailure={authByGoogle}
          cookiePolicy="single_host_origin"
        />
        <Button type="submit">Login</Button>
      </Form>
    </Modal>
  );
};
