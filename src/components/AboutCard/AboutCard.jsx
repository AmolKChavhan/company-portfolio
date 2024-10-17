
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import './aboutcard.css';

const AboutCard = ({ title, description, icon, imageUrl }) => {
  return (
    <Card className="about-card">
      {/* Optional CardMedia for an image or icon */}
      {imageUrl && (
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
          className="about-card-media"
        />
      )}
      <CardContent>
        {/* Optional icon above the title */}
        {icon && (
          <Box className="about-icon">
            {icon}
          </Box>
        )}
        <Typography variant="h6" className="about-title">
          {title}
        </Typography>
        <Typography variant="body2" className="about-description">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AboutCard;
