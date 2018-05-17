import React,{Component} from 'react';

import Header from './header';
import AlbumList from './albumList';

const apiURL = " http://localhost:3004/artists";

class Artist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artists : ""
        }
    }

    componentDidMount() {
        //console.log(this.props.match.params.artistid)
        fetch(`${apiURL}/${this.props.match.params.artistid}`,{
            method : 'GET'
        })
        .then((response) => response.json())
        .then((json) => {
           this.setState({
               artists : json
           })
        })
    }

    render() {
        return(
            <div>
                <Header/>
                <div className="artist_bio">
                    <div className="avatar">
                        <span style={{background : `url('/images/covers/${this.state.artists.cover}.jpg') no-repeat`}}></span>
                    </div>
                </div>
                <div className="bio">
                    <h4>{this.state.artists.name}</h4>
                    <div className="bio_text">
                        {this.state.artists.bio}
                    </div>
                </div>
                <AlbumList albList={this.state.artists.albums} />
            </div>
        )
    }
}

export default Artist;