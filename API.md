# Using the API

```javascript

const apiUrl = '/api/windows';

// Fetching all windows
superagent
  .get(apiUrl)
  .end(function(err, res) {
    const windows = res.body;
    (...)
  });

// Creating a window
superagent
  .post(apiUrl)
  .send({
    day: 1,
    type: 'text',
    content: 'Merry christmas!'
  })
  .end(function(err, res) {
    (...)
  });

// Deleting a window
superagent
  .delete(`apiUrl/${window.id}`)
  .end(function(err, res) {
    (...)
  });

```
