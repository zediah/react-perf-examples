/**
 * Choosing not to render in the component
 */

class MyComponent extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <div>
        {items.length > 0 && <MyChildComponent items={items} />}
      </div>
    )
  }
}


class MyChildComponent extends React.Component {
  componentDidMount() {
    someExpensiveCalculations();
  }

  componentDidUpdate(prevProps) {
    somePropCheck();
  }

  render() {
    const { items } = this.props;

    return (
      <div>
        {items.map(item => {
          return (
            <div>
              {item.name}
            </div>
          )
        })}
      </div>
    )
  }
}

const items = [];
React.render(<MyComponent items={items} />);