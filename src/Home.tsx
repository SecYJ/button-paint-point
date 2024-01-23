import Button from "./components/Button";

const Home = () => {
	return (
		<>
			<h1 className="text-9xl">paint point of button</h1>
			<div className="flex gap-4">
				<Button as="button" variant="primary" className="text-green-600 active:text-red-600">
					Button
				</Button>
				<Button to="/about" as="link" variant="secondary">
					React router Link
				</Button>
				<Button
					as="a"
					href="https://www.google.com/"
					variant="primary"
					target="_blank"
					className="visited:text-green-600"
				>
					Anchor tag
				</Button>
			</div>
		</>
	);
};

export default Home;
