
import { createClient } from '@supabase/supabase-js'
import { ServiceBooking } from '@/types/booking'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Check if the supabase credentials are available
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase credentials are missing. Please set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in your environment variables.');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export const createBooking = async (booking: ServiceBooking) => {
  try {
    // Add timestamp for created booking
    const bookingWithTimestamp = {
      ...booking,
      createdAt: new Date().toISOString(),
    };
    
    const { data, error } = await supabase
      .from('service_bookings')
      .insert(bookingWithTimestamp)
      .select()
      .single();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
}

export const getCityBookings = async (city: string) => {
  try {
    const { data, error } = await supabase
      .from('service_bookings')
      .select('*')
      .eq('city', city)
      .order('createdAt', { ascending: false });

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching city bookings:', error);
    throw error;
  }
}
