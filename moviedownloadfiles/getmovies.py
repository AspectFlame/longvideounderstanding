import requests
import csv
import time

def is_english(language_field):
    if not language_field:
        return False
    if isinstance(language_field, list):
        languages = language_field
    else:
        languages = [language_field]
    for lang in languages:
        if 'english' in lang.lower():
            return True
    return False

def duration_in_seconds(duration_str):
    import re
    total_seconds = 0
    if not duration_str:
        return None
    try:
        # If duration is already a number (in seconds)
        if duration_str.isdigit():
            return int(duration_str)
        
        # Handle ISO 8601 duration format (e.g., 'PT1H30M15S')
        iso_match = re.match(r'PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?', duration_str)
        if iso_match:
            hours = int(iso_match.group(1) or 0)
            minutes = int(iso_match.group(2) or 0)
            seconds = int(iso_match.group(3) or 0)
            total_seconds = hours * 3600 + minutes * 60 + seconds
            return total_seconds
        
        # Handle formats like '1h 30m 15s', '90 min'
        time_components = re.findall(r'(\d+)\s*(h|hr|hrs|hour|hours|m|min|mins|minute|minutes|s|sec|secs|second|seconds)', duration_str, re.I)
        for value, unit in time_components:
            value = int(value)
            unit = unit.lower()
            if unit.startswith('h'):
                total_seconds += value * 3600
            elif unit.startswith('m'):
                total_seconds += value * 60
            elif unit.startswith('s'):
                total_seconds += value
        if total_seconds > 0:
            return total_seconds

        # Handle format like '1:30:15' (HH:MM:SS)
        time_parts = duration_str.split(':')
        if len(time_parts) == 3:
            hours, minutes, seconds = map(int, time_parts)
            total_seconds = hours * 3600 + minutes * 60 + seconds
            return total_seconds
        elif len(time_parts) == 2:
            minutes, seconds = map(int, time_parts)
            total_seconds = minutes * 60 + seconds
            return total_seconds

    except Exception as e:
        print(f"Error parsing duration '{duration_str}': {e}")
        return None

    return None

def is_acceptable_license(licenseurl):
    if not licenseurl:
        return False
    acceptable_licenses = ['creativecommons', 'publicdomain']
    for license_keyword in acceptable_licenses:
        if license_keyword in licenseurl.lower():
            return True
    return False

def fetch_english_movies():
    collected_movies = []
    page_number = 1
    rows_per_page = 100
    max_retries = 3
    retry_delay = 5 

    while len(collected_movies) < 1000:
        base_url = "https://archive.org/advancedsearch.php"
        query = 'collection:(moviesandfilms) AND mediatype:(movies) AND year:[1940 TO 9999]'
        fields = ['identifier', 'title', 'year', 'language', 'runtime', 'duration', 'licenseurl']
        params = {
            'q': query,
            'fl[]': fields,
            'rows': rows_per_page,
            'page': page_number,
            'output': 'json'
        }

        for _ in range(max_retries):
            try:
                response = requests.get(base_url, params=params, timeout=10)
                if response.status_code == 200:
                    break
                else:
                    print(f"Error fetching data from API, status code {response.status_code}")
                    time.sleep(retry_delay)
            except requests.exceptions.RequestException as e:
                print(f"Request exception: {e}")
                time.sleep(retry_delay)
        else:
            print("Max retries")
            break

        data = response.json()
        docs = data.get('response', {}).get('docs', [])
        numFound = data.get('response', {}).get('numFound', 0)
        if not docs:
            print("No more results")
            break

        print(f"Processing page {page_number}, total results found: {numFound}")
        for doc in docs:
            language = doc.get('language')
            if is_english(language):
                duration_str = doc.get('runtime') or doc.get('duration')
                duration_seconds = duration_in_seconds(duration_str)
                if duration_seconds and duration_seconds > 2700:
                    licenseurl = doc.get('licenseurl', '')
                    if is_acceptable_license(licenseurl):
                        identifier = doc.get('identifier')
                        if identifier:
                            link = f"https://archive.org/details/{identifier}"
                            if link not in collected_movies:
                                collected_movies.append(link)
                                print(f"{len(collected_movies)}: {link}")
                                if len(collected_movies) >= 1000:
                                    break
        page_number += 1
        time.sleep(1)

    return collected_movies

def write_to_csv(links):
    filename = 'english_movies_links6.csv'
    with open(filename, 'w', newline='', encoding='utf-8') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow(['Movie Link'])
        for link in links:
            writer.writerow([link])
    print(f"wrote {len(links)} links to {filename}")

def main():
    english_movie_links = fetch_english_movies()
    write_to_csv(english_movie_links)

if __name__ == '__main__':
    main()
