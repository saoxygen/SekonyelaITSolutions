const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Supabase configuration
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_KEY';

// Check if Supabase environment variables are set
if (!supabaseUrl || !supabaseKey) {
  console.error('Supabase URL and Key are not set.');
  process.exit(1); // Exit the application if Supabase credentials are not provided
}

// Create Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Middleware to parse JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/HTML', express.static(path.join(__dirname, 'HTML')));
app.use('/JS', express.static(path.join(__dirname, 'JS')));
app.use('/images', express.static(path.join(__dirname, 'images')));

// Import and use routers for different pages
const indexRouter = require('./routes/index');
const ecomRouter = require('./routes/ecom');
const photographyRouter = require('./routes/photography');
const seoRouter = require('./routes/seo');
const copyRouter = require('./routes/copy');
const logoRouter = require('./routes/logo');
const maintenanceRouter = require('./routes/maintenance');

app.use('/', indexRouter);
app.use('/ecom', ecomRouter);
app.use('/photography', photographyRouter);
app.use('/seo', seoRouter);
app.use('/copy', copyRouter);
app.use('/logo', logoRouter);
app.use('/maintenance', maintenanceRouter);

// Serve static files from specific directories
app.use('/images', express.static(path.join(__dirname, 'images')));

// Endpoint to handle requests
app.post('/request', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const { data, error } = await supabase
      .from('requests') // Assuming you have a 'requests' table in Supabase
      .insert([
        { name, email, message }
      ]);

    if (error) {
      console.error('Error saving request to Supabase:', error);
      return res.status(500).json({ success: false, message: 'Error saving request' });
    }

    res.status(200).json({ success: true, message: 'Request saved successfully', data });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});