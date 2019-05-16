/**
 * Generating values every render
 */
class MyComponentWithChild extends React.Component {
  state = {};

  render() {
      const { item } = this.props;

      const myItem = transformMyItem(item);
      return (
          <div>
              <MyChildComponent item={myItem} />
          </div>
      );
  }
}

const transformMyItem = memoize((item) => {
  return {
      ...item,
      otherField: 'val'
  }
})

class MyChildComponent extends React.PureComponent {
   render() {
      const { item } = this.props;

      return (
          <div className={cn({ selected })} onClick={onClick}>
              {item.name}
          </div>
      )
   }
} 

const item = { id: 1, name: 'foo1' };

React.render(<MyComponentWithChild item={item} />);









/** MapStateToPropsVersion */
class MyComponent extends React.Component {
  state = {};

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

// with memoize
const getFilteredThings = memoize(items => {
    return items.filter(item => item.id > 1)
})

// with selector
const getFilteredThingsSelector = createSelector(
  state => state.thing.items,
  (items) => {
    return items.filter(item => item.id > 1);
  }
)

function mapStateToProps(state) { 
   return {
       items: getFilteredThings(state.thing.items),
   };
}

React.render(<MyComponent />);