import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock GET request to /users when param `searchText` is 'John'
// arguments for reply are (status, data, headers)
mock.onGet('/users', { params: { searchText: 'John' } }).reply(200, {
  users: [{ id: 1, name: 'John Smith' }],
});

axios
  .get('/users', { params: { searchText: 'John' } })
  .then(function (response) {
    console.log(response.data);
  });
