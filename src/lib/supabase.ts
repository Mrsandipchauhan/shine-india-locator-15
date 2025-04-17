
import { createClient } from '@supabase/supabase-js'
import { ServiceBooking } from '@/types/booking'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseKey)

export const createBooking = async (booking: ServiceBooking) => {
  const { data, error } = await supabase
    .from('service_bookings')
    .insert(booking)
    .select()
    .single()

  if (error) throw error
  return data
}

export const getCityBookings = async (city: string) => {
  const { data, error } = await supabase
    .from('service_bookings')
    .select('*')
    .eq('city', city)
    .order('createdAt', { ascending: false })

  if (error) throw error
  return data
}
