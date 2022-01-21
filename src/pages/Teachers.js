import DataTable from "../components/Table";
import dataTeachers from "../data/teachers";

const columns = [
  {
    title: "Ismi va familiyasi",
    getValue: (row) => `${row.firstName} ${row.lastName}`,
  },

  { key: "subject", title: "Fani" },
  { key: "phone", title: "Telefon raqami" },
  { key: "birthDate", title: "Tug'ilgan sanasi" },
  { key: "salary", title: "Maoshi" },
];

export default function Teachers() {
  return (
    <>
      <h2>O'qituvchilar</h2>

      <DataTable rows={dataTeachers} columns={columns} />
    </>
  );
}
