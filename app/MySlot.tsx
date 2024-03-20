interface PropType {
	title: string;
	description: string;
}

const MySlot = ({ title, description }: PropType) => {
	return (
		<>
			<h1>My Slot</h1>
			<h2>{title}</h2>
            <p>{description}</p>
            
		</>
	);
};

export default MySlot;
