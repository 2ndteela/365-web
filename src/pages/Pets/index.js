import React, { Component } from 'react';
import './style.css'
import MaterialIcon from 'material-icons-react'

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
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
                        <div id="dialog-body" style={{flexDirection: 'row'}}>
                            <div></div>
                            <div className="styled-input">
                                <input></input>
                                <div>Name</div>
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