
export interface ServiceBooking {
  id?: string
  city: string
  carBrand: string
  carModel: string
  selectedServices: string[]
  customerName: string
  customerEmail: string
  customerPhone: string
  preferredDate: string
  status: 'pending' | 'confirmed' | 'completed'
  createdAt?: string
}
