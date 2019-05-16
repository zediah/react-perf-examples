/**
 * Defaulting values at the props level of a parent component
 */

/* With Children */
class MyComponentWithChild extends React.Component {
    render() {
        const { items } = this.props;

        return (
            <div>
                <MyChildComponent 
                    items={items || []}
                />
            </div>
        )
    }
 }

 class MyChildComponent extends React.PureComponent {
     render() {
        const { items } = this.props;

        return (
            <div>
                {items.map(item => <div>{item.name}</div>)}
            </div>
        )
     }
 } 

 React.render(<MyComponentWithChild items={items} />);










 /** Map state to props version */
 class MyComponent extends React.Component {
    state = {};

    render() {
        const { items, myProp } = this.props;

        return (
            <div>
                <span>{myProp.heading}</span>
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

 function mapStateToProps(state) {
     return {
         myProp: state.thing.config || {}
     };
 }

 React.render(<MyComponent />);