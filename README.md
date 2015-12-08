# Functional-ui-workshop

## Intro

Clone this repo:

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

Open the project in your favorite editor.

## Tasks

### 1. Implement your first action creator: `openAllWindows()`
If you go to the Admin page in the browser, there are two buttons there, "Open all windows" and "Close all windows". Currently these are inactive, we are going to activate them using the redux state pattern.

Open the file `actions/appActions.js` - this is where you will put all the action creators in your app. Here you can implement an `openAllWindows` action creator.

Hint: follow the pattern in `toggleSnow()`.

Now open the file `containers/Admin.js`. Here you can see that the `OpenClose`
component has an `openAll` onClick handler which just prints to the console.
Instead of printing to the console we want to dispatch the `WINDOW_OPEN_ALL` action
by calling the `openAllWindows` action creator.

To access the dispatch function, we must `connect` the `Admin` component to the
redux `store`.

Hint: see the `Calendar` component (`components/Calendar.js`) for inspiration.
Note that since we don't need anything from the store, the `connect` function
can be called without any arguments.

When you have completed this task, actions should be firing in the redux dev tools inspector when you click on the "Open all windows" button.

TIP: ctrl + h toggles the visibility of the dev tools inspector.


### 2. Implement your first reducer
Open the file `reducers/windows.js` where you will find the default state for
our calendar.
Note that the `opened` attribute is set to `false` on all calendar windows.
Currently this is only a very simple reducer which you
can expand to act on your newly created `WINDOW_OPEN_ALL` action.

Hint: See reducers/snowing.js for an example. Remember that mutating the state is
bad practice and violates redux principles, so
[`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
will be useful here.

When you have completed this task, you should be able to open all the calendar windows

### 3. Practicing the pattern
As an Admin, the "Close all windows" button is very useful. Implement this functionality as well.

Now it is time to focus on the calendar. On the calendar page, we want the calendar windows to open when we click on them.
Open the file `containers/Window.js`. Here you can see that the `ClosedWindow`
component has an empty onClick handler. Start by creating an action creator which you can dispatch here and continue expanding the windows reducer (`reducers/windows.js`) to act on your new `WINDOW_OPEN` action .   

### 4. Async actions
Now, it is time to learn how to fetch window data from the backend.

We have created a fake REST-API using [json-server](https://www.npmjs.com/package/json-server).
In the file `db.json` we have stored some data which you can check out at
http://localhost:3000/api/windows. This will also be the url for your api calls.

We want to fetch the data from `/api/windows` and use this to initialize our app.
Later on we will fetch this data in an action creator, but for now we will start
by doing it directly in the `index.js` file.

Since we have access to the `store` object we can use the `dispatch` function
like this:

```javascript
store.dispatch(SOME_ACTION)
```

We will be using [`superagent`](https://www.npmjs.com/package/superagent) for
http requests in our examples (and it is already present in `node_modules`),
however you are free to use other libraries if you wish.

Example get request using superagent:

```javascript
superagent
  .get('/some-url')
  .end(function(err, response){
      // Do something
  });
```

Note that `response.body` is already a javascript object, so there is no need
for `JSON.parse`.

You can find some useful snippets for our API in [API.md](API.md)

Now call the `/api/windows` endpoint and dispatch a `WINDOW_FETCH` action on a
successful (200 OK) response.
Test to see if it works by inspecting the dev tools panel.

Now it is time to implement the corresponding reducer in reducers/windows.js.
First, set `defaultState = []` since we will now fetch the window data from the
response returned from the API.
Next, expand the switch statement to act on your new `WINDOW_FETCH` action.

When you have completed this task you should be able to open all the windows
with the new data.


### 5. Async in an actionCreator
Having your api calls scattered around in your components is messy and there is
no separation of concerns. So we would like to move our http request into
an action, namely `fetchWindows` in `actions/apiActions.js`.
In our action creator we no longer have direct access to the `dispatch`
function on the `store` so what do we do?

So far our action creators have returned plain action objects such as:

```javascript
function toggleSnow() {
  return {
    type: TOGGLE_SNOW
  }
}
```

But in Redux, action creators can also return functions. If you return a function,
you will get `dispatch` as an argument so we can do this:

```javascript
asyncToggleSnow() {
 return dispatch => {
    dispatch({
      type: TOGGLE_SNOW
    });
  }
}
```

Use this together with the api call you implemented in `index.js` to create the
`fetchWindows` actionCreator.

Now you can replace the http request you had in index.js with
`store.dispatch(ApiActions.fetchWindows())`.

When you have completed this task the app will be exactly the same, but your
index.js file is much cleaner.


### 6. Smart and dumb components
In the `Form` (`containers/Form.js`) there is quite a lot of code and it is
difficult to grasp what is going on.
Try to extract small and pure presentation components from this monster.

These definitions might come in handy:

* A pure component receives all its data as props, just like a pure function
receives all its data as arguments.
* A pure component should have no side effects, including reading data from
anywhere else, initiating network requests, etc.

A pure component has no internal state; what it renders is fully driven by its
input props. Rendering the same pure component twice with the same props will
therefore result in the exact same DOM. That is because there is no hidden state
inside the component that would cause the UI to differ between the two renders.


### Note about state
When it comes to state and forms, the top-down unidirectional flow pattern
becomes somewhat tricky. Applying this principle to Redux means that all state
information should be put in the store, and all events (mutations of state)
trigger actions. Thus, there should be no need to use React's `setState()`.
However, when it comes to forms this principle is debatable. Emitting an action
on every key stroke of an input field seems a bit extreme.

We think a better approach is to create a higher order component that can be
concerned with the state of the form.
In the solution we give an example of this, where we have used function
composition to create a higher order component that takes care of the form's
state (`containers/Form.jsx`, `utils/withState.js` and `utils/compose.js`).


### 7. More async action creators
As you might have noticed, the windows created in the form on the Admin page
disappear when you refresh the page. This is because they are only stored in the
app state - see `reducers/windows.js`. It would be better if the action updated
our database through an async api call.

Based on what you have learned, try changing the `createWindow()` to be an async
action creator that sends a `POST` to `/api/windows` with a window object.
Next, implement functionality for the dead delete button in the Admin panel.
Hint: `json-server` supports `DELETE`.
