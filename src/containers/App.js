import React, { Fragment , Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import { setSearchField, fetchRobots } from '../actions';
import { connect} from 'react-redux';

const mapStateToProps = (state) => {
    return{
        searchField: state.searchRobots.searchField,
        isPending: state.fetchRobots.isPending,
        robots: state.fetchRobots.robots,
        error: state.fetchRobots.error,
        failed: state.fetchRobots.failed,
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        fetchRobots: () => dispatch(fetchRobots()) 
    }
}


class App extends Component {
    // constructor(){
    //     super();
    //     this.state ={
    //         robots: [],
    //     }
    // }

    // onSearchChange = (event) =>{
    //     this.setState({SearchBox: event.target.value});
    // }

    componentDidMount(){
        this.props.fetchRobots();
        // fetch(`https://jsonplaceholder.typicode.com/users`)
        // .then(response => response.json())
        // .then(users => this.setState({robots: users}));
    }

    render(){
        const { searchField, onSearchChange, robots, isPending, failed } = this.props;
        const robotFilter = robots.filter(robot =>{
            return robot.username.toLowerCase().includes(searchField.toLowerCase());
        })
        if(failed === true || isPending === true){
            console.log('faile: ' + failed)
            return <h1>Loading</h1>
        }
        else{
            return(
                <Fragment>
                    <div className='tc'>
                        <h1>Robot Friends</h1>
                        <SearchBox SearchChange={onSearchChange} />
                        <Scroll>
                            <CardList robots={robotFilter} />
                        </Scroll>
                    
                    </div>
                </Fragment>
            )
        }
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);