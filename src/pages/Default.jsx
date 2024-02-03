import { Add, Home, MoreVert } from "@mui/icons-material";
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  LinearProgress,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ColumnCharts from "../Charts/ColumnCharts";
import PieCharts from "../Charts/PieChartss";
import FirstTabs from "../Tabs/MainTabs";
import ctwo from "../assets/img/c-2.png";
import cthree from "../assets/img/c-3.png";
import cfour from "../assets/img/c-4.png";
import cone from "../assets/img/c-one.png";
import { useFirebase } from "../contextApi/FirebaseProvider";
const Default = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const firebase = useFirebase();

  useEffect(() => {
    if(!firebase.isLogged){
      navigate("/login")
    }
  },[])

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <ReUse
              icon={
                <Home
                  sx={{
                    background: "#edf2ff",
                    color: "#4680ff",
                    width: "25px",
                    height: "25px",
                    // fontSize: "14px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              }
              title="All Earnings"
              imgSrc={cone}
              titleBody="20"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <ReUse
              icon={
                <Home
                  sx={{
                    background: "#fcf3e6",
                    color: "#e58a00",
                    width: "25px",
                    height: "25px",
                    // fontSize: "14px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              }
              title="Page Views
              "
              imgSrc={ctwo}
              titleBody="$520"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <ReUse
              icon={
                <Home
                  sx={{
                    background: "#eaf6f2",
                    color: "#2ca87f",
                    width: "25px",
                    height: "25px",
                    // fontSize: "14px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              }
              title="Total Task              "
              imgSrc={cthree}
              titleBody="$2920"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <ReUse
              icon={
                <Home
                  sx={{
                    background: "#fcf3e6",
                    color: "#e58a00",
                    width: "25px",
                    height: "25px",
                    // fontSize: "14px",
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                />
              }
              title="Download              "
              imgSrc={cfour}
              titleBody="$5320"
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
          <Card>
            <ColumnCharts />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <Typography>Project - Able Pro</Typography>
            <Divider />
            <p>Release</p>
            v1.2.0
            <LinearProgress />
            <Stack
              className="change"
              direction="row"
              display="flex"
              alignItems="center"
              gap={1}
              justifyContent="space-between"
              sx={{
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Badge color="success" variant="dot" />
                <Typography>Horizontal Layout</Typography>
              </Box>
              <Box
                sx={{
                  background: "gray",
                  padding: "4px",
                  borderRadius: "10px",
                }}
              >
                2
              </Box>
            </Stack>
            <Stack
              className="change"
              direction="row"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Badge color="success" variant="dot" />
                <Typography>Invoice Generator</Typography>
              </Box>
            </Stack>
            <Stack
              className="change"
              direction="row"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Badge color="success" variant="dot" />
                <Typography>Package Upgrades</Typography>
              </Box>
            </Stack>
            <Stack
              className="change"
              direction="row"
              display="flex"
              alignItems="center"
              gap={1}
              sx={{
                marginTop: "10px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <Badge color="success" variant="dot" />
                <Typography>Figma Layout</Typography>
              </Box>
            </Stack>
            <Button
              className="add"
              style={{
                background: "blue",
                color: "#fff",
                width: "100%",
              }}
            >
              <Add />
              Add task
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card sx={{ padding: "20px" }}>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Transactions
                </Typography>
              </Box>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography className="change">Today</Typography>
                <Typography className="change">Weekly</Typography>
                <Typography className="change">Monthly</Typography>
              </Popover>

              <Box className="change">
                <MoreVert
                  onClick={handleClick}
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Stack>
            <Box>
              <FirstTabs />
            </Box>
            <Stack
              direction="row"
              spacing={2}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <button className="view">View all Transaction...</button>
              <button className="create">Create new Transati...</button>
            </Stack>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Transactions
                </Typography>
              </Box>

              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography className="change">Today</Typography>
                <Typography className="change">Weekly</Typography>
                <Typography className="change">Monthly</Typography>
              </Popover>

              <Box className="change">
                <MoreVert
                  onClick={handleClick}
                  sx={{
                    fontSize: "20px",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Stack>
            <Box>
              <PieCharts />
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    background: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    display="flex"
                    alignItems="center"
                    spacing={1}
                  >
                    <Badge color="secondary" variant="dot" />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Income
                    </p>
                  </Stack>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    $23,876 +
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  >
                    +$763,43 -
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    background: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    display="flex"
                    alignItems="center"
                    spacing={1}
                  >
                    <Badge color="success" variant="dot" />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Rent
                    </p>
                  </Stack>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    $52,246 +
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  >
                    +$763,43 -
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    background: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    display="flex"
                    alignItems="center"
                    spacing={1}
                  >
                    <Badge color="primary" variant="dot" />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Download
                    </p>
                  </Stack>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    $23,876 +
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  >
                    +$763,43 -
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box
                  sx={{
                    background: "#f8f9fa",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <Stack
                    direction="row"
                    display="flex"
                    alignItems="center"
                    spacing={1}
                  >
                    <Badge color="secondary" variant="dot" />
                    <p
                      style={{
                        fontSize: "14px",
                        fontWeight: "400",
                      }}
                    >
                      Views
                    </p>
                  </Stack>
                  <Typography
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    $23,876 +
                  </Typography>
                  <Typography
                    style={{
                      fontSize: "12px",
                      fontWeight: "300",
                    }}
                  >
                    +$763,43 -
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Default;

// eslint-disable-next-line react/prop-types
function ReUse({ icon, title, titleBody, imgSrc }) {
  return (
    <>
      <Stack direction="row" spacing={1} display="flex" alignItems="center">
        <Typography sx={{}}>{icon}</Typography>
        <Typography>{title}</Typography>
      </Stack>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        gap={4}
        sx={{
          marginTop: "10px",
          background: "#efeeee",
          padding: "13px",
          width: "100%",
          borderRadius: "10px",
        }}
      >
        <Box>
          <img src={imgSrc} alt="" />
        </Box>
        <Box>{titleBody}</Box>
      </Stack>
    </>
  );
}
