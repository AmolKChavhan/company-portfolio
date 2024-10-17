import "./about.css";
import { Box, Grid2, Link, Typography } from "@mui/material";
import AboutImage from "../../assets/images/MyImage.jpg";
import AboutCard from "../../components/AboutCard/AboutCard";
import { SlBadge } from "react-icons/sl";
import { ImBooks } from "react-icons/im";
import { IoIosPeople } from "react-icons/io";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="about">
      <Grid2 spacing={2} className="about_container">
        <Grid2 item xs={4} className="about_image">
          <img src={AboutImage} alt="About_Image" />
        </Grid2>
        <Grid2 item xs={8}>
          <h3>About Me</h3>
          <Box className="about_content">
            <Box className="about_card">
              <AboutCard
                icon={<SlBadge />}
                title="Experience"
                description="2+ Years Working"
              />

              <AboutCard
                icon={<ImBooks />}
                title="Projects"
                description="0+ Completed"
              />

              <AboutCard
                icon={<IoIosPeople />}
                title="Clients"
                description="0+ Happy Clients"
              />
            </Box>
            <Typography
              variant="body1"
              className="justify-text"
              style={{ marginBottom: "0.2rem" }}
            >
              Crafting web projects that captivate and delight my clients has
              been my true passion for over 2 years. My portfolio reflects a
              journey of innovation and success, where I've had the honor of
              partnering with a diverse range of clients around the globe. Every
              new project fuels my drive to push boundaries and create
              outstanding digital experiences.
            </Typography>
            <Typography variant="body1" className="justify-text">
              Hello! I’m Amol Chavhan, a full-stack web developer based in Pune,
              Maharashtra, India. With a strong skill set and a passion for
              creating impactful online experiences, I’m dedicated to launching
              your business on the web with precision and flair. My goal is to
              deliver cutting-edge design and functionality that ensures your
              online presence runs smoothly and effectively. Ready to transform
              your vision into reality? Let’s connect and get started! Explore
              my resume below to see what I can bring to your project.
            </Typography>
            <Link
              className="btn primary"
              download
              href={require("../../assets/documents/Amol K. Chavhan CV.pdf")}
            >
              Download CV
              <FaDownload style={{ marginLeft: "1rem" }} />
            </Link>
          </Box>
        </Grid2>
      </Grid2>
    </section>
  );
};

export default About;
