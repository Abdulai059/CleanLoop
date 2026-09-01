"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommunities = exports.getDistricts = exports.getRegions = void 0;
const prisma_1 = __importDefault(require("../utils/prisma"));
const getRegions = async () => {
    return prisma_1.default.region.findMany({
        orderBy: { name: "asc" },
    });
};
exports.getRegions = getRegions;
const getDistricts = async (regionId) => {
    return prisma_1.default.district.findMany({
        where: { regionId },
        orderBy: { name: "asc" },
    });
};
exports.getDistricts = getDistricts;
const getCommunities = async (districtId) => {
    return prisma_1.default.community.findMany({
        where: { districtId },
        orderBy: { name: "asc" },
    });
};
exports.getCommunities = getCommunities;
//# sourceMappingURL=locationService.js.map