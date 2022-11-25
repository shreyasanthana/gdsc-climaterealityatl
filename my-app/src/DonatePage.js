import { 
    Box,
    Image
    
} from '@chakra-ui/react';

const DonatePage = () => {
  return (
    <Box id="donate-layout" style="display: flex; flex-direction: column">
      <Box id="row-1-donate" style="display: flex; flex-direction: row">
        <Box style="display: flex; flex-direction: column">
          <h2>Call to Action</h2>
          <p>Fill in info</p>
        </Box>
        <Box boxSize="sm">
          <Image
            src="https://www.greenbiz.com/sites/default/files/images/articles/featured/24hoursofhope.jpg"
            alt="Climate Reality Atl"
            style="height: 10em; width: 10em"
          />
        </Box>
      </Box>
      <Box id="row-2-donate">
        <Box>
          <h2>Make Donation</h2>
          <input />
        </Box>
        <Box boxSize="sm">
          <Image
            src="https://www.greenbiz.com/sites/default/files/images/articles/featured/24hoursofhope.jpg"
            alt="Climate Reality Atl"
            style="height: 10em; width: 10em"
          />
        </Box>
      </Box>
    </Box>
  );
};
export default DonatePage;
