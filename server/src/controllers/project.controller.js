import { searchUsersService } from "../services/project.service.js";

export const searchUsers = async (req, res) => {
  try {
    const { search } = req.query;

    if (!search?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Search query is required.",
      });
    }

    const users = await searchUsersService(search);

    return res.status(200).json({
      success: true,
      users,
    });
  } catch (error) {
    console.error("Search Users Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
