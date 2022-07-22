import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CardContent from "@mui/material/CardContent";

const PublisherCard = ({ publisher }) => {
  return (
    <Container>
      <Card variant="outlined" color="error">
        <CardContent>

        <Typography variant="h6">
          {publisher.lastName}, {publisher.firstName}
        </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default PublisherCard;
