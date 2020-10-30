import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../../actions';

class PostShow extends Component {
    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    render() {
        if (!this.props.post) {
            return <div>Loading...</div>;
        }

        const { post } = this.props.post;

        return(
            <div>
                <h4>{post}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return { post: state.posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost })(PostShow);