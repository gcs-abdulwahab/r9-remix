import type { MetaFunction } from "@remix-run/node";
import MySlot from "~/MySlot";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export type User = {
	name: string;
	email: string;
};
export type Car = {
  make: string;
  model: string;
  year: number;
};

const user: User = {
  name: "Ryan2222",
  email: "abd@ds.com"
}

const car: Car = {
  make: "Toyota",
  model: "Corolla",
  year: 2005
}


export default function Index() {
	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <MySlot {...user}  />  
		</div>
	);
}
