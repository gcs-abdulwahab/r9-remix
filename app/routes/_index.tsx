import type { MetaFunction } from "@remix-run/node";
import MySlot from "~/MySlot";
import { NavLink, useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
	return [
		{ title: "New Remix App" },
		{ name: "description", content: "Welcome to Remix!" },
	];
};

export default function Index() {
	const data = useLoaderData<typeof loader>();
	console.log("data", data);
	const { title, description } = data;

	return (
		<div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <MySlot title={title} description={description} />
      <a href="/second">Go to second page using anchor tag</a>
      <NavLink to="/second">Go to second page using NavLink</NavLink>
		</div>
	);
}

export const loader = () => {
	console.log("firstLoaderMessageasd");
	return {
		title: "This is a loader title from Server",
		description: "This is a loader description from Server",
	};
};
