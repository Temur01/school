import dataRooms from "../data/rooms";
import DataTable from "../components/Table";

const columns = [
  { key: "raqami", title: "Xonaning raqami" },
  { key: "fanlar", title: "Fani" },
];

export default function Rooms() {
  return (
    <>
      <h2>Xonalar</h2>

      <DataTable rows={dataRooms} columns={columns} />
    </>
  );
}
