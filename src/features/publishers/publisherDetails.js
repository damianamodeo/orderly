import AddIcon from '@mui/icons-material/Add';import { Typography } from "@mui/material";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Header } from "../header/header";



export const PublisherDetails = ({ publisher, publisherList, publisherEdit }) => {
  return (
    <>
      <Header
        headerLeft={<ArrowBackIosIcon onClick={publisherList} />}
        title={<>{publisher.firstName} {publisher.lastName}</>}
        headerRight={<span onClick={() => publisherEdit(publisher)}>Edit</span>}
      />
      <Typography>{publisher.firstName}</Typography>
      <Typography>{publisher.lastName}</Typography>
    </>
  );
};
