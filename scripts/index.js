import asyncio
import aiohttp
import json

headers = {
  'User-Agent': 'my-app/0.0.1 goldencarrot',
  'Authorization': 'goldencarrot cEgqVRkzauWzTtBmbz32aLLf'
}

async def main():
  async with aiohttp.ClientSession(headers=headers) as session:
    url = 'https://e621.net/posts.json?limit=2&'

    async with session.get(url) as resp:
      resp = await resp.json(content_type=None)
      print(json.dumps(resp.get('posts')[0], indent=2))

loop = asyncio.get_event_loop()
loop.run_until_complete(main())