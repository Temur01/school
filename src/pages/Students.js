import dataStudent from "../data/student'sTable";
import DataTable from "../components/Table";
const columns = [
  {
    title: "Ismi va familiyasi",
    getValue: (row) => `${row.firstName} ${row.lastName}`,
  },
  { key: "address", title: "Manzili" },
  { key: "phone", title: "Telefon raqami" },
  { key: "birthDate", title: "Tug'ilgan sanasi" },
  { key: "class", title: "Sinfi" },
];

export default function Students() {
  return (
    <>
      <h2>O'quvchilar</h2>

      <DataTable rows={dataStudent} columns={columns} />
    </>
  );
}
