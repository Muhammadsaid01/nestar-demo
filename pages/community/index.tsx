import { useState } from 'react';
const CommunityList = () => {
	const [title, setTitle] = useState<string>('hello');
	return <div>Community List{" "}
		<button onClick={() => setTitle('world')}>Change Title</button>
		<div>{title}</div>
	</div>;
};

export default CommunityList;