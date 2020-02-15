import React, { Fragment , Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';

class App extends Component {
    constructor(){
        super();
        this.state ={
            robots: [],
            SearchBox: '',


        }
    }

    onSearchChange = (event) =>{
        this.setState({SearchBox: event.target.value});
    }

    componentDidMount(){
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    render(){
        const robotFilter = this.state.robots.filter(robots =>{
            console.log("first render")
            return robots.name.toLowerCase().includes(this.state.SearchBox.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading</h1>
        }
        else{
            return(
                <Fragment>
                    <div className='tc'>
                        <h1>Robot Friends</h1>
                        <SearchBox SearchChange={this.onSearchChange} />
                        <Scroll>
                            <CardList robots={robotFilter} />
                        </Scroll>
                    
                    </div>
                </Fragment>
            )
        }
    }

}

export default App;