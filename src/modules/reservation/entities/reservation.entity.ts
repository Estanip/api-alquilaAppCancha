import { Court } from 'src/modules/court/entities/court.entity';
import { IReservation } from '../interfaces/reservation.interfaces';
import { Player } from './player.entity';

export class Reservation implements IReservation {
    private readonly _date: Date;
    private readonly _from: string;
    private readonly _to: string;
    private readonly _court: Court;
    private readonly _players: Player[];
    private readonly _total_price: number;

    get date(): Date {
        return this._date;
    }
    get from(): string {
        return this._from;
    }
    get to(): string {
        return this._to;
    }
    get court(): Court {
        return this._court;
    }
    get players(): Player[] {
        return this._players;
    }
    get total_price(): number {
        return this._total_price;
    }
}
