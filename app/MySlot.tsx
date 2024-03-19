
interface PropType {
    name: string;
    email: string;
}

const MySlot = ({ name, email }: PropType) => {
	return (
		<>
			<h1>My Slot</h1>
			<p>{name}</p>
			{/* <p>{email}</p> */}

			<p>{email}</p>
		</>
	);
};

export default MySlot;
