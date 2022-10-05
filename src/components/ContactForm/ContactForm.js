import React, { Component } from 'react'
import '../ContactForm/ContactForm.css'
import axios from 'axios';



class ContactForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            message:''
        }
    }

    handleSubmit(event){
        event.preventDefault();
        axios({
            method: "POST",
            url: "http://localhost/admin/server.php",
            data: this.state
        }).then((resp)=>{
    
            if(resp.data.status === 'success'){
                alert("Votre message a été bien envoyé");
                this.restForm()
            }else if(resp.data.status === 'fail'){
                alert("Votre message n'a pas pu être envoyé");
            }
        })
        
      }
      resetForm(){
        this.setState({name:"", email:"", message:""})
      }
    
render (){
    return (
        <div className='container'>
        <div className='text'>
            Pour toutes informations sur la foi chrétienne, sur notre église ou sur le programme,
            vous pouvez nous contacter au 06 79 27 32 52 ou en remplissant ce formulaire.
    
        </div>
        <h3>Contactez-nous</h3>
            <form 
                onSubmit={this.handleSubmit.bind(this)}
                method="POST"
            >
                <label>Nom</label>
                <input type="text" id="name" name="username" placeholder="Votre nom" 
                    value={this.state.username}
                    onChange={this.onUsernameChange.bind(this)}
                />
                
    
                <label>Email</label>
                <input type="email" id="email" name="email" placeholder="Votre email"
                    value={this.state.email}
                    onChange={this.onEmailChange.bind(this)}
                 />
                
                <label>Message</label>
                <textarea type="message" id="message" name="message" placeholder="Votre message" 
                    value={this.state.message}
                    onChange={this.onMessageChange.bind(this)}
                ></textarea>
                
                <input type="submit" value="Envoyer" />
            </form>
        </div>
      )
}
  onUsernameChange(event) {
    this.setState({username: event.target.value})
  }
  onEmailChange(event) {
    this.setState({email: event.target.value})
  }
  onMessageChange(event) {
    this.setState({message: event.target.value})
  }
 
}

export default ContactForm