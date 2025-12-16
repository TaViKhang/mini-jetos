/**
 * Flight status union type (strict)
 * Prevents typos and ensures type safety
 */
export type FlightStatus = 
  | 'Scheduled' 
  | 'Boarding' 
  | 'In Air' 
  | 'Landed' 
  | 'Cancelled';

/**
 * Flight entity interface (Private Aviation Context)
 * Represents a single charter/private flight record
 */
export interface Flight {
  /** Unique identifier (UUID) */
  id: string;
  
  /** Operator Name (e.g., Sun Air, Vietstar, Luxaviation) */
  airline: string;
  
  /** Tail Number / Call Sign (e.g., N-650GA, VN-A888) */
  flightNumber: string;
  
  /** Origin airport code (IATA) */
  origin: string;
  
  /** Destination airport code (IATA) */
  destination: string;
  
  /** Departure time (ISO 8601 format) */
  departureTime: string;
  
  /** Arrival time (ISO 8601 format) */
  arrivalTime: string;
  
  /** Current flight status */
  status: FlightStatus;
  
  /** Departure gate / FBO Terminal (optional) */
  gate?: string;
  
  /** Terminal information (e.g., 'VIP Terminal', 'FBO') */
  terminal?: string;
  
  /** Aircraft Model (e.g., Gulfstream G650) */
  aircraft?: string;
  
  /** Charter Cost in USD */
  price: number;

  /** Passenger Count (VIPs only, usually 1-15) */
  pax: number;
}