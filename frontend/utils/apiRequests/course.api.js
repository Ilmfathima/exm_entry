import axiosInstance from "@/lib/axiosInstance";

export const getAllFaculties = async () => {
  const response = await axiosInstance.get("/course/getAllFaculties");
  return response.data;
};

export const getAllFacultiesWithExtraDetails = async () => {
  const response = await axiosInstance.get(
    "/course/getAllFacultiesWithExtraDetails"
  );
  return response.data;
};

export const createFaculty = async (data) => {
  const response = await axiosInstance.post("/course/createFaculty", data);
  return response.data;
};

export const updateFaculty = async (data) => {
  const response = await axiosInstance.put("/course/updateFaculty", data);
  return response.data;
};

export const getFacultyById = async (f_id) => {
  const response = await axiosInstance.post("/course/getFacultyById", { f_id });
  return response.data;
};

export const getDepartmentsByFacultyId = async (f_id) => {
  const response = await axiosInstance.post(
    "/course/getDepartmentsByFacultyId",
    { f_id }
  );
  return response.data;
};

export const getAllDepartments = async () => {
  const response = await axiosInstance.get("/course/getAllDepartments");
  return response.data;
};

export const getAllDepartmentsWithExtraDetails = async () => {
  const response = await axiosInstance.get(
    "/course/getAllDepartmentsWithExtraDetails"
  );
  console.log(response.data);
  return response.data;
};

export const createDepartment = async (data) => {
  const response = await axiosInstance.post("/course/createDepartment", data);
  return response.data;
};

export const updateDepartment = async (data) => {
  const response = await axiosInstance.put("/course/updateDepartment", data);
  return response.data;
};

export const getDepartmentById = async (d_id) => {
  const response = await axiosInstance.post("/course/getDepartmentById", {
    d_id,
  });
  console.log(response.data);
  return response.data;
};