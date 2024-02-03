import { Bolt } from "@mui/icons-material";
import { Badge, Button, Card, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import * as React from "react";
import likeone from "../../assets/img/likecard1.png";
import likeTwo from "../../assets/img/likecard2.png";
import likeThree from "../../assets/img/likecard3.png";
import likeFour from "../../assets/img/likecard4.png";
export default function Drawers() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <Box sx={{}}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "400",
          }}
          variant="h6"
        >
          What`s new announcement?
        </Typography>
        Today
        <Card sx={{ padding: "20px", marginTop: "15px" }}>
          <Typography
            sx={{
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#2ca87f",
                background: "#eaf6f2",
                padding: "5px",
              }}
            >
              Big News
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              2 min ago
            </span>
            <Badge color="success" variant="dot" />
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "1.2",
              marginBottom: "6px",
            }}
          >
            Able Pro is Redesigned
          </Typography>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Able Pro is completely renowed with high aesthetics User Interface.
          </p>
          <img
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
            src={likeone}
            alt=""
          />
          <Button
            variant="outlined"
            sx={{ fontSize: "12px", marginTop: "10px", textAlign: "center" }}
          >
            Check Now
          </Button>
        </Card>
      </Box>
      <Box sx={{}}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "400",
          }}
          variant="h6"
        >
          What`s new announcement?
        </Typography>
        Today
        <Card sx={{ padding: "20px", marginTop: "15px" }}>
          <Typography
            sx={{
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#e58a00",
                background: "#fcf3e6",
                padding: "5px",
              }}
            >
              Big News
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              2 min ago
            </span>
            <Badge color="success" variant="dot" />
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "1.2",
              marginBottom: "6px",
            }}
          >
            Able Pro is Redesigned
          </Typography>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Able Pro is completely renowed with high aesthetics User Interface.
          </p>
          <img
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
            src={likeTwo}
            alt=""
          />
          <Button
            variant="outlined"
            sx={{ fontSize: "12px", marginTop: "10px", textAlign: "center" }}
          >
            Check Now
          </Button>
        </Card>
      </Box>
      <Box sx={{}}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "400",
          }}
          variant="h6"
        >
          What`s new announcement?
        </Typography>
        Today
        <Card sx={{ padding: "20px", marginTop: "15px" }}>
          <Typography
            sx={{
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#4680ff",
                background: "#edf2ff",
                padding: "5px",
              }}
            >
              Blog
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              2 min ago
            </span>
            <Badge color="success" variant="dot" />
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "1.2",
              marginBottom: "6px",
            }}
          >
            Able Pro is Redesigned
          </Typography>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Able Pro is completely renowed with high aesthetics User Interface.
          </p>
          <img
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
            src={likeThree}
            alt=""
          />
          <Button
            variant="outlined"
            sx={{ fontSize: "12px", marginTop: "10px", textAlign: "center" }}
          >
            Check Now
          </Button>
        </Card>
      </Box>
      <Box sx={{}}>
        <Typography
          sx={{
            fontSize: "15px",
            fontWeight: "400",
          }}
          variant="h6"
        >
          What`s new announcement?
        </Typography>
        Today
        <Card sx={{ padding: "20px", marginTop: "15px" }}>
          <Typography
            sx={{
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                color: "#4680ff",
                background: "#edf2ff",
                padding: "5px",
              }}
            >
              Announcement
            </span>{" "}
            <span
              style={{
                fontSize: "12px",
                fontWeight: "400",
                marginRight: "10px",
              }}
            >
              2 min ago
            </span>
            <Badge color="success" variant="dot" />
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "15px",
              fontWeight: "600",
              lineHeight: "1.2",
              marginBottom: "6px",
            }}
          >
            Able Pro is Redesigned
          </Typography>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "500",
            }}
          >
            Able Pro is completely renowed with high aesthetics User Interface.
          </p>
          <img
            style={{
              width: "90%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin: "0 auto",
            }}
            src={likeFour}
            alt=""
          />
          <Button
            variant="outlined"
            sx={{ fontSize: "12px", marginTop: "10px", textAlign: "center" }}
          >
            Check Now
          </Button>
        </Card>
      </Box>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Bolt sx={{cursor: 'pointer'}} onClick={toggleDrawer(anchor, true)}>{anchor}</Bolt>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
