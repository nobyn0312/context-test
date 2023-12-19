import React ,{useContext} from "react";
import AuthContext  from "@/context/AuthContext";

const AuthButton = () => {
  const auth =useContext(AuthContext);
  console.log(auth)

  // userAuthを更新するための関数
 const handleSignOut = () => {
    auth?.setUserAuth(false);
  };
  const handleSignIn =() =>{
    auth?.setUserAuth(true)
  }

  return (
    <React.Fragment>
      {/* userAuthは状態 */}
      {auth?.userAuth ? (<button onClick={handleSignOut}>ログアウト</button>) : (<button onClick={handleSignIn}>ログイン</button>)}
    </React.Fragment>
  )
};

export default AuthButton;
