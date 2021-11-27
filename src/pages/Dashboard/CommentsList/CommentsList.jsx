import "./CommentsList.css";
import { DataGrid } from "@material-ui/data-grid";
import { Delete } from "@material-ui/icons";

import { deleteRecord, useGet } from "../../../api/crudActions";

export const CommentsList = () => {
  const { data, loading, refetch } = useGet("Comentario");

  const onDelete = async (item) => {
    await deleteRecord("Comentario", item.id);
    refetch();
  };

  const columns = [
    {
      field: "id",
      headerName: "ID",
      minWidth: 100,
      align: "center",
    },
    {
      field: "usuario",
      headerName: "Usuario",
      width: 180,
    },
    { field: "descripcion", headerName: "Descripcion", width: 300 },
    {
      field: "action",
      headerName: "Delete",
      width: 150,
      renderCell: (item) => (
        <Delete
          className="clientListDelete"
          onClick={() => {
            onDelete(item);
          }}
        />
      ),
    },
  ];

  return (
    <div className="clientList">
      <h1 style={{ color: "#000" }}>Clientes</h1>
      <DataGrid rows={data} columns={columns} loading={loading} />
    </div>
  );
};
