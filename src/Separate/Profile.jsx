import {
  Add,
  ChangeCircle,
  Group,
  PersonOutline,
  SettingsBackupRestore,
} from "@mui/icons-material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Divider,
  Stack,
  Switch,
  Typography,
} from "@mui/material";
import Avaterimg from "../assets/img/avatar-2.jpg";
import { useFirebase } from "../contextApi/FirebaseProvider";
const Profile = () => {
  const firebase = useFirebase();
  console.log(firebase);
  return (
    <div>
      <p>Profile</p>
      <Stack direction="row" spacing={2} display="flex" alignItems="center">
        <Box>
          <Avatar>
            <img src={Avaterimg} alt="" />
          </Avatar>
        </Box>
        <Box>
          <Typography
            variant="h6"
            sx={{
              fontSize: "15px",
              fontWeight: "500",
            }}
          >
            Carson Darrin 🖖
          </Typography>
          <Typography
            sx={{
              fontSize: "15px",
              fontWeight: "500",
            }}
            variant="h6"
          >
            {
              firebase.photoBox
            }
          </Typography>
        </Box>
        <Divider />
      </Stack>
      <Card
        sx={{
          //   padding: "10px",
          cursor: "pointer",
        }}
      >
        <Stack
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            // marginTop: "10px",
            cursor: "pointer",
          }}
        >
          <Box sx={{}}>
            <Typography
              variant="4"
              sx={{
                fontSize: "14px",
                fontWeight: "700",
                display: "flex",
                alignItems: "center",
              }}
            >
              <NotificationsIcon />
              Notification
            </Typography>
          </Box>
          <Box>
            <Switch />
          </Box>
        </Stack>
      </Card>
      <Typography
        sx={{
          marginTop: "15px",
          //   marginBottom: "10px",
          cursor: "pointer",
        }}
      >
        {" "}
        Manage
      </Typography>
      <Box>
        <Typography
          className="change"
          variant="4"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            // marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <SettingsBackupRestore />
          Settings
        </Typography>
        <Typography
          className="change"
          variant="4"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            // marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <SettingsBackupRestore />
          Share
        </Typography>
        <Typography
          className="change"
          variant="4"
          sx={{
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "2px",
            // marginBottom: "10px",
            cursor: "pointer",
          }}
        >
          <ChangeCircle />
          Change Password
        </Typography>
      </Box>
      <Divider />
      <Typography>Team</Typography>
      <Box
        sx={{
          marginTop: "15px",
        }}
      >
        <Stack
          className="change"
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="4"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                // marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <PersonOutline />
              UI Design team
            </Typography>
          </Box>
          <Box>
            <AvatarGroup
              total={8}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "aqua",
                  background: "blue",
                }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "red",
                  background: "orange",
                }}
                alt="Semy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  background: "green",
                }}
                alt="Pmy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </AvatarGroup>
          </Box>
        </Stack>
        <Stack
          className="change"
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="4"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                // marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <Group />
              Friends Groups
            </Typography>
          </Box>
          <Box>
            <AvatarGroup
              total={8}
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "aqua",
                  background: "blue",
                }}
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  color: "red",
                  background: "orange",
                }}
                alt="Semy Sharp"
                src="/static/images/avatar/1.jpg"
              />
              <Avatar
                sx={{
                  width: "24px",
                  height: "24px",
                  background: "green",
                }}
                alt="Pmy Sharp"
                src="/static/images/avatar/1.jpg"
              />
            </AvatarGroup>
          </Box>
        </Stack>
        <Stack
          className="change"
          direction="row"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Typography
              variant="4"
              sx={{
                fontSize: "14px",
                fontWeight: "500",
                display: "flex",
                alignItems: "center",
                gap: "2px",
                // marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <Add />
              Add
            </Typography>
          </Box>
          <Box>
            <Avatar
              sx={{
                background: "blue",
              }}
            >
              <Add />
            </Avatar>
          </Box>
        </Stack>
      </Box>
      <Divider />
      <Button
        variant="contained"
        color="primary"
        sx={{
          marginTop: "10px",
        }}
        onClick={() => firebase.LogOut()}
      >
        Logout
      </Button>
    </div>
  );
};

export default Profile;
