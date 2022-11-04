// since there is no database, we'll use an array as a proxy for a database
// we'll define an array in this file and export functions to update the array
// these functions simulate the method database libraries would provide

const Todo = {

    // array of todos
    data: [{text:"Breakfast"}, {text:"Lunch"}],

    // returns all todos
    get: function(){return this.data},

    //returns one todo
    getOne: function(index){return this.data[index]},

    // creates a new todo
    create: function(todo){this.data.push(todo)},

    // updates a specified todo
    update: function(index, newVersion){this.data[index] = newVersion},

    // deletes a specified todo
    delete: function(index){this.data.splice(index, 1)}
}

// export object for us elsewhere
module.exports = Todo