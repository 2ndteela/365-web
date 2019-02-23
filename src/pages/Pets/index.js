import React, { Component } from 'react';
import './style.css'
import MaterialIcon from 'material-icons-react'
import { callbackify } from 'util';

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPet: {
                name: 'test',
                species: '',
                petPhoto: '',
                description: ''
            },
            pets: [
                {
                    name: 'Miqus',
                    species: 'Dog',
                    petPhoto: 'https://www.ctvsh.com/sites/default/files/styles/large/adaptive-image/public/siberian-husky-dog-breed-info.jpg?itok=Mp4QXlOs',
                    description: "Miqus is a young Husky that loves to play outside. Allergic to oranges I think."
                },
                {
                    name: 'Spot',
                    species: 'Alpaca',
                    petPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA5RhsPk63Bt8nliF3NoTXFSCfpYzgIJXz9qt5iuOhxTY6ZicdAA',
                    description: "Spot doesn't actually have any spots... Don't know why we call him that. He's an Alpaca, not a llama."
                }
            ],
            showDialog: true
         }
    }

    showImg() {
        return (
            <div id="pet-image-preview">
                Yaya!
            </div>
        )
    }

    showHolder() {
        return (
            <div id="pet-image-preview">
                <span>paste a url and the image preview will show here</span>
            </div>
        )
    }


    checkPhoto() {
        let img = new Image()
        img.onload =  this.showImg()
        img.onerror = this.showHolder()
        img.src = this.state.newPet.petPhoto
    }

    petDialog() {
        if(this.state.showDialog) {
            return (
            <div>
                <div id="request-dialog-background"></div>
                <div id="dialog-container">
                    <div id="dialog">
                        <div className="row-flex dialog-header">
                            <h3>New Pet</h3>
                            <button className="icon-button" onClick={() => this.closeDialog()}>
                                <MaterialIcon icon="clear" />
                            </button>
                        </div>
                        <div id="dialog-body" style={{flexDirection: 'column'}}>   
                            <div className="row-flex" style={{width: '100%'}}>
                                {this.checkPhoto()}
                                <div className='col-flex' id="new-pet-inputs" style={{paddingLeft: "8px"}}>
                                    <div className="styled-input">
                                        <input value={this.state.newPet.petPhoto} onChange={(e) => this.updateValueNew(e, 'petPhoto')}></input>
                                        <div>Pet Pic URL</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.newPet.name} onChange={(e) => this.updateValueNew(e, 'name') }></input>
                                        <div>Name</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        else return null
    }

    closeDialog(){
        this.setState({
            showDialog: false
        })
    }

    makeNewPet() {
        this.showDialog = true;
    }

    updateValue(e, data) {
        this.setState({
            [data] : e.target.value
        })
    }

    updateValueNew(e, data) {
        const temp = this.state.newPet
        temp[data] = e.target.value

        this.setState({
            newPet: temp
        })
    }

    render() { 
        return ( 
        <div style={{height: '100%', width: '100%'}}>
            <div id="pets-container" className="row-flex">
                {this.state.pets.map( pet => {
                    return (
                    <div className='pet-card' key={pet.name + '-pet'}>
                        <img src={pet.petPhoto} alt={pet.name} />
                        <h3>{pet.name}</h3>
                    </div>)
                })}
                <div className='pet-card' onClick={() => this.makeNewPet()} >
                    <div className="add-pet-pic">
                        <h1>+</h1>
                    </div>
                </div>
            </div>
                {this.petDialog()}
        </div> 
        )
    }
}
 
export default Pets;