import requests
from bs4 import BeautifulSoup
import time

def get_movie_links():
    movie_links = []
    base_url = "https://publicdomainmovie.net"
    total_pages = 80

    for page in range(total_pages):
        url = f"{base_url}/home?page={page}"
        
        response = requests.get(url)
        if response.status_code != 200:
            continue

        soup = BeautifulSoup(response.content, 'html.parser')

        movie_rows = soup.select('div.views-row')

        for row in movie_rows:
            cover_div = row.select_one('div.cover')
            if cover_div:
                link_tag = cover_div.find('a')
                if link_tag and 'href' in link_tag.attrs:
                    link = link_tag['href']
                    if not link.startswith('http'):
                        link = base_url + link
                    movie_links.append(link)
        
        time.sleep(1)

    return movie_links
