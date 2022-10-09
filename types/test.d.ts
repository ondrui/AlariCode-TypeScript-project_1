declare const data: {
    id: number;
    name: string;
}[];
interface ID {
    id: number;
}
declare function sortObj<T extends ID, Y extends 'asc' | 'desc' = 'asc'>(data: T[], type: Y): T[];
declare function sort<T extends ID>(data: T[], type?: 'asc' | 'desc'): T[];
