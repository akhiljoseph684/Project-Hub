import api from "@/lib/axios";

export const updateProfile = async (data: FormData) => {
  try {
    const res = await api.patch("/user/profile", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error: any) {
    throw (
      error.response?.data || {
        success: false,
        message: "Somthing Went wrong",
      }
    );
  }
};

export const getProfile = async () => {
  try {
    const res = await api.get("/user/profile");

    return res.data;
  } catch (error: any) {
    throw (
      error.response?.data || {
        success: false,
        message: "Somthing Went wrong",
      }
    );
  }
};
