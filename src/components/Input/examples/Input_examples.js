import React from "react";
import Input from "../index";
import { Search } from "@material-ui/icons";

function InputExamples(params) {
	const wrapperStyles = {
		padding: "50px 0",
		width: "fit-content",
		minWidth: "400px",
		alignItems: "center",
		justifyContent: "center",
		display: "flex",
	};

	function handleChange(value) {
		console.log(value);
	}

	return (
		<React.Fragment>
			<div style={{ backgroundColor: "#f0f0f0", ...wrapperStyles }}>
				<Input></Input>
			</div>
			<div style={{ backgroundColor: "#4285f4", ...wrapperStyles }}>
				<Input variants="blue"></Input>
			</div>
			<div style={{ backgroundColor: "#db4437", ...wrapperStyles }}>
				<Input variants="red"></Input>
			</div>
			<div style={{ backgroundColor: "#f4b400", ...wrapperStyles }}>
				<Input variants="yellow"></Input>
			</div>
			<div style={{ backgroundColor: "#0f9d58", ...wrapperStyles }}>
				<Input variants="green"></Input>
			</div>
			<div style={{ backgroundColor: "#f0f0f0", ...wrapperStyles }}>
				<Input variants="concave"></Input>
			</div>
			<div style={{ backgroundColor: "#4285f4", ...wrapperStyles }}>
				<Input variants="blue convex"></Input>
			</div>
			<div style={{ backgroundColor: "#db4437", ...wrapperStyles }}>
				<Input variants="red pressed"></Input>
			</div>
			<div style={{ backgroundColor: "#f4b400", ...wrapperStyles }}>
				<Input variants="yellow">
					<Search></Search>
				</Input>
			</div>
			<div style={{ backgroundColor: "#0f9d58", ...wrapperStyles }}>
				<Input variants="green" value="Passed Value"></Input>
			</div>
			<div style={{ backgroundColor: "#f0f0f0", ...wrapperStyles }}>
				<Input
					handleChange={handleChange}
					value="Handle Change"
				></Input>
			</div>
		</React.Fragment>
	);
}

export default InputExamples;
