"use client";

import { useGetMyAppointmentsQuery } from "@/redux/api/appointmentApi";
import { Box, IconButton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import VideocamIcon from "@mui/icons-material/Videocam";
import Link from "next/link";
import { dateFormatter } from "@/utils/dateFormatter";
import { getTimeIn12HourFormat } from "@/utils/timeIn12HourFormat";
import PhChips from "@/components/Shared/PhChip/PhChips";

const PatientAppointmentsPage = () => {
  const { data, isLoading } = useGetMyAppointmentsQuery({});
  const appointments = data?.appointments;
  const meta = data?.meta;

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const columns: GridColDef[] = [
    // Name
    {
      field: "name",
      headerName: "Patient Name",
      flex: 1,
      renderCell: ({ row }) => {
        return row?.patient?.name;
      },
    },
    // Contact Number
    {
      field: "contactNumber",
      headerName: "Contact Number",
      flex: 1,
      renderCell: ({ row }) => {
        return row?.patient?.contactNumber;
      },
    },
    // Appointment Start Date
    {
      field: "appointmentStartDate",
      headerName: "Appointment Date",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row }) => {
        return dateFormatter(row?.schedule?.startDateTime);
      },
    },
    // Appointment Start Time
    {
      field: "appointmentStartTime",
      headerName: "Appointment Time",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row }) => {
        return getTimeIn12HourFormat(row?.schedule?.startDateTime);
      },
    },
    // Appointment End Time
    {
      field: "appointmentEndTime",
      headerName: "Appointment End Time",
      headerAlign: "center",
      align: "center",
      flex: 1,
      renderCell: ({ row }) => {
        return getTimeIn12HourFormat(row?.schedule?.endDateTime);
      },
    },
    // Payment Status
    {
      field: "paymentStatus",
      headerName: "Payment Status",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return row.paymentStatus === "PAID" ? (
          <PhChips label={row?.paymentStatus} type="success" />
        ) : (
          <PhChips label={row?.paymentStatus} type="error" />
        );
      },
    },
    // Actions
    {
      field: "action",
      headerName: "Join",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <Link href={`/video?videoCallingId=${row?.videoCallingId}`}>
            <IconButton>
              <VideocamIcon
                sx={{
                  color: row?.paymentStatus === "PAID" ? "primary.main" : "",
                }}
              />
            </IconButton>
          </Link>
        );
      },
    },
  ];

  return (
    <Box>
      {!isLoading ? (
        <Box my={2}>
          <DataGrid
            rows={appointments ?? []}
            columns={columns}
            loading={isLoading}
          />
        </Box>
      ) : (
        <h1>Loading.....</h1>
      )}
    </Box>
  );
};

export default PatientAppointmentsPage;
