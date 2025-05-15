import { createClient } from '@supabase/supabase-js';

// Replace with your Supabase URL and public API key
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_PUBLIC_KEY';

const supabase = createClient(supabaseUrl, supabaseKey);

// Sample schema for the 'requests' table
/*
CREATE TABLE requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);
*/

export default supabase;