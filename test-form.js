const { createClient } = require('@supabase/supabase-js');
require('dotenv').config({ path: '.env.local' });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

async function testSubmit() {
  console.log('Testing Contact Form Submission (Supabase Insert)...');
  const { error } = await supabase.from('contact_messages').insert([{
    name: 'Bot Tester',
    email: 'test@example.com',
    message: 'Testing if Supabase RLS is working for inserts.'
  }]);
  
  if (error) {
    console.error('Submission failed:', error.message);
  } else {
    console.log('Submission successful! (No data returned due to RLS)');
  }
}

testSubmit();
