import React from 'react';




class Character extends React.Component {
    constructor() {
        super()

        this.state = {
            name: 'name',
            id: 0,
            name: "name",
            height: 0,
            mass: 0,
            gender: "gender",
            homeworld: "homeworld",
            wiki: "url",
            image: "url",
            loadedCharacter: false,
        };

    };

    getCharacter() {
        const randomNumber = Math.floor(Math.random() * 82)
        const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({

                    id: data.id,
                    name: data.name,
                    height: data.height,
                    mass: data.mass,
                    gender: data.gender,
                    homeworld: data.homeworld,
                    wiki: data.wiki,
                    image: data.image,
                    loadedCharacter: true,
                })

            })


    }
    render() {


        return (
            <div>
                {
                    this.state.loadedCharacter &&
                    <div className='container'>
                        <h4>Name:</h4>
                        <h1>{this.state.name}</h1>
                        <img className='charImage' src={this.state.image} alt="image"></img>
                        <h4>Height:</h4>
                        <p>{this.state.height}</p>
                        <h4>Mass:</h4>
                        <p>{this.state.mass}</p>
                        <h4>Gender:</h4>
                        <p>{this.state.gender}</p>
                        <h4>Homeworld:</h4>
                        <p>{this.state.homeworld}</p>
                        <h4>Wiki:</h4>
                        <p><a href={this.state.wiki}>Link to Wiki</a> </p>
                      
                    </div>

                }
                    <p className="p-click-to-generate">Click the button to generate a random Character</p>
                <button
                    onClick={() => this.getCharacter()} type="button" className="btn">Randomize Character</button>




            </div>

        )
    }

};







export default Character