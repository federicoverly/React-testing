# REACT TESTING PROJECT

This repository goes makes an exhaustive exemplification of different tests using react test library and MSW.

## Simple tests

### Different ways of accesing the virtual dom

You can find these in Greet.test, but mainly in Application.test, where I play with different ways of accessing the nodes:

- 1.  Get by role (filter by options)
- 2.  Get by label text
- 3.  Get by placeholder text
- 4.  Get by text
- 5.  Get by display value
- 6.  Get by alt text
- 7.  Get by title
- 8.  Get by test id

Skills.test uses getAll and QueryBy, to get elements even if they are not visible to the user.

### Test a custom hook

You can check how to test a custom hook in the useCounter.test. It uses the renderHook and then mocks the implementation by using "act"

### Test a user interaction

In the Counter.test file you can check different ways of user interactions. For example, using the userEvent click to dispatch an action, or the tab to see
which elements are being focused.

### Test functions

A mock implementation of functions using jest.fn() can be found in the CounterTwo test. It allows you to check whether a function has been called.

### Test providers

MuiMode shows how to test providers. You can pass it to the render function, but also create a customRender to include all the providers of your application.

### Mock and test https

To mock http responses, both successful and failure, I am using Mock Service Worker (MSW)[https://mswjs.io/]. An implementation of this can be found in Users.test
