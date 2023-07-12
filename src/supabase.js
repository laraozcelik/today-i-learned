import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hezswwmcchcvgkvoponc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlenN3d21jY2hjdmdrdm9wb25jIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg2NTc4ODgsImV4cCI6MjAwNDIzMzg4OH0.lG6GNsdfXsQ3NOZE2w4f-iiLgREZ7nYGNu-IIKzSNWA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
