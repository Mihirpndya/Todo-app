//mongodb+srv://mihir_pandya:XVEOLFJe623HVE0u@cluster0.jyjb85p.mongodb.net/
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://mihir_pandya:Ney7007@cluster0.jyjb85p.mongodb.net/todo');

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean,
});

const todoModel = mongoose.model('todo', todoSchema);

module.exports = {
    todoModel,
}


//sunny was here