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

    render() {
        const { items } = this.props;
        const { selected } = this.state;

        return (
            <div>
                {items.map(item => {
                    return (
                        <div 
                            className={cn({ selected: item.id === selected})} 
                            onClick={() => this.setState({ selected: item.id })}
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

    render() {
        const { items } = this.props;
        const { selected } = this.state;

        return (
            <div>
                {items.map(item => {
                    return (
                        <MyChildComponent 
                            item={item}
                            onClick={() => this.setState({ selected: item.id })} 
                            selected={item.id === selected}
                        />
                    )
                })}
            </div>
        )
    }
 }

 class MyChildComponent extends React.Component {
     render() {
        const { item, onClick, selected } = this.props;

        return (
            <div className={cn({ selected })} onClick={onClick}>
                {item.name}
            </div>
        )
     }
 } 

 React.render(<MyComponentWithChild items={items} />);










/** Hooks version */
function MyFunctionalChild(props) {
    const { item, onClick } = props;

    return (
        <div onClick={onClick}>
            {item.name}
        </div>
    )
}