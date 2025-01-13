import axios from 'axios';


export default class TodoService {
  all(callback) {
    axios.get('http://'+window.location.hostname+':6200/todo')
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  // all(callback) {
  //   axios.get('https://0b78ews80j.execute-api.eu-west-3.amazonaws.com/todos/gettodos')
  //   .then((response) => {
  //     callback(response.data);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     callback(null);
  //   });
  // }


  get(id,callback) {
    axios.get('http://'+window.location.hostname+':6200/todo/'+id)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      console.log(error);
      callback(null);
    });
  }

  add(data,callback) {
    axios.post('http://'+window.location.hostname+':6200/todo/add/', {
    desc: data
    })
    .then(function (response) {
      console.log(response);
      callback();
    })
    .catch(function (error) {
      console.log(error);
      callback();
    });
  }

  // add(data,callback) {
  //   axios.post('https://0b78ews80j.execute-api.eu-west-3.amazonaws.com/todos/createtodo', {
  //   todo: data
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //     callback();
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //     callback();
  //   });
  // }

  update(data, id, callback){
    axios.post('http://'+window.location.hostname+':6200/todo/update/'+id, {
      desc: data
    })
    .then(function(response) {
      console.log('Updated');
      callback();
    })
    .catch(function(response) {
      callback();
    });
  }

  delete(id, callback){
    axios.get('http://'+window.location.hostname+':6200/todo/delete/'+id)
    .then(function(response){
      callback();
    })
    .catch(function(response){
      console.log('Error deleting');
      callback();
    });
  }
}