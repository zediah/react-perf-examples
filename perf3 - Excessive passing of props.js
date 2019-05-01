/**
 * Perf 3 - Excessive passing of props across too many levels
 */
 class MyComponent1 extends React.Component {
     render() {
         const { someValue, someOtherValue } = this.props;
         return (
             <MyComponent2 
                someValue={someValue} 
                someOtherValue={someOtherValue} 
            />
         );
     }
 }

 function mapStateToProps(state) {
     return {
         someValue: state.reducer.value,
         someOtherValue: state.reducer.otherValue,
     };
 }

 class MyComponent2 extends React.Component {
    render() {
        const { someValue, someOtherValue } = this.props;
        return (
            <div>
                {someValue}
                <MyComponent3 someValue={someOtherValue} />
            </div>
        );
    }
}

class MyComponent3 extends React.Component {
    render() {
        const { someValue} = this.props;
        return (
            <div>
                {someValue}
            </div>
        );
    }
}