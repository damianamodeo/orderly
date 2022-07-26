import { TextField, Grid, Box, Divider, Chip } from "@mui/material";
import { useState } from "react";
import { formatMobileNumber, formatHomeNumber } from "../functions/formatting";

export const PublisherForm = ({ publisher }) => {
  const [firstName, setFirstName] = useState(publisher.firstName);
  const [middleName, setMiddleName] = useState(publisher.middleName);
  const [lastName, setLastName] = useState(publisher.lastName);
  const [otherName, setOtherName] = useState(publisher.otherName);
  const [familyHead, setFamilyHead] = useState(publisher.familyHead);
  const [birthDate, setBirthDate] = useState(publisher.birthDate);
  const [baptismDate, setBaptismDate] = useState(publisher.baptismDate);
  const [homePhone, setHomePhone] = useState(publisher.homePhone);
  const [mobilePhone, setMobilePhone] = useState(publisher.mobilePhone);
  const [personalEmail, setPersonalEmail] = useState(publisher.personalEmail);
  const [jwpubEmail, setJwpubEmail] = useState(publisher.jwpubEmail);
  const [unitNumber, setUnitNumber] = useState(publisher.unitNumber);
  const [houseNumber, setHouseNumber] = useState(publisher.houseNumber);
  const [street, setStreet] = useState(publisher.street);
  const [suburb, setSuburb] = useState(publisher.suburb);

  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: .5, width: "95%" },
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          container
          spacing={1}
          sx={{
            my: 6,
          }}
        >
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <TextField
              value={firstName}
              label="First Name"
              onChange={(e) => {
                publisher.firstName = e.target.value;
                setFirstName(e.target.value);
              }}
              variant="filled"
              required
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <TextField
              value={lastName}
              label="Last Name"
              onChange={(e) => {
                publisher.lastName = e.target.value;
                setLastName(e.target.value);
              }}
              variant="filled"
              required
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <TextField
              value={middleName}
              label="Middle Name"
              onChange={(e) => {
                publisher.middleName = e.target.value;
                setMiddleName(e.target.value);
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6} sm={6} md={3} lg={2} xl={2}>
            <TextField
              value={otherName}
              label="Other Name"
              onChange={(e) => {
                publisher.otherName = e.target.value;
                setOtherName(e.target.value);
              }}
              variant="filled"
              helperText="Enter the name the publisher prefers"
            />
          </Grid>
        </Grid>
        <Divider textAlign="left">
          <Chip label="Address" />
        </Divider>
        <Grid
          container
          spacing={1}
          sx={{
            mb: 6,
          }}
        >
          <Grid item xs={3} sm={2} md={1} lg={1} xl={1}>
            <TextField
              value={unitNumber}
              label="Unit"
              onChange={(e) => {
                publisher.unitNumber = e.target.value;
                setUnitNumber(e.target.value);
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={3} sm={2} md={1} lg={1} xl={1}>
            <TextField
              value={houseNumber}
              label="House"
              onChange={(e) => {
                publisher.houseNumber = e.target.value;
                setHouseNumber(e.target.value);
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
            <TextField
              value={street}
              label="Street"
              onChange={(e) => {
                publisher.street = e.target.value;
                setStreet(e.target.value);
              }}
              variant="filled"
            />
          </Grid>
          <Grid item xs={6} sm={4} md={4} lg={3} xl={2}>
            <TextField
              value={suburb}
              label="Suburb"
              onChange={(e) => {
                publisher.suburb = e.target.value;
                setSuburb(e.target.value);
              }}
              variant="filled"
            />
          </Grid>
        </Grid>
        <Divider textAlign="left">
          <Chip label="Telephone" />
        </Divider>
        <Grid
          container
          spacing={1}
          sx={{
            mb: 6,
          }}
        >
          <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
            <TextField
              value={formatMobileNumber(mobilePhone)}
              label="Mobile"
              type="tel"
              variant="filled"
              onChange={(e) => {
                const { value } = e.target;
                e.target.value = formatMobileNumber(value);
                setMobilePhone(value.replace(/[^\d]/g, ""));
                publisher.mobilePhone = value.replace(/[^\d]/g, "");
              }}
            />
          </Grid>
          <Grid item xs={6} sm={5} md={4} lg={3} xl={2}>
            <TextField
              value={formatHomeNumber(homePhone)}
              label="Home"
              type="tel"
              variant="filled"
              onChange={(e) => {
                const { value } = e.target;
                e.target.value = formatHomeNumber(value);
                setHomePhone(value.replace(/[^\d]/g, ""));
                publisher.homePhone = value.replace(/[^\d]/g, "");
              }}
            />
          </Grid>
        </Grid>
        <Divider textAlign="left">
          <Chip label="Email" />
        </Divider>
        <Grid
          container
          spacing={1}
          sx={{
            mb: 6,
          }}
        >
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <TextField
              value={personalEmail}
              label="Personal"
              type="email"
              variant="filled"
              onChange={(e) => {
                publisher.personalEmail = e.target.value;
                setPersonalEmail(e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <TextField
              value={jwpubEmail}
              label="JWpub"
              type="email"
              variant="filled"
              onChange={(e) => {
                publisher.jwpubEmail = e.target.value;
                setJwpubEmail(e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
