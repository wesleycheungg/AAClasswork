import React from 'react'

class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: "",
            body: "",
            done: false,
            id: uniqueId()
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault();
        let todo = this.state;
        this.props.receiveTodo(todo);

        this.setState({
            title: "",
            body: "",
            done: false,
            id: uniqueId()
        })

    }

    handleClick(e){
        e.preventDefault();
    }
    
    updateTitle(e){
        e.preventDefault();
        this.setState({
            title: e.target.value
        })
    }

    updateBody(e) {
        e.preventDefault();
        this.setState({
            body: e.target.value
        })
    }


    render () {
        console.log(this.state)
        return (
            <div>
                <h1>Create new Todo Item</h1>
                <form onSubmit={this.handleSubmit}>
                    <label> Title
                        <input type="text" onChange={this.updateTitle} value={this.state.title}></input>
                    </label>

                    <br/>

                    <label> Body
                        <input type="text" onChange={this.updateBody} value={this.state.body}></input>
                    </label>

                    <br/>


                    <br/>

                    <input type="submit" value="SUBMIT"></input>
                </form>
            </div>
        )
    }
}

function uniqueId() {
    return new Date().getTime();
}

export default TodoForm;