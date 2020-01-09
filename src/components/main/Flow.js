import React, { Fragment, Component } from 'react';
import {connect} from 'react-redux';
import {setData, setLoader, requestPost} from '../../actions/Actions';
import 'bootstrap/dist/css/bootstrap.css';
import './Flow.scss';

class Flow extends Component {
    constructor(props) {
        super(props);
        this.state={
            searchText: "",
        }
    }
    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            // this.props({
            //     isLoaded:true,
            //     items:json,
            // })
            this.props.setData(json)
            this.props.setLoader(false)
        });
    }

    _searchFilter(data,text) {
        return data.filter(el => el.title.toLowerCase().indexOf(text.toLowerCase()) > -1)
    }
    changeValue = (e) => {
        const val = e.target.value;
        this.setState({
            searchText: val
        });
        console.log(val);
    };

    _renderUI(data) {
        if(data) {
            return <div>Loading...</div>;
        }else {
            return (
                <Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col-12 mt-5 ml-0">
                            <div>
                                <h4>Arama</h4>
                                <input type="text" placeholder="ara" value={this.state.searchText} onChange={this.changeValue} />
                            </div>
                                <ul onClick={this.DataUrl} >
                                    {this._searchFilter(this.props.items,this.state.searchText).map(item => (
                                        <li key={item.id}>
                                            <h1>{item.title}</h1> {item.body}<hr></hr>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Fragment>
        );
        }
    }
        
  render() {
      return (
          this._renderUI(this.props.isLoaded)
      )
}
}

function mapStateToProps(state) {
    return {
        items:state.items,
        isLoaded:state.isLoaded
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setData: (json) => dispatch(setData(json)),
        setLoader: (data) => dispatch(setLoader(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flow);