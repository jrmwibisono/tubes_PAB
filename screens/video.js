import { Heading, Center, Button } from "native-base";
import { Header } from "../components/";

const Video = () => {
  return (
    <>
      <Header title={"Host"} />
      <Center flex={1}>
        <Heading>Did You Know?</Heading>
        <Button>COMPLETE PROFILE TO ADD CAR</Button>

      </Center>
    </>
  );
};

export default Video;