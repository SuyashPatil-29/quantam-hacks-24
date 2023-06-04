import type { NextApiRequest, NextApiResponse } from "next";
import { redirect } from 'next/dist/server/api-utils';
import { draftMode } from 'next/headers';
 
export async function GET(request: NextApiRequest, response: NextApiResponse) {
  redirect(response,'/', "302")
  return draftMode().enable();
}