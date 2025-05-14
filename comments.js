// Create web server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const { exec } = require('child_process');
const { spawn } = require('child_process');
const { Readable } = require('stream');
const { pipeline } = require('stream');
const { createWriteStream } = require('fs');
const { createReadStream } = require('fs');
const { createServer } = require('http');
const { createGzip } = require('zlib');
const { createBrotliCompress } = require('zlib');
const { createBrotliDecompress } = require('zlib');
const { createGunzip } = require('zlib');
const { createInflate } = require('zlib');
const { createDeflateRaw } = require('zlib');
const { createInflateRaw } = require('zlib');


