import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component
{
    renderList()
    {
        return this.props.books.map((book)=>
        {
           return (
               <li
                onClick={() => this.props.selectBook(book)} 
                key={book.title} 
                className="list-group-item">{book.title}</li>
           );     
        });
    }

    render()
    {
        return(
            <ul className="list-group col-sm-4">
            {this.renderList()}
            </ul>
        );
    }

};

/**
 * This will return the props used in BookList
 */
function mapStateToProps(state)
{
  //whaterver is returned will show up as props inside of Booklist
  return {
    books: state.books
  };
}

/**
 * whenever selectBoomk is called, the result should be passed to all reducers
 */
function mapDispatchToProps(dispatch)
{
  return bindActionCreators({selectBook:selectBook}, dispatch);  
}


//connect will produce a container with mapStaeToProps and Booklist
export default connect(mapStateToProps, mapDispatchToProps)(BookList);