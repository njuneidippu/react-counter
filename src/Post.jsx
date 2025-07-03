import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";
const Post = (props) => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      console.log(result);
      setPosts(result);
    } catch (error) {
      console.error("Error in Fetching Data", error);
    }
  };
  // fetchData();

  useEffect(() => {
    fetchData();
  }, [props.title]);
  // const fetchData = () => {
  //   fetch("http://localhost:3001/posts")
  //     .then((response) => response.json())
  //     .then((result) => {
  //       console.log(result);
  //       setPosts(result);
  //     })
  //     .catch();
  // };
  // useEffect(fetchData, [props.title]);

  return (
    <div>
      {/* <div>welcom</div>
      <div>
        <ul>
          {posts.map((post, index) => (
            <li key={post.id}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <div>{post.id}</div>
                <div>{post.title}</div>
              </div>
            </li>
          ))}
        </ul>
      </div> */}
    </div>
  );
};
export default Post;
