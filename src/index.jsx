import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";

import Quiz from "./containers/Quiz";
import configureStore from "./store/configureStore";

const store = configureStore();

const rnd = Component => {
	render(
		<AppContainer>
			<Provider store={store}>
				<Component />
			</Provider>
		</AppContainer>,
		document.getElementById("root")
	);
};

rnd(Quiz);


if (module.hot) {
	module.hot.accept("./containers/Quiz", () => {
		console.log("rnd hot");
		rnd(Quiz);
	});
}