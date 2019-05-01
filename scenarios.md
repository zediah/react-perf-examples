A list of scenarios to run for performance:

- Anonymous functions as props
    + Use a class method
    + Use a data-id
    + Extract to a child component
    + Use the useCallback hook
    why?
    + Causes re-renders due to new reference
    + Causes JS to have to create/clean up many functions
- Generating new values in render methods and passing it
    + Memoize the values with reselect
    + Try extract to higher up
    + Inject as a prop into the component
    why?
    + Causes excess renders
    + Causes excess things being created that need to be created/cleaned up
    + Harder to reason about the values, it's more than just state/props
- Excessive passing around of props cause extra re-renders
    + Keep props as close as possible
    + Extract common methods
    + Be more liberal in using mapStateToProps
    why?
    + More entry points for a component to have to re-render
    + More complexity of a component with more props
- Using correct keys (not indexes)
    + Try use a unique value
    why?
    + This can cause react to think a component is a new one when it's not
        - Sorting a list of items is a good example
- Excessively large objects passed as props
    + Try keep props as simple/flat as possible
    why?
    + Excessive re-renders, if one thing changes - everything has to update
- Not well defined initial method on reducer
    + Javascript has to create and maintain the diferent forms of the object
- Components "not" rendering themselves based on props
    + Move decision to render up to parent
    why?
    + Full render life cycle is still run even though it returns null
- Defaulting at the props level
    + Should use defaultProps of the component instead
    why?
    + Creating a new object reference each time

Concepts:
- Pure functions
- Side effects
- Immutability
- Idempotency

Other techniques:
- Using PureComponet and Memoize
    + Don't use it everywhere, only when props don't change much
- Using memoization/reselect
-