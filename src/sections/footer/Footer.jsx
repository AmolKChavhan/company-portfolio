import { Box, Link, Typography } from "@mui/material";
import FooterSocial from "./footerSocials";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="#" className="footer-link" aria-label="Back to top">
        ↑ Back to Top
      </Link>

      <Typography variant="body1">
        <strong>Registered Address:</strong> Pune, Maharashtra, India
      </Typography>

      <Box className="footer-copyright">
        <Typography variant="body2">© All Rights Reserved.</Typography>
      </Box>

      <Box className="footer-links">
        <Link href="#" className="footer-link">
          Privacy & Terms of Use
        </Link>
        <Link href="#" className="footer-link">
          Why Trust Us
        </Link>
        <Link href="mailto:amolkchavhan@gmail.com" className="footer-link">
          Email us
        </Link>
      </Box>

      <Box className="footer_socials">
        {FooterSocial.map((item) => (
          <li key={item.id}>
            <Link
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="footer-social-link"
            >
              {item.icon}
            </Link>
          </li>
        ))}
      </Box>
    </footer>
  );
};

export default Footer;
