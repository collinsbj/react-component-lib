import React from "react";
import Button from "../index";
import { Search } from "@material-ui/icons";

function ButtonExamples(params) {
	const wrapperStyles = {
		padding: "50px 0",
		width: "fit-content",
		minWidth: "280px",
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
	};
	return (
		<React.Fragment>
			<div style={{ backgroundColor: "#f0f0f0", ...wrapperStyles }}>
				<Button>Button</Button>
			</div>
			<div style={{ backgroundColor: "#4285f4", ...wrapperStyles }}>
				<Button variants="blue">Button</Button>
			</div>
			<div style={{ backgroundColor: "#db4437", ...wrapperStyles }}>
				<Button variants="red">Button</Button>
			</div>
			<div style={{ backgroundColor: "#f4b400", ...wrapperStyles }}>
				<Button variants="yellow">Button</Button>
			</div>
			<div style={{ backgroundColor: "#0f9d58", ...wrapperStyles }}>
				<Button variants="green">Button</Button>
			</div>
			<div style={{ backgroundColor: "#f0f0f0", ...wrapperStyles }}>
				<Button variants="concave">Button</Button>
			</div>
			<div style={{ backgroundColor: "#4285f4", ...wrapperStyles }}>
				<Button variants="blue convex">Button</Button>
			</div>
			<div style={{ backgroundColor: "#db4437", ...wrapperStyles }}>
				<Button variants="red pressed">Button</Button>
			</div>
			<div style={{ backgroundColor: "#f4b400", ...wrapperStyles }}>
				<Button variants="yellow icon">
					<Search></Search>
				</Button>
			</div>
			<div style={{ backgroundColor: "#0f9d58", ...wrapperStyles }}>
				<Button variants="green">
					<Search style={{ fontSize: 32 }}></Search>
					<div>Search</div>
				</Button>
			</div>
		</React.Fragment>
	);
}

export default ButtonExamples;
