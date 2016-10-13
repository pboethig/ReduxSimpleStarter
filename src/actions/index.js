export function selectBook(book)
{
    //select is an action returner which returns an object
    return {
      'type':'BOOK_SELECTED',
      payload: book    
    };
}

