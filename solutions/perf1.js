/**
 * Anonymous Functions example
 */

const items = [
  { id: 1, name: 'foo1' },
  { id: 2, name: 'foo2' },
  { id: 3, name: 'foo3' },
  { id: 4, name: 'foo4' },
  { id: 5, name: 'foo5' }
]

class MyComponent extends React.Component {
  state = {};

  onItemClick = (e) => {
    const id = e.currentTarget.dataset['id']
    this.setState({ selected: parseInt(id) })
  }

  render() {
    const { items } = this.props;
    const { selected } = this.state;

    return (
      <div>
        {items.map(item => {
          return (
            <div
              data-id={item.id}
              className={cn({ selected: item.id === selected })}
              onClick={this.onItemClick}
            >
              {item.name}
            </div>
          )
        })}
      </div>
    )
  }
}

React.render(<MyComponent items={items} />);










/* With Children */
class MyComponentWithChild extends React.Component {
  state = {};

  onItemClick = (id) => {
    this.setState({ selected: id })
  }

  render() {
    const { items } = this.props;
    const { selected } = this.state;

    return (
      <div>
        {items.map(item => {
          return (
            <MyChildComponent
              item={item}
              onClick={onItemClick}
              selected={item.id === selected}
            />
          )
        })}
      </div>
    )
  }
}

class MyChildComponent extends React.Component {
  onClick = (e) => {
    this.props.onClick(this.props.item.id)
  }

  render() {
    const { item, selected } = this.props;

    return (
      <div className={cn({ selected })} onClick={this.onClick}>
        {item.name}
      </div>
    )
  }
}

React.render(<MyComponentWithChild items={items} />);










/** Hooks version */
function MyFunctionalChild(props) {
  const { item } = props;

  const onClick = useCallback(() => {
    props.onClick(item.id)
  }, [item.id])

  return (
    <div onClick={onClick}>
      {item.name}
    </div>
  )
}