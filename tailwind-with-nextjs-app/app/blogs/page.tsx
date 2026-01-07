export default async function Blogs() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();

  return (
    <section className="p-10 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 text-gray-900 tracking-tight">
        My Blogs
      </h1>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 perspective-[1200px]">
        {data.slice(0, 6).map((item: { id: number; title: string }) => (
          <div
            key={item.id}
            className="
              group
              relative
              rounded-2xl
              bg-white
              p-6
              shadow-lg
              transition-all
              duration-500
              transform-gpu
              hover:-translate-y-3
              hover:rotate-x-6
              hover:rotate-y-3
              hover:shadow-2xl
              border border-gray-200
            "
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-indigo-500/10 via-transparent to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <h4 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
              {item.title}
            </h4>
            <h5 className="text-zinc-500">
              {item.body}
            </h5>

            <p className="text-sm text-gray-500 mb-6">
              Blog ID: {item.id}
            </p>

            <button className="
              inline-flex
              items-center
              justify-center
              rounded-lg
              bg-gray-900
              px-4
              py-2
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-indigo-600
              group-hover:translate-z-10
            ">
              Read More →
            </button>
          </div>
      

          
        ))}
<button class= "dark:md:hover:bg-fuchsia-300 text-blue-500">Save changes</button>
      </div>
    </section>
  );
}
