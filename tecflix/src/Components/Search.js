import React from "react";

//Clase que se encarga de ser el componente de busqueda
class Search extends React.Component {
    state={tittle: "" }

    onSearchChanged = event =>{
        const _tittle = event.target.value
         this.setState({tittle:_tittle})
    }

    onSubmit = event => {
        event.preventDefault()
        this.props.onSearch(this.state.tittle)
    }
    render(){      
        return(
        <div>
            <form onSubmit={this.onSubmit}>
                <div className="form-controls">
                    <p> Search </p>
                    <input value={this.state.tittle}
                    onChange={this.onSearchChanged}  id='video-seach' type="text" placeholder="Enter Search Keyword"></input>
                </div>
            </form>
        </div>
        )
    }
}

export default Search;