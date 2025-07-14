import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Define the path to the JSON file where inquiries will be stored
const dataFilePath = path.join(process.cwd(), 'inquiries.json');

// Helper function to read inquiries from the file
const readInquiries = () => {
  try {
    // If the file doesn't exist, return an empty array
    if (!fs.existsSync(dataFilePath)) {
      return [];
    }
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    // If the file is empty, return an empty array
    return jsonData ? JSON.parse(jsonData) : [];
  } catch (error) {
    console.error('Error reading inquiries file:', error);
    return [];
  }
};

// Helper function to write inquiries to the file
const writeInquiries = (data: any) => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error writing to inquiries file:', error);
  }
};

export async function POST(request: Request) {
  try {
    const newInquiry = await request.json();

    // Add a timestamp to the inquiry
    const inquiryWithTimestamp = {
      ...newInquiry,
      submittedAt: new Date().toISOString(),
    };

    // Read existing inquiries, add the new one, and write back to the file
    const inquiries = readInquiries();
    inquiries.push(inquiryWithTimestamp);
    writeInquiries(inquiries);

    return NextResponse.json({ message: 'Inquiry submitted successfully!' }, { status: 201 });
  } catch (error) {
    console.error('Failed to process inquiry:', error);
    return NextResponse.json({ message: 'Error submitting inquiry.' }, { status: 500 });
  }
}
