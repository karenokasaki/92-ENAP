import CardPost from "./CardPost";

function Posts({ posts, setPosts }) {
  return (
    <div className="d-flex">
      {posts.map((post) => {
        return (
          <CardPost
            key={post.about}
            post={post}
            posts={posts}
            setPosts={setPosts}
          />
        );
      })}
    </div>
  );
}

export default Posts;
