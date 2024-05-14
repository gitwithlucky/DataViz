const corsOptions = {
  origin:  true,
  optionsSuccessStatus: 200,
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  exposedHeaders: ['Access-Control-Allow-Origin']
};

export default corsOptions;