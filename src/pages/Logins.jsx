import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import social1 from "../assets/img/undraw_Login_re_4vu2.png";
import { useFirebase } from "../contextApi/FirebaseProvider";
const Singup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebase();
  console.log(firebase);
  const [loading, setLoading] = useState(false);
  const handleLogin = async () => {
    setLoading(true);
    try {
      await firebase.LoginUsers(email, password);
    } catch (error) {
      console.error("Error during signup:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (firebase.isLogged) {
      navigate("/default");
    }
  }, [firebase, navigate]);

  useEffect(() => {
    if (firebase.error) {
      const timeoutId = setTimeout(() => {
        firebase.setError(null);
      }, 5000);
      return () => clearTimeout(timeoutId);
    }
  }, [firebase]);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "20px",
        }}
        className="social"
      >
        <Box>
          <img
            style={{
              width: "100%",
            }}
            src={social1}
            alt=""
          />
        </Box>
        <Box>
          {loading ? (
            <CircularProgress color="success" />
          ) : (
            <div>
              <Grid container spacing={2}>
                {firebase.error && (
                  <Alert
                    style={{
                      width: "100%",
                      marginLeft: "20px",
                    }}
                    variant="filled"
                    severity="error"
                  >
                    {firebase.error}
                  </Alert>
                )}
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <label>Email</label>
                  <TextField
                    style={{ width: "100%" }}
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <label>Password</label>
                  <TextField
                    type="password"
                    placeholder="Password"
                    style={{ width: "100%" }}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <div
                  style={{
                    marginTop: "12px",
                    display: "flex",
                    margin: "0 auto",
                  }}
                >
                  <p>
                    Create account?{" "}
                    <span
                      style={{
                        color: "blue",
                        cursor: "pointer",
                      }}
                      onClick={() => navigate("/")}
                    >
                      Singup
                    </span>
                  </p>
                </div>
              </Grid>
              <div>
                <Button
                  onClick={handleLogin}
                  sx={{
                    marginTop: "10px",
                    cursor: "pointer",
                    display: "flex",
                  }}
                  variant="contained"
                >
                  Login
                </Button>
              </div>
            </div>
          )}
        </Box>
      </div>
    </>
  );
};

export default Singup;
