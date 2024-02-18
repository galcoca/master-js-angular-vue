import React, { Component } from "react";
import FirstComponent from "./FirstComponent";

class TestSection extends Component {
	counter = 0;

	/*
	constructor(props){
		super(props);
		this.state = {
			counter: 0
		}
	}
	*/

	State = {
		counter: 0,
	};

	HelloWorld(name, age) {
		const presentation = (
			<div>
				<h2>Hi, I'm {name}</h2>
				<h3>I am {age} years old</h3>
			</div>
		);

		return presentation;
	}

	adition = (e) => {
		this.setState({
			counter: (this.counter += 1),
		});
	}

	substraction = (e) => {
		this.setState({
			counter: (this.counter -= 1),
		});
	}

	render() {
		const name = "Gabriel";

		return (
			<section id="content">
				<h2 className="subHeader">Last Articles</h2>
				<p>Hi, welcome to the Master JS: React</p>

				<h2 className="subHeader">Functions & Basic JSX</h2>
				{this.HelloWorld(name, 12)}

				<h2 className="subHeader">Components</h2>
				<section className="components">
					<FirstComponent />
					<FirstComponent />
				</section>

				<h2 className="subHeader">State</h2>
				<p>{this.counter}</p>
				<p>
					<input
						type="button"
						value="Sum"
						onClick={this.adition}
					/>
					<input
						type="button"
						value="Subs"
						onClick={this.substraction}
					/>
				</p>
			</section>
		);
	}
}

export default TestSection;
