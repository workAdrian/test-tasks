const FunctionalCounter = ({ count }) => {
	// do smth...

	useEffect(() => {
		// This code runs when `count` changes.
		console.log(`Count has changed to: ${count}`);
	}, [count]);  // Dependency array includes `count`, so effect runs on count change.

	return (
		<div>Count: {count}</div>
	);
};

//
//

class FunctionalCounter2 extends React.Component {
    componentDidUpdate(prevProps) {
		if (prevProps.count !== this.props.count) {
			console.log(`Count has changed to: ${this.props.count}`);
		}
	}

    render() {
        return (
            <div>Count: {this.props.count}</div>
        );
    }
}