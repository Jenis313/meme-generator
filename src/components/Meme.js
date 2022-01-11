import React from "react";
export class Meme extends React.Component{
    constructor(){
        super()
        this.state = {
            question : '',
            answer : '',
            image : ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
    componentDidMount(){
        fetch('https://api.imgflip.com/get_memes')
        .then((data) => data.json())
        .then((data) => {
            // console.log(data.data.memes[0].url);
            const num = Math.floor(Math.random() * 100)
            // console.log(num)
            this.setState({
                image: data.data.memes[num].url
            })
        })
        .catch((err) => {
            console.log(err);
        }) 
    }
    handleChange(e){
        // console.log('Changed!');
        const {name, value} = e.target;
        // console.log(name, value)
        this.setState({
            [name] : value
        })
    }
    handleSubmit(e){
        fetch('https://api.imgflip.com/get_memes')
        .then((data) => data.json())
        .then((data) => {
            const num = Math.floor(Math.random() * 100)
            // console.log(num)
            this.setState({
                image: data.data.memes[num].url
            })
        })
        .catch((err) => {
            console.log(err);
        }) 
        console.log('submitted')
        e.preventDefault()
    }
    render(){
        return (
            <div className="meme-card">
                <form onSubmit={this.handleSubmit}>
                   <div className="inputs">
                        <input name="question" type="text" className="first-input" onChange = {this.handleChange} ></input>
                        <input name="answer" type="text" className="second-input" onChange={this.handleChange} ></input>
                   </div>
                    <button>Get a new meme image</button>
                </form>
                <div className="displayMeme">
                    <img src={this.state.image} className="memeImg" />
                    <p className="meme-question">{this.state.question}</p>
                    <p className="meme-punchline">{this.state.answer}</p>
                </div>
            </div>
        )
    }
}
