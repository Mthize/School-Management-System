import TableSearch from "@/components/TableSearch";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import Link from "next/link";
import { role, classesData } from "@/lib/data"; 

type Class = { 
  id: number;
  name: string;
  capacity: number;
  grade: number; // fixed typo: accessorKey was "grader" but type is "grade"
  supervisor: string;
};

const columns = [
  {
    header: "Class Name", 
    accessorKey: "name",
  },
  {
    header: "Capacity",
    accessorKey: "capacity",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade", // fixed typo: was "Grader"
    accessorKey: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Supervisor",
    accessorKey: "supervisor",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessorKey: "action",
  },
];

const ClassListPage = () => {
  const role = "admin";

  const renderRow = (item: Class) => ( 
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-lamaPurpleLight"
    >
      <td className="flex items-center gap-4 p-4">{item.name}</td>
      <td className="hidden md:table-cell">{item.capacity}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.supervisor}</td>
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-lamaSky">
              <Image src="/view.png" alt="" width={16} height={16} />
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
        <h1 className="hidden md:block font-semibold">All Classes</h1>  
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
      <Table columns={columns} renderRow={renderRow} data={classesData} /> 
      {/* PAGINATION */}
      <Pagination />
    </div>
  );
};

export default ClassListPage;

