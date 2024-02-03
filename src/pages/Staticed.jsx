import {
  BookmarkAdd,
  CalendarToday,
  DownloadForOffline,
  Facebook,
  LinkedIn,
  NetworkCellOutlined,
  YouTube,
} from "@mui/icons-material";
import { Box, Card, Grid, Stack, Typography } from "@mui/material";

const Staticed = () => {
  return (
    <div>
      <Typography
        style={{
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Statistics
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="$30200"
              title="All Earnings"
              icon={<NetworkCellOutlined />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="145"
              title="Task"
              icon={
                <CalendarToday
                  style={{
                    color: "red",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="290+"
              title="Page Views"
              icon={
                <BookmarkAdd
                  style={{
                    color: "green",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="500"
              title="Downloads"
              icon={<DownloadForOffline style={{ color: "blue" }} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(70, 128, 255)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(62, 201, 214)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(33, 37, 41)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="998 +"
              title="Linked Users"
              icon={<LinkedIn sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(220, 38, 38)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="650 +"
              title="Youtube Users"
              icon={<YouTube sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="4,42,236"
              values={<div className="value">59.3%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(70, 128, 255)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="78,250"
              values={<div className="values">70.5%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(44, 168, 127)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="18,800"
              values={<div className="valued">27.4%</div>}

              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(229, 138, 0)",
                    }}
                  >
                    {" "}
                    1,945
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="35,078"
              values={<div className="valuess">27,4%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(220, 38, 38)",
                    }}
                  >
                    {" "}
                    $20,395
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="$30200"
              title="All Earnings"
              icon={<NetworkCellOutlined />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="145"
              title="Task"
              icon={
                <CalendarToday
                  style={{
                    color: "red",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="290+"
              title="Page Views"
              icon={
                <BookmarkAdd
                  style={{
                    color: "green",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="500"
              title="Downloads"
              icon={<DownloadForOffline style={{ color: "blue" }} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(70, 128, 255)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(62, 201, 214)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(33, 37, 41)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="998 +"
              title="Linked Users"
              icon={<LinkedIn sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(220, 38, 38)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="650 +"
              title="Youtube Users"
              icon={<YouTube sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="4,42,236"
              values={<div className="value">59.3%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(70, 128, 255)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="78,250"
              values={<div className="values">70.5%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(44, 168, 127)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="18,800"
              values={<div className="valued">27.4%</div>}

              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(229, 138, 0)",
                    }}
                  >
                    {" "}
                    1,945
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="35,078"
              values={<div className="valuess">27,4%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(220, 38, 38)",
                    }}
                  >
                    {" "}
                    $20,395
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="$30200"
              title="All Earnings"
              icon={<NetworkCellOutlined />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="145"
              title="Task"
              icon={
                <CalendarToday
                  style={{
                    color: "red",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="290+"
              title="Page Views"
              icon={
                <BookmarkAdd
                  style={{
                    color: "green",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="500"
              title="Downloads"
              icon={<DownloadForOffline style={{ color: "blue" }} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(70, 128, 255)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(62, 201, 214)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(33, 37, 41)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="998 +"
              title="Linked Users"
              icon={<LinkedIn sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(220, 38, 38)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="650 +"
              title="Youtube Users"
              icon={<YouTube sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="4,42,236"
              values={<div className="value">59.3%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(70, 128, 255)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="78,250"
              values={<div className="values">70.5%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(44, 168, 127)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="18,800"
              values={<div className="valued">27.4%</div>}

              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(229, 138, 0)",
                    }}
                  >
                    {" "}
                    1,945
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="35,078"
              values={<div className="valuess">27,4%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(220, 38, 38)",
                    }}
                  >
                    {" "}
                    $20,395
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="$30200"
              title="All Earnings"
              icon={<NetworkCellOutlined />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="145"
              title="Task"
              icon={
                <CalendarToday
                  style={{
                    color: "red",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="290+"
              title="Page Views"
              icon={
                <BookmarkAdd
                  style={{
                    color: "green",
                  }}
                />
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card
            sx={{
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <SimilarCards
              value="500"
              title="Downloads"
              icon={<DownloadForOffline style={{ color: "blue" }} />}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(70, 128, 255)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(62, 201, 214)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="1165 +"
              title="Facebook Users"
              icon={<Facebook sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(33, 37, 41)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="998 +"
              title="Linked Users"
              icon={<LinkedIn sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Box
            sx={{
              backgroundColor: "rgba(220, 38, 38)",
              padding: "20px",
              opacity: "1",
              borderRadius: "10px",
            }}
          >
            <SimilarPointCards
              value="650 +"
              title="Youtube Users"
              icon={<YouTube sx={{ color: "#fff", fontSize: "30px" }} />}
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="4,42,236"
              values={<div className="value">59.3%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(70, 128, 255)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="78,250"
              values={<div className="values">70.5%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(44, 168, 127)",
                    }}
                  >
                    {" "}
                    35,000
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="18,800"
              values={<div className="valued">27.4%</div>}

              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(229, 138, 0)",
                    }}
                  >
                    {" "}
                    1,945
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
          <Card sx={{ padding: "20px" }}>
            <SimilarProductCards
              title="Total Page Views"
              value="35,078"
              values={<div className="valuess">27,4%</div>}
              discription={
                <div>
                  You made an extra{" "}
                  <span
                    style={{
                      color: "rgb(220, 38, 38)",
                    }}
                  >
                    {" "}
                    $20,395
                  </span>{" "}
                  this year
                </div>
              }
            />
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Staticed;

// eslint-disable-next-line react/prop-types
function SimilarCards({ value, title, icon }) {
  return (
    <>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            style={{
              fontSize: "17px",
              fontWeight: "600",
              lineHeight: "1.1",
            }}
          >
            {value}
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "1.1",
              color: "gray",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>{icon}</Box>
      </Stack>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function SimilarPointCards({ value, title, icon }) {
  return (
    <>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Typography
            style={{
              fontSize: "17px",
              fontWeight: "500",
              lineHeight: "1.1",
              color: "#fff",
            }}
          >
            {value}
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "500",
              lineHeight: "1.1",
              color: "#fff",
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box>{icon}</Box>
      </Stack>
    </>
  );
}

// eslint-disable-next-line react/prop-types
function SimilarProductCards({ title, value, values, discription }) {
  return (
    <>
      <Typography
        style={{
          fontSize: "13px",
          fontWeight: "400",
        }}
      >
        {title}
      </Typography>
      <Stack direction="row" display="flex" alignItems="center" gap="10px">
        <Box>
          <Typography
            style={{
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            {value}
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            {values}
          </Typography>
        </Box>
      </Stack>
      <p
        style={{
          color: "rgba(33, 37, 41, 0.75)",
          fontSize: "0.75rem",
        }}
      >
        {discription}
      </p>
    </>
  );
}
