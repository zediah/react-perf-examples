/**
 * Initial reducer deifnition differs from usage
 */

const initalState = {
  foo: undefined,
  bar: undefined,
  temp: undefined,
  value: undefined,
  error: false,
};

function reduce(state = initialState, action) {
  switch(action.type) {
      case "UPDATE": 
         return {
             ...state,
             ...action.payload,
         }
  }
}

let store;
store = reduce(store, {
 foo: 'fub',
 bar: 'baz'
});
store = reduce(store, {
 temp: 'temp'
});
store = reduce(store, {
 value: 'hi'
});