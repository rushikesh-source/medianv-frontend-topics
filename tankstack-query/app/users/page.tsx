"use client";

import { useQuery } from "@tanstack/react-query";

const fetchUsers = async (): Promise<User[]> => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export default function Users() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
    // staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>somethigs went wrong</p>;

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6">
        {data?.map((item) => (
          <div
            key={item.id}
            className="border rounded-xl p-5 shadow-sm bg-white 
                 hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg font-semibold text-gray-900">{item.name}</p>

            <h4 className="text-sm text-indigo-600 font-medium mt-1">
              @{item.username}
            </h4>

            <p className="text-sm text-gray-500 mt-2">{item.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}
