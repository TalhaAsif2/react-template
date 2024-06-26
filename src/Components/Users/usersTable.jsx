import { useState, useEffect } from "react";
import {
  Box,
  useTheme,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import MainPage from "../MainPage/mainPage";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Header from "../Header";
import axios from "axios";

const UsersTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rowData, setRowData] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setRowData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone",
      flex: 1,
    },
    {
      field: "website",
      headerName: "Websites",
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: (params) => {
        const record = params.row;
        return (
          <Box
            // width="60%"
            m="0 auto"
            p="5px"
            // display="flex"
            // justifyContent="center"
          >
            <IconButton
              aria-label="update"
              color="secondary"
              onClick={() => onEditStudent(record)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="error"
              onClick={() => showDeleteModal(record)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  const onAddStudent = async () => {
    try {
      const randomNumber = parseInt(Math.random() * 1000);
      const newStudent = {
        id: randomNumber,
        name: "Name " + randomNumber,
        email: randomNumber + "@gmail.com",
        phone: "0337" + randomNumber,
        website: "www.randomweb.com",
      };
      await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        newStudent
      );
      // Update local state with new data
      setRowData((prevData) => [...prevData, newStudent]);
    } catch (error) {
      console.error("Error adding student:", error);
    }
  };

  const onDeleteStudent = async (record) => {
    try {
      // Make API call to delete student
      await axios.delete(
        `https://jsonplaceholder.typicode.com/users/${record.id}`
      );
      // Update local state by filtering out the deleted student
      setRowData((prevData) =>
        prevData.filter((student) => student.id !== record.id)
      );
      setDeleteModalVisible(false); // Hide the delete modal after deletion
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  const onEditStudent = (record) => {
    setIsEditing(true);
    setEditingStudent({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingStudent(null);
  };

  const handleEditSave = () => {
    // Make API call to update student data
    axios
      .put(
        `https://jsonplaceholder.typicode.com/users/${editingStudent.id}`,
        editingStudent
      )
      .then(() => {
        // Update local state with the edited data
        setRowData((prevData) =>
          prevData.map((student) =>
            student.id === editingStudent.id ? editingStudent : student
          )
        );
        resetEditing();
      })
      .catch((error) => {
        console.error("Error updating student:", error);
      });
  };

  const showDeleteModal = (record) => {
    setDeleteTarget(record);
    setDeleteModalVisible(true);
  };

  const handleDeleteModalOk = () => {
    onDeleteStudent(deleteTarget);
  };

  const handleDeleteModalCancel = () => {
    setDeleteModalVisible(false);
  };

  return (
    <MainPage>
      <Box m="20px" flex="1">
        <Header title="TEAM" subtitle="Managing the Team Members" />
        <Button
          onClick={onAddStudent}
          variant="contained"
          color="primary"
          style={{
            top: "30px",
            marginLeft: "auto",
            zIndex: 1,
            backgroundColor: "#3d5af1",
          }}
          sx={{ bgcolor: "#3d5af1" }}
        >
          Add User
        </Button>
        <Box
          m="40px 0 0 0"
          height="75vh"
          sx={{
            "& .MuiDataGrid-root": {
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-columnHeader, .MuiDataGrid-colCellSortable": {
              // Update the class name
              borderBottom: "none",
              backgroundColor: `${colors.blueAccent[700]} !important`, // Add !important
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        >
          <Dialog open={deleteModalVisible} onClose={handleDeleteModalCancel}>
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontSize: "600",
              }}
            >
              Delete User
            </DialogTitle>
            <DialogContent>
              <p>Are you sure you want to delete this user?</p>
            </DialogContent>
            <DialogActions>
              <Button
                onClick={handleDeleteModalCancel}
                color="primary"
                sx={{
                  fontWeight: "bold",
                  color: "#3d5af1",
                }}
              >
                No
              </Button>
              <Button
                onClick={handleDeleteModalOk}
                sx={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog open={isEditing} onClose={resetEditing}>
            <DialogTitle
              sx={{
                fontWeight: "bold",
                fontSize: "600",
              }}
            >
              Edit User
            </DialogTitle>
            <DialogContent>
              <Input
                value={editingStudent?.name}
                onChange={(e) =>
                  setEditingStudent((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
              <Input
                value={editingStudent?.email}
                onChange={(e) =>
                  setEditingStudent((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
              />
              <Input
                value={editingStudent?.phone}
                onChange={(e) =>
                  setEditingStudent((prev) => ({
                    ...prev,
                    phone: e.target.value,
                  }))
                }
              />
              <Input
                value={editingStudent?.website}
                onChange={(e) =>
                  setEditingStudent((prev) => ({
                    ...prev,
                    website: e.target.value,
                  }))
                }
              />
            </DialogContent>
            <DialogActions>
              <Button
                onClick={resetEditing}
                sx={{
                  fontWeight: "bold",
                  color: "#3d5af1",
                }}
              >
                Cancel
              </Button>
              <Button
                onClick={handleEditSave}
                sx={{
                  fontWeight: "bold",
                  color: "red",
                }}
              >
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <DataGrid
            rows={rowData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            checkboxSelection
          />
        </Box>
      </Box>
    </MainPage>
  );
};

export default UsersTable;
