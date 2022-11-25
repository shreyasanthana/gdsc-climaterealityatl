import { Box, Image, SkeletonText } from '@chakra-ui/react';

const DonatePage = () => {
  return (
    <Box>
      <Box style={{ display: 'flex', flexDirection: 'column' , gap: '10em' }}>
        <Box style={{ display: 'flex', flexDirection: 'row' }}>
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Call to Action</h2>
            <Box style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: '25em' }}>
              <SkeletonText width = '25em' mt="10" noOfLines={7} spacing="10" />
              <Image
                src="https://www.greenbiz.com/sites/default/files/images/articles/featured/24hoursofhope.jpg"
                alt="Climate Reality Atl"
                style={{ height: '20em', width: '20em' }}
              />
            </Box>
          </Box>
        </Box>
        <Box>
          <Box style={{ display: 'flex', flexDirection: 'column' }}>
            <h2>Make Donation</h2>
            <Box style={{ display: 'grid', gridTemplateColumns: 'auto auto' }}>
              <SkeletonText width="50%" mt="10" noOfLines={7} spacing="10" />
              <Image
                src="https://www.greenbiz.com/sites/default/files/images/articles/featured/24hoursofhope.jpg"
                alt="Climate Reality Atl"
                style={{ height: '20em', width: '20em' }}
              />
            </Box>
            <Box />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default DonatePage;
