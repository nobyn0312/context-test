import React ,{useContext} from "react";
import AuthContext from "@/context/AuthContext";

const AuthDisplay = () => {
  // AuthContextをimportしてauthの状態　を定義
  const auth =useContext(AuthContext)
  return (
    <>
      {auth?.userAuth ? (<p>ログイン中</p>) : (<p>ログアウト中</p>)}
    </>
  );
};

export default AuthDisplay;
