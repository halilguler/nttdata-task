import styled from "@emotion/styled";
import {
  BottomNavigation,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  IconButton,
  TextField,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import FooterLogo from "../../assets/images/FooterLogo.png";
import Text from "../Text/Text";

const GridStyled = styled(Grid)`
  background: #0059bc;,
  max-height: 380px;
`;

const CardMediaStyled = styled(CardMedia)`
  width: 180px;
  object-fit: contain;
`;

const Footer = () => {
  return (
    <Grid item>
      <GridStyled container padding={"5rem 2rem"} justifyContent="space-around">
        <Grid item xs={12} sm={6} md={5} lg={5} display="flex">
          <Card
            justifyContent="center"
            sx={{
              position: "relative",
              background: "#0059bc",
              border: "none",
              boxShadow: "none",
              width: "100%",
            }}
          >
            <CardMediaStyled component="img" image={FooterLogo} />

            <CardContent
              sx={{
                margin: "0",
                paddingLeft: "0",
              }}
            >
              <Text
                sx={{
                  color: "white",
                  margin: "0",
                }}
              >
                lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisl nec lacinia lacinia, nunc nisl
              </Text>
            </CardContent>
            <CardActions className="flex items-center pl-0">
              <TextField
                size="small"
                id="outlined-basic"
                placeholder="Email"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    color: "black",
                    backgroundColor: "white",
                    borderColor: "white",
                  },
                }}
                variant="outlined"
              />
              <Button
                sx={{
                  color: "white",
                  background: "#00254F !important",
                  height: "40px",
                  textTransform: "none",
                }}
                size="small"
              >
                Sign Up
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          xs={2}
          className="hidden sm:flex"
        >
          <Text
            variant="h4"
            component="h4"
            sx={{ fontWeight: 500, color: "#fff", marginBottom: "0.5rem" }}
          >
            Title
          </Text>
          <div className="mt-2">
            {[0, 1, 2, 3].map(() => {
              return (
                <Text
                  sx={{
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  SubTitle
                </Text>
              );
            })}
          </div>
        </Grid>
        <Grid
          item
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          xs={2}
          className="hidden lg:flex"
        >
          <Text
            variant="h4"
            component="h4"
            sx={{ fontWeight: 500, color: "#fff", marginBottom: "0.5rem" }}
          >
            Title
          </Text>
          <div className="mt-2">
            {[0, 1, 2, 3].map(() => {
              return (
                <Text
                  sx={{
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  SubTitle
                </Text>
              );
            })}
          </div>
        </Grid>
        <Grid
          item
          display="flex"
          flexDirection={"column"}
          justifyContent="center"
          alignItems={"center"}
          columns={2}
          xs={2}
          className="hidden lg:flex"
        >
          <Text
            variant="h4"
            component="h4"
            sx={{ fontWeight: 500, color: "#fff", marginBottom: "0.5rem" }}
          >
            Title
          </Text>
          <div className="mt-2">
            {[0, 1, 2, 3].map(() => {
              return (
                <Text
                  sx={{
                    fontWeight: 400,
                    color: "#fff",
                    marginBottom: "0.5rem",
                  }}
                >
                  SubTitle
                </Text>
              );
            })}
          </div>
        </Grid>
      </GridStyled>
      <Divider sx={{ backgroundColor: "white" }} />
      <BottomNavigation
        sx={{
          justifyContent: "space-between",
          padding: "0.5rem 3rem",
          backgroundColor: "#0059BC",
          color: "white",
          alignItems: "center",
        }}
      >
        <Text>contact@nttdata.com</Text>
        <Text>+3 9876 765 444</Text>

        <ButtonGroup size="small" aria-label="small button group">
          <IconButton>
            <FacebookIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <InstagramIcon sx={{ color: "white" }} />
          </IconButton>
          <IconButton>
            <LinkedInIcon sx={{ color: "white" }} />
          </IconButton>
        </ButtonGroup>
      </BottomNavigation>
    </Grid>
  );
};

export default Footer;
