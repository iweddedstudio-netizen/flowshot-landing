import { NextResponse } from 'next/server';

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ?? '';
const SUPPORT_EMAIL = 'iweddedstudio@gmail.com';
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SupportRequestBody = {
  name?: unknown;
  email?: unknown;
  question?: unknown;
  company?: unknown;
};

const normalizeText = (value: unknown, maxLength: number) => {
  if (typeof value !== 'string') {
    return '';
  }

  return value.trim().slice(0, maxLength);
};

export async function POST(request: Request) {
  let body: SupportRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  if (normalizeText(body.company, 100)) {
    return NextResponse.json({ ok: true });
  }

  const name = normalizeText(body.name, 120);
  const email = normalizeText(body.email, 180);
  const question = normalizeText(body.question, 4000);

  if (name.length < 2 || !EMAIL_REGEX.test(email) || question.length < 10) {
    return NextResponse.json({ error: 'Invalid support request' }, { status: 400 });
  }

  if (!GOOGLE_SCRIPT_URL) {
    return NextResponse.json({ error: 'Support endpoint is not configured' }, { status: 503 });
  }

  const params = new URLSearchParams({
    formType: 'support',
    recipient: SUPPORT_EMAIL,
    subject: `FlowShot support question from ${name}`,
    name,
    email,
    question,
  });

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      body: params.toString(),
      cache: 'no-store',
      redirect: 'follow',
    });

    if (!response.ok) {
      throw new Error(`Google Apps Script responded with ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Error sending support request:', error);
    return NextResponse.json({ error: 'Failed to send support request' }, { status: 502 });
  }
}
