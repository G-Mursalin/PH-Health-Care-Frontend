import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";

export const doctorScheduleApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create Doctor Schedule
    createDoctorSchedule: build.mutation({
      query: (data) => ({
        url: "/doctor-schedule",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.doctorSchedule],
    }),

    // Get All Doctor Schedule
    getAllDoctorSchedules: build.query({
      query: (arg: Record<string, any>) => {
        return {
          url: "/doctor-schedule",
          method: "GET",
          params: arg,
        };
      },
      transformResponse: (response: [], meta: IMeta) => {
        return {
          doctorSchedules: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctorSchedule],
    }),

    // Get Doctor Schedule By ID
    getDoctorSchedule: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/doctor-schedule/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.doctorSchedule],
    }),

    // Get Login Doctor Schedule
    getMySchedule: build.query({
      query: () => ({
        url: "/doctor-schedule/my-schedule",
        method: "GET",
      }),
      providesTags: [tagTypes.doctorSchedule],
    }),

    // Delete A Schedule
    deleteDoctorSchedule: build.mutation({
      query: (id: string) => ({
        url: `/doctor-schedule/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctorSchedule],
    }),
  }),
});

export const {
  useCreateDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
  useGetDoctorScheduleQuery,
  useGetMyScheduleQuery,
  useDeleteDoctorScheduleMutation,
} = doctorScheduleApi;
