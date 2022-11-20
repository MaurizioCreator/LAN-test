
export interface Booking {
    roomTypedId: number;
    countOfGuests: number;
    startDate: string;
    endDate: string;
    withAnimal?: boolean;
    user: {
        firstName: string,
        lastName: string,
        patronymicName?: string,
        birthday?: string;
    };
}
