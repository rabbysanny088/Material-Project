import { Box, Divider, Stack, Typography } from "@mui/material";

const FirstTabs = () => {
  return (
    <div>
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="5px"
      >
        <Stack direction="row" display="flex" alignItems="center" gap="10px">
          <Box>
            <Typography
              className="al"
              sx={{
                background: "#f7fafd",
              }}
            >
              AI
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Apple Inc.
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              #ABLE-PRO-T00232
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            $210,000
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "red",
            }}
          >
            10.6%
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} light />
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="5px"
      >
        <Stack direction="row" display="flex" alignItems="center" gap="10px">
          <Box>
            <Typography
              className="al"
              sx={{
                background: "#f7fafd",
              }}
            >
              SM
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Spotify Music
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              #ABLE-PRO-T00232
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            -10,000
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "#26e06e",
            }}
          >
            30.6%
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} light />
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="5px"
      >
        <Stack direction="row" display="flex" alignItems="center" gap="10px">
          <Box>
            <Typography
              className="md"
              sx={{
                background: "#f7fafd",
              }}
            >
              MD
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Apple Inc.
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              #ABLE-PRO-T00232
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            $210,000
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "red",
            }}
          >
            10.6%
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} light />
      <Stack
        direction="row"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        gap="5px"
      >
        <Stack direction="row" display="flex" alignItems="center" gap="10px">
          <Box>
            <Typography
              className="oc"
              sx={{
                // background: "#f7fafd",
              }}
            >
              U
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: "600",
              }}
            >
              Uber
            </Typography>
            <Typography
              sx={{
                fontSize: "10px",
                fontWeight: "500",
              }}
            >
              08:40 pm
            </Typography>
          </Box>
        </Stack>
        <Box>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            $210,000
          </Typography>
          <Typography
            sx={{
              fontSize: "12px",
              fontWeight: "600",
              color: "red",
            }}
          >
            10.6%
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ marginTop: "10px", marginBottom: "10px" }} light />
      
    </div>
  );
};

export default FirstTabs;
