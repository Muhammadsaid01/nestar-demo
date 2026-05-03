import withLayoutBasic from '@/libs/components/layout/LayoutBasic';
import { NextPage } from 'next';
import { useState } from 'react';
const CommunityList:NextPage = () => {
	const [title, setTitle] = useState<string>('hello');
	return <div>Community List{" "}
		<button onClick={() => setTitle('world')}>Change Title</button>
		<div>{title}</div>
	</div>;
};

export default withLayoutBasic(CommunityList);