import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid';



export default function DataGridTable({ columns=[], rows=[] }: { columns: GridColDef[], rows: GridRowsProp }) {
    return (
        <div style={{ height: '100%', width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
        </div>
    );
}
