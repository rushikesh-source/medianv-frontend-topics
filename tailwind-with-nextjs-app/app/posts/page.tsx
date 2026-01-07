export default async function Posts() {
  const api = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await api.json();

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 px-6 py-12">

      <div className="mb-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Explore Posts
        </h1>
        <p className="mt-2 text-slate-600">
          Curated content, delivered with a clean UI experience
        </p>
      </div>

    
      <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, 25).map((items: any) => (
          <div
            key={items.id}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
          
            <span className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
              Post #{items.id}
            </span>

        
            <h3 className="mb-3 line-clamp-2 text-lg font-semibold text-slate-900 group-hover:text-indigo-600">
              {items.title}
            </h3>

           
            <p className="line-clamp-4 text-sm leading-relaxed text-slate-600">
              {items.body}
            </p>

       
            <div className="mt-5 flex items-center justify-between">
              <span className="text-xs font-medium text-slate-500">
                JSONPlaceholder
              </span>
              <button className="rounded-lg bg-indigo-600 px-4 py-1.5 text-xs font-semibold text-white transition hover:bg-indigo-700">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
