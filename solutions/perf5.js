/**
 * Use the correct keys to ensure react can keep hold of instances
 */
class MyComponentWithChild extends React.Component {
  state = { sortOrder: "asc" }

  onSortSwap = () => {
      this.setState(prevState => ({ sortOrder: prevState.sortOrder === 'asc' ? 'desc' : 'asc'}))
  }

  render() {
      const { items } = this.props;
      const { sortOrder } = this.state;
      const sortedItems = items.sort((a,b) => {
          if (sortOrder === 'asc')
              return a.id - b.id
          else
              return b.id - a.id
      });
      return (
          <div>
              <button onClick={this.onSortSwap}>Swap sort order</button>
              {sortedItems.map((item) => {
                  return (
                      <MyChildComponent 
                          key={item.id}
                          item={item}
                      />
                  )
              })}
          </div>
      )
  }
}

class MyChildComponent extends React.Component {
   componentDidMount() {
       console.log('Child just mounted');
   }

   render() {
      const { item } = this.props;

      return (
          <div>
              {item.name}
          </div>
      )
   }
} 

React.render(<MyComponentWithChild items={items} />);