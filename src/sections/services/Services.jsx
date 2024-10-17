import { Container, Grid2 } from "@mui/material";
import ServiceCard from "../components/ServicesCard/ServiceCard";
import ServicesData from "./servicesData";
import "./services.css";

const Services = () => {
  return (
    <Container className="services-container">
      <h3> My Services</h3>
      <Grid2 container spacing={3} justifyContent="space-between">
        {ServicesData.map((service, index) => (
          <Grid2 item xs={12} sm={6} md={6} key={index}>
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default Services;
