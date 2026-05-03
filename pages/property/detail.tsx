import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { Container } from '@mui/material';
import { NextPage } from 'next';

const PropertyDetail:NextPage = () => {
	console.log('Property Detail Page - PAGE ROUTER');


	return (
		<>
			
			<Container>Property Detail</Container>
		
		</>
	)
};

export default withLayoutBasic(PropertyDetail);