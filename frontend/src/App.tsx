import { useState, FC } from "react";
import { Route, Switch } from "react-router-dom";
import { IsLoggedIn } from "./auth";
import { AddPostModal } from "./components/AddPostModal";
import { LoginModal } from "./components/Auth/Login";
import { Button } from "./components/common/Button";
import { PostList } from "./components/PostList";
import { useGetUserQuery } from "./auth/generated/Auth.query.generated";
import { isLoggedInVar } from "./apollo/cache";
import { PostPage } from "./components/PostPage";

export const App: FC = () => {
  const isAuth = IsLoggedIn();
  const { data } = useGetUserQuery({
    variables: { accessToken: localStorage.getItem("token") || "" },
  });
  const logout = () => {
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("token");
    isLoggedInVar(false);
  };

  const [openModal, setOpenModal] = useState<boolean>(false);
  return (
    <div className="app">
      <header className="header">
        <Button onClick={() => setOpenModal(true)} className="mb-10">
          {isAuth ? "Add post" : "Login "}
        </Button>
        {isAuth && (
          <div>
            <Button onClick={() => logout()}>Logout</Button>
            <span className="user">{data?.getUser?.email}</span>
          </div>
        )}
      </header>
      <Switch>
        <Route exact path="/">
          <PostList />
        </Route>
        <Route exact path="/post/:id">
          <PostPage />
        </Route>
      </Switch>
      {openModal && isAuth && (
        <AddPostModal closeModal={() => setOpenModal(false)} />
      )}
      {openModal && !isAuth && (
        <LoginModal closeModal={() => setOpenModal(false)} />
      )}
    </div>
  );
};
