import Subheader from "@/components/Subheader";

export default function PostPage({params}) {
  const { id } = params;

  return (
    <>
        <Subheader />
        <div>
        <h1>Post {id}</h1>
        <p>This is the content for post {id}.</p>
        </div>
    </>
  );
}


// import PostCard from "@/components/PostCard";

// // Example posts data (replace with API fetch if needed)
// const posts = [
//   { id: 1, title: "Post 1", date: "2024-06-01", text: "Content for Post 1" },
//   { id: 2, title: "Post 2", date: "2024-06-02", text: "Content for Post 2" },
//   { id: 3, title: "Post 3", date: "2024-06-03", text: "Content for Post 3" },
// ];

// export default function PostPage({ params }) {
//   const { id } = params;
//   const post = posts.find((p) => p.id === Number(id));

//   if (!post) {
//     return <div>Post not found</div>;
//   }

//   return <PostCard {...post} />;
// }