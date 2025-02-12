import requests
from bs4 import BeautifulSoup
import json

# Function to get all sub-items from a collection page
def get_subitems(collection_url):
    subitem_links = []
    response = requests.get(collection_url)
    if response.status_code == 200:
        soup = BeautifulSoup(response.text, 'html.parser')
        # Find all sub-item links
        for link in soup.find_all('a', href=True):
            href = link['href']
            if '/details/' in href:
                full_link = f"https://archive.org{href}"
                subitem_links.append(full_link)
    return list(set(subitem_links))  # Remove duplicates

# Function to check license information for a specific sub-item
def get_license_info(item_url):
    metadata_url = f"{item_url}?output=json"
    response = requests.get(metadata_url)
    if response.status_code == 200:
        metadata = response.json()
        if 'metadata' in metadata and 'licenseurl' in metadata['metadata']:
            return metadata['metadata']['licenseurl']
    return "No license information"

# Main function to process all sub-items
def check_licenses(collection_url):
    subitems = get_subitems(collection_url)
    results = {}
    for subitem in subitems:
        license_info = get_license_info(subitem)
        results[subitem] = license_info
    return results

# Example Usage
if __name__ == "__main__":
    collection_url = "https://archive.org/details/moviesandfilms?and%5B%5D=language%3A%22English%22&and%5B%5D=collection%3A%22feature_films%22&and%5B%5D=year%3A%5B2000+TO+9999%5D"  # Replace with your collection link
    licenses = check_licenses(collection_url)
    
    # Save the results to a file
    with open("licenses_results.json", "w") as outfile:
        json.dump(licenses, outfile, indent=4)

    print("License check completed! Results saved to licenses_results.json.")
