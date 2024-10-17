import { Typography, Box, TextField, Button } from "@mui/material";
import "./contact.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <h3>Reach Out to Us</h3>
      <Box className="contact-us-container">
        <Box className="contact-card">
          <h4>Contact Us</h4>
          <Box className="contact-card-text">
            <Typography variant="body3">
              Feel free to reach out to us with any questions or inquiries.
            </Typography>
            <Typography variant="body1">
              <strong>Address:</strong> Pune, Maharashtra, India
            </Typography>
            <Typography variant="body1">
              <strong>Contact No.:</strong> +91 7741084928
            </Typography>
            <Typography variant="body1">
              <strong>Email:</strong> amolkchavhan@gmail.com
            </Typography>
          </Box>
        </Box>
        <Box className="contact-form">
          <form className="form" aria-label="Contact Form">
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              type="email"
              variant="outlined"
              fullWidth
              margin="normal"
            />
            <TextField
              label="Message"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              margin="normal"
            />
            <Button className="submit-button" variant="contained" type="submit">
              Send Message
            </Button>
          </form>
        </Box>
      </Box>
    </section>
  );
};

export default ContactUs;
