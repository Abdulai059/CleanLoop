export declare const getRegions: () => Promise<{
    id: string;
    createdAt: Date;
    name: string;
}[]>;
export declare const getDistricts: (regionId: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    regionId: string;
}[]>;
export declare const getCommunities: (districtId: string) => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    districtId: string;
}[]>;
