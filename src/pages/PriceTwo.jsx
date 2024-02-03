
import { Card, Chip, Grid, Stack, Typography } from "@mui/material";

const PriceTwo = () => {
  return (
    <div>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#f0f0f0',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Basic
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                03 Services
              </Typography>

              <h1 style={{}}>$69</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Chip Outlined"
                variant="outlined"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#18d356',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
                className="popular"
                sx={{
                  fontSize: "12px",
                }}
              >
                Populor
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                Standard
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                05 Services
              </Typography>

              <h1 style={{}}>$129</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
              color="primary"
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Buy Now"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#5978ff',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
               sx={{
                fontSize: "14px",
                fontWeight: "400",
              }}
              >
                Premium
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                OB Services
              </Typography>

              <h1 style={{}}>$599</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Buy Now"
                variant="outlined"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#ff72f3',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Basic
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                03 Services
              </Typography>

              <h1 style={{}}>$69</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
              color="primary"
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Chip Outlined"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#1affcd',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
                className="popular"
                sx={{
                  fontSize: "12px",
                }}
              >
                Populor
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                Standard
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                05 Services
              </Typography>

              <h1 style={{}}>$129</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
              color="primary"
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Buy Now"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#14e4ff',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
               sx={{
                fontSize: "14px",
                fontWeight: "400",
              }}
              >
                Premium
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                OB Services
              </Typography>

              <h1 style={{}}>$599</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
              color="primary"
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Buy Now"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
       <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#ff64b9',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Basic
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "400",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                03 Services
              </Typography>

              <h1 style={{}}>$69</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Chip Outlined"
                variant="outlined"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#0affff',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
                className="popular"
                sx={{
                  fontSize: "12px",
                }}
              >
                Populor
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                Standard
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                05 Services
              </Typography>

              <h1 style={{}}>$129</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
              color="primary"
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Buy Now"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                  textDecoration: "line-through",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
          <Card
            style={{
              padding: "20px",
              marginTop: "20px",
              background: '#f0f0f0',
              borderRadius: '5px'
            }}
          >
            <Stack display="flex" alignItems="center" justifyContent="center">
              <Typography
               sx={{
                fontSize: "14px",
                fontWeight: "400",
              }}
              >
                Premium
              </Typography>
              <Typography
                sx={{
                  fontSize: "15px",
                  fontWeight: "600",
                  margin: "0",
                  marginBottom: "0",
                  marginTop: "0",
                }}
              >
                OB Services
              </Typography>

              <h1 style={{}}>$599</h1>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "400",
                }}
              >
                Lifetime
              </Typography>
              <Chip
                sx={{
                  width: "50%",
                  marginTop: "15px",
                  marginBottom: "15px",
                  cursor: "pointer",
                }}
                label="Buy Now"
                variant="outlined"
              />
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                One End Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                No attribution required
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                TypeScript
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Figma Design Resources
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Create Multiple Products
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Create a SaaS Project
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Resale Product
              </Typography>
              <Typography
                sx={{
                  marginBottom: "4px",
                  fontSize: "14px",
                  fontWeight: "400",
                }}
              >
                Separate sale of our UI Elements?
              </Typography>
            </Stack>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default PriceTwo
