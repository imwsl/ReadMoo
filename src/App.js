import React, {useState} from 'react';

import NavBar from './components/Nav';
import ContentSwitcher from './components/ContentSwither';

import Book from './models/book';

function App() {
  const [title, setTitle] = useState("ReadMoo");
  const [status, setStatus] = useState(0);
  
  // 初始化一个没有的书，用作添加书籍
  let book = new Book("", "", "", "", -1)
  const [books, setBooks] = useState([book])

  return (
    <>
      <NavBar title={title} />
      <ContentSwitcher status={status}/>
    </>
  );
}

export default App;
