* Streams in Node.js and How to Read/Write Big Files
Streams are objects that let you read or write data piece by piece (in chunks) rather than all at once. This is useful for handling large files or data:

## Types of Streams:

1. Readable Stream: Used for reading data (e.g., reading files).
2. Writable Stream: Used for writing data (e.g., writing files).
3. Duplex Stream: Used for both reading and writing (e.g., network sockets).
4. Transform Stream: A type of duplex stream that can modify or transform the data as it is written and read (e.g., zlib.createGzip()).

## Reading Large Files:
Use fs.createReadStream('file.txt') to read a large file without loading the whole file into memory. This method reads the file in small chunks, emitting events like data (when data is available to read) and end (when there’s no more data).

## Writing Large Files:
Use fs.createWriteStream('output.txt') to write data in chunks. You can write data using stream.write(data) and listen for the finish event to know when the writing is complete.

## Pipe Streams:
You can connect readable and writable streams using pipe(). For example, readableStream.pipe(writableStream) reads data from one stream and writes it directly to another. This is useful for tasks like copying files.

### Code to upload large file to aws in optimised way

```
const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

// Configure AWS SDK with your credentials and region
AWS.config.update({
  accessKeyId: 'YOUR_ACCESS_KEY',
  secretAccessKey: 'YOUR_SECRET_KEY',
  region: 'YOUR_AWS_REGION',
});

// Initialize S3 client
const s3 = new AWS.S3();

// Function to upload large files to S3
async function uploadLargeFile(filePath, bucketName, keyName) {
  // Read the file size
  const fileSizeInBytes = fs.statSync(filePath).size;
  const fileStream = fs.createReadStream(filePath);

  // Set the chunk size (e.g., 10 MB)
  const partSize = 10 * 1024 * 1024;
  const numParts = Math.ceil(fileSizeInBytes / partSize);

  // Create multipart upload
  const multipartUpload = await s3.createMultipartUpload({
    Bucket: bucketName,
    Key: keyName,
  }).promise();

  const uploadId = multipartUpload.UploadId;

  // Function to upload each part
  async function uploadPart(partNumber) {
    const start = (partNumber - 1) * partSize;
    const end = Math.min(partNumber * partSize, fileSizeInBytes);

    const fileBuffer = Buffer.alloc(end - start);
    fs.readSync(fs.openSync(filePath, 'r'), fileBuffer, 0, end - start, start);

    // Upload a part
    const partData = await s3
      .uploadPart({
        Bucket: bucketName,
        Key: keyName,
        PartNumber: partNumber,
        UploadId: uploadId,
        Body: fileBuffer,
      })
      .promise();

    return { PartNumber: partNumber, ETag: partData.ETag };
  }

  // Upload all parts in parallel
  const uploadPromises = [];
  for (let partNumber = 1; partNumber <= numParts; partNumber++) {
    uploadPromises.push(uploadPart(partNumber));
  }

  // Collect results and sort by part number
  const parts = await Promise.all(uploadPromises);
  const sortedParts = parts.sort((a, b) => a.PartNumber - b.PartNumber);

  // Complete multipart upload
  await s3.completeMultipartUpload({
    Bucket: bucketName,
    Key: keyName,
    UploadId: uploadId,
    MultipartUpload: { Parts: sortedParts },
  }).promise();

  console.log(`File uploaded successfully to ${bucketName}/${keyName}`);
}

// Usage
uploadLargeFile(
  path.join(__dirname, 'your_large_file.zip'), // Path to your 15 GB file
  'your-bucket-name',                        // S3 bucket name
  'your-key-name'                            // Desired object key name in S3
).catch((error) => {
  console.error('Error uploading file:', error);
});

```