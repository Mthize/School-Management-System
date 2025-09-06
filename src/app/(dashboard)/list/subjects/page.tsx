import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, subjectsData } from "@/lib/data";

type Subject = { 
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  {
    header: "Subject Name", 
    accessorKey: "name",
  },
  {
    header: "Teachers", 
    accessorKey: "teachers", 
    className: "hidden md:table-cell",
  },
   {
    header: "Actions",
    accessorKey: "action",
  },
];

const SubjectListPage = () => {
  const role = "admin";

  const renderRow = (item: Subject) => ( 
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">
        {item.name} 
         
      </td>
      <td className="hidden md:table-cell">{item.teachers.join(", ")}</td> 
       <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/edit.png" alt="" width={16} height={16} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaPurple">
              <Image src="/delete.png" alt="" width={16} height={16} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 mt-0">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block font-semibold">All Subjects</h1>  
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="items-center gap-4 self-end flex">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow p-2">
              <Image src="/filter.png" alt="Filter" width={16} height={16} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow p-2">
              <Image src="/sort.png" alt="Sort" width={16} height={16} />
            </button>
            {role === "admin" && (
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow p-2">
                <Image src="/plus.png" alt="Add" width={16} height={16} />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* LIST */}
      <Table columns={columns} renderRow={renderRow} data={subjectsData} />
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default SubjectListPage; 
