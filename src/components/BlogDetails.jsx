import { useParams } from "react-router";
import { useHistory } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const history = useHistory();

    const { data: blog, isPending, error } = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE'
        })
            .then(() => {
                history.push('/')
            })
    }

    return (
        <div className="blog-details">

            {isPending && <h1>Loading...</h1>}
            {error && <error>{error}</error>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}

        </div>
    );
}

export default BlogDetails;