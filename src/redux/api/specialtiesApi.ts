import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // Create Specialty
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialty",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
    // Get All Specialties
    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialty",
        method: "GET",
      }),
      providesTags: [tagTypes.specialties],
    }),
    // Delete Specialty
    deleteSpecialty: build.mutation({
      query: (id) => ({
        url: `/specialty/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.specialties],
    }),
  }),
});

export const {
  useCreateSpecialtyMutation,
  useGetAllSpecialtiesQuery,
  useDeleteSpecialtyMutation,
} = specialtiesApi;
