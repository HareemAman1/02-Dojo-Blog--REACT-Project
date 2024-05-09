import { useState } from "react";
// 30 - PROGRAMMATIC REDIRECTS 
import { useHistory } from "react-router-dom";

// EXACT MATCH ROUTES 
const Create = () => {

    // CONTROLLED INPUTS 
  const [title, setTitle] = useState(''); // leave it empty other wise you wont be able to change 
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

  //post request: shows pending when the blog is being added
  const [isPending, setIsPending] = useState(false);

  // 30 - PROGRAMMATIC REDIRECTS 
  const history = useHistory();

  // 28 - SUBMIT EVENTS
  const handleSubmit = (e) => {
    e.preventDefault(); //prevents refreshing
    const blog = { title, body, author }; // creating object for console
    //    console.log(blog);

    setIsPending(true);   

 //    29 - MAKING POST REQUEST  
    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsPending(false);
    })

    // 30 - PROGRAMMATIC REDIRECTS 
    // history.go(-1); // back
    history.push('/');  //goes to home page after adding blog
  }

  return ( 
    <div className="create">
        <h2>Add a new Blog</h2>

    {/* CONTROLLED INPUTS              */}
        <form onSubmit={handleSubmit}>
            <label>Blog Title</label>
            <input type="text" required 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            /><br /><br />

        <h2>Content</h2>
            <label>Blog Body</label>
            <textarea cols="100" rows="30" required
            value={body}
            onChange={(e) => setBody(e.target.value)}>

            </textarea>
            <label>Blog Author</label>
            <input type="text" required 
            value={author}
            onChange={(e) => setAuthor(e.target.value)}></input>
            {/* <select
            value={author}
            onChange={(e) => setAuthor(e.target.value)}>
                <option value="name">--Name--</option>
                <option value="mario">Mario</option>
                <option value="luigi">Luigi</option>
            </select> */}

            {/* <button>Add Blog</button> */}
            {!isPending && <button>Add Blog</button>}
            {isPending && <button disabled>Adding Blog...</button>}

            <p>{title}</p>
            <p>{body}</p>
            <p>{author}</p>
        </form>
        

    </div>
 );
}

export default Create; 