import { Box, Grid2, Link, Typography } from "@mui/material";
import HeaderVideo from "../../assets/videos/background vid.mp4";
import HeaderImage from "../../assets/images/profile_Logo.png";
import HeaderData from "./headData";
import "./header.css";

const Header = () => {
  return (
    <Box className="header">
      <video className="video-background" autoPlay loop muted>
        <source src={HeaderVideo} type="video/mp4" />
      </video>
      <Grid2 spacing={2} className="header_container">
        <Grid2 item xs={8} className="header_content">
          <h3>SRIJAN DEVELOPER</h3>
          <Typography variant="body1" paragraph>
            You are a click away from building your dream website or web app.
            Send me the details of your project for a modern, mobile responsive,
            highly performant website today!
          </Typography>
          <Box className="header_cta">
            <Link href="#contact" className="btn primary">
              Let's Talk
            </Link>
            <Link href="#portfolio" className="btn white">
              My Work
            </Link>
          </Box>
          <Box className="header_socials">
            {HeaderData.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.icon}
                </Link>
              </li>
            ))}
          </Box>
        </Grid2>

        <Grid2 item xs={4} className="header_image">
          <img src={HeaderImage} alt="Header" />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default Header;
