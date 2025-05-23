import React from "react";
import { useNavigate } from "react-router-dom";

import { auth } from "../firebase.js";
import { signOut } from "firebase/auth";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

type HeaderProps = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
  isMyPage: boolean;
};

export const Header: React.FC<HeaderProps> = ({
  isAuth,
  setIsAuth,
  isMyPage,
}) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setIsAuth(false);
        // console.log("Sign-out successful");
      })
      .catch((error) => {
        console.log(error);
      });
    navigate("/SignIn");
  };

  return (
    <AppBar position="static" sx={{ width: "100%" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          PokemonAPI
        </Typography>
        {isAuth ? (
          <div>
            {isMyPage ? (
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  marginRight: "20px",
                  border: "1px solid white",
                  "&:hover": {
                    border: "1px solid #a9a9a9",
                    backgroundColor: "#87cefa",
                  },
                }}
                onClick={() => {
                  navigate("/");
                }}
              >
                ホーム
              </Button>
            ) : (
              <Button
                color="inherit"
                sx={{
                  textTransform: "none",
                  marginRight: "20px",
                  border: "1px solid white",
                  "&:hover": {
                    border: "1px solid #a9a9a9",
                    backgroundColor: "#87cefa",
                  },
                }}
                onClick={() => {
                  navigate("/MyPage");
                }}
              >
                マイページ
              </Button>
            )}
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                border: "1px solid white",
                marginRight: "20px",
                "&:hover": {
                  border: "1px solid #a9a9a9",
                  backgroundColor: "#87cefa",
                },
              }}
              onClick={() => {
                navigate("/MyFavorite");
              }}
            >
              お気に入り
            </Button>
            <Button
              color="inherit"
              sx={{
                textTransform: "none",
                border: "1px solid white",
                marginRight: "20px",
                "&:hover": {
                  border: "1px solid #a9a9a9",
                  backgroundColor: "#87cefa",
                },
              }}
              onClick={handleSignOut}
            >
              サインアウト
            </Button>
          </div>
        ) : (
          <></>
        )}
      </Toolbar>
    </AppBar>
  );
};
