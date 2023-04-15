## What is Redux 
```
redux is simple pattern and librarY
```

## WhY Redux 
```
REDUX is used for state management in js appliction
```
## Purpose of redux
```
the purspose of redux to share data between components.
```
## Rule 
```
redux is third party library which is follow flux architchture
```

## What is Flux architechture
```
flux architechture is pre-defined set of rules which have to follow to share the data between componets.
and architechture is

action-----> dispatch-----> store----> view ----> action------>dispatch
```
## What is Redux pattern
```
redux have a speciel funtion Dispatch() and dispatch will take the action object form components and give this action object to Reducers , after  some operation performing reducer return data and this data will store in store ,
```

## Implementation And How it Works

```
first make a store using
```
import {legacy_createStore} from 'redux'

const store = legacy_createStore()

export default store;
```

and make available to this store for react components

to vaialable store to components you to wrap <app> components inside <Provider> components which import from react-redux

and <Provider> take a props store which is your store 
<Provider store={store}>
```

## what is Reducer
```
reducer is simple js function whch takes two parameter they are 
1. storedata
2. action

and its return storedata

* Reducer should resisterd with Redux store

* Reducer can store default data isn the store using ists first parameter

Note: whenever reducer return data at any point of time , that data stored in redux store

```

## Action
```
action is speciel obejct which contain one mandtory property called type and vaue of this type property should be unique

action object is used to store data of componnet

action object is passed as argument to the dispatch() funtion
```

## What is diaspatch

```
dispatch is predefined function which takes one argument that is action object.

dispatch is used to call the reducer and pass the action obejct to reducer

dispatch functionn can be callled from component directly
```
