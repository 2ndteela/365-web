import React, { Component } from 'react';
import './style.css'
import MaterialIcon from 'material-icons-react'

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            newPet: {
                name: 'test',
                species: 'Cow',
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
                },
                {
                    name: 'Mrs. Scratchers',
                    species: 'African Grey',
                    petPhoto: 'https://cdn.shopify.com/s/files/1/2422/3327/files/congo-african-grey-02-300x294_large.jpg?v=1509478085',
                    description: "Silly birb at loves to sing and pretend she's a cat. Love to meet new people and eat berries"
                }
            ],
            showDialog: false,
            mappedArrays: [[],[],[]]
         }
    }

    petDialog() {
        if(this.state.showDialog) {
            return (
            <div>
                <div id="request-dialog-background"></div>
                <div id="dialog-container">
                    <div id="dialog" style={{width: '400px'}}>
                        <div className="row-flex dialog-header">
                            <h3>New Pet</h3>
                            <button className="icon-button" onClick={() => this.closeDialog()}>
                                <MaterialIcon icon="clear" />
                            </button>
                        </div>
                        <div id="dialog-body" style={{flexDirection: 'column'}}>   
                            <div className="row-flex" style={{width: '100%'}}>
                                <div className='col-flex' id="new-pet-inputs" style={{paddingLeft: "8px"}}>
                                    <div className="styled-input">
                                        <input value={this.state.newPet.petPhoto} onChange={(e) => this.updateValueNew(e, 'petPhoto')}></input>
                                        <div>Pet Photo (url)</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.newPet.name} onChange={(e) => this.updateValueNew(e, 'name') }></input>
                                        <div>Name</div>
                                    </div>
                                    <div className="styled-input">
                                        <input value={this.state.newPet.species} onChange={(e) => this.updateValueNew(e, 'species')}></input>
                                        <div>Spieces</div>
                                    </div>
                                    <div className="styled-input">
                                        <textarea></textarea>
                                        <div>About Me</div>
                                    </div>
                                </div>
                            </div>
                            <div className="row-flex" style={{justifyContent: 'flex-end', width:'100%'}}>
                                <button className="primary-button" style={{marginRight: '8px'}} onClick={() => this.addNewPet()} >Save</button>
                                <button className="clear-button" onClick={() => this.clearDialog()}>Clear</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
        else return null
    }

    clearDialog() {
        this.setState({
            newPet: {
                name: '',
                species: '',
                petPhoto: '',
                description: ''
            }
        })
    }

    mapPets() {
        let temp = []
        let one = []
        let two = []
        let three =[]

        this.state.pets.forEach((pet, itr) => {
            if(itr % 3 === 0) one.push(pet)
            else if (itr% 3 === 1) two.push(pet)
            else three.push(pet)
        });

        temp.push(one)
        temp.push(two)
        temp.push(three)

        this.setState({
            mappedArrays: temp
        })
    }

    closeDialog(){
        document.getElementById('dialog').classList.remove('no-pacity')
        document.getElementById('request-dialog-background').classList.remove('fade-in-back')

        setTimeout(() =>{
            this.setState({
                showDialog: false,
                newPet: {
                    name: '',
                    species: '',
                    petPhoto: '',
                    description: ''
                }
            })
        }, 300)

    }

    makeNewPet() {
        this.setState({
            showDialog: true
        })

        setTimeout(() => {
            this.fadeInDialog()
        }, 1)
    }

    fadeInDialog() {
        const test = document.getElementById('dialog')
        if(test) {
            test.classList.add('no-pacity') 
            document.getElementById('request-dialog-background').classList.add('fade-in-back')
        }
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

    addNewPet() {
        const temp = this.state.pets
        temp.push(this.state.newPet)
        this.setState({
            pets: temp
        }, () => { 
            this.closeDialog()
            this.mapPets()
        })
    }

    componentDidMount() {
        this.mapPets()
    }

    render() { 
        return ( 
        <div style={{height: '100%'}}>
            <div id="pets-container" className="col-flex">
            <div className="row-flex" style={{ width: '100%', justifyContent: 'flex-end', paddingBottom: '16px'}}>
                <button className="primary-button" onClick={() => this.makeNewPet()} >New Pet</button>
            </div>
            <div className="row-flex" style={{justifyContent: 'space-between', width: '100%', flexWrap: 'wrap'}}>
                <div className="col-flex">
                    {this.state.mappedArrays[0].map((pet, itr) => {
                        return (
                        <div className='pet-card' key={pet.name + '-pet'}>
                            <img src={pet.petPhoto} alt={pet.name} />
                            <h3>{pet.name}</h3>
                        </div>)
                    })}
                </div>
                <div className="col-flex">
                    {this.state.mappedArrays[1].map((pet) => {
                        return (
                        <div className='pet-card' key={pet.name + '-pet'}>
                            <img src={pet.petPhoto} alt={pet.name} />
                            <h3>{pet.name}</h3>
                        </div>)
                    })}
                </div>
                <div className="col-flex">
                    {this.state.mappedArrays[2].map((pet) => {
                        return (
                        <div className='pet-card' key={pet.name + '-pet'}>
                            <img src={pet.petPhoto} alt={pet.name} />
                            <h3>{pet.name}</h3>
                        </div>)

                    })}</div>
                </div>
            </div>
                {this.petDialog()}
        </div> 
        )
    }
}
 
export default Pets;