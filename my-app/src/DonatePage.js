import { Box } from '@chakra-ui/react';

const DonatePage = () => {
  return (
    <div id="donate-layout" style="display: flex; flex-direction: column">
      <div id="row-1-donate" style="display: flex; flex-direction: row">
        <div style="display: flex; flex-direction: column">
          <h2>Call to Action</h2>
          <p>Fill in info</p>
        </div>
        <Box boxSize="sm">
          <image
            src="https://www.greenbiz.com/sites/default/files/images/articles/featured/24hoursofhope.jpg"
            alt="Climate Reality Atl"
            style="height: 10em; width: 10em"
          />
        </Box>
      </div>
      <div id="row-2-donate">
        <div>
          <h2>Make Donation</h2>
          <input />
        </div>
        <Box boxSize="sm">
          <image
            src="https://www.greenbiz.com/sites/default/files/images/articles/featured/24hoursofhope.jpg"
            alt="Climate Reality Atl"
            style="height: 10em; width: 10em"
          />
        </Box>
      </div>
    </div>
  );
};
export default DonatePage;
