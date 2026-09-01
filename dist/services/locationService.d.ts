export declare const getRegions: () => Promise<{
    id: string;
    createdAt: Date;
    name: string;
}[]>;
export declare const getDistricts: (regionId: string) => Promise<{
    id: string;
    regionId: string;
    createdAt: Date;
    name: string;
}[]>;
export declare const getCommunities: (districtId: string) => Promise<{
    id: string;
    districtId: string;
    createdAt: Date;
    name: string;
}[]>;
//# sourceMappingURL=locationService.d.ts.map