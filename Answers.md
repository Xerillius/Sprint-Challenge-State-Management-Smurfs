1. What problem does the context API help solve?

prop drilling

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions allow you to describe state changes
reducers allow you to control how state changes
the store provides the state to the application

it is the single source of truth because it is where the state lives

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is accessible to the entire application and component is accessible only within the scope of the component. It is best to use component state when the state being handled has nothing to do with any other component, such as form submissions.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

redux-thunk allows you to create actions that return functions

1. What is your favorite state management system you've learned and this sprint? Please explain why!


redux. I love how the store, actions, and reducers interact with each other.