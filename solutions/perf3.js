/**
 * Perf 3 - Excessive passing of props across too many levels
 */
class MyComponent1 extends React.Component {
  render() {
      return (
          <MyComponent2 />
      );
  }
}

class MyComponent2 extends React.Component {
 render() {
     const { someValue } = this.props;
     return (
         <div>
             {someValue}
             <MyComponent3 />
         </div>
     );
 }
}

function mapStateToProps(state) {
  return {
      someValue: state.reducer.value,
  };
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

function mapStateToProps(state) {
  return {
      someValue: state.reducer.value,
  };
}