"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.assignRole = exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.updateMe = exports.getAllUsers = void 0;
const catchAsync_1 = require("../utils/catchAsync");
const prisma_1 = __importDefault(require("../utils/prisma"));
const AppError_1 = __importDefault(require("../utils/AppError"));
// Helper function to filter allowed fields
const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach((el) => {
        if (allowedFields.includes(el))
            newObj[el] = obj[el];
    });
    return newObj;
};
exports.getAllUsers = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const users = await prisma_1.default.user.findMany({
        include: {
            region: true,
            district: true,
            community: true,
            // Include roles with their associated role data
            roles: {
                include: {
                    role: true, // Drill down to get the actual Role model data (name, description)
                },
            },
        },
    });
    // Flatten the many-to-many roles array into a simple string array
    const formattedUsers = users.map((user) => ({
        ...user,
        roles: user.roles.map((userRole) => userRole.role.name),
    }));
    // send response
    res.status(200).json({
        status: "success",
        results: users.length, // we are sending array of users
        data: {
            users: { formattedUsers },
        },
    });
});
// Update current logged-in user (me)
exports.updateMe = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    // 1. Refuse password or sensitive account status data updates
    if (req.body.passwordHash || req.body.password || req.body.status) {
        return next(new AppError_1.default("This route is not for password or account status updates.", 400));
    }
    // 2. Filter schema-specific fields allowed for standard profile updates
    const filteredBody = filterObj(req.body, "firstName", "lastName", "phone", "email", "gender", "dateOfBirth", "profilePhotoUrl", "regionId", "districtId", "communityId");
    // If dateOfBirth is being updated, ensure it's a valid Date object
    if (filteredBody.dateOfBirth) {
        filteredBody.dateOfBirth = new Date(filteredBody.dateOfBirth);
    }
    // 3. Update database using the authenticated user id
    const updatedUser = await prisma_1.default.user.update({
        where: {
            id: req.user.id,
        },
        data: filteredBody,
        // Optional: include geographical details to return to the UI
        include: {
            region: true,
            district: true,
            community: true,
        },
    });
    res.status(200).json({
        status: "success",
        data: {
            user: updatedUser,
        },
    });
});
// Get user by ID
exports.getUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const user = await prisma_1.default.user.findUnique({
        where: {
            id: req.params.id,
        },
        include: {
            region: true,
            district: true,
            community: true,
            // Include roles with their associated role data
            roles: {
                include: {
                    role: true, // Drill down to get the actual Role model data (name, description)
                },
            },
        },
    });
    // check if user exists
    if (!user) {
        return next(new AppError_1.default("No user found with that ID", 404));
    }
    // Flatten the many-to-many roles array into a simple string array
    const formattedUser = {
        ...user,
        roles: user.roles.map((userRole) => userRole.role.name),
    };
    // send response
    res.status(200).json({
        status: "success",
        data: {
            user: { formattedUser },
        },
    });
});
// create user
exports.createUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    // const passwordHash = await bcrypt.hash(req.body.password, 12);
    const user = await prisma_1.default.user.create({
        data: {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            phone: req.body.phone,
            email: req.body.email,
            passwordHash: req.body.passwordHash,
        },
    });
    // send response
    res.status(201).json({
        status: "success",
        data: {
            user,
        },
    });
});
// update user
exports.updateUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const user = await prisma_1.default.user.update({
        where: {
            id: req.params.id,
        },
        data: req.body,
    });
    // check if user exists
    if (!user) {
        return next(new AppError_1.default("No user found with that ID", 404));
    }
    // send response
    res.status(200).json({
        status: "success",
        data: {
            user,
        },
    });
});
// delete user
exports.deleteUser = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const user = await prisma_1.default.user.delete({
        where: {
            id: req.params.id,
        },
    });
    // check if user exists
    if (!user) {
        return next(new AppError_1.default("No user found with that ID", 404));
    }
    // send response
    res.status(204).json({
        status: "success",
        data: null,
    });
});
// assign role to user
exports.assignRole = (0, catchAsync_1.catchAsync)(async (req, res, next) => {
    const { userId, roleName } = req.body;
    // Validate input
    if (!userId || !roleName) {
        return next(new AppError_1.default("userId and roleName are required", 400));
    }
    // Check if role exists
    const role = await prisma_1.default.role.findUnique({
        where: { name: roleName },
    });
    if (!role) {
        return next(new AppError_1.default(`Role '${roleName}' not found`, 404));
    }
    // Check if user exists
    const user = await prisma_1.default.user.findUnique({
        where: { id: userId },
    });
    if (!user) {
        return next(new AppError_1.default("User not found", 404));
    }
    // Check if user already has this role
    const existingUserRole = await prisma_1.default.userRole.findUnique({
        where: {
            userId_roleId: {
                userId,
                roleId: role.id,
            },
        },
    });
    if (existingUserRole) {
        return next(new AppError_1.default("User already has this role", 400));
    }
    // Assign role to user
    const userRole = await prisma_1.default.userRole.create({
        data: {
            userId,
            roleId: role.id,
        },
        include: {
            role: true,
        },
    });
    res.status(201).json({
        status: "success",
        data: {
            userRole,
        },
    });
});
//# sourceMappingURL=userController.js.map