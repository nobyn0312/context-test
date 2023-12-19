import React , {ReactNode, createContext , useState} from "react";

type props ={
  children:React.ReactNode
}

type initialState ={
  userAuth:boolean
  setUserAuth:React.Dispatch<React.SetStateAction<boolean>>
}

export const AuthContext =createContext<initialState | null>(null)


export const AuthProvider =({children}:props) => {
  //userAuthの初期値を定義
  const [userAuth,setUserAuth] =useState(false )

  return (
    // userAuthの状態・userAuthを更新するための関数"setUserAuth"をpropsとしてProviderできるようにする
    <AuthContext.Provider value={{userAuth,setUserAuth}}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthContext;
