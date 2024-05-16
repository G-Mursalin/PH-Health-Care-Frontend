import { baseApi } from "./baseApi";
import { tagTypes } from "../tag-types";
import { IMeta } from "@/types/common";
import { IDoctor } from "@/types/doctor";

export const doctorApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create A Doctor
    createDoctor: build.mutation({
      query: (data) => ({
        url: "/user/create-doctor",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    // Get All Doctors
    getAllDoctors: build.query({
      query: (arg: Record<string, any>) => ({
        url: "/doctor",
        method: "GET",
        params: arg,
      }),

      transformResponse: (response: IDoctor[], meta: IMeta) => {
        return {
          doctors: response,
          meta,
        };
      },
      providesTags: [tagTypes.doctor],
    }),

    // Delete A Doctor
    deleteDoctor: build.mutation({
      query: (id) => ({
        url: `/doctor/soft/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.doctor],
    }),

    // Get Doctor By ID
    getDoctor: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/doctor/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.doctor],
    }),

    // Update A Doctor By ID
    updateDoctor: build.mutation({
      query: (data) => ({
        url: `/doctor/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.doctor, tagTypes.user],
    }),
  }),
});

export const {
  useCreateDoctorMutation,
  useGetAllDoctorsQuery,
  useDeleteDoctorMutation,
  useGetDoctorQuery,
  useUpdateDoctorMutation,
} = doctorApi;
