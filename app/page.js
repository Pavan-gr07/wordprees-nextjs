export default async function Home() {
  const req = await fetch("http://localhost/newsite/wp-json/wp/v2/posts");
  const posts = await req.json();
  console.log(posts);
  return (
    <div className="p-5">
      <h1 className="text-center text-3xl font-bold mb-8">Home Section</h1>
      <div className="flex flex-wrap justify-around">
        {posts.map((post) => (
          <div
            key={post.id}
            className="max-w-sm rounded overflow-hidden shadow-lg m-4"
          >
            {post.image && (
              <img
                className="w-full h-48 object-cover"
                src={post.image}
                alt={post.title.rendered}
              />
            )}
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">
                {post.title.rendered}
              </div>
              <div
                className="text-gray-700 text-base"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
