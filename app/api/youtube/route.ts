import { NextRequest, NextResponse } from 'next/server';

function formatCount(n: string): string {
  const num = parseInt(n, 10);
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return num.toString();
}

export async function GET(req: NextRequest) {
  const handle = req.nextUrl.searchParams.get('handle');
  if (!handle) {
    return NextResponse.json({ error: 'Missing handle' }, { status: 400 });
  }

  const apiKey = process.env.YOUTUBE_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: 'YouTube API key not configured' }, { status: 500 });
  }

  const url = `https://www.googleapis.com/youtube/v3/channels?part=snippet,statistics&forHandle=${handle}&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });

  if (!res.ok) {
    return NextResponse.json({ error: 'YouTube API error' }, { status: res.status });
  }

  const data = await res.json();
  const channel = data.items?.[0];

  if (!channel) {
    return NextResponse.json({ error: 'Channel not found' }, { status: 404 });
  }

  return NextResponse.json({
    id: channel.id,
    name: channel.snippet.title,
    description: channel.snippet.description,
    thumbnail:
      channel.snippet.thumbnails.high?.url ??
      channel.snippet.thumbnails.medium?.url ??
      channel.snippet.thumbnails.default?.url,
    handle: channel.snippet.customUrl,
    subscriberCount: formatCount(channel.statistics.subscriberCount),
    videoCount: formatCount(channel.statistics.videoCount),
    viewCount: formatCount(channel.statistics.viewCount),
    viewCountRaw: parseInt(channel.statistics.viewCount, 10),
    url: `https://www.youtube.com/${channel.snippet.customUrl}`,
  });
}
