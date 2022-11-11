class Form extends React.Component{
    state={
        text:"",
    };
handleChange = (e)=>{
    this.setState({
         text: e.target.value,
    });
};

     handleSubmit = (e)=> {
        e.preventDefault();
        this.props.createTask(this.state.text);
        this.setState({text: ""})
    }
    render(){
        return (
          <form action="" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.text}
              onChange={this.handleChange}
            />
            <button>Add</button>
          </form>
        );
    }
}
