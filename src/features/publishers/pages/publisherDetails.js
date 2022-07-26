import CallIcon from "@mui/icons-material/Call";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import EmailIcon from "@mui/icons-material/Email";
import { Typography, IconButton, Stack, Box } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Header } from "../../header/header";
import { formatMobileNumber, formatHomeNumber } from "../functions/formatting";

export const PublisherDetails = ({
  publisher,
  publisherList,
  publisherEdit,
}) => {
  return (
    <>
      <Header
        headerLeft={<ArrowBackIosIcon onClick={publisherList} />}
        title={
          <Typography>
            {publisher.firstName} {publisher.lastName}
          </Typography>
        }
        headerRight={
          <Typography onClick={() => publisherEdit(publisher)}>Edit</Typography>
        }
      />

      <Box>
        {publisher.mobilePhone ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Typography fontSize={{ xs: 25 }}>
              {formatMobileNumber(publisher.mobilePhone)}
            </Typography>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <IconButton
                aria-label="delete"
                size="large"
                href={`tel://${publisher.mobilePhone}`}
              >
                <CallIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                size="large"
                href={`sms://${publisher.mobilePhone}`}
              >
                <ChatBubbleIcon />
              </IconButton>
            </Stack>
          </Stack>
        ) : null}
      </Box>

      <Box>
        {publisher.homePhone ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Typography fontSize={{ xs: 25 }}>
              {formatHomeNumber(publisher.homePhone)}
            </Typography>
            <IconButton
              aria-label="delete"
              size="large"
              href={`tel://${publisher.homePhone}`}
            >
              <CallIcon />
            </IconButton>
          </Stack>
        ) : null}
      </Box>

      <Box>
        {publisher.personalEmail ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Typography fontSize={{ xs: 15 }}>
              {publisher.personalEmail}
            </Typography>
            <IconButton
              aria-label="delete"
              size="large"
              href={`mailto:${publisher.personalEmail}`}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        ) : null}
      </Box>

      <Box>
        {publisher.jwpubEmail ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Typography fontSize={{ xs: 15 }}>
              {publisher.jwpubEmail}
            </Typography>
            <IconButton
              aria-label="delete"
              size="large"
              href={`mailto:${publisher.jwpubEmail}`}
            >
              <EmailIcon />
            </IconButton>
          </Stack>
        ) : null}
      </Box>
      <Box>
        {publisher.houseNumber && publisher.street ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={4}
          >
            <Typography fontSize={{ xs: 15 }}>
              {publisher.unitNumber ? `${publisher.unitNumber}/` : null}
              {`${publisher.houseNumber} ${publisher.street}, ${publisher.suburb}`}
            </Typography>
            <IconButton
              aria-label="delete"
              size="large"
              href={`https://www.google.com/maps/place/${publisher.houseNumber}+${publisher.street},+${publisher.suburb}`}
            >
              <LocationOnIcon />
            </IconButton>
          </Stack>
        ) : null}
      </Box>
    </>
  );
};
