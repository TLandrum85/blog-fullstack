import {createClient} from '@supabase/supabase-js'

//Create a single supabase client for interacting with your database
const supabase =
    createClient(
        'https://bijjidesjxhsywmdfczi.supabase.co',

        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpamppZGVzanhoc3l3bWRmY3ppIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY3NzIyNTYsImV4cCI6MjA0MjM0ODI1Nn0.JsxjgpNBhh-OndUDWIP-K1TUpYbtBClrK_tsUk9nXVA')
export default supabase