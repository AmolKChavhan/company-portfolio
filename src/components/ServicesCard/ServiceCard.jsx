import { Card, CardContent, Typography, Box } from "@mui/material";
import "./servicecard.css";

const ServiceCard = ({ title, description, icon }) => {
  return (
    <Card className="service-card">
      <CardContent className="service-card-content">
        <Box className="service-icon-container">
          <Box className="service-icon">{icon}</Box>
        </Box>
        <Box className="service-text-container">
          <Typography variant="h6" className="service-title">
            {title}
          </Typography>
          <Typography variant="body2" className="service-description">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
