# functional-ui-workshop

## Intro

Clone this repo
```
git clone https://github.com/ingara/functional-ui-workshop.git
cd functional-ui-workshop
```

Install the project's dependencies:

```
npm install
```

Start the webserver:
```
npm start
```

Open the propject in your favorite editor

## Tasks
### 1.Implement your first actionCreator: openWindow
Open the file actions/appActions.js, this is where you will put all the actions in your app. Here you can implement an openWindow actionCreator. 
Hint: follow the pattern in toggleSnow.
Open the containers/Window.js file, here you can see that the ClosedWindow-component has an onClick handler,
where we need to dispatch the `OPEN_WINDOW` action by calling the `openWindow`-actionCreator. 
To access the dispatch function we must `connect` the Window component to the redux `store`. 
Hint: Open the Calendar component, note that since we don't need anything from the state, the connect function 
can be called without an argument. 

When you have completed this task, actions should be firing in the redux dev tools inspector when you click on the calendar windows.

### 2. Implement your first reducer: 
Open the file calendar.js where the default state of the calendar is set. Note that the the opened attribute 
is set to false on all calendar windows. Currenty there is only a very simple reducer which you
can expand to act on your newly created `OPEN_WINDOW` -action. Hint: See reducers/snowing.js for an example. Remember that mutating 
the state is bad practice and violates redux principles, so Object.assign will be useful here. 

When you have completed this task, you should be able open all the calendar windows

### 3. Async actions
Now, it is time to learn how to fetch window data from the back-end. We have created a fake REST-API using https://www.npmjs.com/package/json-server 
In the file db.json we have stored a mock database. Check out http://localhost:3000/api/windows , this will be the url for your 
api calls. 

The window data is needed to intitialize the app, so it is a good idea to fetch these data in the index.js file on the root.
Here we have direct access to the dispatch-function from the store object like so: 

```
store.dispatch(ACTION)
```

We will be using superagent https://www.npmjs.com/package/superagent as our client http request library, and we have 
included this in node_modules, however you are free to use other libraries if you wish.
Example get request using superagent: 

```
superagent
.get('/some-url')
.end(function(err, response){
    // Do something 
});
```
Note response.body is already a javascript object, so there is no need for JSON.parse.

Start by calling the api with superagent, and dispatch a `WINDOW_FETCH`-action on the store on 
a successfull (200 OK) request. Test to see if it works by inspecting the dev tools panel.

Now it is time to implement the corresponding reducer in reducers/windows.js. First, set `initial state = []` , since we will now
fetch the window data from the response returned from the API. Next, expand the switch statement to act
on your new `WINDOW_FETCH` action.

When you have completed this task you should be able to open all the windows with the new data.

### Async in an actionCreator
Having your api-calls scattered around in your components is messy and you have no separation of concerns. So 
we would like to move our superagent request into an action. Open actions/apiActions.js where you will find
an empty `fetchWindows` -function. Now in our actionCreator we no longer have direct access to the `store`. 

So far, our actionCreators have returned plain action objects such as: 

```
toggleSnow() {
  return {
    type: TOGGLE_SNOW
  }
}
```

In redux, actionCreators can also return functions. If you return a function, redux will, quite magicly, give you the dispatch-function
as an argument, like so

```
asyncToggleSnow() {
 return dispatch => {
    dispatch({
      type: TOGGLE_SNOW
    });
  }
}
```
Use this together with the api-call you implemented in index.js to create the fetchWindows actionCreator.
Now you can replace the superagent call you had in index.js with `store.dispatch(ApiActions.fetchWindows())`.

### 






