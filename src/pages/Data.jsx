import { Check, ContentCopy, MoreVert } from "@mui/icons-material";
import {
  Badge,
  Box,
  Card,
  Divider,
  Grid,
  Popover,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Selecteds from "../Selects/Selecteds";
import SelectedsTwo from "../Selects/SelectedsTwo";
import Steppers from "../Tabls/Steppers";
import TableOne from "../Tabls/TableOne";
import TableTwo from "../Tabls/TableTwo";
import BasicTabs from "../Tabs/MainTabs";
import {
  default as avatersimg,
  default as semartimg,
} from "../assets/img/avatar-1.jpg";
import avatersimgtwo from "../assets/img/avatar-2.jpg";
import {
  default as avatersimgthree,
  default as semartimgtwo,
} from "../assets/img/avatar-3.jpg";
import {
  default as avatersimgfour,
  default as semartimgthree,
} from "../assets/img/avatar-4.jpg";

const Data = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div>
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Data
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
                  My Task
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
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Follow up client for feedback
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  Sending report
                </Typography>
              </Box>
              <Box>
                <Check
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            </Stack>
            <p className="box">00:15</p>
            <Divider />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Follow up client for feedback
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  Received report
                </Typography>
              </Box>
              <Box>
                <Check
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            </Stack>
            <p className="boxs">00:30</p>
            <Divider />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  Follow up client for feedback
                </Typography>
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  {" "}
                  Sending report
                </Typography>
              </Box>
              <Box>
                <Check
                  sx={{
                    fontSize: "14px",
                  }}
                />
              </Box>
            </Stack>
            <p className="box">00:15</p>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="12px"
              >
                <Box>
                  <Typography className="g">G</Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Google LLC
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    Sr.UI designer
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <ContentCopy
                  sx={{
                    fontSize: "15px",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Stack>
            <Divider
              sx={{
                marginTop: "10px",
              }}
            />
            <Box>
              <h4
                style={{
                  marginBottom: "0",
                  margin: "0",
                }}
              >
                Description
              </h4>
              <p
                style={{
                  fontSize: "13px",
                  marginTop: "0",
                  fontWeight: "500",
                }}
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry`s standard dummy
                text ever since the 1500s, when an unknown printer took a
                galley.
              </p>
              <Stack direction="row" display="flex" gap="20px">
                <Box>
                  <Typography
                    style={{
                      background: "#e7eaee",
                      fontSize: "14px",
                      fontWeight: "500",
                      width: "65px",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    Fulltime
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    style={{
                      background: "#e7eaee",
                      fontSize: "14px",
                      fontWeight: "500",
                      width: "65px",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    Remote
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    style={{
                      background: "#e7eaee",
                      fontSize: "14px",
                      fontWeight: "500",
                      width: "65px",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: "5px",
                      padding: "5px",
                    }}
                  >
                    Hourly
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "600",
                      marginTop: "5px",
                    }}
                  >
                    {" "}
                    Pennsylvania,USA
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    2 days ago
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      background: "blue",
                      color: "#fff",
                      padding: "6px",
                      fontSize: "13px",
                      borderRadius: "50%",
                    }}
                  >
                    Apply
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
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
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="12px"
              >
                <Box>
                  <img
                    width={45}
                    style={{
                      borderRadius: "5px",
                    }}
                    src={semartimg}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    David Jones
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    Project Leader
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                5 min ago
              </Box>
            </Stack>
            <Divider
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="12px"
              >
                <Box>
                  <img
                    width={45}
                    style={{
                      borderRadius: "5px",
                    }}
                    src={semartimgtwo}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    Robert Smith
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    HR Manager
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Yesterday
              </Box>{" "}
            </Stack>
            <Divider
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="12px"
              >
                <Box>
                  <img
                    width={45}
                    style={{
                      borderRadius: "5px",
                    }}
                    src={semartimgthree}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "500",
                    }}
                  >
                    John larry
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "13px",
                      fontWeight: "700",
                    }}
                  >
                    Developer
                  </Typography>
                </Box>
              </Stack>
              <Box
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                1 hour ago
              </Box>{" "}
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
                <Typography>Products</Typography>
              </Box>
              <Box>
                <SelectedsTwo />
              </Box>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <Selecteds />
                entries per page
              </Box>
              <Box>
                <TextField
                  sx={{
                    width: "100%",
                  }}
                  id="outlined-basic"
                  // label="Outlined"
                  // variant="outlined"
                />
              </Box>
            </Stack>
            <Box>
              <TableOne />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card
            sx={{
              padding: "20px",
            }}
          >
            <Typography
              sx={{ fontSize: "16px", fontWeight: "600", zIndex: "-1" }}
            >
              New Customers
            </Typography>
            <Divider
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
              }}
            />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginBottom: "5px",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="15px"
              >
                <Box>
                  <img
                    width={45}
                    style={{ borderRadius: "50%" }}
                    src={avatersimg}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Alex Thompson
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Cheers!
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Badge color="success" variant="dot" />
              </Box>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginBottom: "5px",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="15px"
              >
                <Box>
                  <img
                    width={45}
                    style={{ borderRadius: "50%" }}
                    src={avatersimg}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Alex Thompson
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Cheers!
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Badge color="success" variant="dot" />
              </Box>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginBottom: "5px",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="15px"
              >
                <Box>
                  <img
                    width={45}
                    style={{ borderRadius: "50%" }}
                    src={avatersimgtwo}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    John Dour
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Cheers!
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Badge color="success" variant="dot" />
              </Box>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginBottom: "5px",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="15px"
              >
                <Box>
                  <img
                    width={45}
                    style={{ borderRadius: "50%" }}
                    src={avatersimgthree}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    Alex Thompson
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Cheers!
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Badge color="success" variant="dot" />
              </Box>
            </Stack>
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              sx={{
                marginBottom: "5px",
              }}
            >
              <Stack
                direction="row"
                display="flex"
                alignItems="center"
                gap="15px"
              >
                <Box>
                  <img
                    width={45}
                    style={{ borderRadius: "50%" }}
                    src={avatersimgfour}
                    alt=""
                  />
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "15px",
                      fontWeight: "600",
                    }}
                  >
                    John Doue
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "500",
                    }}
                  >
                    Cheers!
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <Badge color="success" variant="dot" />
              </Box>
            </Stack>
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
                  sx={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Recent Tickets
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  View all
                </Typography>
              </Box>
            </Stack>
            <Box>
              <TableTwo />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card sx={{ padding: "20px" }}>
            <BasicTabs />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card sx={{ padding: "20px" }}>
            <BasicTabs />
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
                  sx={{
                    fontSize: "15px",
                    fontWeight: "600",
                  }}
                >
                  Incoming Requests
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: "blue",
                    cursor: "pointer",
                  }}
                >
                  View all
                </Typography>
              </Box>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                You have 2 pending requests..
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                You have 3 pending tasks
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Incoming requests
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Incoming requests
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Incoming requests
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                New order received
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />
            <Stack
              direction="row"
              display="flex"
              alignItems="center"
              gap="15px"
            >
              <Badge color="secondary" variant="dot" />
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "500",
                }}
              >
                Incoming requests
              </Typography>
            </Stack>
            <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} />

            <Typography
              sx={{
                textAlign: "center",
                fontSize: "17px",
                fontWeight: "600",
              }}
            >
              Show more
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Card sx={{ padding: "20px" }}>
          <Steppers />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Data;
