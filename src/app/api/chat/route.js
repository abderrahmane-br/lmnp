import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabaseClient';

export async function POST(req) {
  try {
    const { messages, chat_id } = await req.json();

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini-2024-07-18',
        messages,
      }),
    });

    if (!response.ok) {
      const errorDetails = await response.text();
      console.error('OpenAI API error:', errorDetails);
      return NextResponse.json({ error: errorDetails }, { status: response.status });
    }

    const res = await response.json();
    // Extract the assistant message from choices
    const assistantMessage = res.choices?.[0]?.message.content;
    const filteredMsgs = [...messages.filter((m) => m.role != "system"), {role: "assistant", message: assistantMessage}]
    console.log(JSON.stringify({id: chat_id, contenu: filteredMsgs}))
    const {data, error} = await supabase.schema('gmb_ads')
    .from('chats')
    .upsert({id: chat_id, contenu: filteredMsgs})
    .select()

    console.log(error)

    return NextResponse.json({ message: assistantMessage, id: chat_id });
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json({ error: error.message || 'Unknown error' }, { status: 500 });
  }
}
