export declare const getActiveMaterials: () => Promise<{
    id: string;
    createdAt: Date;
    name: string;
    updatedAt: Date;
    description: string | null;
    isActive: boolean;
}[]>;
