export declare const getRegions: () => Promise<{
    name: string;
    id: string;
    createdAt: Date;
}[]>;
export declare const getDistricts: (regionId: string) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    regionId: string;
}[]>;
export declare const getCommunities: (districtId: string) => Promise<{
    name: string;
    id: string;
    createdAt: Date;
    districtId: string;
}[]>;
